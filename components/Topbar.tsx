'use client'
import { CiLight } from "react-icons/ci";
import { MdDarkMode, MdDelete, MdUpdate } from "react-icons/md";
import SearchInput from "./SearchInput";
import { useTheme } from "@/context/ThemeContext";
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
    <header className="bg-white dark:bg-secondary dark:text-white dark:border-none border-b-2 py-6 px-12">
        <div className="flex items-center justify-between">
            <h4 className="font-bold text-xl">Notes</h4>
            <SearchInput  />
            <div className="flex items-center gap-5">
              <div onClick={toggleDarkMode}>
                {isDarkMode ?  <CiLight className="text-3xl cursor-pointer" /> : <MdDarkMode className="text-3xl cursor-pointer" />}
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-950 font-medium">
                  FO
                </div>
              <div className="flex flex-col">
                <p className="text-sm font-medium">faruq</p>
                <button onClick={logout} className="text-sm text-slate-700 underline font-medium">Logout</button>
              </div>
            </div>
            </div>
        </div>
        
    </header>
  )
}

export default Topbar