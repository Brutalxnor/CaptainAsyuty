


// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { ClientData } from '@/types/ClientData';
// import ClientInfoForm from '@/components/ClientInfoForm';
// import LoadingSpinner from '@/components/LoadingSpinner'; // Import the new component

// const ClientInfoPage: React.FC = () => {
//   const { user } = useAuth();
//   const [clientData, setClientData] = useState<Partial<ClientData> | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) return;

//       const email = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!email) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch('/api/client', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const { client } = await response.json();
//         setClientData(client);
//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user]);

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div className="text-[var(--text-color)]">Error: {error}</div>;

//   const email = user.primaryEmailAddress?.emailAddress || user.email || '';

//   return (
//     <DashboardLayout>
//       <div className="bg-[var(--background-color)] text-[var(--text-color)] p-4 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4 text-center">Client Info</h1>
//         <ClientInfoForm email={email} clientData={clientData || {}} />
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientInfoPage;










import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { ClientData } from '@/types/ClientData';
import ClientInfoForm from '@/components/ClientInfoForm';
import LoadingSpinner from '@/components/LoadingSpinner'; // Import the new component

const ClientInfoPage: React.FC = () => {
  const { user } = useAuth();
  const [clientData, setClientData] = useState<Partial<ClientData> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchClientData = async () => {
      if (!user) return;

      const email = user.primaryEmailAddress?.emailAddress || user.email;
      if (!email) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/client', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch client data');
        }

        const { client } = await response.json();
        setClientData(client);
      } catch (error: any) {
        console.error('Error fetching client data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, [user]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-[var(--text-color)]">Error: {error}</div>;

  const email = user.primaryEmailAddress?.emailAddress || user.email || '';
  const clientName = clientData?.fullName || email;

  return (
    <DashboardLayout>
      <div className="bg-[var(--background-color)] text-[var(--text-color)] p-4 rounded-lg shadow-md">
        {/* Display the Client's Name */}
        <h1 className="text-2xl font-bold mb-4 text-center">
          {clientName ? `Client: ${clientName}` : 'Client Info'}
        </h1>
        <ClientInfoForm email={email} clientData={clientData || {}} />
      </div>
    </DashboardLayout>
  );
};

export default ClientInfoPage;
