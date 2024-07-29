// // components/ProtectedPage.tsx
// import { ReactNode, useEffect } from 'react';
// import { useUser, RedirectToSignIn } from '@clerk/nextjs';

// interface ProtectedPageProps {
//   children: ReactNode;
// }

// const ProtectedPage = ({ children }: ProtectedPageProps) => {
//   const { isSignedIn, isLoaded } = useUser();

//   useEffect(() => {
//     if (isLoaded && !isSignedIn) {
//       RedirectToSignIn({ redirectUrl: '/' });
//     }
//   }, [isLoaded, isSignedIn]);

//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   if (!isSignedIn) {
//     return <RedirectToSignIn redirectUrl="/" />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedPage;



// components/ProtectedRoute.tsx
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/sign-in');
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
