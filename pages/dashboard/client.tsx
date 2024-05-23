// pages/dashboard/client.tsx
import Sidebar from '@/components/sidebar';
import { clientRoutes } from '@/routes/clientRoutes';
import { UserButton } from '@clerk/nextjs';

const ClientDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar routes={clientRoutes} />
      <div className="flex flex-col flex-1 p-4">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Client Dashboard</h1>
          <UserButton />
        </header>
        <main className="flex-1">
          <p>Welcome to the client dashboard!</p>
        </main>
      </div>
    </div>
  );
};

export default ClientDashboard;
