// layouts/Layout.tsx
import { PropsWithChildren } from 'react';
import Sidebar from '@/components/sidebar';
import SignupForm from '@/components/SignupForm';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Sidebar routes={[]} />
      <main className="flex-1">
        {children}
        <SignupForm />
      </main>
    </div>
  );
};

export default Layout;
