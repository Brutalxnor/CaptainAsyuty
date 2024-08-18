import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import ReCAPTCHA from 'react-google-recaptcha';
import LoadingSpinner from '@/components/LoadingSpinner';

const AffiliateSignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { signUp } = useAuth();

  useEffect(() => {
    const queryReferralCode = router.query.referralCode as string;
    if (queryReferralCode) {
      setReferralCode(queryReferralCode);
    }
  }, [router.query.referralCode]);

  const handleCaptcha = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert('Please verify you are not a robot.');
      return;
    }
    setIsLoading(true);
    try {
      await signUp(username, email, password, referralCode);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error signing up:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="mb-4 w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mb-4 w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mb-4 w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              placeholder="Referral Code (optional)"
              className="mb-4 w-full p-2 border border-gray-300 rounded"
            />
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={handleCaptcha}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded mb-4"
              disabled={!captchaVerified}
            >
              Sign Up
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default AffiliateSignup;
