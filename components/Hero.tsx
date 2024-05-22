import React from 'react';
import { Button } from '@/components/button';

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200 text-center">
      <div className="hero-content max-w-md mx-auto">
        <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
        <p className="py-6">
          This is a great place to tell your story and showcase your products or services.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
