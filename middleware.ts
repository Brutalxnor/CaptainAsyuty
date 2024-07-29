// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   const token = req.cookies.get('__session'); // Assuming Clerk's token is stored in a cookie named __session

//   if (!token) {
//     if (url.pathname.startsWith('/dashboard/admin')) {
//       url.pathname = '/sign-in';
//       return NextResponse.redirect(url);
//     }
//     return NextResponse.next();
//   }

//   const userResponse = await fetch(`${process.env.NEXT_PUBLIC_CLERK_API_URL}/v1/users/me`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!userResponse.ok) {
//     return NextResponse.next();
//   }

//   const user = await userResponse.json();
//   const isAdmin = user.publicMetadata.role === 'admin';

//   if (url.pathname.startsWith('/dashboard/admin') && !isAdmin) {
//     url.pathname = '/sign-in';
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
//     '/', // Run middleware on index page
//     '/(api|trpc)(.*)' // Run middleware on API routes
//   ],
// };













// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   const token = req.cookies.get('__session'); // Assuming Clerk's token is stored in a cookie named __session

//   if (!token) {
//     if (url.pathname.startsWith('/dashboard/admin')) {
//       url.pathname = '/sign-in';
//       return NextResponse.redirect(url);
//     }
//     return NextResponse.next();
//   }

//   const userResponse = await fetch(`${process.env.NEXT_PUBLIC_CLERK_API_URL}/v1/users/me`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//   });
  
//   if (!userResponse.ok) {
//     return NextResponse.next();
//   }

//   const user = await userResponse.json();
//   const isAdmin = user.publicMetadata.role === 'admin';

//   if (url.pathname.startsWith('/dashboard/admin') && !isAdmin) {
//     url.pathname = '/sign-in';
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
//     '/', // Run middleware on index page
//     '/(api|trpc)(.*)' // Run middleware on API routes
//   ],
// };




// // middleware.ts or middleware.js
// // middleware.ts or middleware.js
// import { getAuth } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export default function middleware(req: NextRequest) {
//   const { userId } = getAuth(req);

//   // Define the public routes
//   const publicRoutes = ['/', '/sign-in', '/sign-up', '/about', '/contact', '/online-gym'];

//   const isPublicRoute = publicRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

//   // If the user is not authenticated and the route is not public, redirect to the sign-in page
//   if (!userId && !isPublicRoute) {
//     const signInUrl = new URL('/sign-in', req.url);
//     signInUrl.searchParams.set('redirect_url', req.url);
//     return NextResponse.redirect(signInUrl);
//   }

//   // If the user is authenticated or the route is public, allow the request
//   return NextResponse.next();
// }





/// semi workin 

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   const token = req.cookies.get('__session'); // Clerk's token is stored in a cookie named __session

//   if (!token) {
//     if (url.pathname.startsWith('/dashboard/admin')) {
//       url.pathname = '/sign-in';
//       url.searchParams.set('redirect_url', req.url);
//       return NextResponse.redirect(url);
//     }
//     return NextResponse.next();
//   }

//   try {
//     const userResponse = await fetch(`${process.env.NEXT_PUBLIC_CLERK_API_URL}/v1/users/me`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!userResponse.ok) {
//       console.error('Failed to fetch user data:', userResponse.statusText);
//       return NextResponse.next();
//     }

//     const user = await userResponse.json();
//     const isAdmin = user.publicMetadata.role === 'admin';

//     if (url.pathname.startsWith('/dashboard/admin') && !isAdmin) {
//       url.pathname = '/sign-in';
//       return NextResponse.redirect(url);
//     }

//   } catch (error) {
//     console.error('Error in middleware:', error);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
//     '/', // Run middleware on index page
//     '/(api|trpc)(.*)' // Run middleware on API routes
//   ],
// };







// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   const token = req.cookies.get('__session'); // Assuming Clerk's token is stored in a cookie named __session

//   // Define the public routes
//   const publicRoutes = ['/', '/sign-in', '/sign-up', '/about', '/contact', '/online-gym'];
//   const isPublicRoute = publicRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

//   if (!token) {
//     if (url.pathname.startsWith('/dashboard/admin')) {
//       url.pathname = '/sign-in';
//       url.searchParams.set('redirect_url', req.url);
//       return NextResponse.redirect(url);
//     }
//     return NextResponse.next();
//   }

//   try {
//     const userResponse = await fetch(`${process.env.NEXT_PUBLIC_CLERK_API_URL}/v1/users/me`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!userResponse.ok) {
//       console.error('Failed to fetch user data:', userResponse.statusText);
//       return NextResponse.next();
//     }

//     const user = await userResponse.json();
//     if (!user || !user.publicMetadata) {
//       console.error('User data is not valid:', user);
//       return NextResponse.next();
//     }

//     const isAdmin = user.publicMetadata.role === 'admin';

//     if (url.pathname.startsWith('/dashboard/admin') && !isAdmin) {
//       url.pathname = '/sign-in';
//       return NextResponse.redirect(url);
//     }

//   } catch (error) {
//     console.error('Error in middleware:', error);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
//     '/', // Run middleware on index page
//     '/(api|trpc)(.*)' // Run middleware on API routes
//   ],
// };




// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   const token = req.cookies.get('__session'); // Assuming Clerk's token is stored in a cookie named __session

//   // Define the public routes
//   const publicRoutes = ['/', '/sign-in', '/sign-up', '/about', '/contact', '/online-gym'];
//   const isPublicRoute = publicRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

//   // If no token and accessing admin dashboard, redirect to sign-in page
//   if (!token) {
//     if (url.pathname.startsWith('/dashboard/admin')) {
//       url.pathname = '/sign-in';
//       url.searchParams.set('redirect_url', req.url);
//       return NextResponse.redirect(url);
//     }
//     return NextResponse.next();
//   }

//   try {
//     const userResponse = await fetch(`${process.env.NEXT_PUBLIC_CLERK_API_URL}/v1/users/me`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!userResponse.ok) {
//       console.error('Failed to fetch user data:', userResponse.statusText);
//       return NextResponse.next();
//     }

//     const user = await userResponse.json();

//     if (!user || !user.publicMetadata) {
//       console.error('User data is not valid:', user);
//       return NextResponse.next();
//     }

//     const isAdmin = user.publicMetadata.role === 'admin';

//     if (url.pathname.startsWith('/dashboard/admin') && !isAdmin) {
//       url.pathname = '/sign-in';
//       return NextResponse.redirect(url);
//     }

//   } catch (error) {
//     console.error('Error in middleware:', error);
//     return NextResponse.next();
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
//     '/', // Run middleware on index page
//     '/(api|trpc)(.*)', // Run middleware on API routes
//   ],
// };








// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   const token = req.cookies.get('__session'); // Assuming Clerk's token is stored in a cookie named __session

//   // Define the public routes
//   const publicRoutes = ['/', '/sign-in', '/sign-up', '/about', '/contact', '/online-gym'];
//   const isPublicRoute = publicRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

//   if (!token) {
//     if (url.pathname.startsWith('/dashboard/admin')) {
//       url.pathname = '/sign-in';
//       url.searchParams.set('redirect_url', req.url);
//       return NextResponse.redirect(url);
//     }
//     return NextResponse.next();
//   }

//   try {
//     const userResponse = await fetch(`${process.env.NEXT_PUBLIC_CLERK_API_URL}/v1/users/me`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!userResponse.ok) {
//       console.error('Failed to fetch user data:', userResponse.statusText);
//       return NextResponse.next();
//     }

//     const user = await userResponse.json();
//     if (!user || !user.publicMetadata) {
//       console.error('User data is not valid:', user);
//       return NextResponse.next();
//     }

//     const isAdmin = user.publicMetadata.role === 'admin';

//     if (url.pathname.startsWith('/dashboard/admin') && !isAdmin) {
//       url.pathname = '/sign-in';
//       return NextResponse.redirect(url);
//     }

//   } catch (error) {
//     console.error('Error in middleware:', error);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
//     '/', // Run middleware on index page
//     '/(api|trpc)(.*)' // Run middleware on API routes
//   ],
// };















// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(req: NextRequest) {
//   console.log('Middleware triggered:', req.url);

//   const url = req.nextUrl.clone();
//   const token = req.cookies.get('__session'); // Assuming Clerk's token is stored in a cookie named __session

//   const publicRoutes = ['/', '/sign-in', '/sign-up', '/about', '/contact', '/online-gym'];
//   const isPublicRoute = publicRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

//   if (!token) {
//     console.log('No token, redirecting to sign-in if needed');
//     if (url.pathname.startsWith('/dashboard/admin')) {
//       url.pathname = '/sign-in';
//       url.searchParams.set('redirect_url', req.url);
//       return NextResponse.redirect(url);
//     }
//     return NextResponse.next();
//   }

//   try {
//     const userResponse = await fetch(`${process.env.NEXT_PUBLIC_CLERK_API_URL}/v1/users/me`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!userResponse.ok) {
//       console.error('Failed to fetch user data:', userResponse.statusText);
//       return NextResponse.next();
//     }

//     const user = await userResponse.json();
//     if (!user || !user.publicMetadata) {
//       console.error('User data is not valid:', user);
//       return NextResponse.next();
//     }

//     const isAdmin = user.publicMetadata.role === 'admin';

//     if (url.pathname.startsWith('/dashboard/admin') && !isAdmin) {
//       url.pathname = '/sign-in';
//       return NextResponse.redirect(url);
//     }
//   } catch (error) {
//     console.error('Error in middleware:', error);
//   }

//   console.log('Token found, proceeding');
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };







// import { withClerkMiddleware } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';



// export default withClerkMiddleware((req: NextRequest) => {
//   const url = req.nextUrl.clone();

//   // Public routes that do not require authentication
//   const publicRoutes = [
//     '/',
//     '/sign-in',
//     '/sign-up',
//     '/sign-up(.*)', // Include all routes under /sign-up
//     '/about',
//     '/contact',
//     '/online-gym',
//   ];

//   // Check if the request path matches any of the public routes
//   const isPublicRoute = publicRoutes.some((route) =>
//     req.nextUrl.pathname.match(new RegExp(`^${route}$`))
//   );

//   if (isPublicRoute) {
//     return NextResponse.next();
//   }

//   // If the request is for a protected route and there's no valid session, redirect to sign-in
//   const token = req.cookies.get('__session');
//   if (!token) {
//     url.pathname = '/sign-in';
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
//     '/', // Run middleware on index page
//     '/(api|trpc)(.*)', // Run middleware on API routes
//   ],
// };


// middleware.ts// middleware.ts
// middleware.ts


// middleware.ts

// middleware.ts

// import { clerkMiddleware } from '@clerk/nextjs/server';

// export default clerkMiddleware()

// export const config = {
//   // The following matcher runs middleware on all routes
//   // except static assets.
//   matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };








// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getAuth } from '@clerk/nextjs/server';

// export function middleware(req: NextRequest) {
//   const publicPaths = ['/', '/sign-in', '/sign-up', '/online-gym', '/about', '/contact'];

//   const { pathname } = req.nextUrl;
//   if (publicPaths.includes(pathname)) {
//     return NextResponse.next();
//   }

//   const { userId } = getAuth(req);

//   if (!userId) {
//     const signInUrl = new URL('/sign-in', req.url);
//     signInUrl.searchParams.set('redirect_url', req.url);
//     return NextResponse.redirect(signInUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/', '/dashboard/:path*', '/sign-in', '/sign-up', '/online-gym', '/about', '/contact'],
// };





// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getAuth } from '@clerk/nextjs/server';

// export function middleware(req: NextRequest) {
//   const publicPaths = ['/', '/sign-in', '/sign-up', '/online-gym', '/about', '/contact'];
//   const { pathname } = req.nextUrl;
//   // Allow access to public paths
//   if (publicPaths.includes(pathname)) {
//     return NextResponse.next();
//   }

//   const { userId } = getAuth(req);

//   // If the user is not authenticated, redirect to sign-in
//   if (!userId) {
//     const signInUrl = new URL('/pages/sign-in', req.url);
//     signInUrl.searchParams.set('redirect_url', req.url);
//     return NextResponse.redirect(signInUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/',
//     '/dashboard/:path*',
//     '/sign-in',
//     '/sign-up',
//     '/online-gym',
//     '/about',
//     '/contact',
//   ],
// };





import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware()

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};