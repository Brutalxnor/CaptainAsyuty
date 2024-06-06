
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

// _app.tsx
// _app.tsx
// import { ClerkProvider } from '@clerk/nextjs';
// import { SessionProvider } from "next-auth/react";
// import type { AppProps } from 'next/app';
// import { useRouter } from 'next/router';
// import '../styles/global.css';

// const publicPages = ['/', '/about', '/contact', '/online-gym', '/auth'];

// function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
//   const router = useRouter();
//   const isPublicPage = publicPages.includes(router.pathname);
  
//   return (
//     <ClerkProvider>
//         <Component {...pageProps} />
//       {/* <SessionProvider session={session}>
//       </SessionProvider> */}
//     </ClerkProvider>
//   );
// }

// export default MyApp;





// import { ClerkProvider } from '@clerk/nextjs';
// import { SessionProvider } from 'next-auth/react';
// import type { AppProps } from 'next/app';
// import { useRouter } from 'next/router';
// import '../styles/global.css';

// const publicPages = ['/', '/about', '/contact', '/online-gym', '/auth'];

// function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
//   const router = useRouter();
//   const isPublicPage = publicPages.includes(router.pathname);

//   return (
//     <ClerkProvider>
//       <SessionProvider session={session}>
//         <Component {...pageProps} />
//       </SessionProvider>
//     </ClerkProvider>
//   );
// }

// export default MyApp;



// _app.tsx

// import { ClerkProvider } from '@clerk/nextjs';
// import { SessionProvider } from 'next-auth/react';
// import type { AppProps } from 'next/app';
// import { useRouter } from 'next/router';
// import '../styles/global.css';

// const publicPages = ['/', '/about', '/contact', '/online-gym', '/auth'];

// function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
//   const router = useRouter();
//   const isPublicPage = publicPages.includes(router.pathname);

//   return (
//     <ClerkProvider>
//       <SessionProvider session={session}>
//         <Component {...pageProps} />
//       </SessionProvider>
//     </ClerkProvider>
//   );
// }

// export default MyApp;









// pages/_app.tsx

import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import '../styles/global.css';
import { useSession } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';


// const MyApp = ({ Component, pageProps }: AppProps) => {
//   return (
//     <ClerkProvider>
//       <SignedIn>
//         <Component {...pageProps} />
//       </SignedIn>
//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </ClerkProvider>
//   );
// };

const publicPages = ['/', '/about', '/contact', '/online-gym', '/auth'];

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const isPublicPage = publicPages.includes(router.pathname);

  return (
    <ClerkProvider>
      <SessionProvider session={session}>
          <Component {...pageProps} />
       </SessionProvider>
    </ClerkProvider>
  );
};

export default MyApp;
