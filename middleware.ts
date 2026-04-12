
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const hasSession = req.cookies.get('sb-access-token')
  if (req.nextUrl.pathname.startsWith('/timelines') && !hasSession) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = { matcher: ['/timelines/:path*'] }
