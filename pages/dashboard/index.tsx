

// pages/dashboard/index.tsx
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import React from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

const Dashboard = () => {
  const router = useRouter();
  const { user } = useUser();

  React.useEffect(() => {
    if (user) {
      if (user.publicMetadata.role === 'admin') {
        router.push('/dashboard/admin');
      } else {
        router.push('/dashboard/client');
      }
    }
  }, [user, router]);

  return <LoadingSpinner />;
};
  
export default Dashboard;
