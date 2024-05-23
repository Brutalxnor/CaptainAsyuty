// pages/sign-up/index.tsx
import { SignUp } from '@clerk/nextjs';
import AuthLayout from '@/components/AuthLayout';

const SignUpPage = () => (
  <AuthLayout>
    <div className="flex justify-center py-24">
        <SignUp
        />
    </div>
  </AuthLayout>
);

export default SignUpPage;
