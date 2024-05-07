"use client"
import Navbar from "@/components/navbar"
import { getAdminApi } from "@/services/route"
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from "react";
 
export default function AdminDashboard (userDetails:any){
    const cookieStore = useCookies();
    const theme = cookieStore.get('authToken');

    const [user,setUser] = useState<string|any|{}>(userDetails);


    const getUserData = async() =>{

        // if(theme && theme !==""){
        //     const res = await getAdminApi(theme);
        //     if(res.status == 200){
        //         setUser(res.userData);
        //         console.log("admin if----",res)
        //     }else{
        //         console.log("admin-1212-")
        //     }
        //     // console.log("under funct",res)
        // }

    }
   
    useEffect(()=>{
        getUserData();
    },[])

    return(
        <>
        {user && user?.userDetails !="" ? 
        <>

         <Navbar userData={user}/>
         <h1>Admin Dashboard Page</h1>
         </>
         :""
        }
       
        </>
    )
}