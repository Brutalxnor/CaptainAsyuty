// pages/sign-in/[[...index]].tsx
import AuthLayout from '@/components/AuthLayout';
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => (
    <AuthLayout>
    <div className="flex justify-center py-24">
        <SignIn
        />
    </div>
  </AuthLayout>
);

export default SignInPage;