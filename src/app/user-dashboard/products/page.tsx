"use client"
import { ServiceCard } from "@/components/serviceCard" 
import { getAllProducts } from "@/services/products/products"
import { useEffect, useState } from "react"
import Loading from "../loading"

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
    {usrProducts ?
      <div className="inline-flex">
      <ServiceCard data={usrProducts}/>
      </div>
      :
      <Loading />
    }
    
        
    </>
  )
}

export default UsersProducts
