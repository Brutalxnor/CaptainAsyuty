


import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import HeroVideo from '@/components/HeroVideo';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import BeforeAfter from '@/components/BeforeAfter';
import JoinNow from '@/components/JoinNow';
import MembershipPerks from '@/components/MembershipPerks';
import Footer from '@/components/Footer';
import SignupForm from '@/components/SignupForm';
import LanguageToggleLanding from '@/components/LanguageToggleLanding';

const Home: React.FC = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'landing-dark');
    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, []);

  return (
    <Layout>
      <HeroVideo />
      <Testimonials />
      <SignupForm />
      <BeforeAfter />
      <div id="pricing-section">
        <Pricing />
      </div>
      <SignupForm />
      <MembershipPerks />
      <Footer />
      <LanguageToggleLanding />
    </Layout>
  );
};

export default Home;
