import Navbar from "@/components/navbar"

export default function RootLayout({
    children,userDetails
  }: {
    children: React.ReactNode,
    userDetails:any
  }) {
    console.log("admin--------",userDetails)

    return (

        <>
        <h1>admin mode</h1>
        {children}
        </>    
    )
  }