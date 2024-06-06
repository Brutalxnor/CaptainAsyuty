// // pages/dashboard/client-info.tsx
// import React, { useState, useEffect } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import ClientInfoForm from '@/components/ClientInfoForm';
// import CenteredFormContainer from '@/components/CenteredFormContainer';

// interface ClientData {
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

// const ClientInfoPage = () => {
//   const [clientData, setClientData] = useState<ClientData | null>(null);

//   useEffect(() => {
//     const savedData = localStorage.getItem('clientData');
//     if (savedData) {
//       setClientData(JSON.parse(savedData));
//     }
//   }, []);

//   const handleSave = (data: any) => {
//     const email = 'client@example.com'; // Replace with actual client email
//     const newClientData = { id: '123', email, data };
//     setClientData(newClientData);
//     localStorage.setItem('clientData', JSON.stringify(newClientData));
//   };

//   return (
//     <DashboardLayout className="no-rounded">
//       <CenteredFormContainer>
//         <h1 className="text-2xl font-bold">Enter Client Info</h1>
//         {!clientData ? (
//           <ClientInfoForm onSave={handleSave} />
//         ) : (
//           <div>
//             <h2>Client Data</h2>
//             <pre>{JSON.stringify(clientData.data, null, 2)}</pre>
//           </div>
//         )}
//       </CenteredFormContainer>
//     </DashboardLayout>
//   );
// };

// export default ClientInfoPage;





// pages/dashboard/client-info.tsx
// pages/dashboard/client-info.tsx





// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import DashboardLayout from '@/components/DashboardLayout';
// import ClientInfoForm from '@/components/ClientInfoForm';
// import CenteredFormContainer from '@/components/CenteredFormContainer';


// const ClientInfoPage = () => {
  //   const [clientData, setClientData] = useState<ClientData | null>(null);

//   useEffect(() => {
  //     const fetchClientData = async () => {
    //       const response = await fetch('/api/clients');
    //       const clients = await response.json();
//       const savedData = clients.find((client: ClientData) => client.email === 'client@example.com');
//       if (savedData) {
//         setClientData(savedData);
//       }
//     };
//     fetchClientData();
//   }, []);

//   const handleSave = async (data: any) => {
  //     const email = 'client@example.com'; // Replace with actual client email
  //     const id = uuidv4(); // Generate a unique ID
  //     const newClientData = { id, email, data };
  //     const response = await fetch('/api/clients', {
    //       method: 'POST',
    //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify(newClientData),
      //     });
      
      //     if (response.ok) {
        //       const result = await response.json();
        //       setClientData(newClientData);
        //       localStorage.setItem('clientData', JSON.stringify(newClientData));
        //     }
        //   };
        
        //   return (
          //     <DashboardLayout className="no-rounded">
//       <CenteredFormContainer>
//         <h1 className="text-2xl font-bold">Enter Client Info</h1>
//         {!clientData ? (
  //           <ClientInfoForm onSave={handleSave} />
  //         ) : (
    //           <div>
    //             <h2>Client Data</h2>
    //             <pre>{JSON.stringify(clientData.data, null, 2)}</pre>
    //           </div>
    //         )}
    //       </CenteredFormContainer>
    //     </DashboardLayout>
    //   );
    // };
    
// export default ClientInfoPage;
// pages/dashboard/client-info.tsx


// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import ClientInfoForm from '@/components/ClientInfoForm';
// import CenteredFormContainer from '@/components/CenteredFormContainer';
// import { useUser } from '@clerk/nextjs';

// interface ClientData {
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

// const ClientInfoPage = () => {
//   const [clientData, setClientData] = useState<ClientData | null>(null);

// useEffect(() => {
//   // Load saved client data from local storage if available
//   const savedData = localStorage.getItem('clientData');
//   if (savedData) {
//     setClientData(JSON.parse(savedData));
//   }
// }, []);

// const handleSave = async (data: any) => {
//   const email = 'client@example.com'; // Replace with actual client email
//   const newClientData: ClientData = { id: generateId(), email, data };
  
//   // Save client data to local storage
//   localStorage.setItem('clientData', JSON.stringify(newClientData));

//   // Save client data to the server
//   const response = await fetch('/api/clients', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newClientData),
//   });

//   if (response.ok) {
//     const result = await response.json();
//     setClientData(newClientData);
//   }
// };



// client-info.tsx (snippet)
// pages/dashboard/client-info.tsx

// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { useRouter } from 'next/router';
// import DashboardLayout from '@/components/DashboardLayout';
// import ClientInfoForm from '@/components/ClientInfoForm';
// import CenteredFormContainer from '@/components/CenteredFormContainer';

// const ClientInfoPage = () => {
//   const router = useRouter();
//   const [clientData, setClientData] = useState(null);

//   useEffect(() => {
//     const savedData = localStorage.getItem('clientData');
//     if (savedData) {
//       setClientData(JSON.parse(savedData));
//     }
//   }, []);

//   const handleSave = async (data: any) => {
//     const id = uuidv4(); // Generate a unique id
//     const email = 'client@example.com'; // Replace with actual client email
//     const newClientData = { id, email, data };

//     try {
//       const response = await fetch('/api/clients', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newClientData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setClientData(newClientData);
//         localStorage.setItem('clientData', JSON.stringify(newClientData));
//       } else {
//         const errorData = await response.json();
//         console.error('Error saving client data:', errorData);
//       }
//     } catch (error) {
//       console.error('Error saving client data:', error);
//     }
//   };

//   return (
//     <DashboardLayout className="no-rounded">
//       <CenteredFormContainer>
//         <h1 className="text-2xl font-bold">Enter Client Info</h1>
//         {clientData ? (
//           <ClientInfoForm onSave={handleSave} />
//         ) : (
//           <div>
//             <h2>Client Data</h2>
//           </div>
//         )}
//       </CenteredFormContainer>
//     </DashboardLayout>
//   );
// };

// export default ClientInfoPage;






// pages/dashboard/client-info.tsx
// import { useRouter } from 'next/router';
// import React, { useState, useEffect } from 'react';

// const ClientInfoPage = () => {
//   const router = useRouter();
//   const [clientData, setClientData] = useState<any>(null);

//   useEffect(() => {
//     const savedData = localStorage.getItem('clientData');
//     if (savedData) {
//       setClientData(JSON.parse(savedData));
//     }
//   }, []);

//   const handleSave = async (data: any) => {
//     const id = 'unique-id'; // Generate a unique id
//     const email = 'client@example.com'; // Replace with actual client email
//     const newClientData = { id, email, data };

//     try {
//       const response = await fetch('/api/clients', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newClientData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setClientData(newClientData);
//         localStorage.setItem('clientData', JSON.stringify(newClientData));
//       } else {
//         const errorData = await response.json();
//         console.error('Error saving client data:', errorData);
//       }
//     } catch (error) {
//       console.error('Error saving client data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Enter Client Info</h1>
//       {clientData ? (
//         <div>
//           <h2>Client Data</h2>
//           <pre>{JSON.stringify(clientData, null, 2)}</pre>
//         </div>
//       ) : (
//         <ClientInfoForm onSave={handleSave} />
//       )}
//     </div>
//   );
// };

// const ClientInfoForm = ({ onSave }: { onSave: (data: any) => void }) => {
//   const [data, setData] = useState({
//     fullName: '',
//     weight: '',
//     height: '',
//     age: '',
//     fatWeight: '',
//     muscleWeight: '',
//     musclePercentage: '',
//     fatPercentage: '',
//     waistMeasurement: '',
//     rightArmMeasurement: '',
//     leftArmMeasurement: '',
//     rightLegMeasurement: '',
//     leftLegMeasurement: '',
//     frontImage: null,
//     backImage: null,
//     rightSideImage: null,
//     leftSideImage: null,
//     sugarCravings: '',
//     previousInjuries: '',
//     diabetes: '',
//     bloodPressure: '',
//     onlineTrainingExperience: '',
//     trainingAge: '',
//     workoutSets: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name } = e.target;
//     const file = e.target.files ? e.target.files[0] : null;
//     setData((prevData) => ({ ...prevData, [name]: file }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave(data);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Form fields here */}
//       <input type="text" name="fullName" value={data.fullName} onChange={handleChange} />
//       {/* Add other fields similarly */}
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default ClientInfoPage;







// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { email } = req.query;

//   await dbConnect();

//   try {
//     const client = await Client.findOne({ email }).lean();
//     if (!client) {
//       return res.status(404).json({ message: 'Client not found' });
//     }

//     const clientData = {
//       email: client.email,
//       fullName: client.fullName,
//       exercises: client.exercises || [],
//     };

//     res.status(200).json(clientData);
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// }





// // pages/dashboard/client-info.tsx


// // import { ClientData } from '@/interfaces/ClientData';
// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useUser } from '@clerk/nextjs';

// interface ClientData {
//   email: string;
//   fullName?: string;
//   exercises?: string[];
// }

// const ClientInfoPage = () => {
//   const { user } = useUser();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!user || !user.primaryEmailAddress) {
//         setError('User is not logged in or email not available');
//         setLoading(false);
//         return;
//       }

//       try {
//         const email = encodeURIComponent(user.primaryEmailAddress.emailAddress);
//         const response = await fetch(`/api/client-info?email=${email}`);
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
//   }, [user]);

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



// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';

// const ClientInfoPage = () => {
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/client-info?email=client@example.com');
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
//   }, []);

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





// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useUser } from '@clerk/nextjs';

// interface ClientData {
//   email: string;
//   fullName?: string;
//   exercises?: string[];
// }

// const ClientInfoPage = () => {
//   const { user } = useUser();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!user || !user.primaryEmailAddress) {
//         setError('User is not logged in or email not available');
//         setLoading(false);
//         return;
//       }

//       try {
//         const email = encodeURIComponent(user.primaryEmailAddress.emailAddress);
//         const response = await fetch(`/api/client-info?email=${email}`);
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
//   }, [user]);

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






// import { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useUser } from '@clerk/nextjs';

// interface ClientData {
//   email: string;
//   fullName?: string;
//   exercises?: string[];
// }

// const ClientInfoPage = () => {
//   const { user } = useUser();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!user || !user.primaryEmailAddress) {
//         setError('User is not logged in or email not available');
//         setLoading(false);
//         return;
//       }

//       try {
//         const email = encodeURIComponent(user.primaryEmailAddress.emailAddress);
//         const response = await fetch(`/api/client-info?email=${email}`);
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
//   }, [user]);

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










// import { useUser } from '@clerk/nextjs';
// import useSWR from 'swr';
// import DashboardLayout from '@/components/DashboardLayout';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// const ClientInfoPage = () => {
//   const { user } = useUser();
//   const email = user?.primaryEmailAddress?.emailAddress;

//   console.log('User:', user);
//   console.log('Email:', email);

//   const { data: clientData, error } = useSWR(email ? `/api/auth/clients?email=${encodeURIComponent(email)}` : null, fetcher);

//   console.log('Client Data:', clientData);
//   console.log('Error:', error);

//   if (!user) {
//     return <div>Please log in to view your dashboard.</div>;
//   }

//   if (error) return <div>Failed to load client data</div>;
//   if (!clientData) return <div>Loading...</div>;

//   return (
//     <DashboardLayout>
//       <div>
//         <h1 className="text-2xl font-bold mb-4">Client Info</h1>
//         <p>Welcome, {email}</p>
//         <div>
//           <h2>{clientData.fullName}</h2>
//           <pre>{JSON.stringify(clientData, null, 2)}</pre>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientInfoPage;




// import { useSession } from 'next-auth/react';
// import useSWR from 'swr';
// import DashboardLayout from '@/components/DashboardLayout';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// const ClientInfoPage = () => {
//   const { data: session } = useSession();

//   const email = session?.user?.email;

//   const { data: clientData, error } = useSWR(email ? `/api/clients?email=${email}` : null, fetcher);

//   if (!email) {
//     return <div>Please log in to view your dashboard.</div>;
//   }

//   if (error) return <div>Failed to load client data</div>;
//   if (!clientData) return <div>Loading...</div>;

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




























import { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useSession } from '@clerk/nextjs';

interface ClientData {
  email: string;
  fullName?: string;
  exercises?: string[];
}

const ClientInfoPage = () => {
  const { session } = useSession();
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.user?.primaryEmailAddress?.emailAddress) {
        setError('User is not logged in or email not available');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/auth/clients?email=${session.user.primaryEmailAddress.emailAddress}`);
        if (!response.ok) throw new Error('Error fetching data');
        const data: ClientData = await response.json();
        setClientData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [session]);

  const handleSave = async () => {
    if (!clientData || !session?.user?.primaryEmailAddress?.emailAddress) return;

    try {
      const response = await fetch('/api/auth/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: session.user.primaryEmailAddress.emailAddress,
          fullName: clientData.fullName,
        }),
      });

      if (!response.ok) throw new Error('Error saving data');
      const data: ClientData = await response.json();
      setClientData(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold">Client Info</h1>
        {clientData ? (
          <div>
            <h2>{clientData.email}</h2>
            <input
              type="text"
              value={clientData.fullName || ''}
              onChange={(e) => setClientData({ ...clientData, fullName: e.target.value })}
              placeholder="Full Name"
            />
            <button onClick={handleSave} className="btn btn-primary mt-2">
              Save
            </button>
          </div>
        ) : (
          <div>No data available</div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ClientInfoPage;
