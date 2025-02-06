import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";


function useAuth(){
    const [user, setUser] = useState<any | null>(null);
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user: any)=>{
        if(user) {
            console.log('there is user');
            setUser(user)
        }else{
            console.log('no user');
        }
    })
    return ()=> unsubscribe();
   }, [])

   return user
}

export default useAuth;