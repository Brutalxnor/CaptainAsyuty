


import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { adminRoutes } from '@/routes/adminRoutes';
import { clientRoutes } from '@/routes/clientRoutes';
import { Route } from '@/types/Route';
// import LanguageToggle from '@/components/LanguageToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const isAdminRoute = router.pathname.startsWith('/dashboard/admin');
  const isClientRoute =
    router.pathname.startsWith('/dashboard/client') ||
    router.pathname.startsWith('/dashboard/exercises') ||
    router.pathname.startsWith('/dashboard/nutrition') ||
    router.pathname.startsWith('/dashboard/my-barcode') ||
    router.pathname.startsWith('/dashboard/calorie-calculator');

  const showSidebar = isAdminRoute || isClientRoute;
  const showNavbar = !router.pathname.startsWith('/dashboard/calorie-calculator');

  const routes: Route[] = isAdminRoute ? adminRoutes : clientRoutes;

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {showNavbar && <Navbar />}
      <div className="flex flex-1">
        {showSidebar && (
          <Sidebar routes={routes} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
        <main className={`flex-1 p-4 ${showSidebar ? '' : 'w-full'}`}>{children}</main>
        {/* <LanguageToggle /> */}
      </div>
    </div>
  );
};

export default Layout;
