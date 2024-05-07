"use client"
import Navbar from "@/components/navbar"
import { getUserApi } from "@/services/route"
import { useEffect, useState } from "react";
import Image from "next/image";
import T1 from "../../../public/images/t1.jpg"
import { ServiceCard } from "@/components/serviceCard";
import T2 from "../../../public/images/t2.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserRoles } from "@/helpers/common";

export default function UserDashboard() {

    // const tokens = localStorage.getItem('authToken')
    const [user, setUser] = useState<string | any | {}>("");

    const userData = async() =>{
        const res = await getUserRoles();
        console.log("user-dashboard",res)
        if(res !=""){
            setUser(res);
        }

        const toastShownBefore = localStorage.getItem('toastShownBefore');
        if (toastShownBefore === null || toastShownBefore === '') {
            toast.success(`Welcome ${user?.fullName}!`);
            setTimeout(() => {
                localStorage.setItem('toastShownBefore', "true");
            }, 1000)
        }
    }

    useEffect(() => {
        userData()
       
    }, []);

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

    return (
        <>
            <ToastContainer autoClose={1000} />
            {user && user?.userDetails != "" ?
                <>

                    {/* <Navbar userData={user} /> */}
                    <div className="lg:container w-screen mx-auto">
                        <div>
                            <Image
                                priority
                                src={T1}
                                // height={32}
                                // width={32}
                                alt="Follow us on Twitter" />

                        </div>

                    </div>

                </>
                : ""
            }

        </>
    )
}