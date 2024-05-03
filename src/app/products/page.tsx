import Link from "next/link"

const ProductList = () => {

  const product_cs = 100
  return (
    <>
        <Link href={"/"} className="text-current text-blue-500">Home</Link>
        <h1>Products Lists</h1>
        <h2> <Link href={"/products/1"} className="text-current text-blue-500"> Products 1 </Link></h2>
        <h2> <Link href="/products/2" className="text-current text-blue-500">   Products 2 </Link></h2>
        <h2> <Link href="/products/3" className="text-current text-blue-500">   Products 3 </Link></h2>
        <h2> <Link href={`/products/${product_cs}`} replace className="text-current text-blue-500"> Products {product_cs} </Link></h2>

    </>
  )
}

export default ProductList
