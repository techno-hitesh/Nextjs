import { Metadata } from "next"


export const metadata:Metadata = {
  title:"Blog"
}

// when you use absolute then only show that title 
// title:{    
//   absolute:"Blog"
// }

const blog = () => {
  return (
    <h1>blog Page</h1>
  )
}

export default blog