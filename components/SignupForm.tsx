

// components/SignupForm.tsx
import React, { useState } from 'react';
import { FaGift } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';

const SignupForm = () => {
  const router = useRouter();
  const { language } = useLanguage();
  const [email, setEmail] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    router.push(`/sign-up`);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-color-#{$#1a202c relative">
      <div className="bg-black text-white py-8 px-4 rounded-lg shadow-lg max-w-md w-full mx-auto">
        <div className="text-center font-serif">
          <h2 className="text-2xl font-bold">
            {language === 'en' ? 'Sign Up Now' : 'اشترك الآن'}
          </h2>
          <p className="text-md mb-4 flex justify-center items-center">
            <FaGift className="text-yellow-500 mr-2" /> 
            {language === 'en' ? 'Get a free nutrition plan!' : 'احصل على خطة تغذية مجانية!'}
          </p>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col items-center ">
            <input
              type="email"
              name="email"
              placeholder={language === 'en' ? 'Enter your email' : 'أدخل بريدك الإلكتروني'}
              className="p-2 rounded-t-full bg-white text-black text-center w-full"
              required
              defaultValue={email || ''}
            />
            <button
              type="submit"
              className="p-2 rounded-b-full bg-blue-500 text-white font-bold w-full"
            >
              {language === 'en' ? 'Sign Up Now' : 'اشترك الآن'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
