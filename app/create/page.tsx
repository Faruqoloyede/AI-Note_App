import React from 'react'
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import Create from '@/components/Create';
const page = () => {
  return (
    <div className="flex bg-white dark:bg-secondary dark:text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
      <Topbar title='Create Notes' />
      <Create />
      </div>
    </div>
  )
}

export default page