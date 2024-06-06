// components/DashboardLayout.tsx
import Sidebar from '@/components/sidebar';
import { useUser } from '@clerk/nextjs';
import { clientRoutes } from '@/routes/clientRoutes';
import { adminRoutes } from '@/routes/adminRoutes';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
  className?: string;
}

const DashboardLayout = ({ children, className }: DashboardLayoutProps) => {
  const { user } = useUser();
  const routes = user?.publicMetadata.role === 'admin' ? adminRoutes : clientRoutes;

  return (
    // <div className="flex h-scree rounded-lg">
    // className="flex h-full h-screen w-full bg-white text-black"
    <div  className={`flex h-full h-screen w-full bg-white text-black ${className}`} >
      <Sidebar routes={routes} />
      <div className="flex-1 p-4 bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
