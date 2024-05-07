import Image from 'next/image'

type Product = {
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
    // console.log("service card",data)
   
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product?.productName}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.productDescription}</p>
                <button className="btn btn-blue">REview</button>
            </div>
        </div>

        ))
    
    
        :
        
        ""
    
    }
       
      </>
    );
};
