import Navbar from "@/components/navbar"
import "./style.css"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    return (
            <div >
                <Navbar />
              {children}
            
            </div>
        
    )
  }
  