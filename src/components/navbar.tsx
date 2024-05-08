"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image';
import Logo from "../../public/3.svg"
import Dropdown from "./dropdown";
import PrivateFolder from "@/app/_lib/page";
import { userRoute,adminRoute } from "@/helpers/navLinks";
import { getUserRoles } from "@/helpers/common";
import Addtocart from "./addtocart";


type Props={
  id:string,
  link:string,
  name:string
}

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [name,setName] = useState("");
    const [arrLink,setArrLink] = useState<[]|any>("")
    const [userRole , setUserRole] = useState("")

    

    const userData = async() =>{
      try {
        const UserRole = localStorage.getItem("userRole");
        const res = await getUserRoles();
        setName(res.fullName);

        if(UserRole !="" && UserRole != null){
          setUserRole(UserRole)
          UserRole == "user" ? setArrLink(userRoute):setArrLink(adminRoute)
        }
        // console.log("navbar----",res)
        
      } catch (error) {
          console.log("navbar---error--",error)
      }
    }

    useEffect(()=>{
      userData();
    },[])


// const links = role=="user"  ? userRoute:""

  return (
    <>
{arrLink  && name ? 
    <div className="flex justify-between items-center w-full h-20 px-2 text-black bg-light-800 nav">
      <div className="inline-flex">
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">      
        <Link href="/">
            <Image
                priority
                src={Logo}
                height={32}
                width={32}
                alt="Follow us on Twitter"
            />
        </Link> 
        </h1>
        <h1 className="ml-8 mt-1">Zipkart</h1>
      </div>

      <ul className="hidden md:flex">
        {arrLink !="" && arrLink.map(({ id, link ,name}:Props) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {arrLink !="" && arrLink.map(({ id, link }:Props) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {userRole == "user" ? 
      <Addtocart />
      :""}
        <Dropdown  checkerVal= {name}/>
    </div>
    :""}
    </>
    
  );
};

export default Navbar;