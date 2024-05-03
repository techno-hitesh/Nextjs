import { Metadata } from "next"
import Link from "next/link"


export const metadata:Metadata = {
  title:"Blog"
}

// when you use absolute then only show that title 
// title:{    
//   absolute:"Blog"
// }

const blog = () => {
  return (
    <>
      <Link href={"/"} className="text-current text-blue-500">Home</Link>
      <h1>blog Page</h1>
    
    </>
  )
}

export default blog