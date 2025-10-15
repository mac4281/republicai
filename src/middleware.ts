import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect /adradar to external site
  if (request.nextUrl.pathname === '/adradar' || request.nextUrl.pathname.startsWith('/adradar/')) {
    return NextResponse.redirect('https://www.adradar.net/', {
      status: 308, // Permanent redirect
    });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/adradar/:path*',
};

