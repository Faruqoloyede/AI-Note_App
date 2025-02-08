'use client'
import Link from "next/link"
import { IoMdHome } from "react-icons/io";
import { FaFileArchive } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVoiceAiFill } from "react-icons/ri";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

const Sidebar = () => {
    const {isDarkMode} = useTheme();

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
    
    const pathname = usePathname()
  return (
    <aside className="relative w-64 bg-white dark:bg-secondary dark:text-white dark:border-none border-r-2 h-screen py-6 px-6 max-lg:hidden">
        <div className="flex items-center justify-start">
            {isDarkMode ? <Image src='/logo2.png'height={1000} width={100} alt="logo" /> : <Image src='/logo.png'height={1000} width={100} alt="logo" />}
        </div>
        <div className="h-[0.8px] w-full bg-[#E2E2E2] mt-12 dark:hidden" />
        <div className="flex flex-col gap-10 mt-12 ">
            {link.map(({id, title, href, icon})=>(
                <Link key={id} className={`${pathname === href && 'bg-[#F4F5F9] dark:bg-[#222530] p-3 rounded-md'} flex items-center text-[18px] font-medium text-text_color dark:text-white`} href={href}>
                    <span className={`${pathname === href && 'text-blue dark:text-white'} text-2xl mr-4`}>{icon}</span>
                    <span className={`${pathname === href && 'text-secondary dark:text-white'}`}>{title}</span>
                </Link>
            ))}
        </div>
    </aside>
  )
}

export default Sidebar