'use client'
import React from 'react'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/config/firebase';
import useAuth from '@/hooks/useAuth';
import { useState, useEffect } from 'react';
import Link from 'next/link';


const Home = () => {
  const [notes, setNotes] = useState<any []>([]);
  const auth = useAuth();

  useEffect(()=>{
    if(!auth) return;

    const noteref = collection(db, 'users', auth?.uid, 'notes');
    const unsubscribe = onSnapshot(noteref, (snapshot)=>{
      let notes: any[] = [];
      snapshot.forEach((doc)=>{
        notes.push({...doc.data(), id: doc.id});
      })
      setNotes(notes)
    });
    return ()=> unsubscribe();
  }, [auth])

  return (
    <div className='relative'>
      <div className={notes.length === 0 ? "" : "grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10"}>
        {notes.length === 0 ? (<div className='flex flex-col items-center'>
            <p className='text-xl text-center w-full text-secondary dark:text-white '>You don't have any saved note</p>
            <Link href='/create' className='bg-blue py-4 px-6 text-white font-medium text-[18px] rounded-[20px] mt-20'>create Note</Link>
        </div>) : (
          notes.map(({id, title, content, createdAt})=>(
            <Link href={''} key={id}>
                <div className='flex flex-col items-center p-6 border-2 border-[#F4F5F9] bg-white dark:bg-secondary dark:text-white dark:border-[#222530]'>
                <div className='flex flex-col items-center'>
                  <h4 className='font-bold text-[20px] mb-3 '>{title}</h4>
                  <p className='text-[16px] font-normal mb-3 text-center'>{content}</p>
                </div>
                <span>{createdAt}</span>
              </div>
            </Link>
        )))}
      </div>
    </div>
  )
}

export default Home