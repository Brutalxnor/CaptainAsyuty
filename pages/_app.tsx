
// pages/_app.tsx

import type { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';
import { LanguageProvider } from '@/contexts/LanguageContext';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider 
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      // frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API!}
      signInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL!}
      signUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL!}>

      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ClerkProvider>
  );
};

export default MyApp;


