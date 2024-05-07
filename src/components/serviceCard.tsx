"use client"
import Image from 'next/image'
import React, { MouseEvent, useState } from 'react';
import CusModal from '../components/modal';
import { AddToCart } from '@/services/products/products';

type Product =
 {
    _id: string;
    productName: string;
    productPrice: number;
    productImg: string;
    productDescription: string;
}

type Props={
    data:{
        products: Product[],
        currentPage:number,
        totalCount:number,
        totalPages:number,
    }
}
// { icon, title, details }:Props
export const ServiceCard = ({data}:Props) => {

    const [count, setCount] = useState(0);
    const [proVal , setProVal] = useState<{ [key: string]: number }>({})

    const handleCart = async(e: MouseEvent<HTMLButtonElement>,product:Product,key:number) =>{
        //  const data  = await AddToCart(product._id);
        //  console.log("add to cart",data)
        
        setCount((prevCount) => prevCount + 1);

        setProVal((prevProVal) => {
            const updatedProVal = { ...prevProVal };
            const productId = product._id;
            updatedProVal[productId] = (updatedProVal[productId] || 0) + 1;
            return updatedProVal;
        });

        
        console.log("e",e.target, product,key)
    }

    const handleRemove = (product:Product) =>{
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

        setProVal((prevProVal) => {
            const productId = product._id;
            const updatedProVal = { ...prevProVal };
            if (updatedProVal[productId] && updatedProVal[productId] > 0) {
                updatedProVal[productId]--;
            }
            return updatedProVal;
        });
    }
   
    return (
      <>
      {data && data?.products  ? 
      
        data?.products.map((product,i)=>(
         <div className="max-w-xs bg-white border border-gray-200 rounded-lg dark:border-gray-700 ml-3" key={product._id}>
            {/* <a href="#"> */}
                <Image 
                 className="rounded-t-lg"
                 src={product.productImg}
                 alt="" 
                 width={0}
                 height={0}
                 sizes="100vw"
                 style={{ width: '100%', height: '50%' }} 
                 />
            {/* </a> */}
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-light text-gray-900 dark:text-dark">{product?.productName}</h5>
                </a>
                <p className="mb-3 font-normal text-dark-700 dark:text-neutral-400">Description : {product.productDescription}</p>

                <button className="btn btn-blue" onClick={(e)=>handleCart(e,product,i)}>
                {proVal[product._id] || 0} Add to Cart</button>
                <button className="btn bg-amber-400 ml-2" onClick={()=>handleRemove(product)}>Remove</button>

                
                {/* <CusModal /> */}
            </div>
            <p>Total Poducts -</p>
        </div>

        ))
    
    
        :
        
        ""
    
    }
       
      </>
    );
};
