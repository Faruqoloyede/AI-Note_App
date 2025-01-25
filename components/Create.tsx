'use client'
import React from 'react'
import { MdKeyboardBackspace } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { FaSave } from "react-icons/fa";

const Create = () => {
  const router = useRouter();

  return (
    <div className='relative py-6 px-6'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center cursor-pointer' onClick={()=>router.push('/')}>
            <MdKeyboardBackspace className='text-2xl mr-3' />
            <span>Back</span>
            </div>
            <FaSave className='text-2xl cursor-pointer' />
        </div>
        <form className='mt-20 relative'>
            <div className='flex flex-col gap-20'>
                <input type="text" placeholder='Enter Note Title here' className='border-2 border-[#F4F5F9] h-[6rem] outline-none p-4 rounded-md placeholder:text-2xl dark:bg-secondary dark:border-none dark:text-[#98A2B3]' />
                <textarea name="message" className='w-full h-64 border-2 border-[#F4F5F9] outline-none p-4 rounded-md placeholder:text-2xl dark:bg-secondary dark:border-none dark:text-[#98A2B3]' placeholder='Enter Content here'></textarea>
            </div>
        </form>
    </div>
  )
}

export default Create