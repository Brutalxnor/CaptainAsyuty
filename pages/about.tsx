import React from 'react';
import Layout from '@/components/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-xl">
          Welcome to our fitness website. We are dedicated to helping you achieve your fitness goals through personalized programs and expert guidance.
        </p>
      </div>
    </Layout>
  );
}

export default About;
