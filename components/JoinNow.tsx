




import React from 'react';
import { useRouter } from 'next/router';

const JoinNow: React.FC = () => {
  const router = useRouter();

  const handleJoinNow = () => {
    router.push('/sign-up'); // Redirect to the signup page
  };

  return (
    <div className="bg-primary py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us Now</h2>
        <p className="mb-8">Your journey to a better experience starts here.</p>
        <button 
          onClick={handleJoinNow} 
          className="bg-secondary text-white py-2 px-4 rounded-full"
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default JoinNow;
