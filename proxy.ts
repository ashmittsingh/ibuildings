import { NextResponse } from 'next/server'
import type { NextRequest, NextFetchEvent } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export function basicMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname === '/favicon.ico') {
    return NextResponse.next()
  }

  if (pathname.startsWith('/admin') && pathname !== '/admin/login' && pathname !== '/admin/login/') {
    const cookie = request.cookies.get('IBUILDINGS_ADMIN')
    if (!cookie) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const authMiddleware = withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')
    if (isAdminRoute && token?.role !== 'staff' && token?.role !== 'admin') {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
    
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname === '/favicon.ico') {
    return NextResponse.next()
  }

  if (pathname.startsWith('/admin') && pathname !== '/admin/login' && pathname !== '/admin/login/') {
    const authHeader = request.headers.get('authorization')
    if (authHeader) {
      return authMiddleware(request as any, event)
    }
    const cookie = request.cookies.get('IBUILDINGS_ADMIN')
    if (!cookie) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

// Export default as the combined middleware
export default middleware

// Configuration for the middleware
export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/admin/:path*',
    '/api/admin/:path*',
  ],
}