'use client'
import React from 'react'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/config/firebase';
import useAuth from '@/hooks/useAuth';
import { useState, useEffect } from 'react';
import {  MdAdd, MdDelete, MdCreate} from "react-icons/md";
import Create from '@/components/Create';
import Modal from 'react-modal'


const Home = () => {
  const [notes, setNotes] = useState<any []>([]);
  const [isopen, setisOpen] = useState({
    isShown: false,
    type: 'add',
    data: null
  })
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
      <div className='fixed bottom-0 right-10 bg-blue h-16 w-16 hover:bg-blue-600 flex items-center justify-center rounded-md cursor-pointer' onClick={()=> setisOpen({
        isShown: true, type: 'add', data: null
      })}>
          <MdAdd className='text-[32px] font-bold text-white '/>
      </div>
      <Modal 
        isOpen={isopen.isShown}
        onRequestClose={()=>{}}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.2)',
          },
        }}
        contentLabel=''
        className="w-[40%] max-h-3/4 bg-white dark:bg-secondary rounded-md mx-auto mt-14 p-5 overflow-hidden"
      >
        <Create />
      </Modal>
    </div>
  )
}

export default Home