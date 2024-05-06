import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))

  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/register" || path === "/" ;

  console.log(typeof window,"middlware-----")
  
  const token = request.cookies.get("authToken")?.value; 
  const authRole	 = request.cookies.get("authRole")?.value; 
  console.log(":authRole	",authRole)
 
  if(isPublicPath && token){
    // console.log("middleware working----\public page",request.url)
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // if(isPublicPath && token && authRole === "admin"){
  //   // console.log("middleware working----\public page",request.url)
  //   return NextResponse.redirect(new URL('/admin-dashboard', request.url))
  // }
  
  if(!isPublicPath && token === undefined){
    // console.log("middleware working----not public page",request.url)
    return NextResponse.redirect(new URL('/login', request.url))
  }

}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
      '/',
      '/dashboard',
      '/user-dashboard',
      '/admin-dashboard',
      '/login',
      '/register'
    ],
}