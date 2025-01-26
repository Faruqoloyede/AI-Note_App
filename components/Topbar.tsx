'use client'
import Image from "next/image"
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import SearchInput from "./SearchInput";
import { useTheme } from "@/context/ThemeContext";


const Topbar = ({title}: {title: string}) => {
    const {isDarkMode, toggleDarkMode} = useTheme();
  return (
    <header className="bg-white dark:bg-secondary dark:text-white dark:border-none border-b-2 py-6 px-6">
        <div className="flex items-center justify-between">
            {isDarkMode ? <Image src='/logo2.png'height={1000} width={100} alt="logo" className="max-lg:block hidden" /> : <Image src='/logo.png'height={1000} width={100} alt="logo" className="max-lg:block hidden" />}
            <h4 className="font-bold text-xl max-lg:hidden">{title}</h4>
            <SearchInput  />
            <div className="flex items-center gap-5">
              <div onClick={toggleDarkMode}>
                {isDarkMode ?  <CiLight className="text-3xl cursor-pointer" /> : <MdDarkMode className="text-3xl cursor-pointer" />}
              </div>
                <button className="text-[18px] font-normal">Logout</button>
            </div>
        </div>
    </header>
  )
}

export default Topbar