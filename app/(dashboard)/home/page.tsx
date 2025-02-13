'use client'
import React from 'react'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/config/firebase';
import useAuth from '@/hooks/useAuth';
import { useState, useEffect } from 'react';
import {  MdAdd, MdDelete, MdCreate} from "react-icons/md";



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

  const no = [
    {
      id: 1,
      title: 'first day in school',
      content: 'went to school by 7:30am',
      createdAt: "feb 13, 2025"
    },
    {
      id: 2,
      title: 'first day in school',
      content: 'went to school by 7:30am',
      createdAt: "feb 13, 2025"
    }
  ]

  return (
    <div className='relative px-12 mx-auto'>
      <div className= "grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">
        {no.length === 0 ? (<div className='flex flex-col items-center'>
            <p className='text-xl text-center w-full text-secondary dark:text-white '>You don't have any saved note</p>
        </div>) : (
          no.map(({id, title, content, createdAt})=>(
                <div key={id} className=' p-4 border-2 border-[#F4F5F9] bg-white dark:bg-secondary dark:text-white dark:border-[#222530] rounded-md'>
                <div className='flex flex-col items-start'>
                  <h4 className='text-sm font-medium'>{title}</h4>
                  <p className='text-xs text-slate-600 mt-2'>{content.substring(0, 90) + '...'}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className='text-xs text-slate-500'>{createdAt}</span>
                  <div className='flex items-center gap-2'>
                    <span><MdCreate className='text-2xl text-slate-300 cursor-pointer hover:text-green-600' /></span>
                    <span><MdDelete className='text-2xl text-slate-300 cursor-pointer hover:text-red-500' /></span>
                  </div>
                </div>
              </div>
        )))}
      </div>
      <div className='fixed bottom-0 right-10 bg-blue h-16 w-16 hover:bg-blue-600 flex items-center justify-center rounded-md cursor-pointer'>
          <MdAdd className='text-[32px] font-bold text-white '/>
      </div>
    </div>
  )
}

export default Home