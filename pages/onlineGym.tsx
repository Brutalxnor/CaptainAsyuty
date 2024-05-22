import React from 'react';
import Layout from '@/components/layout';

const OnlineGym: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">Online Gym</h1>
        <p className="text-xl">
          Join our online gym to access a variety of workouts and fitness programs from the comfort of your home.
        </p>
      </div>
    </Layout>
  );
}

export default OnlineGym;
