// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import DashboardLayout from '@/components/DashboardLayout';

// const AddExercise = () => {
//   const router = useRouter();
//   const { clientEmail } = router.query;

//   const [exercise, setExercise] = useState('');

//   const handleSubmit = async (event: { preventDefault: () => void; }) => {
//     event.preventDefault();

//     const response = await fetch('/api/assign-exercise', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email: clientEmail, exercise }),
//     });

//     if (response.ok) {
//       router.push('/dashboard/admin-client-list');
//     } else {
//       console.error('Failed to assign exercise');
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="flex justify-center items-center h-full">
//         <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-4">
//           <h1 className="text-2xl font-bold">Assign Exercise</h1>
//           <p>Assigning exercise for: {clientEmail}</p>
//           <div>
//             <label>Select Exercise</label>
//             <select value={exercise} onChange={(e) => setExercise(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500">
//               <option value="">Select an exercise</option>
//               {/* Add exercise options here */}
//               <option value="exercise1">Exercise 1</option>
//               <option value="exercise2">Exercise 2</option>
//             </select>
//           </div>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Assign Exercise</button>
//         </form>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AddExercise;




// // pages/dashboard/admin-add-exercises.tsx
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useUser } from '@clerk/nextjs';

// const AdminAddExercises = () => {
//   const router = useRouter();
//   const { clientEmail } = router.query;
//   const [exercise, setExercise] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const { user } = useUser();

//   const handleAssignExercise = async () => {
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
//       router.push('/dashboard/admin-dashboard');
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col items-center">
//         <h1 className="text-2xl font-bold mb-4">Assign Exercise</h1>
//         <div>Assigning exercise for: {clientEmail}</div>
//         <select
//           value={exercise}
//           onChange={(e) => setExercise(e.target.value)}
//           className="mt-4 mb-4"
//         >
//           <option value="">Select Exercise</option>
//           <option value="Exercise 1">Exercise 1</option>
//           <option value="Exercise 2">Exercise 2</option>
//           {/* Add more options as needed */}
//         </select>
//         <button onClick={handleAssignExercise} className="btn btn-primary">
//           Assign Exercise
//         </button>
//         {error && <div className="text-red-500 mt-4">{error}</div>}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AdminAddExercises;




// pages/dashboard/admin-add-exercises.tsx
// pages/dashboard/admin-add-exercises.tsx







// // pages/dashboard/admin-add-exercises.tsx
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';

// const AdminAddExercises = () => {
//   const router = useRouter();
//   const { clientEmail } = router.query;
//   const [exercise, setExercise] = useState('');
//   const [error, setError] = useState<string | null>(null);

//   const handleAssignExercise = async () => {
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
//       router.push('/dashboard'); // Redirect to the dashboard after successful assignment
//     } catch (error: any) {
//       console.error('Error:', error);
//       setError(error.message);
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div>
//         <h1 className="text-2xl font-bold">Assign Exercise</h1>
//         <p>Assigning exercise for: {clientEmail}</p>
//         <select value={exercise} onChange={(e) => setExercise(e.target.value)}>
//           <option value="">Select Exercise</option>
//           <option value="Exercise 1">Exercise 1</option>
//           <option value="Exercise 2">Exercise 2</option>
//         </select>
//         <button onClick={handleAssignExercise}>Assign Exercise</button>
//         {error && <p>Error: {error}</p>}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AdminAddExercises;






// // pages/dashboard/admin-add-exercises.tsx
// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import { useUser } from '@clerk/nextjs';
// import DashboardLayout from '@/components/DashboardLayout';

// const AdminAddExercises = () => {
//   const router = useRouter();
//   const { user } = useUser();
//   const [exercise, setExercise] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [clientEmail, setClientEmail] = useState<string | null>(null);

//   useEffect(() => {
//     if (user) {
//       setClientEmail(user.primaryEmailAddress?.emailAddress || null);
//     }
//   }, [user]);

//   const handleAssignExercise = async () => {
//     if (!clientEmail) {
//       setError('Client email is not available.');
//       return;
//     }

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
//       router.push('/dashboard'); // Redirect to the dashboard after successful assignment
//     } catch (error: any) {
//       console.error('Error:', error);
//       setError(error.message);
//     }
//   };

//   if (!clientEmail) {
//     return (
//       <DashboardLayout>
//         <div>
//           <h1 className="text-2xl font-bold">Assign Exercise</h1>
//           <p>Loading user information...</p>
//         </div>
//       </DashboardLayout>
//     );
//   }

//   return (
//     <DashboardLayout>
//       <div>
//         <h1 className="text-2xl font-bold">Assign Exercise</h1>
//         <p>Assigning exercise for: {clientEmail}</p>
//         <select value={exercise} onChange={(e) => setExercise(e.target.value)}>
//           <option value="">Select Exercise</option>
//           <option value="Exercise 1">Exercise 1</option>
//           <option value="Exercise 2">Exercise 2</option>
//         </select>
//         <button onClick={handleAssignExercise}>Assign Exercise</button>
//         {error && <p>Error: {error}</p>}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AdminAddExercises;


















// pages/dashboard/admin-add-exercises.tsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useUser } from '@clerk/nextjs';

const AdminAddExercises = () => {
  const router = useRouter();
  const { clientEmail } = router.query;
  const { user } = useUser();
  const [exercise, setExercise] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleAssignExercise = async () => {
    try {
      const response = await fetch('/api/assign-exercise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ exercise, clientEmail: user?.primaryEmailAddress?.emailAddress }),
      });

      if (!response.ok) throw new Error('Error assigning exercise');
      const data = await response.json();
      console.log(data.message); // Success message
      router.push('/dashboard'); // Redirect to the dashboard after successful assignment
    } catch (error: any) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold">Assign Exercise</h1>
        <p>Assigning exercise for: {clientEmail}</p>
        <select value={exercise} onChange={(e) => setExercise(e.target.value)}>
          <option value="">Select Exercise</option>
          <option value="Exercise 1">Exercise 1</option>
          <option value="Exercise 2">Exercise 2</option>
        </select>
        <button onClick={handleAssignExercise}>Assign Exercise</button>
        {error && <p>Error: {error}</p>}
      </div>
    </DashboardLayout>
  );
};

export default AdminAddExercises;
