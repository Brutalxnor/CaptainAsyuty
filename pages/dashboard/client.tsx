// // pages/dashboard/client.tsx
// import Sidebar from '@/components/sidebar';
// import { clientRoutes } from '@/routes/clientRoutes';
// import { UserButton } from '@clerk/nextjs';

// const ClientDashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar routes={clientRoutes} />
//       <div className="flex flex-col flex-1 p-4">
//         <header className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">Client Dashboard</h1>
//           <UserButton />
//         </header>
//         <main className="flex-1">
//           <p>Welcome to the client dashboard!</p>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ClientDashboard;


// pages/dashboard/client.tsx






// import React, { useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import ClientInfoForm from '@/components/ClientInfoForm';

// const ClientDashboard = () => {
//   const [clientData, setClientData] = useState(null);

//   const handleSave = (data: any) => {
//     // Here you can save data to a database or state
//     setClientData(data);
//   };

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold">Client Dashboard</h1>
//       <ClientInfoForm onSave={handleSave} />
//       {/* Optionally display saved data for confirmation */}
//       {clientData && (
//         <div>
//           <h2>Saved Client Data</h2>
//           <pre>{JSON.stringify(clientData, null, 2)}</pre>
//         </div>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



// pages/dashboard/client.tsx
// pages/dashboard/client.tsx
// pages/dashboard/client.tsx



// import Link from 'next/link';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useSession } from 'next-auth/react';

// const ClientDashboard = () => {
//   const { data: session, status } = useSession();
//   const email = session?.user?.email;

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (!session) {
//     return <div>Please log in to view your dashboard.</div>;
//   }

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
//       <p>Welcome, {email}</p>
//       <div className="mt-4">
//         {/* <Link href="/dashboard/client-exercises">
//           <a className="text-blue-500 hover:underline">View Assigned Exercises</a>
//         </Link> */}
//         <Link href={`/dashboard/admin-add-exercises?clientEmail=${email}`}>
//           <a className="text-blue-500 hover:underline ml-2">Assign Exercise</a>
//         </Link>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;




// Client Dashboard Component (client.tsx)
// client.tsx




// import Link from 'next/link';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useUser, useAuth } from '@clerk/nextjs';
// import useSWR from 'swr';

// const fetcher = (url) => fetch(url).then((res) => res.json());


// const ClientDashboard = () => {
//   const { user } = useUser();
//   const email = user?.primaryEmailAddress?.emailAddress;

//   if (!email) {
//     return <div>Please log in to view your dashboard.</div>;
//   }



// const ClientExercises = ({ clientId }) => {
//   const { data: clientData, error } = useSWR(`/api/exercises/${clientId}`, fetcher);

//   if (error) return <div>Failed to load exercises</div>;
//   if (!clientData) return <div>Loading...</div>;

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Assigned Exercises</h2>
//       <ul>
//         {clientData.exercises.length > 0 ? (
//           clientData.exercises.map((exercise, index) => (
//             <li key={index} className="mb-2">{exercise}</li>
//           ))
//         ) : (
//           <li>No exercises assigned</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// const ClientDashboard = () => {
//   const { user } = useAuth();
//   const clientId = user?.id; // Assuming the user's ID matches the client ID

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
//       <p>Welcome, {user?.primaryEmailAddress?.emailAddress}</p>
//       {clientId && <ClientExercises clientId={clientId} />}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



//client.tsx


// import { useUser } from '@clerk/nextjs';
// import useSWR from 'swr';
// import DashboardLayout from '@/components/DashboardLayout';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// interface ClientExercisesProps {
//   clientId: string;
// }

// const ClientExercises = ({ clientId }: ClientExercisesProps) => {
//   const { data: clientData, error } = useSWR(`/api/exercises/${clientId}`, fetcher);

//   if (error) return <div>Failed to load exercises</div>;
//   if (!clientData) return <div>Loading...</div>;

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Assigned Exercises</h2>
//       <ul>
//         {clientData.exercises.length > 0 ? (
//           clientData.exercises.map((exercise: string, index: number) => (
//             <li key={index} className="mb-2">{exercise}</li>
//           ))
//         ) : (
//           <li>No exercises assigned</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// const ClientDashboard = () => {
//   const { user } = useUser();
//   const email = user?.primaryEmailAddress?.emailAddress;
//   const clientId = user?.id; // Assuming the user ID is used as clientId

//   if (!email) {
//     return <div>Please log in to view your dashboard.</div>;
//   }

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
//       <p>Welcome, {email}</p>
//       {clientId && <ClientExercises clientId={clientId} />}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;




// pages/dashboard/client.tsx
// pages/dashboard/client.tsx

// pages/dashboard/client.tsx

// import { useUser } from '@clerk/nextjs';
// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';

// const ClientDashboard = () => {
//   const { user } = useUser();
//   const email = user?.primaryEmailAddress?.emailAddress;

//   const [exercises, setExercises] = useState<any[]>([]);
//   const [clientData, setClientData] = useState<any>(null);

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (email) {
//         const response = await fetch(`/api/client-info?email=${email}`);
//         const data = await response.json();
//         setClientData(data);
//       }
//     };

//     const fetchExercises = async () => {
//       if (email) {
//         const response = await fetch(`/api/client-exercises?email=${email}`);
//         const data = await response.json();
//         setExercises(data.exercises);
//       }
//     };

//     fetchClientData();
//     fetchExercises();
//   }, [email]);

//   if (!email) return <div>Please log in to view your dashboard.</div>;

//   if (!exercises) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
//       <p>Welcome, {email}</p>
//       <h2 className="text-xl font-bold mb-4">Assigned Exercises</h2>
//       <ul>
//         {exercises.length > 0 ? (
//           exercises.map((exercise, index) => (
//             <li key={index}>{exercise.name}</li>
//           ))
//         ) : (
//           <li>No exercises assigned</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;


// pages/dashboard/client.tsx
// pages/dashboard/client.tsx
// ClientDashboard.tsx
// pages/dashboard/client.tsx



// import { useSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';

// const ClientDashboard = () => {
//   const { data: session } = useSession();
//   const email = session?.user?.email;
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (email) {
//       const fetchClientData = async () => {
//         try {
//           const response = await fetch(`/api/client-info?email=${email}`);
//           if (!response.ok) throw new Error('Failed to load client data');
//           const data: ClientData = await response.json();
//           setClientData(data);
//           setExercises(data.exercises);
//         } catch (error: any) {
//           setError(error.message);
//         }
//       };

//       fetchClientData();
//     }
//   }, [email]);

//   if (!email) return <div>Please log in to view your dashboard.</div>;
//   if (error) return <div>{error}</div>;
//   if (!clientData || !exercises) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
//       <p>Welcome, {email}</p>
//       <h2 className="text-xl font-bold mb-4">Assigned Exercises</h2>
//       <ul>
//         {exercises.length > 0 ? (
//           exercises.map((exercise, index) => (
//             <li key={index}>{exercise.name}</li>
//           ))
//         ) : (
//           <li>No exercises assigned</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;


//////////////////////////////////////////////////////////////////////////////////////////////

// import { useSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';

// const ClientDashboard = () => {
//   const { data: session } = useSession();
//   const email = session?.user?.email;
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (email) {
//       const fetchClientData = async () => {
//         try {
//           const response = await fetch(`/api/client-info?email=${email}`);
//           if (!response.ok) throw new Error('Failed to load client data');
//           const data = await response.json();
//           setClientData(data);
//           setExercises(data.exercises || []);
//         } catch (error: any) {
//           setError(error.message);
//         }
//       };

//       fetchClientData();
//     }
//   }, [email]);

//   if (!email) return <div>Please log in to view your dashboard.</div>;
//   if (error) return <div>{error}</div>;
//   if (!clientData) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
//       <p>Welcome, {email}</p>
//       <h2 className="text-xl font-bold mb-4">Assigned Exercises</h2>
//       <ul>
//         {exercises.length > 0 ? (
//           exercises.map((exercise, index) => (
//             <li key={index}>{exercise.name}</li>
//           ))
//         ) : (
//           <li>No exercises assigned</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;







// import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";
// import DashboardLayout from "@/components/DashboardLayout";
// import { ClientData } from "@/interfaces/ClientData";

// const ClientDashboard = () => {
//   const { data: session } = useSession();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);
  
//   useEffect(() => {
//     const fetchClientData = async () => {
//       try {
//         const response = await fetch(`/api/client-info?email=${session?.user?.email}`);
//         if (!response.ok) throw new Error('Failed to load client data');
//         const data: ClientData = await response.json();
//         setClientData(data);
//         setExercises(data.exercises);
//       } catch (error: any) {
//         setError(error.message);
//       }
//     };
//     if (session?.user?.email) {
//       fetchClientData();
//     }
//   }, [session?.user?.email]);

//   if (!session?.user?.email) return <div>Please log in to view your dashboard.</div>;
//   if (error) return <div>{error}</div>;
//   if (!clientData) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
//       <p>Welcome, {session.user?.email}</p>
//       <h2 className="text-xl font-bold mb-4">Assigned Exercises</h2>
//       <ul>
//         {exercises.length > 0 ? (
//           exercises.map((exercise, index) => (
//             <li key={index}>{exercise.name}</li>
//           ))
//         ) : (
//           <li>No exercises assigned</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;







// pages/dashboard/client.tsx
// import React, { useEffect, useState } from 'react';
// import { useSession } from 'next-auth/react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';

// const ClientDashboard = () => {
//   const { data: session, status } = useSession();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!session?.user?.email) {
//         setError('No session user email found');
//         return;
//       }
//       try {
//         const response = await fetch(`/api/client-info?email=${session.user.email}`);
//         if (!response.ok) throw new Error('Failed to load client data');
//         const data: ClientData = await response.json();
//         setClientData(data);
//       } catch (error: any) {
//         setError(error.message);
//       }
//     };

//     fetchClientData();
//   }, [session?.user?.email]);

//   if (status === 'loading') return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!clientData) return <div>No client data available</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
//       <p>Welcome, {session?.user?.email}</p>
//       <h2 className="text-xl font-bold mb-4">Assigned Exercises</h2>
//       <ul>
//         {clientData.exercises.length > 0 ? (
//           clientData.exercises.map((exercise, index) => (
//             <li key={index}>{exercise.name}</li>
//           ))
//         ) : (
//           <li>No exercises assigned</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;











// import { useEffect, useState } from 'react';
// import { useSession } from 'next-auth/react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';

// const ClientDashboard = () => {
//   const { data: session, status } = useSession();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (session?.user?.email) {
//         try {
//           const response = await fetch(`/api/client-info?email=${session.user.email}`);
//           if (!response.ok) throw new Error('Failed to load client data');
//           const data: ClientData = await response.json();
//           setClientData(data);
//         } catch (error: any) {
//           setError(error.message);
//         }
//       }
//     };

//     if (session?.user?.email) {
//       fetchClientData();
//     }
//   }, [session]);

//   if (status === 'loading') return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!clientData) return <div>No client data available</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
//       <p>Welcome, {session?.user?.email}</p>
//       <h2 className="text-xl font-bold mb-4">Assigned Exercises</h2>
//       <ul>
//         {clientData.exercises.length > 0 ? (
//           clientData.exercises.map((exercise, index) => (
//             <li key={index}>{exercise.name}</li>
//           ))
//         ) : (
//           <li>No exercises assigned</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;






// import { useUser } from '@clerk/nextjs';
// import useSWR from 'swr';
// import DashboardLayout from '@/components/DashboardLayout';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// interface ClientExercisesProps {
//   clientId: string;
// }

// const ClientExercises = ({ clientId }: ClientExercisesProps) => {
//   const { data: clientData, error } = useSWR(`/api/exercises/${clientId}`, fetcher);

//   if (error) return <div>Failed to load exercises</div>;
//   if (!clientData) return <div>Loading...</div>;

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Assigned Exercises</h2>
//       <ul>
//         {clientData.exercises && clientData.exercises.length > 0 ? (
//           clientData.exercises.map((exercise: string, index: number) => (
//             <li key={index} className="mb-2">{exercise}</li>
//           ))
//         ) : (
//           <li>No exercises assigned</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// const ClientDashboard = () => {
//   const { user } = useUser();
//   const email = user?.primaryEmailAddress?.emailAddress;

//   const { data: clientData, error } = useSWR(email ? `/api/auth/clients?email=${encodeURIComponent(email)}` : null, fetcher);

//   if (!user) {
//     return <div>Please log in to view your dashboard.</div>;
//   }

//   if (error) return <div>Failed to load client data</div>;
//   if (!clientData) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
//       <p>Welcome, {email}</p>
//       {clientData && <ClientExercises clientId={clientData._id} />}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;















// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useSession } from 'next-auth/react';

// interface ClientData {
//   email: string;
//   fullName?: string;
//   exercises?: string[];
// }

// const ClientInfoPage = () => {
//   const { data: session } = useSession();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!session?.user?.email) {
//         setError('User is not logged in or email not available');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(`/api/auth/clients?email=${session.user.email}`);
//         if (!response.ok) throw new Error('Error fetching data');
//         const data: ClientData = await response.json();
//         setClientData(data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [session]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div>
//         <h1 className="text-2xl font-bold">Client Info</h1>
//         {clientData ? (
//           <div>
//             <h2>{clientData.email}</h2>
//             <pre>{JSON.stringify(clientData, null, 2)}</pre>
//           </div>
//         ) : (
//           <div>No data available</div>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientInfoPage;








// // pages/dashboard/client.tsx
// import { useEffect, useState } from 'react';
// import useSWR from 'swr';
// import DashboardLayout from '@/components/DashboardLayout';
// import { getSession } from 'next-auth/react';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// const ClientDashboard = () => {
//   const [email, setEmail] = useState<string | null>(null);
//   const { data: session } = useSWR('/api/auth/session', fetcher);

//   useEffect(() => {
//     if (session) {
//       setEmail(session.user?.email || null);
//     }
//   }, [session]);

//   const { data: clientData, error } = useSWR(
//     email ? `/api/auth/clients?email=${email}` : null,
//     fetcher
//   );

//   if (!email) return <div>Loading session...</div>;
//   if (error) return <div>Error loading client data: {error.message}</div>;
//   if (!clientData) return <div>Loading client data...</div>;

//   return (
//     <DashboardLayout>
//       <h1>Client Dashboard</h1>
//       <p>Welcome, {email}</p>
//       <div>
//         <h2>Client Data</h2>
//         <pre>{JSON.stringify(clientData, null, 2)}</pre>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;




// import { useUser } from '@clerk/nextjs';
// import useSWR from 'swr';
// import DashboardLayout from '@/components/DashboardLayout';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// interface ClientExercisesProps {
//   clientId: string;
// }

// const ClientExercises = ({ clientId }: ClientExercisesProps) => {
//   const { data: clientData, error } = useSWR(`/api/exercises/${clientId}`, fetcher);

//   if (error) return <div>Failed to load exercises</div>;
//   if (!clientData) return <div>Loading...</div>;

//   // Ensure clientData and clientData.exercises are defined
//   if (!clientData || !clientData.exercises) {
//     return <div>No exercises assigned</div>;
//   }

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Assigned Exercises</h2>
//       <ul>
//         {clientData.exercises.length > 0 ? (
//           clientData.exercises.map((exercise: string, index: number) => (
//             <li key={index} className="mb-2">{exercise}</li>
//           ))
//         ) : (
//           <li>No exercises assigned</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// const ClientDashboard = () => {
//   const { user } = useUser();
//   const email = user?.primaryEmailAddress?.emailAddress;
//   const clientId = user?.id; // Assuming the user ID is used as clientId

//   if (!email) {
//     return <div>Please log in to view your dashboard.</div>;
//   }

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
//       <p>Welcome, {email}</p>
//       {clientId && <ClientExercises clientId={clientId} />}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;





import { useUser } from '@clerk/nextjs';
import useSWR from 'swr';
import DashboardLayout from '@/components/DashboardLayout';
import ProtectedPage from '@/components/ProtectedPage';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ClientExercisesProps {
  clientId: string;
}

const ClientExercises = ({ clientId }: ClientExercisesProps) => {
  const { data: clientData, error } = useSWR(`/api/exercises/${clientId}`, fetcher);

  if (error) return <div>Failed to load exercises</div>;
  if (!clientData) return <div>Loading...</div>;

  // Ensure clientData and clientData.exercises are defined
  if (!clientData || !clientData.exercises) {
    return <div>No exercises assigned</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Assigned Exercises</h2>
      <ul>
        {clientData.exercises.length > 0 ? (
          clientData.exercises.map((exercise: string, index: number) => (
            <li key={index} className="mb-2">{exercise}</li>
          ))
        ) : (
          <li>No exercises assigned</li>
        )}
      </ul>
    </div>
  );
};

const ClientDashboard = () => {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  const clientId = user?.id; // Assuming the user ID is used as clientId

  if (!email) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <ProtectedPage>
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
      <p>Welcome, {email}</p>
      {clientId && <ClientExercises clientId={clientId} />}
    </DashboardLayout>
    </ProtectedPage>
  );
};

export default ClientDashboard;
