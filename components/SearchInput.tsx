import React from 'react'

const SearchInput = () => {
  return (
    <div className='flex'>
        <span>icon</span>
        <input type="search" placeholder='search your note' className='bg-white border-none outline-none h-[2rem] w-[20rem]' />
    </div>
  )
}

export default SearchInput