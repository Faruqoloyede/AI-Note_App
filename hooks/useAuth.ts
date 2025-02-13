import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";


function useAuth(){
    const [user, setUser] = useState<any | null>(null);
    const router = useRouter()
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user: any)=>{
        if(user) {
            setUser(user)
        }else{
            console.log('no user');
            router.push('/home')
            setUser(null);
        }
    })
    return ()=> unsubscribe();
   }, [])

   return user
}

export default useAuth;

