'use client'
import React, { useState, useEffect } from 'react';
import { MdKeyboardBackspace } from "react-icons/md";
import { useRouter, useParams } from 'next/navigation';
import { FaShareAlt } from "react-icons/fa";
import useAuth from '@/hooks/useAuth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';

const Fullnotes = () => {
  const router = useRouter();
  const params = useParams();
  // Ensure that id is a string. If params.id is an array, you could take the first element.
  const id = typeof params?.id === 'string' ? params.id : Array.isArray(params?.id) ? params.id[0] : '';
  const auth = useAuth();
  
  // We'll store a single note (not an array)
  const [note, setNote] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth?.uid || !id) return; 

    const fetchNote = async () => {
      try {

        const noteRef = doc(db, 'users', auth.uid, 'notes', id);
        const noteSnap = await getDoc(noteRef);
        if (noteSnap.exists()) {
          setNote({ id: noteSnap.id, ...noteSnap.data() });
        } else {
          console.log('No such note!');
        }
      } catch (error) {
        console.error("Error fetching note:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [auth, id]);

  return (
    <div className='relative py-6 px-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center cursor-pointer' onClick={() => router.push('/home')}>
          <MdKeyboardBackspace className='text-2xl mr-3' />
          <span>Back</span>
        </div>
        <FaShareAlt className='text-2xl cursor-pointer' />
      </div>
      <div className='flex flex-col mt-16'>
        {loading ? (
          <p>Loading note...</p>
        ) : note ? (
          <>
            <h2 className='text-3xl font-semibold'>{note.title}</h2>
            <p className='mt-4 text-xl'>{note.content}</p>
          </>
        ) : (
          <p>Note not found.</p>
        )}
      </div>
    </div>
  );
};

export default Fullnotes;
