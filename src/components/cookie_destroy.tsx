"use client"
import auth from '@/configs/auth';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { getUserRoles } from '../helpers/common';
import { useLayoutEffect } from 'react';


const CookieDestroy = () => {

  const cookies = useCookies();
  const router = useRouter();


  const destroyStorage = () =>{
    try {
        console.log("enter in cookie")
        localStorage.removeItem('toastShownBefore');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userRole');
        cookies.remove('authToken')
        cookies.remove('userRole')
        router.push("/login")
        return false;
        
    } catch (error) {
        console.log("removeStorage func",error);
        // throw new Error('removeStorage func');
    }
} 

  const globalUser = async() =>{
    const authToken =  await localStorage.getItem("authToken")
    const userResp =  await getUserRoles(authToken);
    console.log("cookie--------------",{userResp});
    if(userResp.success == false){
      destroyStorage();
    }
    
  }
  useLayoutEffect(()=>{

    let loginUser  = typeof window !== 'undefined' ? localStorage.getItem(auth.storageTokenKeyName) : undefined
    if(loginUser == undefined){
      console.log("cookieDestroy in else", loginUser)
      globalUser()
    }
      const role = localStorage.getItem("userRole")
   
      // if(role){
      //   role == "user" ? router.replace("/user-dashboard") :router.replace("/admin-dashboard")
      // }
  },[])
  
  
  return (
    <div>
      
    </div>
  )
}

export default CookieDestroy
