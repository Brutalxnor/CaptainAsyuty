// components/SignupForm.tsx
import { useSignUp } from '@clerk/nextjs';
import React from 'react';
import { FaGift } from 'react-icons/fa';
import AuthLayout from './AuthLayout';

const SignupForm = () => {
  const { signUp } = useSignUp();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;

    try {
      await signUp.create({ emailAddress: email });
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthLayout>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">اشترك الآن</h2>
          <p className="text-lg mb-8 flex justify-center items-center">
            <FaGift className="text-yellow-500 mr-2" /> احصل على خطة تغذية مجانية!
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex justify-center items-center">
            <input
              type="email"
              name="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="p-2 rounded-l-full bg-white text-black"
              required
            />
            <button
              type="submit"
              className="p-2 rounded-r-full bg-black text-white font-bold"
            >
              اشترك الآن
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignupForm;
