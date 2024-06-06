// import { SignIn, SignUp } from '@clerk/nextjs';
// import { useRouter } from 'next/router';

// const AuthPage = () => {
//   const router = useRouter();
//   const { mode } = router.query;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       {mode === 'sign-up' ? <SignUp routing="path" path="/auth" /> : <SignIn routing="path" path="/auth" />}
//     </div>
//   );
// };

// export default AuthPage;



// import { SignIn, SignUp, useAuth } from '@clerk/nextjs';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// const AuthPage = () => {
//   const router = useRouter();
//   const { mode } = router.query;
//   const { isSignedIn, user } = useAuth();

//   useEffect(() => {
//     if (isSignedIn) {
//       if (user?.publicMetadata.role === 'admin') {
//         router.push('/dashboard/admin');
//       } else {
//         router.push('/dashboard/client');
//       }
//     }
//   }, [isSignedIn, user, router]);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       {mode === 'sign-up' ? <SignUp routing="path" path="/auth" /> : <SignIn routing="path" path="/auth" />}
//     </div>
//   );
// };

// export default AuthPage;



// pages/auth/[[...index]].tsx
// pages/auth/[[...index]].tsx



// import { SignIn, SignUp } from '@clerk/nextjs';
// import { useRouter } from 'next/router';

// const AuthPage = () => {
//   const router = useRouter();
//   const { mode } = router.query;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       {mode === 'sign-up' ? (
//         <SignUp routing="path" path="/auth" />
//       ) : (
//         <SignIn routing="path" path="/auth" />
//       )}
//     </div>
//   );
// };

// export default AuthPage;


// pages/auth/index.tsx
// pages/auth/index.tsx
// pages/auth/index.tsx
import { SignIn } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AuthLayout from '@/components/AuthLayout';

const AuthPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (router.query.email) {
      setEmail(router.query.email as string);
    }
  }, [router.query.email]);

  return (
    <AuthLayout>
      <div className="flex justify-center py-24">
        <SignIn
          initialValues={{ emailAddress: email }}
        />
      </div>
    </AuthLayout>
  );
};

export default AuthPage;
