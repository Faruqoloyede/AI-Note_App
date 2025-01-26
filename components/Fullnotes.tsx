'use client'

import React from 'react'
import { MdKeyboardBackspace } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { FaShareAlt } from "react-icons/fa";

const Fullnotes = () => {
    const router = useRouter();

  return (
    <div className='relative py-6 px-6'>
           <div className='flex items-center justify-between'>
               <div className='flex items-center cursor-pointer' onClick={()=>router.push('/dashboard')}>
               <MdKeyboardBackspace className='text-2xl mr-3' />
               <span>Back</span>
               </div>
               <FaShareAlt className='text-2xl cursor-pointer' />
           </div>
           <div className='flex flex-col mt-16'>
                <h2 className='text-3xl font-semibold'>Note Title</h2>
                <p className='mt-4 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at turpis auctor, rhoncus nisl ut, luctus nunc. Donec nec libero nec justo tincidunt lacinia. Sed nec quam nec odio tincidunt ultricies. Nullam at turpis auctor, rhoncus </p>
           </div>
       </div>
  )
}

export default Fullnotes