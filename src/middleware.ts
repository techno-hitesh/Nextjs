import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { authTokens } from './helpers/common';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))

  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/register" || path === "/" ;

  console.log(typeof window,"middlware-----" ,authTokens)
  
  const token = request.cookies.get("authToken")?.value; 
  const authRole	= request.cookies.get("userRole")?.value; 
  console.log(":authRole	",authRole,)
 
  if(isPublicPath && token && authRole === "admin"){
    // console.log("middleware working----\public page",request.url)
    return NextResponse.redirect(new URL('/admin-dashboard', request.url))
  }

  if(isPublicPath && token && authRole === "user"){
    // console.log("middleware working----\public page",request.url)
    return NextResponse.redirect(new URL('/user-dashboard', request.url))
  }

  
  
  if(!isPublicPath && token === undefined ){
    return NextResponse.redirect(new URL('/login', request.url))
  }

}
 
// See "Matching Paths" below to learn more '/dashboard',
export const config = {
    matcher: [
      '/',
      '/user-dashboard/:path*',
      '/admin-dashboard/:path*',
      '/login',
      '/register'
    ],
}