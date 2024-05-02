const ProductId = ({params}:
    {
        params:{ productId:string }
    }
) => {
  return (
    <h1>Details of Products {params.productId}</h1>
  )
}

export default ProductId