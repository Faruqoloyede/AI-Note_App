'use client'
import React from 'react'


const AllNotes = () => {
  const notes = [
    {
      id: 1,
      title: 'my first coding',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi iusto doloribus aspernatur debitis, error obcaecati dolorem labore nesciunt minima vero?',
      date: new Date().toLocaleDateString()
    },
    {
      id: 2,
      title: 'my first coding',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi iusto doloribus aspernatur debitis, error obcaecati dolorem labore nesciunt minima vero?',
      date: new Date().toLocaleDateString()
    },
    {
      id: 3,
      title: 'my first coding',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi iusto doloribus aspernatur debitis, error obcaecati dolorem labore nesciunt minima vero?',
      date: new Date().toLocaleDateString()
    },
  ]
  return (
    <div className='relative px-6 py-10 dark:bg-secondary'>
      <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10'>
        {notes.map(({id, title, content, date})=>(
          <div key={id} className='flex flex-col items-center p-6 border-2 border-[#F4F5F9] bg-white dark:bg-secondary dark:text-white dark:border-[#222530]'>
            <div className='flex flex-col items-center'>
              <h4 className='font-bold text-[20px] mb-3 '>{title}</h4>
              <p className='text-[16px] font-normal mb-3 text-center'>{content}</p>
            </div>
            <span>{date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllNotes