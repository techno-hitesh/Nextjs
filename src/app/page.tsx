'use client'
import Link from "next/link";
import useSWR from 'swr';
import { useEffect,useState } from "react";
import Login from "./(auth)/login/page";
import { useSelector } from "react-redux";
import Navbar from "@/components/navbar"


const fetcher = (...args:any) => fetch(...args).then((res) => res.json())

const UserProps={
  id:Number,
  firstName:String,
  username:String,
  email:String,
  company:{},
  website:String,
}

const Home = () => {


  let loginUser  = localStorage.getItem("newUsers") || undefined
  let checkerVal
  if(loginUser != undefined){

    checkerVal = JSON.parse(loginUser);
  }

  // console.log("check value",checkerVal == undefined ? "hello" : "no hello")
 

  // const {data,error} = useSWR("https://jsonplaceholder.typicode.com/users",fetcher);


  return (
    <>
    {checkerVal == undefined  ? 
    
    <Login/>:

   <>
      <Navbar checkerVal={checkerVal}/>
      <h1 className="mt-4">Home Page</h1>
      </>
   
  }

    </>
  )
}

export default Home;
