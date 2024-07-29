


import { SignIn, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set a timeout for 2 seconds to show the loading spinner

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

  if (isSignedIn && user) {
    router.push('/dashboard');
  }
}, [isSignedIn, user, router]);


  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <SignIn />
      )}
      <button
        onClick={handleBackToHome}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        Back to Home
      </button>
    </div>
  );
};

export default SignInPage;
