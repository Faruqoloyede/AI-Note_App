import React from 'react'
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import Fullnotes from '@/components/Fullnotes';


const page = () => {
  return (
    <div className="flex bg-white dark:bg-secondary dark:text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
      <Topbar title='Full Note' />
      <Fullnotes />
      </div>
    </div>
  )
}

export default page