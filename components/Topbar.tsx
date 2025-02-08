'use client'
import Image from "next/image"
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import SearchInput from "./SearchInput";
import { useTheme } from "@/context/ThemeContext";
import destroycookies from "@/app/action/destroycookies";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";



const Topbar = () => {
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
                <button onClick={logout} className="text-[18px] font-normal">Logout</button>
            </div>
        </div>
    </header>
  )
}

export default Topbar