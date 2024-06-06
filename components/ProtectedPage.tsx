// components/ProtectedPage.tsx
import { ReactNode, useEffect } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/nextjs';

interface ProtectedPageProps {
  children: ReactNode;
}

const ProtectedPage = ({ children }: ProtectedPageProps) => {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      RedirectToSignIn({ redirectUrl: '/' });
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <RedirectToSignIn redirectUrl="/" />;
  }

  return <>{children}</>;
};

export default ProtectedPage;
