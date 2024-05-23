import React from 'react';
import Layout from '@/components/layout';
import HeroVideo from '@/components/HeroVideo';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import BeforeAfter from '@/components/BeforeAfter';
import JoinNow from '@/components/JoinNow';
import MembershipPerks from '@/components/MembershipPerks';
import Footer from '@/components/Footer';
import SignupForm from '@/components/SignupForm';

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroVideo />
      <Testimonials />
      <SignupForm />
      <BeforeAfter />
      <Pricing />
      <SignupForm />
      <MembershipPerks />
      <Footer />
    </Layout>
  );
}

export default Home;
