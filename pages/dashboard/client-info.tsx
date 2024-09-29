


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







// //pages\dashboard\client-info.tsx
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
//           if (response.status === 409) {
//             // Handle client already exists case
//             throw new Error('Client already exists');
//           }
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
//   const clientName = clientData?.fullName || email;

//   return (
//     <DashboardLayout>
//       {/* <div className="bg-[var(--background-color)] text-[var(--text-color)] p-4 rounded-lg shadow-md"> */}
//       <div className="flex flex-col items-center text-center w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] justify-center p-4 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">

//         {/* Display the Client's Name */}
//         <h1 className="text-2xl font-bold mb-4 text-center"> 
//           {/* {clientName ? `Client: ${clientName}` : 'Client Info'} */}
//         </h1>
//         <ClientInfoForm email={email} clientData={clientData || {}} />
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientInfoPage;




// pages/dashboard/client-info.tsx
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
          if (response.status === 409) {
            // Handle client already exists case
            throw new Error('Client already exists');
          }
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
      {/* Use a container that adapts to different screen sizes */}
      {/* <div className="flex flex-col items-center justify-center w-full px-4 py-6 md:px-6 lg:px-8 mx-auto max-w-full md:max-w-3xl bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg"> */}
        {/* Display the Client's Name */}
        <h1 className="text-2xl font-bold mb-4 text-center"> 
          {clientName ? `Client: ${clientName}` : 'Client Info'}
        </h1>
        {/* Limit form's width for larger screens and ensure it's fully responsive */}
        <ClientInfoForm email={email} clientData={clientData || {}} />
      {/* </div> */}
    </DashboardLayout>
  );
};

export default ClientInfoPage;
