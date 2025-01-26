import React from 'react'
import AllNotes from "@/components/AllNotes";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const page = () => {
  return (
    <div className="flex">
    <Sidebar />
    <div className="flex flex-col flex-1">
    <Topbar title='All Notes' />
    <AllNotes />
    </div>
  </div>
  )
}

export default page