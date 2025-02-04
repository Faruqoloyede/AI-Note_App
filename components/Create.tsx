'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { db, auth } from '@/config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';

const Create = () => {
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [notes, setNotes] = useState<any[]>([]);

  console.log(notes)
  const addnote = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    let text = e.currentTarget.text.value;
    let content = e.currentTarget.content.value;
     let arrobg = [
      {
        text: text,
        content: content,
        timestmamp: new Date().getDate(),
      }
     ]
     setNotes([...notes, arrobg])
  }

  return (
    <div className='relative mt-10 px-6 flex flex-col bg-white dark:bg-secondary dark:text-white'>
      <div className="flex items-center justify-between">
        <Link href='/dashboard' className='flex items-center '>
          <IoMdArrowRoundBack className='text-2xl mr-3' />
          <span className='text-secondary dark:text-white'>Back</span>
        </Link>
        <FaSave className={`text-2xl cursor-pointer ${loading ? 'opacity-50' : ''}`} />
      </div>
      <form className='mt-20' onSubmit={addnote}>
        <div className="flex flex-col gap-10">
          <input
            type="text"
            placeholder="Enter your title"
            name='text'
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none dark:bg-secondary h-[3rem] dark:border-[#222530]"
          />
          <textarea
            placeholder="Enter your note..."
            // value={content}
            name='content'
            // onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg h-64 outline-none dark:bg-secondary dark:border-[#222530]"
          />
        </div>
        <input type="submit" value="Add" className='bg-blue px-6 py-4 w-full mt-10 text-white font-bold' />
      </form>
    </div>
  );
};

export default Create;
