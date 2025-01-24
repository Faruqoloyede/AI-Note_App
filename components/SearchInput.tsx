import React from 'react'
import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <div className='flex items-center max-lg:hidden border-[1px] border-text_color px-2 h-[3rem] rounded-md'>
        <span><IoMdSearch className='text-2xl text-text_color' /></span>
        <input type="search" placeholder='search your note' className='bg-transparent dark:bg-secondary border-none outline-none h-[2rem] w-[20rem] p-4' />
    </div>
  )
}

export default SearchInput