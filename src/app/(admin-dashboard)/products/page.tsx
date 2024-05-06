"use client"
import { getAllProducts } from "@/helpers/products"
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from "react";

const Products = () => {
  const cookies = useCookies();

  const [productData,setProductData] = useState<[] | {} | any>([])

  const products = async() =>{
    const token = cookies.get('authToken');
    const res = await getAllProducts(token);
    if(res.data){
      setProductData(res.data.products);
    }
  }

  useEffect(()=>{
    products()
    if(productData !=""){
      productData.map((data:any,i:number)=>{
        console.log("dasfasd",data)
  
      })
    }
   
  },[])

  return (
    <>

    {productData!="" && productData.map((data:any,i:any)=>(
      <ul key={data._id}>
      <li>{data.productName}</li>
      </ul>
    ))


    }
    {/* {productData && productData!="" ? productData.map((data:any,i:number)=>{

      return(
        <>
              <ul key={i}>
                <li>{data}</li>
                </ul>
        </>
      )

    }):"null"} */}

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>


    </>
  )
}

export default Products