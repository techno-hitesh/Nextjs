"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import "./styles.css"
import { useState } from "react";

const navLinks = [
    { name:"Register", href:"/register"},
    { name:"Login",  href:"/login"},
    { name:"Forgot Password", href:"/forgot-password"},
];

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const pathname = usePathname();

    const [ input,setInput] = useState("")
    return (
        <>
            {/* <div>
                <input value={input} onChange={ (e) => setInput(e.target.value) }></input>
            </div>

            { navLinks.map((data,key)=>{
             const isActive = pathname.startsWith(data.href);
          
            return(                
                 <Link href={data.href} key={key} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>{data.name}</Link>
               )                          
             })
            } */}
        
          {children}   

        </>
    )
  }
  