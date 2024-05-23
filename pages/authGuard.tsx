import React, { ReactNode, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/auth?mode=sign-in');
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthGuard;
