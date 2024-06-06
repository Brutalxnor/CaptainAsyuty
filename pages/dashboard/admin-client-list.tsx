// // pages/dashboard/admin-client-detail.tsx
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import DashboardLayout from '@/components/DashboardLayout';

// interface ClientData {
//   email: string;
//   data: {
//     weight: string;
//     height: string;
//     age: string;
//     // Add other fields as necessary
//   };
// }

// const AdminClientDetailPage = () => {
//   const router = useRouter();
//   const [client, setClient] = useState<ClientData | null>(null);

//   useEffect(() => {
//     const { email } = router.query;
//     if (email) {
//       // Fetch client data from the database using email
//       // For now, we'll just use example data
//       const exampleClient: ClientData = {
//         email: email as string,
//         data: {
//           weight: '70',
//           height: '175',
//           age: '25',
//           // Add other fields here
//         },
//       };
//       setClient(exampleClient);
//     }
//   }, [router.query]);

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold">Client Details</h1>
//       {client ? (
//         <div>
//           <h2>{client.email}</h2>
//           <div>
//             <p><strong>Weight:</strong> {client.data.weight} kg</p>
//             <p><strong>Height:</strong> {client.data.height} cm</p>
//             <p><strong>Age:</strong> {client.data.age}</p>
//             {/* Display other fields in a similar manner */}
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </DashboardLayout>
//   );
// };

// export default AdminClientDetailPage;
// pages/dashboard/admin-client-list.tsx







// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// import useSWR from 'swr';

// const fetcher = (url: string | URL | Request) => fetch(url).then((res) => res.json());



// interface ClientData {
//   email: string;
//   data: {
//     weight: string;
//     height: string;
//     age: string;
//     fatWeight: string;
//     muscleWeight: string;
//     musclePercentage: string;
//     fatPercentage: string;
//     waistMeasurement: string;
//     rightArmMeasurement: string;
//     leftArmMeasurement: string;
//     rightLegMeasurement: string;
//     leftLegMeasurement: string;
//     frontImage: File | null;
//     backImage: File | null;
//     rightSideImage: File | null;
//     leftSideImage: File | null;
//     sugarCravings: string;
//     previousInjuries: string;
//     diabetes: string;
//     bloodPressure: string;
//     onlineTrainingExperience: string;
//     trainingAge: string;
//     workoutSets: string;
//   };
// }
// const AdminClientListPage = () => {
//   // const { data: clients, error } = useSWR('/api/clients', fetcher);
//   // if (error) return <div>Failed to load</div>;
//   // if (!clients) return <div>Loading...</div>;
//   const [clientData, setClientData] = useState<ClientData[]>([]);
//   const router = useRouter();
  

//   const fetchClients = async () => {
//     const response = await fetch('/api/clients');
//     const data = await response.json();
//     setClientData(data);
//   };

//   useEffect(() => {
//     fetch('/api/clients')
//       .then((response) => response.json())
//       .then((data) => setClientData(data));
//   }, []);
  
// const handleAssignExercise = (email: string) => {
//   router.push(`/dashboard/admin-add-exercises?clientEmail=${email}`);
// };

// // Within the map function


//   // useEffect(() => {
//   //   fetchClients();
//   // }, []);


  
//   return (
//     <DashboardLayout className="no-rounded">
//       <h1 className="text-2xl font-bold">Client List</h1>
//       <div>
//         <h2>Clients</h2>
//         <ul>
//           {clientData.map((client, index) => (
//             <li key={index} className="mb-4">
//             <div className="flex items-center justify-between">
//               <span>{client.email}</span>
//               {/* <button onClick={() => handleAssignExercise(client)} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">Assign Exercise</button> */}
//               <button onClick={() => handleAssignExercise(client.email)} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">Assign Exercise</button>
//             </div>
//           </li>
//           ))}
//         </ul>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AdminClientListPage;









// pages/dashboard/admin-client-list.tsx
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';



// interface Client {
//   email: string;
//   data: {
//     weight: string;
//     height: string;
//     age: string;
//     fatWeight: string;
//     muscleWeight: string;
//     musclePercentage: string;
//     fatPercentage: string;
//     waistMeasurement: string;
//     rightArmMeasurement: string;
//     leftArmMeasurement: string;
//     rightLegMeasurement: string;
//     leftLegMeasurement: string;
//     frontImage: File | null;
//     backImage: File | null;
//     rightSideImage: File | null;
//     leftSideImage: File | null;
//     sugarCravings: string;
//     previousInjuries: string;
//     diabetes: string;
//     bloodPressure: string;
//     onlineTrainingExperience: string;
//     trainingAge: string;
//     workoutSets: string;
//   };
// }


// const AdminClientList = () => {
//   const [clients, setClients] = useState([]);

//   useEffect(() => {
//     const fetchClients = async () => {
//       const response = await fetch('/api/clients');
//       const data = await response.json();
//       setClients(data);
//     };
//     fetchClients();
//   }, []);

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client List</h1>
//       <ul>
//         {clients.map((client: any) => (
//           <li key={client.email} className="mb-2">
//             {client.email}
//             <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`} passHref>
//               <a className="text-blue-500 hover:underline ml-2">Assign Exercise</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default AdminClientList;





// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';

// interface Client {
//   email: string;
//   data: {
//     weight: string;
//     height: string;
//     age: string;
//     fatWeight: string;
//     muscleWeight: string;
//     musclePercentage: string;
//     fatPercentage: string;
//     waistMeasurement: string;
//     rightArmMeasurement: string;
//     leftArmMeasurement: string;
//     rightLegMeasurement: string;
//     leftLegMeasurement: string;
//     frontImage: File | null;
//     backImage: File | null;
//     rightSideImage: File | null;
//     leftSideImage: File | null;
//     sugarCravings: string;
//     previousInjuries: string;
//     diabetes: string;
//     bloodPressure: string;
//     onlineTrainingExperience: string;
//     trainingAge: string;
//     workoutSets: string;
//   };
// }

// const AdminClientList = () => {
//   const [clients, setClients] = useState<Client[]>([]);

//   useEffect(() => {
//     const fetchClients = async () => {
//       const response = await fetch('/api/clients');
//       const data = await response.json();
//       setClients(data);
//     };
//     fetchClients();
//   }, []);

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client List</h1>
//       <ul>
//         {clients.map((client) => (
//           <li key={client.email} className="mb-2">
//             {client.email}
//             <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`} legacyBehavior>
//               <a className="text-blue-500 hover:underline ml-2">Assign Exercise</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default AdminClientList;

// const AdminClientList = () => {
//   const [clients, setClients] = useState<Client[]>([]);

//   useEffect(() => {
//     const fetchClients = async () => {
//       const response = await fetch('/api/clients');
//       const data = await response.json();
//       setClients(data);
//     };
//     fetchClients();
//   }, []);

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Client List</h1>
//       <ul>
//         {clients.map((client) => (
//           <li key={client.id} className="mb-2">
//             {client.email}
//             <Link href={`/dashboard/admin-add-exercises?clientId=${client.id}`} legacyBehavior>
//               <a className="text-blue-500 hover:underline ml-2">Assign Exercise</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </DashboardLayout>
//   );
// };

// return (
//   <DashboardLayout>
//     <h1 className="text-2xl font-bold mb-4 text-center">Client List</h1>
//     <ul className="flex flex-col items-center">
//       {clients.map((client) => (
//         <li key={client.email} className="mb-2 flex items-center">
//           {client.data.fullName} ({client.email})
//           <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`}>
//             <button className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4
//                     file:rounded-full file:border-0
//                     file:text-sm file:font-semibold
//                     file:bg-black-50 file:text-white-700
//                     hover:file:bg-blue-100 mt-5 mb-5"
//             >
//               Assign Exercise
//             </button>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </DashboardLayout>
// );
// interface Client {
//   id: string;
//   email: string;
//   data: {
//     fullName: string;
//     weight: string;
//     height: string;
//     age: string;
//     fatWeight: string;
//     muscleWeight: string;
//     musclePercentage: string;
//     fatPercentage: string;
//     waistMeasurement: string;
//     rightArmMeasurement: string;
//     leftArmMeasurement: string;
//     rightLegMeasurement: string;
//     leftLegMeasurement: string;
//     frontImage: File | null;
//     backImage: File | null;
//     rightSideImage: File | null;
//     leftSideImage: File | null;
//     sugarCravings: string;
//     previousInjuries: string;
//     diabetes: string;
//     bloodPressure: string;
//     onlineTrainingExperience: string;
//     trainingAge: string;
//     workoutSets: string;
//   };
// }

// const AdminClientList = () => {
//   const [clients, setClients] = useState<Client[]>([]);

//   useEffect(() => {
//     const fetchClients = async () => {
//       const response = await fetch('/api/clients');
//       const data = await response.json();
//       setClients(data);
//     };
//     fetchClients();
//   }, []);






// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';


// import useSWR from 'swr';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// const AdminClientList = () => {
//   const { data: clients, error } = useSWR('/api/clients', fetcher);

//   if (error) return <div>Failed to load clients</div>;
//   if (!clients) return <div>Loading...</div>;


//     return (
//       <DashboardLayout>
//         <h1 className="text-2xl font-bold mb-4 text-center">Client List</h1>
//         <ul className="flex flex-col items-center">
//           {clients.map((client: any) => (
//             <li key={client.email} className="mb-2 flex items-center">
//               {client.data ? client.data.fullName : "No Name"} ({client.email})
//               <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`}>
//                 <button className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4
//                         file:rounded-full file:border-0
//                         file:text-sm file:font-semibold
//                         file:bg-black-50 file:text-white-700
//                         hover:file:bg-blue-100 mt-5 mb-5"
//                 >
//                   Assign Exercise
//                 </button>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </DashboardLayout>
//   );
// };


// export default AdminClientList;




// // pages/dashboard/admin-client-list.tsx
// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';
// import Link from 'next/link';


// const AdminClientList = () => {
//   const [clients, setClients] = useState<ClientData[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await fetch('/api/clients');
//         if (!response.ok) throw new Error('Failed to load clients');
//         const data = await response.json();
//         setClients(data);
//       } catch (error: any) {
//         setError(error.message);
//       }
//     };

//     fetchClients();
//   }, []);

//   if (error) return <div>{error}</div>;
//   if (!clients.length) return <div>Loading...</div>;
//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4 text-center">Client List</h1>
//       <ul className="flex flex-col items-center">
//         {clients.length > 0 ? (
//           clients.map((client) => (
//             <li key={client.email} className="mb-2 flex items-center">
//               {client.fullName || 'No Name'} ({client.email})
//               <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`}>
//                 <button className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5">
//                   Assign Exercise
//                 </button>
//               </Link>
//             </li>
//           ))
//         ) : (
//           <li>No clients found</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default AdminClientList;






// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';
// import Link from 'next/link';

// const AdminClientList = () => {
//   const [clients, setClients] = useState<ClientData[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await fetch('/api/clients');
//         if (!response.ok) throw new Error('Failed to load clients');
//         const data = await response.json();
//         setClients(data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClients();
//   }, []);

//   const assignExercise = async (email: string, exercise: string) => {
//     try {
//       const response = await fetch('/api/assign-exercise', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, exercise }),
//       });

//       if (!response.ok) throw new Error('Error assigning exercise');
//       const data = await response.json();
//       console.log(data.message); // Success message
//     } catch (error: any) {
//       console.error('Error:', error);
//       setError(error.message);
//     }
//   };

//   if (error) return <div>{error}</div>;
//   if (loading) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4 text-center">Client List</h1>
//       <ul className="flex flex-col items-center">
//         {clients.length > 0 ? (
//           clients.map((client) => (
//             <li key={client.email} className="mb-2 flex items-center">
//               {client.fullName || 'No Name'} ({client.email})
//               <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`}>
//                 <button className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5">
//                   Assign Exercise
//                 </button>
//               </Link>
//               {/* Alternatively, you can assign directly within the list */}
//               <button
//                 onClick={() => assignExercise(client.email, 'Exercise 1')}
//                 className="ml-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5"
//               >
//                 Directly Assign Exercise
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>No clients found</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default AdminClientList;







// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';
// import Link from 'next/link';
// import { useUser } from '@clerk/nextjs';

// const AdminClientList = () => {
//   const [clients, setClients] = useState<ClientData[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [updateMessage, setUpdateMessage] = useState<string | null>(null);
//   const { user } = useUser();

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await fetch('/api/clients');
//         if (!response.ok) throw new Error('Failed to load clients');
//         const data = await response.json();
//         setClients(data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClients();
//   }, []);

//   const assignExercise = async (clientEmail: string, exercise: string) => {
//     try {
//       const response = await fetch('/api/assign-exercise', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: clientEmail, exercise }),
//       });

//       if (!response.ok) throw new Error('Error assigning exercise');
//       const data = await response.json();
//       console.log(data.message); // Success message
//     } catch (error: any) {
//       console.error('Error:', error);
//       setError(error.message);
//     }
//   };

//   if (error) return <div>{error}</div>;
//   if (loading) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4 text-center">Client List</h1>
//       {updateMessage && <div>{updateMessage}</div>}
//       <ul className="flex flex-col items-center">
//         {clients.length > 0 ? (
//           clients.map((client) => (
//             <li key={client.email} className="mb-2 flex items-center">
//               {client.fullName || 'No Name'} ({client.email})
//               <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`}>
//                 <button className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5">
//                   Assign Exercise
//                 </button>
//               </Link>
//               <button
//                 onClick={() => assignExercise(client.email, 'Exercise 1')}
//                 className="ml-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5"
//               >
//                 Directly Assign Exercise
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>No clients found</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default AdminClientList;





// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';
// import Link from 'next/link';
// import { useUser } from '@clerk/nextjs';

// const AdminClientList = () => {
//   const [clients, setClients] = useState<ClientData[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const { user } = useUser();

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await fetch('/api/clients');
//         if (!response.ok) throw new Error('Failed to load clients');
//         const data = await response.json();
//         setClients(data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClients();
//   }, []);

//   const assignExercise = async (clientEmail: string, exercise: string) => {
//     try {
//       const response = await fetch('/api/assign-exercise', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: clientEmail, exercise }),
//       });

//       if (!response.ok) throw new Error('Error assigning exercise');
//       const data = await response.json();
//       console.log(data.message); // Success message
//     } catch (error: any) {
//       console.error('Error:', error);
//       setError(error.message);
//     }
//   };

//   if (error) return <div>{error}</div>;
//   if (loading) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4 text-center">Client List</h1>
//       <ul className="flex flex-col items-center">
//         {clients.length > 0 ? (
//           clients.map((client) => (
//             <li key={client.email} className="mb-2 flex items-center">
//               {client.fullName || 'No Name'} ({client.email})
//               <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`}>
//                 <button className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5">
//                   Assign Exercise
//                 </button>
//               </Link>
//               <button
//                 onClick={() => assignExercise(client.email, 'Exercise 1')}
//                 className="ml-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5"
//               >
//                 Directly Assign Exercise
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>No clients found</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default AdminClientList;







// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';
// import Link from 'next/link';
// import { useUser } from '@clerk/nextjs';

// const AdminClientList = () => {
//   const [clients, setClients] = useState<ClientData[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const { user } = useUser();

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await fetch('/api/clients');
//         if (!response.ok) throw new Error('Failed to load clients');
//         const data = await response.json();
//         setClients(data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClients();
//   }, []);

//   const assignExercise = async (clientEmail: string, exercise: string) => {
//     try {
//       const response = await fetch('/api/assign-exercise', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ exercise }),
//       });

//       if (!response.ok) throw new Error('Error assigning exercise');
//       const data = await response.json();
//       console.log(data.message); // Success message
//     } catch (error: any) {
//       console.error('Error:', error);
//       setError(error.message);
//     }
//   };

//   if (error) return <div>{error}</div>;
//   if (loading) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4 text-center">Client List</h1>
//       <ul className="flex flex-col items-center">
//         {clients.length > 0 ? (
//           clients.map((client) => (
//             <li key={client.email} className="mb-2 flex items-center">
//               {client.fullName || 'No Name'} ({client.email})
//               <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`}>
//                 <button className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5">
//                   Assign Exercise
//                 </button>
//               </Link>
//               <button
//                 onClick={() => assignExercise(client.email, 'Exercise 1')}
//                 className="ml-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5"
//               >
//                 Directly Assign Exercise
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>No clients found</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default AdminClientList;







// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';
// import Link from 'next/link';
// import { useUser } from '@clerk/nextjs';

// const AdminClientList = () => {
//   const [clients, setClients] = useState<ClientData[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const { user } = useUser();

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await fetch('/api/clients');
//         if (!response.ok) throw new Error('Failed to load clients');
//         const data = await response.json();
//         setClients(data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClients();
//   }, []);

//   const assignExercise = async (clientEmail: string, exercise: string) => {
//     try {
//       const response = await fetch('/api/assign-exercise', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ clientEmail, exercise }),
//       });

//       if (!response.ok) throw new Error('Error assigning exercise');
//       const data = await response.json();
//       console.log(data.message); // Success message
//     } catch (error: any) {
//       console.error('Error:', error);
//       setError(error.message);
//     }
//   };

//   if (error) return <div>{error}</div>;
//   if (loading) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4 text-center">Client List</h1>
//       <ul className="flex flex-col items-center">
//         {clients.length > 0 ? (
//           clients.map((client) => (
//             <li key={client.email} className="mb-2 flex items-center">
//               {client.fullName || 'No Name'} ({client.email})
//               <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`}>
//                 <button className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5">
//                   Assign Exercise
//                 </button>
//               </Link>
//               <button
//                 onClick={() => assignExercise(client.email, 'Exercise 1')}
//                 className="ml-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5"
//               >
//                 Directly Assign Exercise
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>No clients found</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default AdminClientList;























// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';
// import Link from 'next/link';
// import { useUser } from '@clerk/nextjs';

// const AdminClientList = () => {
//   const [clients, setClients] = useState<ClientData[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const { user } = useUser();

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await fetch('/api/clients');
//         if (!response.ok) throw new Error('Failed to load clients');
//         const data = await response.json();
//         setClients(data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClients();
//   }, []);

//   const assignExercise = async (clientEmail: string, exercise: string) => {
//     try {
//       const response = await fetch('/api/assign-exercise', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ clientEmail, exercise }),
//       });

//       if (!response.ok) throw new Error('Error assigning exercise');
//       const data = await response.json();
//       console.log(data.message); // Success message
//     } catch (error: any) {
//       console.error('Error:', error);
//       setError(error.message);
//     }
//   };

//   if (error) return <div>{error}</div>;
//   if (loading) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4 text-center">Client List</h1>
//       <ul className="flex flex-col items-center">
//         {clients.length > 0 ? (
//           clients.map((client) => (
//             <li key={client.email} className="mb-2 flex items-center">
//               {client.fullName || 'No Name'} ({client.email})
//               <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`}>
//                 <button className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5">
//                   Assign Exercise
//                 </button>
//               </Link>
//               <button
//                 onClick={() => assignExercise(client.email, 'Exercise 1')}
//                 className="ml-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5"
//               >
//                 Directly Assign Exercise
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>No clients found</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default AdminClientList;






















// // pages/dashboard/admin-client-list.tsx
// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { ClientData } from '@/interfaces/ClientData';
// import Link from 'next/link';

// const AdminClientList = () => {
//   const [clients, setClients] = useState<ClientData[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await fetch('/api/clients');
//         if (!response.ok) throw new Error('Failed to load clients');
//         const data = await response.json();
//         setClients(data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClients();
//   }, []);

//   const assignExercise = async (clientEmail: string, exercise: string) => {
//     try {
//       const response = await fetch('/api/assign-exercise', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ exercise, clientEmail }),
//       });

//       if (!response.ok) throw new Error('Error assigning exercise');
//       const data = await response.json();
//       console.log(data.message); // Success message
//     } catch (error: any) {
//       console.error('Error:', error);
//       setError(error.message);
//     }
//   };

//   if (error) return <div>{error}</div>;
//   if (loading) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4 text-center">Client List</h1>
//       <ul className="flex flex-col items-center">
//         {clients.length > 0 ? (
//           clients.map((client) => (
//             <li key={client.email} className="mb-2 flex items-center">
//               {client.fullName || 'No Name'} ({client.email})
//               <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`}>
//                 <button className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5">
//                   Assign Exercise
//                 </button>
//               </Link>
//               <button
//                 onClick={() => assignExercise(client.email, 'Exercise 1')}
//                 className="ml-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5"
//               >
//                 Directly Assign Exercise
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>No clients found</li>
//         )}
//       </ul>
//     </DashboardLayout>
//   );
// };

// export default AdminClientList;


















import { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { ClientData } from '@/interfaces/ClientData';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs'; // Ensure you have @clerk/nextjs installed

const AdminClientList = () => {
  const { isSignedIn } = useUser();
  const [clients, setClients] = useState<ClientData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSignedIn) return; // Do not fetch data if not signed in

    const fetchClients = async () => {
      try {
        const response = await fetch('/api/clients');
        if (!response.ok) throw new Error('Failed to load clients');
        const data = await response.json();
        setClients(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, [isSignedIn]);

  const assignExercise = async (clientEmail: string, exercise: string) => {
    try {
      const response = await fetch('/api/assign-exercise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ exercise, clientEmail }),
      });

      if (!response.ok) throw new Error('Error assigning exercise');
      const data = await response.json();
      console.log(data.message); // Success message
    } catch (error: any) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  if (!isSignedIn) return <div>Please sign in to view this page.</div>;

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4 text-center">Client List</h1>
      <ul className="flex flex-col items-center">
        {clients.length > 0 ? (
          clients.map((client) => (
            <li key={client.email} className="mb-2 flex items-center">
              {client.fullName || 'No Name'} ({client.email})
              <Link href={`/dashboard/admin-add-exercises?clientEmail=${client.email}`}>
                <button className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5">
                  Assign Exercise
                </button>
              </Link>
              <button
                onClick={() => assignExercise(client.email, 'Exercise 1')}
                className="ml-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-white-700 hover:file:bg-blue-100 mt-5 mb-5"
              >
                Directly Assign Exercise
              </button>
            </li>
          ))
        ) : (
          <li>No clients found</li>
        )}
      </ul>
    </DashboardLayout>
  );
};

export default AdminClientList;
