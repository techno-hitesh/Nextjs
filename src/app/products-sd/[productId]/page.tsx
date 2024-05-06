import  { Metadata } from 'next'


  type Props={
    params:{
      productId:string
    }
  }

  // generateMetadata with these defult function name get dynamic params
  export const generateMetadata = async({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(`Iphone ${params?.productId}`);
        },100) 
    });

    return {
      title: `Product ${title}`, 
      description: "Product details page" 
    }
  }

  const ProductId = ( { params } : Props ) => {
    return (
      <h1>Details of Products {params.productId}</h1>
    )
  }

  export default ProductId