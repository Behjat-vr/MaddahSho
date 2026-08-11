import { NextResponse, type NextRequest } from 'next/server';
import { verifyToken } from '@/lib/jwt';

export const runtime = 'experimental-edge';

const PROTECTED_ROUTES = ['/home', '/courses', '/profile'];
const ADMIN_ROUTES = ['/admin'];
const AUTH_ROUTES = ['/auth/login', '/auth/register'];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip API routes and static files
  if (pathname.startsWith('/api/') || pathname.startsWith('/_next/') || pathname === '/favicon.ico') {
    return NextResponse.next();
  }

  const token = req.cookies.get('maddahshoo_session')?.value;
  let payload = null;

  if (token) {
    payload = await verifyToken(token);
  }

  const isAuthenticated = !!payload;
  const isAdmin = payload?.role === 'ADMIN';

  // Redirect auth pages if already logged in
  if (isAuthenticated && AUTH_ROUTES.some(r => pathname.startsWith(r))) {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  // Protected routes require auth
  if (!isAuthenticated && PROTECTED_ROUTES.some(r => pathname.startsWith(r))) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // Admin routes require admin role
  if (ADMIN_ROUTES.some(r => pathname.startsWith(r))) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
    if (!isAdmin) {
      return NextResponse.redirect(new URL('/home', req.url));
    }
  }

  // Allow Eitaa iframe embedding
  const response = NextResponse.next();
  response.headers.delete('X-Frame-Options');
  response.headers.set('Content-Security-Policy', "frame-ancestors 'self' https://*.eitaa.com https://eitaa.com");

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
