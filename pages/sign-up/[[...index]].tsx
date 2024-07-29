


import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SignUp, useUser } from '@clerk/nextjs';
import LoadingSpinner from '@/components/LoadingSpinner';

const SignUpPage = () => {
  const router = useRouter();
  const { isSignedIn, user } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set a timeout for 2 seconds to show the loading spinner

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const addEmailToDB = async (email: string) => {
      try {
        const response = await fetch('/api/addEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error('Error adding email to database');
        }

        const data = await response.json();
        console.log(data.message);
      } catch (error) {
        console.error('Error adding email:', error);
      }
    };

    if (isSignedIn && user) {
      const userEmail = user.primaryEmailAddress?.emailAddress;
      if (userEmail) {
        addEmailToDB(userEmail).then(() => {
          router.push('/dashboard');
        });
      }
    }
  }, [isSignedIn, user, router]);

  const handleBackToHome = () => {
    router.push('/');
  };

  if (isSignedIn) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <SignUp />
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

export default SignUpPage;
