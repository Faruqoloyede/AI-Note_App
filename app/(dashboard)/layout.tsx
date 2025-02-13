'use client'
import React from 'react'
import Topbar from '@/components/Topbar'
// import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

const layout = ({children}: {children: React.ReactNode}) => {
  const router = useRouter()
  // const user = useAuth();
  // if(!user){
  //   return false
  // }
  return (
    <main className='flex h-screen'>
        <section className='flex h-full flex-1 flex-col'>
            <Topbar  />
            <div className='relative px-6 py-10 dark:bg-secondary h-screen '>{children}</div>
        </section>
    </main>
  )
}

export default layout