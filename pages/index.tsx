import React from 'react';
import Layout from '@/components/layout';
import HeroVideo from '@/components/HeroVideo';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import BeforeAfter from '@/components/BeforeAfter';
import JoinNow from '@/components/JoinNow';
import MembershipPerks from '@/components/MembershipPerks';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroVideo />
      <Testimonials />
      <div className="bg-black text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">SIGN UP</h2>
          <form className="mt-8 flex justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 rounded-l-full bg-white text-black" 
            />
            <button 
              type="submit" 
              className="p-2 rounded-r-full bg-white text-black font-bold"
            >
              SIGN ME UP
            </button>
          </form>
        </div>
      </div>
      <BeforeAfter />
      <Pricing />
      <JoinNow />
      <MembershipPerks />
      <Footer />
    </Layout>
  );
}

export default Home;
