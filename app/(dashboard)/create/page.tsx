'use client'
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { db } from '@/config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import useAuth from '@/hooks/useAuth';

const Create = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const date = new Date();

  const dateOnly = date.toLocaleDateString('en-US', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long',   
    day: 'numeric'
  });

 

  const auth = useAuth();

  const addnote = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setLoading(true)

    const form = formRef.current;
    if (!form) return;
    
    let title = form.text.value;
    let content = form.content.value;
     let obj =
      {
        title: title,
        content: content,
        createdAt: dateOnly,
      }
    const noteref = collection(db, 'users', auth?.uid, 'notes');
    try {
        await addDoc(noteref, obj)
        toast.success('note added successfully')
        form.reset();

    } catch (error: any) {
      console.log(error);
      toast.error(error)
    }finally {
      setLoading(false)
    }
  }

  return (
    <div className='relative px-6 flex flex-col bg-white dark:bg-secondary dark:text-white'>
      <div className="flex items-center justify-between">
        <Link href='/home' className='flex items-center '>
          <IoMdArrowRoundBack className='text-2xl mr-3' />
          <span className='text-secondary dark:text-white'>Back</span>
        </Link>
      </div>
      <form ref={formRef} className='mt-10' onSubmit={addnote}>
        <div className="flex flex-col gap-10">
          <input
            type="text"
            placeholder="Enter your title"
            name='text'
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none dark:bg-secondary h-[3rem] dark:border-[#222530]"
          />
          <textarea
            placeholder="Enter your note..."
            name='content'
            className="w-full px-4 py-2 border border-gray-300 rounded-lg h-64 outline-none dark:bg-secondary dark:border-[#222530]"
          />
        </div>
        <input  type="submit" value={loading? 'Adding..' : 'Add'} disabled={loading} className='bg-blue cursor-pointer px-6 rounded-md py-4 w-full mt-10 text-white font-bold' />
      </form>
    </div>
  );
};

export default Create;
