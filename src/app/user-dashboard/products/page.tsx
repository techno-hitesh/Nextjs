"use client"
import { ServiceCard } from "@/components/serviceCard" 
import { getAllProducts } from "@/services/products"
import { useEffect, useState } from "react"

const UsersProducts = () => {

  const [usrProducts, setUsrProducts] = useState("")

  const handleProducts = async() =>{
    const token  = localStorage.getItem('authToken');
    const data = await getAllProducts(token);
    setUsrProducts(data.data)
    console.log(data)
  }

  useEffect(()=>{
    handleProducts();
  },[])

  return (
    <>
    <div className="inline-flex">
    <ServiceCard data={usrProducts}/>
    </div>
        
    </>
  )
}

export default UsersProducts
