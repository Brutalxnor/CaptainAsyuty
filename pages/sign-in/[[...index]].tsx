

// //pages/sign-in/[[...index]].tsx

// import { SignIn, useUser } from '@clerk/nextjs';
// import { useRouter } from 'next/router';
// import React, { useState, useEffect } from 'react';
// import LoadingSpinner from '@/components/LoadingSpinner';

// const SignInPage = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();
//   const { isSignedIn, user } = useUser();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Set a timeout for 2 seconds to show the loading spinner

//     return () => clearTimeout(timer);
//   }, []);
  
//     const handleBackToHome = () => {
//       router.push('/');
//     };

//   useEffect(() => {
//       if (isSignedIn) {
//         router.push('/dashboard');
//       }
//     }, [isSignedIn, router]);
  
//   useEffect(() => {

//   if (isSignedIn && user) {
//     router.push('/dashboard');
//   }
// }, [isSignedIn, user, router]);


//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <SignIn />
//       )}
//       <button
//         onClick={handleBackToHome}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
//       >
//         Back to Home
//       </button>
//     </div>
//   );
// };

// export default SignInPage;























// // pages/sign-in.tsx

// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import { useAuth } from '@/contexts/AuthContext';
// import LoadingSpinner from '@/components/LoadingSpinner';

// const SignInPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();
//   const { signIn } = useAuth();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       await signIn(email, password);
//       router.push('/dashboard');
//     } catch (error) {
//       console.error('Error signing in:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <form onSubmit={handleSubmit} className="w-full max-w-sm">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="mb-4 w-full p-2 border border-gray-300 rounded"
//             required
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="mb-4 w-full p-2 border border-gray-300 rounded"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded"
//           >
//             Sign In
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default SignInPage;

















import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SignInPage = () => {

  const [identifier, setIdentifier] = useState(''); 
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signIn(identifier, password);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error signing in:', error);
    } finally {
      setIsLoading(false);
    }
  };


  const handleBackToLanding = () => {
    router.push('/'); // Redirect to landing page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Username or Email"
              className="mb-4 w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mb-4 w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded mb-4"
            >
              Sign In
            </button>
            <div className="text-center">
              <p className="text-gray-600">Not a user yet?</p>
              <a
                href="/sign-up"
                className="text-blue-500 hover:underline"
              >
                Sign up
              </a>
            </div>
          </form>
          <button
            type="button"
            onClick={handleBackToLanding}
            className="mt-4 text-blue-500 hover:underline flex items-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Home Page
          </button>
        </>
      )}
    </div>
  );
};

export default SignInPage;
