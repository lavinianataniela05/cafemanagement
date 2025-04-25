import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      // /admin hanya bisa diakses oleh ADMIN
      if (req.nextUrl.pathname.startsWith('/admin')) {
        return token?.role === 'ADMIN'
      }
      // /customer hanya bisa diakses oleh CUSTOMER
      if (req.nextUrl.pathname.startsWith('/customer')) {
        return token?.role === 'CUSTOMER'
      }
      return !!token
    },
  },
  pages: {
    signIn: '/auth/login'
  }
})

export const config = { 
  matcher: ['/admin/:path*', '/customer/:path*'] 
}