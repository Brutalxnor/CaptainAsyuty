// import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
// import { useRouter } from 'next/router';
// import type { AppProps } from 'next/app';
// import '../styles/global.css';
// import { Url } from 'next/dist/shared/lib/router/router';

// const publicPages = ["/", "/about", "/contact", "/online-gym", "/auth"];

// function MyApp({ Component, pageProps }: AppProps) {
//   const router = useRouter();
//   const isPublicPage = publicPages.includes(router.pathname);

//   return (
//     <ClerkProvider
//       frontendApi={process.env.pk_test_bG92aW5nLXNsdWctNTMuY2xlcmsuYWNjb3VudHMuZGV2JA}
//       navigate={(to: Url) => router.push(to)}
//     >
//       {isPublicPage ? (
//         <Component {...pageProps} />
//       ) : (
//         <RedirectToSignIn redirectUrl={router.pathname} />
//       )}
//     </ClerkProvider>
//   );
// }

// export default MyApp;




// pages/_app.tsx
// pages/_app.tsx
// pages/_app.tsx
// pages/_app.tsx



// import { ClerkProvider, RedirectToSignIn } from "@clerk/nextjs";
// import type { AppProps } from "next/app";
// import "../styles/global.css";

// const publicPages = ["/", "/about", "/contact", "/online-gym", "/auth(.*)"];

// function MyApp({ Component, pageProps, router }: AppProps) {
//   const isPublicPage = publicPages.includes(router.pathname);

//   return (
//     <ClerkProvider>
//       <Component {...pageProps} />
//     </ClerkProvider>
//   );
// }

// export default MyApp;



// pages/_app.tsx
import { ClerkProvider, useAuth } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/global.css';

const publicPages = ['/', '/about', '/contact', '/online-gym', '/auth'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPublicPage = publicPages.includes(router.pathname);

  // return (
  //   <ClerkProvider>
  //     {isPublicPage ? (
  //       <Component {...pageProps} />
  //     ) : (
  //       <AuthGuard>
  //         <Component {...pageProps} />
  //       </AuthGuard>
  //     )}
  //   </ClerkProvider>
  // );
  return (
        <ClerkProvider>
          <Component {...pageProps} />
        </ClerkProvider>
      );

}

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/auth?mode=sign-in');
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return null;
  }

  return <>{children}</>;
};

export default MyApp;
