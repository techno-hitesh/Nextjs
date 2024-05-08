"use client"
import { getAllProducts } from "@/services/products/products"
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from "react";

const Products = () => {
  const cookies = useCookies();

  const [productData, setProductData] = useState<[] | {} | any>([])

  const products = async () => {
    const token = cookies.get('authToken');
    const res = await getAllProducts(token);
    if (res.data) {
      setProductData(res.data.products);
    }
  }

  useEffect(() => {
    products()
    if (productData != "") {
      productData.map((data: any, i: number) => {
        console.log("dasfasd", data)

      })
    }

  }, [])

  return (
    <>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-white-900 dark:text-light">Powering innovation at <span className="font-extrabold">200,000+</span>  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-1 ">Create Products</button></h2>
           
            

           
          </div>
        </div>
      </section>


      {productData != "" && productData.map((data: any, i: any) => (
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