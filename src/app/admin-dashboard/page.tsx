"use client"
import Navbar from "@/components/navbar"
import { getAdminApi } from "@/services/route"
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from "react";
import T1 from "../../../public/images/t1.jpg"
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserRoles } from "@/helpers/common";
 
export default function AdminDashboard (userDetails:any){
    const cookieStore = useCookies();
    const theme = cookieStore.get('authToken');

    const [user, setUser] = useState<string | any | {}>("");
 

    const userData = async() =>{
        const res = await getUserRoles();

        if(res.success == false){
            console.log("useruseruseruseruseruseruseruser")
            return false;
        }
        
        if(res !=""){
            setUser(res);
        }

        const toastShownBefore = localStorage.getItem('toastShownBefore');
        if (toastShownBefore === null || toastShownBefore === '') {
            toast.success(`Welcome Admin ${res?.fullName}!`);
            setTimeout(() => {
                localStorage.setItem('toastShownBefore', "true");
            }, 1000)
        }
    }

    useEffect(() => {
        userData()       
    }, []);

    return(
        <>
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