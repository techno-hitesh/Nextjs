"use client"
import CookieDestroy from "@/components/cookie_destroy"
import Navbar from "@/components/navbar"

export default function RootLayout({
    children,userDetails
  }: {
    children: React.ReactNode,
    userDetails:any
  }) {
    
    return (

        <>
          <CookieDestroy />
          <Navbar />
          {children}
        </>    
    )
  }