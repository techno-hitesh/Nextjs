import {notFound} from "next/navigation"

const reviewId = ( {params} : { params: { reviewsId:string , productId:string } } ) => {

    if(parseInt(params?.reviewsId) > 1000){
        notFound();
    }
  return (
    <h1>review {params.reviewsId} for Product {params.productId}</h1>
  )
}

export default reviewId