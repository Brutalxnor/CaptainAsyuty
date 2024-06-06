import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Add your logic to check for admin authentication
  // For example, check for a specific cookie or header

  const isAdmin = req.cookies.get('isAdmin'); // This is an example, adjust based on your auth logic

  if (url.pathname.startsWith('/dashboard/admin') && !isAdmin) {
    url.pathname = '/sign-in';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
