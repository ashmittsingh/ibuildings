import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow assets and API
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname === '/favicon.ico') {
    return NextResponse.next()
  }

  // Protect /admin pages (except login)
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
