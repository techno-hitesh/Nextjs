"use client"
import Navbar from "@/components/navbar"
import { getUserApi } from "@/helpers/route"
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from "react";
 
export default function UserDashboard (userDetails:any){
    const cookieStore = useCookies();
    const theme = cookieStore.get('authToken');

    const [user,setUser] = useState<string|any|{}>(userDetails);

        // console.log("userDetails------------",userDetails)

    // const getUserData = async() =>{

    //     if(theme && theme !==""){
    //         const res = await getUserApi(theme);
    //         if(res.status == 200){
    //             setUser(res.userData);
    //         }
    //         // console.log("under funct",res)
    //     }

    // }
   
    // useEffect(()=>{
    //     getUserData();
    // },[])

    return(
        <>
        {user && user?.userDetails !="" ? 
        <>

         <Navbar userData={user}/>
         <h1>user Dashboard Page</h1>
         </>
         :""
        }
       
        </>
    )
}