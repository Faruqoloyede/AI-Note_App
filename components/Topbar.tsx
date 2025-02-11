'use client'
import Image from "next/image"
import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaFileArchive } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { RiVoiceAiFill } from "react-icons/ri";
import SearchInput from "./SearchInput";
import { useTheme } from "@/context/ThemeContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { usePathname } from "next/navigation";
import Link from "next/link";



const Topbar = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  const link = [
            {
                id: 'link_1',
                title: "All Notes",
                href: '/home',
                icon: <IoMdHome />
            },
            {
                id: 'link_2',
                title: "Create Note",
                href: '/create',
                icon: <MdCreateNewFolder />
            },
            {
                id: 'link_3',
                title: "Archived Notes",
                href: '/archive',
                icon: <FaFileArchive />
            },
            {
                id: 'link_4',
                title: "AI summarizer",
                href: '/summarizer',
                icon: <RiVoiceAiFill />
            },
      ]
      const pathname = usePathname();
  const router = useRouter();

  const logout = async ()=>{
    try {
      await signOut(auth);
      router.push('/')
      
    } catch (error) {
      console.log(error)
    }
  }

    const {isDarkMode, toggleDarkMode} = useTheme();
  return (
    <header className="bg-white dark:bg-secondary dark:text-white dark:border-none border-b-2 py-6 px-6">
        <div className="flex items-center justify-between">
            {isDarkMode ? <Image src='/logo2.png'height={1000} width={100} alt="logo" className="max-lg:block hidden" /> : <Image src='/logo.png'height={1000} width={100} alt="logo" className="max-lg:block hidden" />}
            <SearchInput  />
            <div className="flex items-center gap-5">
              <div onClick={toggleDarkMode}>
                {isDarkMode ?  <CiLight className="text-3xl cursor-pointer" /> : <MdDarkMode className="text-3xl cursor-pointer" />}
              </div>
                <button onClick={logout} className="text-[18px] font-normal max-lg:hidden">Logout</button>
                <GiHamburgerMenu className="max-lg:block hidden text-2xl cursor-pointer" onClick={()=> setToggle(true)} />
            </div>
        </div>
        <div className={`${toggle? 'right-0' : 'right-[-640px]'} hidden max-lg:flex fixed top-0  transition-all duration-[.5s] bg-white dark:bg-secondary border p-6 h-screen w-64  z-40`}>
        <div className="flex flex-col gap-10 mt-12 ">
          <div className="flex items-start">
            <IoCloseSharp className="text-3xl cursor-pointer" onClick={()=> setToggle(false)} />
          </div>
            {link.map(({id, title, href, icon})=>(
                <Link key={id} className={`${pathname === href && 'bg-[#F4F5F9] dark:bg-[#222530] p-3 rounded-md'} flex items-center text-[18px] font-medium text-text_color dark:text-white`} href={href}>
                    <span className={`${pathname === href && 'text-blue dark:text-white'} text-2xl mr-4`}>{icon}</span>
                    <span className={`${pathname === href && 'text-secondary dark:text-white'}`}>{title}</span>
                </Link>
            ))}
            <button onClick={logout} className="text-[18px] bg-blue p-3 text-white rounded-md font-normal">Logout</button>
        </div>
        </div>
    </header>
  )
}

export default Topbar