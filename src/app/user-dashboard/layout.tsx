import Navbar from "@/components/navbar"
import "./style.css"
import CookieDestroy from "@/components/cookie_destroy"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  

    
    return (
            <div >
              <CookieDestroy />
                <Navbar />
              {children}
            
            </div>
        
    )
  }
  