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

  // const globalUser = async() =>{
  //   const userResp =  await getUserRoles();
  //   // console.log({userResp});
  //   if(userResp.success == false){
  //     destroyStorage();
  //   }
    
  // }
  useLayoutEffect(()=>{

    let loginUser  = typeof window !== 'undefined' ? localStorage.getItem(auth.storageTokenKeyName) : undefined
    if(loginUser == undefined){
      console.log("cookieDestroy in else", loginUser)
      destroyStorage()
    }else{
      const role = localStorage.getItem("userRole")
      role == "admin" ? router.push("/admin-dashboard") : router.push("/user-dashboard")
      console.log("admin--------",role)
    }
  },[])
  
  
  return (
    <div>
      
    </div>
  )
}

export default CookieDestroy
