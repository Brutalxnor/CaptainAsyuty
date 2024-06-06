// pages/dashboard/admin.tsx
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { ClientData } from '@/interfaces/ClientData';
import { useUser, useClerk, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';


// interface ClientData {
//   email: string;
//   data: {
//     weight: string;
//     height: string;
//     age: string;
//     // Add other fields as necessary
//   };
// }

const AdminDashboard = () => {
  const [clientData, setClientData] = useState<ClientData[]>([]);
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();


  useEffect(() => {
    if (!user) {
      router.push('/sign-in');
    } else if (user.publicMetadata.role !== 'admin') {
      signOut();
      router.push('/sign-in');
    }
  }, [user, router, signOut]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div>
        <h2>Client Data</h2>
        {clientData.map((client, index) => (
          <div key={index} className="mb-4">
            <h3>{client.email}</h3>
            <pre>{JSON.stringify(client.data, null, 2)}</pre>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;



// pages/dashboard/admin.tsx
// pages/dashboard/admin.tsx



// import React, { useEffect } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useUser, useClerk, UserButton } from '@clerk/nextjs';
// import { useRouter } from 'next/router';

// const AdminDashboard = () => {
//   const { user } = useUser();
//   const { signOut } = useClerk();
//   const router = useRouter();

//   useEffect(() => {
//     if (!user) {
//       router.push('/sign-in');
//     } else if (user.publicMetadata.role !== 'admin') {
//       signOut();
//       router.push('/sign-in');
//     }
//   }, [user, router, signOut]);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <DashboardLayout className="no-rounded">
//       <div>
//         <header className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//           <UserButton />
//         </header>
//       <p>Welcome, {user.firstName}!</p>
//       {/* Admin dashboard content */}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AdminDashboard;




















// import { useUser } from '@clerk/nextjs';
// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';

// const AdminPage = () => {
//   const { isSignedIn, isLoaded, user } = useUser();
//   const [assignedExercises, setAssignedExercises] = useState([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchAssignedExercises = async () => {
//       try {
//         const response = await fetch('/api/assigned-exercises', {
//           headers: {
//             'Authorization': `Bearer ${user?.sessionClaims?.session_id}`,
//           },
//         });

//         if (!response.ok) throw new Error('Failed to load assigned exercises');
//         const data = await response.json();
//         setAssignedExercises(data);
//       } catch (error: any) {
//         setError(error.message);
//       }
//     };

//     if (isLoaded && isSignedIn) {
//       fetchAssignedExercises();
//     }
//   }, [isLoaded, isSignedIn, user]);

//   if (!isLoaded) return <div>Loading...</div>;
//   if (!isSignedIn) return <div>Please sign in to view this page</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <h1>Assigned Exercises</h1>
//       <ul>
//         {assignedExercises.map((exercise, index) => (
//           <li key={index}>{exercise.name}</li>
//         ))}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default AdminPage;
