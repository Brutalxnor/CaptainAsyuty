import React from 'react';
import { Button } from '@/components/button';

const JoinNow: React.FC = () => {
  return (
    <div className="bg-primary py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us Now</h2>
        <p className="mb-8">Your journey to a better experience starts here.</p>
        <Button className="btn btn-secondary">Join Now</Button>
      </div>
    </div>
  );
};

export default JoinNow;
