









// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { ClientData, Exercise } from '@/types/ClientData';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faChevronUp, faDumbbell, faHeartbeat, faDollarSign, faDrumstickBite, faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons';
// import { fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// interface Cardio {
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// const AdminClientList: React.FC = () => {
//   const { user } = useAuth();
//   const [clients, setClients] = useState<ClientData[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [expandedRows, setExpandedRows] = useState<number[]>([]);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
//   const [clientToToggle, setClientToToggle] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showCardio, setShowCardio] = useState<boolean>(true);
//   const clientsPerPage = 3;
//   const router = useRouter();

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) return;

//       try {
//         const response = await fetch('/api/client-exercises', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         const data = await response.json();

//         if (!Array.isArray(data)) {
//           throw new Error('Client data is not an array OR Can`t fetch Data from DB');
//         }

//         setClients(data);
//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message || 'Error fetching client data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   const toggleRow = (index: number) => {
//     setExpandedRows(expandedRows.includes(index)
//       ? expandedRows.filter(row => row !== index)
//       : [...expandedRows, index]);
//   };

//   const handleAssignExercise = (clientEmail: string) => {
//     router.push(`/dashboard/admin-add-exercises?email=${clientEmail}`);
//   };

//   const handleAssignCardio = (clientEmail: string) => {
//     router.push(`/dashboard/admin-add-cardio?email=${clientEmail}`);
//   };

//   const handleAssignNutrition = (clientEmail: string) => {
//     router.push(`/dashboard/admin-add-nutrition?email=${clientEmail}`);
//   };

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleTogglePaymentStatus = async (clientEmail: string) => {
//     setShowConfirmation(true);
//     setClientToToggle(clientEmail);
//   };

//   const confirmTogglePaymentStatus = async () => {
//     if (!clientToToggle) return;

//     try {
//       const response = await fetch('/api/togglePaymentStatus', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: clientToToggle }),
//       });

//       if (!response.ok) {
//         throw new Error('Error toggling payment status');
//       }

//       const currentDate = new Date().toISOString().split('T')[0];

//       setClients(prevClients => 
//         prevClients.map(client => 
//           client.email === clientToToggle 
//             ? { ...client, hasPaid: !client.hasPaid, paymentDate: currentDate } 
//             : client
//         )
//       );

//     } catch (error) {
//       console.error('Error toggling payment status:', error);
//     } finally {
//       setShowConfirmation(false);
//       setClientToToggle(null);
//     }
//   };

//   const filteredClients = clients
//     .filter(client => !client.admin)
//     .filter(client => 
//       client.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       client.fullName?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

//   const currentClients = filteredClients.slice(
//     (currentPage - 1) * clientsPerPage,
//     currentPage * clientsPerPage
//   );

//   const renderExercisesByDay = (exercises: Exercise[] | undefined) => {
//     if (!exercises || exercises.length === 0) {
//       return <p>No exercises assigned.</p>;
//     }

//     const exercisesByDay = exercises.reduce((acc: { [key: string]: Exercise[] }, exercise) => {
//       const { day } = exercise;
//       if (!acc[day]) {
//         acc[day] = [];
//       }
//       acc[day].push(exercise);
//       return acc;
//     }, {});

//     return (
//       <>
//         <div className="mb-4 flex justify-center flex-wrap">
//           {Object.keys(exercisesByDay).map(day => (
//             <button
//               key={day}
//               className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 items-center justify-center ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//               onClick={() => setSelectedDay(day)}
//             >
//               <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//             </button>
//           ))}
//         </div>
//         {Object.entries(exercisesByDay).map(([day, exercises], index) => (
//           selectedDay === day && (
//             <div key={index} className="mb-4">
//               <h3 className="text-lg font-semibold">{day}</h3>
//               <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-4 border-b">Exercise</th>
//                     <th className="py-2 px-4 border-b">Weights</th>
//                     <th className="py-2 px-4 border-b">Reps</th>
//                     <th className="py-2 px-4 border-b">GIF</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {exercises.map((exercise, i) => (
//                     <tr key={i}>
//                       <td className="py-2 px-4 border-b">{exercise.name}</td>
//                       <td className="py-2 px-4 border-b">
//                         {exercise.weights?.map((weight, index) => (
//                           <div key={index}>{weight} kg</div>
//                         ))}
//                       </td>
//                       <td className="py-2 px-4 border-b">
//                         {Array.isArray(exercise.reps) ? (
//                           exercise.reps.map((rep, index) => (
//                             <div key={index}>
//                               {rep} reps, {exercise.weights ? exercise.weights[index] : 'Not Started'} kg
//                             </div>
//                           ))
//                         ) : (
//                           <div>Not Started</div>
//                         )}
//                       </td>
//                       <td className="py-2 px-4 border-b text-center">
//                         {exercise.gif ? (
//                           <img
//                             src={`${exercise.gif}`}
//                             alt={exercise.name}
//                             className="w-32 h-32 cursor-pointer min-w-32"
//                             onClick={() => handleGifClick(`${exercise.gif}`)}
//                           />
//                         ) : (
//                           'No GIF'
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )
//         ))}
//       </>
//     );
//   };

//   const renderCardioByDay = (cardio: Cardio[] | undefined) => {
//     if (!cardio || cardio.length === 0) {
//       return <p>No cardio exercises assigned.</p>;
//     }

//     const cardioByDay = cardio.reduce((acc: { [key: string]: Cardio[] }, exercise) => {
//       const { day } = exercise;
//       if (!acc[day]) {
//         acc[day] = [];
//       }
//       acc[day].push(exercise);
//       return acc;
//     }, {});

//     return (
//       <>
//         <div className="mb-4 flex justify-center flex-wrap">
//           {Object.keys(cardioByDay).map(day => (
//             <button
//               key={day}
//               className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 items-center justify-center ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//               onClick={() => setSelectedDay(day)}
//             >
//               <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//             </button>
//           ))}
//         </div>
//         {Object.entries(cardioByDay).map(([day, cardio], index) => (
//           selectedDay === day && (
//             <div key={index} className="mb-4">
//               <h3 className="text-lg font-semibold">{day}</h3>
//               <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-4 border-b">Exercise</th>
//                     <th className="py-2 px-4 border-b">Duration</th>
//                     <th className="py-2 px-4 border-b">GIF</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cardio.map((ex, i) => (
//                     <tr key={i}>
//                       <td className="py-2 px-4 border-b">{ex.name}</td>
//                       <td className="py-2 px-4 border-b">{ex.duration}</td>
//                       <td className="py-2 px-4 border-b text-center">
//                         {ex.gif ? (
//                           <img
//                             src={`/gifs/${ex.gif}`}
//                             alt={ex.name}
//                             className="w-32 h-32 cursor-pointer"
//                             onClick={() => handleGifClick(`/gifs/${ex.gif}`)}
//                           />
//                         ) : (
//                           'No GIF'
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )
//         ))}
//       </>
//     );
//   };

//   const renderPagination = () => (
//     <div className="flex justify-center mt-4">
//       {Array.from({ length: totalPages }, (_, index) => (
//         <button
//           key={index}
//           onClick={() => setCurrentPage(index + 1)}
//           className={`py-2 px-4 m-2 rounded-md shadow-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//         >
//           {index + 1}
//         </button>
//       ))}
//     </div>
//   );
  
//   const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//         <div className="w-full font-serif max-w-4xl p-6 bg-[var(--background-color)] text-[var(--text-color)] rounded-lg shadow-lg overflow-y-auto max-w-sm md:max-w-2xl" >
//           <h1 className="text-2xl italic font-serif mb-10 text-center">Client List</h1>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder="Search clients"
//             className="mb-4 px-4 py-2 border border-[var(--border-color)] rounded"
//           />
//           <div className="mb-4">
//             Showing {currentClients.length} of {filteredClients.length} clients
//           </div>
//           {filteredClients.length > 0 ? (
//             <div className="overflow-x-auto ">
//               <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] ">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-4 text-left">Name</th>
//                     <th className="py-2 px-4 text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentClients.map((client, index) => (
//                     <React.Fragment key={index}>
//                       <tr className="border-b border-[var(--border-color)]">

//                       <td className="py-2 px-4 text-lg font-semibold bg-transparent text-black-800 rounded-md flex items-center">
//                         <div className={`w-10 h-10 flex items-center justify-center ${colors[index % colors.length]} text-white rounded-full mr-3`}>
//                           {client.fullName ? client.fullName.charAt(0).toUpperCase() : client.email.charAt(0).toUpperCase()}
//                         </div>
//                         {client.fullName ? client.fullName : client.email}
//                       </td>
//                         <td className="py-2 px-4">
//                           <div className="flex flex-row justify-center items-center space-x-3">
//                             <button
//                               onClick={() => toggleRow(index)}
//                               className="text-blue-500 hover:text-green-500 transition duration-300"
//                             >
//                               {expandedRows.includes(index) ? (
//                                 <FontAwesomeIcon icon={faChevronUp} className="h-6 w-6" />
//                               ) : (
//                                 <FontAwesomeIcon icon={faChevronDown} className="h-6 w-6" />
//                               )}
//                             </button>
//                             <button
//                               onClick={() => handleAssignExercise(client.email)}
//                               className="text-blue-500 hover:text-green-500 hover:underline"
//                             >
//                               <FontAwesomeIcon icon={faDumbbell} className="h-6 w-6" />
//                             </button>
//                             <button
//                               onClick={() => handleAssignCardio(client.email)}
//                               className="text-blue-500 hover:text-green-500 hover:underline"
//                             >
//                               <FontAwesomeIcon icon={faHeartCircleBolt} className="h-6 w-6" />
//                             </button>
//                             <button
//                               onClick={() => handleAssignNutrition(client.email)}
//                               className="text-blue-500 hover:text-green-500 hover:underline "
//                             >
//                               <FontAwesomeIcon icon={faDrumstickBite} className="h-6 w-6" />
//                             </button>
//                             <button
//                               onClick={() => handleTogglePaymentStatus(client.email)}
//                               className={`text-blue-500 hover:text-green-500 hover:underline ${client.hasPaid ? 'text-green-500' : 'text-red-500'}`}
//                             >
//                               <FontAwesomeIcon icon={faDollarSign} className="h-6 w-6" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                       {expandedRows.includes(index) && (
//                         <tr>
//                           <td colSpan={2} className="py-2 px-4">
//                             <div className="bg-[var(--background-color)] p-4 rounded-lg shadow-md relative">
//                               <div className="absolute top-4 right-4 flex space-x-4">
//                                 <div
//                                   className={`p-2 rounded-full ${showExercises ? 'bg-blue-500' : 'bg-gray-500'} cursor-pointer`}
//                                   onClick={() => setShowExercises(!showExercises)}
//                                 >
//                                   <FontAwesomeIcon
//                                     icon={faDumbbell}
//                                     className={`h-8 w-8 ${showExercises ? 'text-white' : 'text-gray-200'}`}
//                                   />
//                                 </div>
//                                 <div
//                                   className={`p-2 rounded-full ${showCardio ? 'bg-blue-500' : 'bg-gray-500'} cursor-pointer`}
//                                   onClick={() => setShowCardio(!showCardio)}
//                                 >
//                                   <FontAwesomeIcon
//                                     icon={faHeartCircleBolt}
//                                     className={`h-8 w-8 ${showCardio ? 'text-white' : 'text-gray-200'}`}
//                                   />
//                                 </div>
//                               </div>
//                               <div>
//                                 {showExercises && <strong>Exercises:</strong>}
//                                 {showExercises && renderExercisesByDay(client.exercises)}
//                               </div>
//                               <div className="mt-4">
//                                 {showCardio && <strong>Cardio:</strong>}
//                                 {showCardio && renderCardioByDay(client.cardio)}
//                               </div>
//                               <div className="mt-4 bg-gradient-to-r from-blue-200 to-purple-200 p-4 rounded-lg shadow-lg">
//                                 <strong className="block text-lg mb-2">Payment Date:</strong>
//                                 <p className="text-lg">{client.paymentDate ? new Date(client.paymentDate).toLocaleDateString() : 'No payment date'}</p>
//                               </div>
//                               {/* <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mt-4">
//                                 <thead>
//                                   <tr>
//                                     <th className="py-2 px-4 text-left">Current</th>
//                                     <th className="py-2 px-4 text-left">Last</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Full Name:</strong> {client.fullName}</td>
//                                     <td className="py-2 px-4"><strong>Full Name:</strong> {client.fullName}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Weight:</strong> {client.weight}</td>
//                                     <td className="py-2 px-4"><strong>Weight:</strong> {client.previousWeight}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Height:</strong> {client.height}</td>
//                                     <td className="py-2 px-4"><strong>Height:</strong> {client.previousHeight}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Age:</strong> {client.age}</td>
//                                     <td className="py-2 px-4"><strong>Age:</strong> {client.previousAge}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Fat Weight:</strong> {client.fatWeight}</td>
//                                     <td className="py-2 px-4"><strong>Fat Weight:</strong> {client.previousFatWeight}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Muscle Weight:</strong> {client.muscleWeight}</td>
//                                     <td className="py-2 px-4"><strong>Muscle Weight:</strong> {client.previousMuscleWeight}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Muscle Percentage:</strong> {client.musclePercentage}</td>
//                                     <td className="py-2 px-4"><strong>Muscle Percentage:</strong> {client.previousMusclePercentage}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Fat Percentage:</strong> {client.fatPercentage}</td>
//                                     <td className="py-2 px-4"><strong>Fat Percentage:</strong> {client.previousFatPercentage}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Waist:</strong> {client.waistMeasurement}</td>
//                                     <td className="py-2 px-4"><strong>Waist:</strong> {client.previousWaistMeasurement}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Right Arm:</strong> {client.rightArmMeasurement}</td>
//                                     <td className="py-2 px-4"><strong>Right Arm:</strong> {client.previousRightArmMeasurement}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Left Arm:</strong> {client.leftArmMeasurement}</td>
//                                     <td className="py-2 px-4"><strong>Left Arm:</strong> {client.previousLeftArmMeasurement}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Right Leg:</strong> {client.rightLegMeasurement}</td>
//                                     <td className="py-2 px-4"><strong>Right Leg:</strong> {client.previousRightLegMeasurement}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Left Leg:</strong> {client.leftLegMeasurement}</td>
//                                     <td className="py-2 px-4"><strong>Left Leg:</strong> {client.previousLeftLegMeasurement}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Sugar Cravings:</strong> {client.sugarCravings}</td>
//                                     <td className="py-2 px-4"><strong>Sugar Cravings:</strong> {client.previousSugarCravings}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Injuries:</strong> {client.previousInjuries}</td>
//                                     <td className="py-2 px-4"><strong>Injuries:</strong> {client.previousInjuries}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Diabetes:</strong> {client.diabetes}</td>
//                                     <td className="py-2 px-4"><strong>Diabetes:</strong> {client.previousDiabetes}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Blood Pressure:</strong> {client.bloodPressure}</td>
//                                     <td className="py-2 px-4"><strong>Blood Pressure:</strong> {client.previousBloodPressure}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Online Training:</strong> {client.onlineTrainingExperience}</td>
//                                     <td className="py-2 px-4"><strong>Online Training:</strong> {client.previousOnlineTrainingExperience}</td>
//                                   </tr>
//                                   <tr>
//                                     <td className="py-2 px-4"><strong>Training Time:</strong> {client.trainingAge}</td>
//                                     <td className="py-2 px-4"><strong>Training Time:</strong> {client.trainingAge}</td>
//                                   </tr>
//                                 </tbody>
//                               </table> */}
//                               <div className="overflow-x-auto">
//                               <table className="min-w-full bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg mt-4">
//                                 <thead>
//                                   <tr className="bg-gray-100">
//                                     <th className="py-2 px-4 text-left font-bold">Current</th>
//                                     <th className="py-2 px-4 text-left font-bold">Last</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   {[
//                                     { label: 'Full Name', current: client.fullName, last: client.fullName },
//                                     { label: 'Weight', current: client.weight, last: client.previousWeight },
//                                     { label: 'Height', current: client.height, last: client.previousHeight },
//                                     { label: 'Age', current: client.age, last: client.previousAge },
//                                     { label: 'Fat Weight', current: client.fatWeight, last: client.previousFatWeight },
//                                     { label: 'Muscle Weight', current: client.muscleWeight, last: client.previousMuscleWeight },
//                                     { label: 'Muscle Percentage', current: client.musclePercentage, last: client.previousMusclePercentage },
//                                     { label: 'Fat Percentage', current: client.fatPercentage, last: client.previousFatPercentage },
//                                     { label: 'Waist', current: client.waistMeasurement, last: client.previousWaistMeasurement },
//                                     { label: 'Right Arm', current: client.rightArmMeasurement, last: client.previousRightArmMeasurement },
//                                     { label: 'Left Arm', current: client.leftArmMeasurement, last: client.previousLeftArmMeasurement },
//                                     { label: 'Right Leg', current: client.rightLegMeasurement, last: client.previousRightLegMeasurement },
//                                     { label: 'Left Leg', current: client.leftLegMeasurement, last: client.previousLeftLegMeasurement },
//                                     { label: 'Sugar Cravings', current: client.sugarCravings, last: client.previousSugarCravings },
//                                     // { label: 'Injuries', current: client.injuries, last: client.previousInjuries },
//                                     { label: 'Diabetes', current: client.diabetes, last: client.previousDiabetes },
//                                     { label: 'Blood Pressure', current: client.bloodPressure, last: client.previousBloodPressure },
//                                     { label: 'Online Training', current: client.onlineTrainingExperience, last: client.previousOnlineTrainingExperience },
//                                     // { label: 'Training Time', current: client.trainingAge, last: client.previousTrainingAge }
//                                   ].map((item, index) => (
//                                     <tr key={index} className="border-b border-gray-200">
//                                       <td className="py-2 px-4">
//                                         <div className="flex items-center space-x-2">
//                                           <strong>{item.label}:</strong>
//                                           <span className="bg-blue-100 text-blue-800 p-1 rounded-md">{item.current}</span>
//                                         </div>
//                                       </td>
//                                       <td className="py-2 px-4">
//                                         <div className="flex items-center space-x-2">
//                                           <strong>{item.label}:</strong>
//                                           <span className="bg-green-100 text-green-800 p-1 rounded-md">{item.last}</span>
//                                         </div>
//                                       </td>
//                                     </tr>
//                                   ))}
//                                 </tbody>
//                               </table>
//                             </div>
//                             </div>
//                           </td>
//                         </tr>
//                       )}
//                     </React.Fragment>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div>No client data found.</div>
//           )}
//           {renderPagination()}
//         </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//       {showConfirmation && (
//         <Modal onClose={() => setShowConfirmation(false)}>
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-4">Confirm Action</h2>
//             <p>Are you sure you want to toggle the payment status for this client?</p>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={confirmTogglePaymentStatus}
//                 className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={() => setShowConfirmation(false)}
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default AdminClientList;

































// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { ClientData, Exercise } from '@/types/ClientData';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faChevronUp, faDumbbell, faHeartbeat, faDollarSign, faDrumstickBite, faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons';
// import { fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// interface Cardio {
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// const AdminClientList: React.FC = () => {
//   const { user } = useAuth();
//   const [clients, setClients] = useState<ClientData[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [expandedRows, setExpandedRows] = useState<number[]>([]);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
//   const [clientToToggle, setClientToToggle] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showCardio, setShowCardio] = useState<boolean>(true);
//   const clientsPerPage = 3;
//   const router = useRouter();

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) return;

//       try {
//         const response = await fetch('/api/client-exercises', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         const data = await response.json();

//         if (!Array.isArray(data)) {
//           throw new Error('Client data is not an array OR Can`t fetch Data from DB');
//         }

//         setClients(data);
//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message || 'Error fetching client data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   const toggleRow = (index: number) => {
//     setExpandedRows(expandedRows.includes(index)
//       ? expandedRows.filter(row => row !== index)
//       : [...expandedRows, index]);
//   };

//   const handleAssignExercise = (clientEmail: string) => {
//     router.push(`/dashboard/admin-add-exercises?email=${clientEmail}`);
//   };

//   const handleAssignCardio = (clientEmail: string) => {
//     router.push(`/dashboard/admin-add-cardio?email=${clientEmail}`);
//   };

//   const handleAssignNutrition = (clientEmail: string) => {
//     router.push(`/dashboard/admin-add-nutrition?email=${clientEmail}`);
//   };

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleTogglePaymentStatus = async (clientEmail: string) => {
//     setShowConfirmation(true);
//     setClientToToggle(clientEmail);
//   };

//   const confirmTogglePaymentStatus = async () => {
//     if (!clientToToggle) return;

//     try {
//       const response = await fetch('/api/togglePaymentStatus', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: clientToToggle }),
//       });

//       if (!response.ok) {
//         throw new Error('Error toggling payment status');
//       }

//       const currentDate = new Date().toISOString().split('T')[0];

//       setClients(prevClients => 
//         prevClients.map(client => 
//           client.email === clientToToggle 
//             ? { ...client, hasPaid: !client.hasPaid, paymentDate: currentDate } 
//             : client
//         )
//       );

//     } catch (error) {
//       console.error('Error toggling payment status:', error);
//     } finally {
//       setShowConfirmation(false);
//       setClientToToggle(null);
//     }
//   };

//   const filteredClients = clients
//     .filter(client => !client.admin)
//     .filter(client => 
//       client.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       client.fullName?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

//   const currentClients = filteredClients.slice(
//     (currentPage - 1) * clientsPerPage,
//     currentPage * clientsPerPage
//   );

//   const renderExercisesByDay = (exercises: Exercise[] | undefined) => {
//     if (!exercises || exercises.length === 0) {
//       return <p>No exercises assigned.</p>;
//     }

//     const exercisesByDay = exercises.reduce((acc: { [key: string]: Exercise[] }, exercise) => {
//       const { day } = exercise;
//       if (!acc[day]) {
//         acc[day] = [];
//       }
//       acc[day].push(exercise);
//       return acc;
//     }, {});

//     return (
//       <>
//         <div className="mb-4 flex justify-center flex-wrap">
//           {Object.keys(exercisesByDay).map(day => (
//             <button
//               key={day}
//               className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 items-center justify-center ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//               onClick={() => setSelectedDay(day)}
//             >
//               <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//             </button>
//           ))}
//         </div>
//         {Object.entries(exercisesByDay).map(([day, exercises], index) => (
//           selectedDay === day && (
//             <div key={index} className="mb-4">
//               <h3 className="text-lg font-semibold">{day}</h3>
//               <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-4 border-b">Exercise</th>
//                     <th className="py-2 px-4 border-b">Weights</th>
//                     <th className="py-2 px-4 border-b">Reps</th>
//                     <th className="py-2 px-4 border-b">GIF</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {exercises.map((exercise, i) => (
//                     <tr key={i}>
//                       <td className="py-2 px-4 border-b">{exercise.name}</td>
//                       <td className="py-2 px-4 border-b">
//                         {exercise.weights?.map((weight, index) => (
//                           <div key={index}>{weight} kg</div>
//                         ))}
//                       </td>
//                       <td className="py-2 px-4 border-b">
//                         {Array.isArray(exercise.reps) ? (
//                           exercise.reps.map((rep, index) => (
//                             <div key={index}>
//                               {rep} reps, {exercise.weights ? exercise.weights[index] : 'Not Started'} kg
//                             </div>
//                           ))
//                         ) : (
//                           <div>Not Started</div>
//                         )}
//                       </td>
//                       <td className="py-2 px-4 border-b text-center">
//                         {exercise.gif ? (
//                           <img
//                             src={`${exercise.gif}`}
//                             alt={exercise.name}
//                             className="w-32 h-32 cursor-pointer min-w-32"
//                             onClick={() => handleGifClick(`${exercise.gif}`)}
//                           />
//                         ) : (
//                           'No GIF'
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )
//         ))}
//       </>
//     );
//   };

//   const renderCardioByDay = (cardio: Cardio[] | undefined) => {
//     if (!cardio || cardio.length === 0) {
//       return <p>No cardio exercises assigned.</p>;
//     }

//     const cardioByDay = cardio.reduce((acc: { [key: string]: Cardio[] }, exercise) => {
//       const { day } = exercise;
//       if (!acc[day]) {
//         acc[day] = [];
//       }
//       acc[day].push(exercise);
//       return acc;
//     }, {});

//     return (
//       <>
//         <div className="mb-4 flex justify-center flex-wrap">
//           {Object.keys(cardioByDay).map(day => (
//             <button
//               key={day}
//               className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 items-center justify-center ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//               onClick={() => setSelectedDay(day)}
//             >
//               <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//             </button>
//           ))}
//         </div>
//         {Object.entries(cardioByDay).map(([day, cardio], index) => (
//           selectedDay === day && (
//             <div key={index} className="mb-4">
//               <h3 className="text-lg font-semibold">{day}</h3>
//               <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-4 border-b">Exercise</th>
//                     <th className="py-2 px-4 border-b">Duration</th>
//                     <th className="py-2 px-4 border-b">GIF</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cardio.map((ex, i) => (
//                     <tr key={i}>
//                       <td className="py-2 px-4 border-b">{ex.name}</td>
//                       <td className="py-2 px-4 border-b">{ex.duration}</td>
//                       <td className="py-2 px-4 border-b text-center">
//                         {ex.gif ? (
//                           <img
//                             src={`/gifs/${ex.gif}`}
//                             alt={ex.name}
//                             className="w-32 h-32 cursor-pointer"
//                             onClick={() => handleGifClick(`/gifs/${ex.gif}`)}
//                           />
//                         ) : (
//                           'No GIF'
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )
//         ))}
//       </>
//     );
//   };

//   const renderPagination = () => (
//     <div className="flex justify-center mt-4">
//       {Array.from({ length: totalPages }, (_, index) => (
//         <button
//           key={index}
//           onClick={() => setCurrentPage(index + 1)}
//           className={`py-2 px-4 m-2 rounded-md shadow-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//         >
//           {index + 1}
//         </button>
//       ))}
//     </div>
//   );
  
//   const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//         <div className="w-full font-serif max-w-4xl p-6 bg-[var(--background-color)] text-[var(--text-color)] rounded-lg shadow-lg overflow-y-auto max-w-sm md:max-w-2xl" >
//           <h1 className="text-2xl italic font-serif mb-10 text-center">Client List</h1>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder="Search clients"
//             className="mb-4 px-4 py-2 border border-[var(--border-color)] rounded"
//           />
//           <div className="mb-4">
//             Showing {currentClients.length} of {filteredClients.length} clients
//           </div>
//           {filteredClients.length > 0 ? (
//             <div className="overflow-x-auto ">
//               <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] ">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-4 text-left">Name</th>
//                     <th className="py-2 px-4 text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentClients.map((client, index) => (
//                     <React.Fragment key={index}>
//                       <tr className="border-b border-[var(--border-color)]">

//                       <td className="py-2 px-4 text-lg font-semibold bg-transparent text-black-800 rounded-md flex items-center">
//                         <div className={`w-10 h-10 flex items-center justify-center ${colors[index % colors.length]} text-white rounded-full mr-3`}>
//                           {client.fullName ? client.fullName.charAt(0).toUpperCase() : client.email.charAt(0).toUpperCase()}
//                         </div>
//                         {client.fullName ? client.fullName : client.email}
//                       </td>
//                         <td className="py-2 px-4">
//                           <div className="flex flex-row justify-center items-center space-x-3">
//                             <button
//                               onClick={() => toggleRow(index)}
//                               className="text-blue-500 hover:text-green-500 transition duration-300"
//                             >
//                               {expandedRows.includes(index) ? (
//                                 <FontAwesomeIcon icon={faChevronUp} className="h-6 w-6" />
//                               ) : (
//                                 <FontAwesomeIcon icon={faChevronDown} className="h-6 w-6" />
//                               )}
//                             </button>
//                             <button
//                               onClick={() => handleAssignExercise(client.email)}
//                               className="text-blue-500 hover:text-green-500 hover:underline"
//                             >
//                               <FontAwesomeIcon icon={faDumbbell} className="h-6 w-6" />
//                             </button>
//                             <button
//                               onClick={() => handleAssignCardio(client.email)}
//                               className="text-blue-500 hover:text-green-500 hover:underline"
//                             >
//                               <FontAwesomeIcon icon={faHeartCircleBolt} className="h-6 w-6" />
//                             </button>
//                             <button
//                               onClick={() => handleAssignNutrition(client.email)}
//                               className="text-blue-500 hover:text-green-500 hover:underline "
//                             >
//                               <FontAwesomeIcon icon={faDrumstickBite} className="h-6 w-6" />
//                             </button>
//                             <button
//                               onClick={() => handleTogglePaymentStatus(client.email)}
//                               className={`text-blue-500 hover:text-green-500 hover:underline ${client.hasPaid ? 'text-green-500' : 'text-red-500'}`}
//                             >
//                               <FontAwesomeIcon icon={faDollarSign} className="h-6 w-6" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                       {expandedRows.includes(index) && (
//                         <tr>
//                           <td colSpan={2} className="py-2 px-4">
//                             <div className="bg-[var(--background-color)] p-4 rounded-lg shadow-md relative">
//                               <div className="absolute top-4 right-4 flex space-x-4">
//                                 <div
//                                   className={`p-2 rounded-full ${showExercises ? 'bg-blue-500' : 'bg-gray-500'} cursor-pointer`}
//                                   onClick={() => setShowExercises(!showExercises)}
//                                 >
//                                   <FontAwesomeIcon
//                                     icon={faDumbbell}
//                                     className={`h-8 w-8 ${showExercises ? 'text-white' : 'text-gray-200'}`}
//                                   />
//                                 </div>
//                                 <div
//                                   className={`p-2 rounded-full ${showCardio ? 'bg-blue-500' : 'bg-gray-500'} cursor-pointer`}
//                                   onClick={() => setShowCardio(!showCardio)}
//                                 >
//                                   <FontAwesomeIcon
//                                     icon={faHeartCircleBolt}
//                                     className={`h-8 w-8 ${showCardio ? 'text-white' : 'text-gray-200'}`}
//                                   />
//                                 </div>
//                               </div>
//                               <div>
//                                 {showExercises && <strong>Exercises:</strong>}
//                                 {showExercises && renderExercisesByDay(client.exercises)}
//                               </div>
//                               <div className="mt-4">
//                                 {showCardio && <strong>Cardio:</strong>}
//                                 {showCardio && renderCardioByDay(client.cardio)}
//                               </div>
//                               <div className="mt-4 bg-gradient-to-r from-blue-200 to-purple-200 p-4 rounded-lg shadow-lg">
//                                 <strong className="block text-lg mb-2">Payment Date:</strong>
//                                 <p className="text-lg">{client.paymentDate ? new Date(client.paymentDate).toLocaleDateString() : 'No payment date'}</p>
//                               </div>

//                               <div className="mt-4 ">
//                                 <strong className="block text-lg mb-2">Client Images:</strong>
//                                 <div className="flex flex-row flex-wrap items-center justify-center space-x-4">  {/* Adjusted container for images */}
//                                   {client.images && (
//                                     <>
//                                       {client.images.front && (
//                                         <img
//                                           src={client.images.front.url}
//                                           alt={`${client.fullName || client.email}'s front image`}
//                                           className="rounded-lg shadow-md"
//                                           style={{ width: '150px', height: '150px' }} // fixed size
//                                         />
//                                       )}
//                                       {client.images.back && (
//                                         <img
//                                           src={client.images.back.url}
//                                           alt={`${client.fullName || client.email}'s back image`}
//                                           className="rounded-lg shadow-md"
//                                           style={{ width: '150px', height: '150px' }} // fixed size
//                                         />
//                                       )}
//                                     </>
//                                   )}
//                                 </div>
//                               </div>


//                             </div>
//                             <div className="overflow-x-auto">
//                               <table className="min-w-full bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg mt-4">
//                                 <thead>
//                                   <tr className="bg-gray-100">
//                                     <th className="py-2 px-4 text-left font-bold">Label</th>
//                                     <th className="py-2 px-4 text-left font-bold">Current</th>
//                                     <th className="py-2 px-4 text-left font-bold">Previous</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   {[
//                                     { label: 'Weight', current: client.weight, previous: client.previousWeight },
//                                     { label: 'Height', current: client.height, previous: client.previousHeight },
//                                     { label: 'Age', current: client.age, previous: client.previousAge },
//                                     { label: 'Fat Weight', current: client.fatWeight, previous: client.previousFatWeight },
//                                     { label: 'Muscle Weight', current: client.muscleWeight, previous: client.previousMuscleWeight },
//                                     { label: 'Muscle Percentage', current: client.musclePercentage, previous: client.previousMusclePercentage },
//                                     { label: 'Fat Percentage', current: client.fatPercentage, previous: client.previousFatPercentage },
//                                     { label: 'Waist', current: client.waistMeasurement, previous: client.previousWaistMeasurement },
//                                     { label: 'Right Arm', current: client.rightArmMeasurement, previous: client.previousRightArmMeasurement },
//                                     { label: 'Left Arm', current: client.leftArmMeasurement, previous: client.previousLeftArmMeasurement },
//                                     { label: 'Right Leg', current: client.rightLegMeasurement, previous: client.previousRightLegMeasurement },
//                                     { label: 'Left Leg', current: client.leftLegMeasurement, previous: client.previousLeftLegMeasurement },
//                                     { label: 'Sugar Cravings', current: client.sugarCravings, previous: client.previousSugarCravings },
//                                     { label: 'Diabetes', current: client.diabetes, previous: client.previousDiabetes },
//                                     { label: 'Blood Pressure', current: client.bloodPressure, previous: client.previousBloodPressure },
//                                     { label: 'Online Training', current: client.onlineTrainingExperience, previous: client.previousOnlineTrainingExperience },
//                                     { label: 'Injuries', current: client.previousInjuries, previous: client.previousPreviousInjuries },
//                                     // Add more items if necessary
//                                   ].map((item, index) => (
//                                     <tr key={index} className="border-b border-gray-200">
//                                       <td className="py-2 px-4">
//                                         <strong>{item.label}:</strong>
//                                       </td>
//                                       <td className="py-2 px-4">
//                                         <span className="bg-blue-100 text-blue-800 p-1 rounded-md">{item.current}</span>
//                                       </td>
//                                       <td className="py-2 px-4">
//                                         <span className="bg-green-100 text-green-800 p-1 rounded-md">{item.previous}</span>
//                                       </td>
//                                     </tr>
//                                   ))}
//                                 </tbody>
//                               </table>
//                             </div>



//                           </td>
//                         </tr>
//                       )}
//                     </React.Fragment>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div>No client data found.</div>
//           )}
//           {renderPagination()}
//         </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//       {showConfirmation && (
//         <Modal onClose={() => setShowConfirmation(false)}>
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-4">Confirm Action</h2>
//             <p>Are you sure you want to toggle the payment status for this client?</p>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={confirmTogglePaymentStatus}
//                 className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={() => setShowConfirmation(false)}
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default AdminClientList;













import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { ClientData, Exercise } from '@/types/ClientData';
import Modal from '@/components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faDumbbell, faHeartbeat, faDollarSign, faDrumstickBite, faHeartCircleBolt, faUsers, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import LoadingSpinner from '@/components/LoadingSpinner';

const dayIcons: Record<string, IconDefinition> = {
  'Day 1': fa1,
  'Day 2': fa2,
  'Day 3': fa3,
  'Day 4': fa4,
  'Day 5': fa5,
  'Day 6': fa6,
};

interface Cardio {
  name: string;
  duration: string;
  day: string;
  gif?: string;
}

interface Referral {
  referrerEmail: string;
  referredEmail: string;
  date: string;
}

const AdminClientList: React.FC = () => {
  const { user } = useAuth();
  const [clients, setClients] = useState<ClientData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedGif, setSelectedGif] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [clientToToggle, setClientToToggle] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showExercises, setShowExercises] = useState<boolean>(true);
  const [showCardio, setShowCardio] = useState<boolean>(true);
  const [showReferredUsers, setShowReferredUsers] = useState(false);
  const clientsPerPage = 3;
  const router = useRouter();



  useEffect(() => {
    const fetchClientData = async () => {
      if (!user) return;
  
      try {
        const response = await fetch('/api/client-exercises', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const data = await response.json();
  
        if (!Array.isArray(data)) {
          throw new Error('Client data is not an array OR Can`t fetch Data from DB');
        }
  
        const updatedClients = await Promise.all(data.map(async (client: ClientData) => {
          // Fetch the referral data for each client
          const referralResponse = await fetch(`/api/referrals?email=${client.email}`);
          const referrals = await referralResponse.json();
  
          return {
            ...client,
            referrals,
          };
        }));
  
        setClients(updatedClients);
      } catch (error: any) {
        console.error('Error fetching client data:', error);
        setError(error.message || 'Error fetching client data');
      } finally {
        setLoading(false);
      }
    };
  
    fetchClientData();
  }, [user, router]);
  

  const toggleRow = (index: number) => {
    setExpandedRows(expandedRows.includes(index)
      ? expandedRows.filter(row => row !== index)
      : [...expandedRows, index]);
  };
  // Function to toggle referred users
  const toggleReferredUsers = () => {
    setShowReferredUsers(prevState => !prevState);
  };
  
  const handleAssignExercise = (clientEmail: string) => {
    router.push(`/dashboard/admin-add-exercises?email=${clientEmail}`);
  };

  const handleAssignCardio = (clientEmail: string) => {
    router.push(`/dashboard/admin-add-cardio?email=${clientEmail}`);
  };

  const handleAssignNutrition = (clientEmail: string) => {
    router.push(`/dashboard/admin-add-nutrition?email=${clientEmail}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleGifClick = (gif: string | null) => {
    setSelectedGif(gif);
  };

  const handleTogglePaymentStatus = async (clientEmail: string) => {
    setShowConfirmation(true);
    setClientToToggle(clientEmail);
  };

  const confirmTogglePaymentStatus = async () => {
    if (!clientToToggle) return;

    try {
      const response = await fetch('/api/togglePaymentStatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: clientToToggle }),
      });

      if (!response.ok) {
        throw new Error('Error toggling payment status');
      }

      const currentDate = new Date().toISOString().split('T')[0];

      setClients(prevClients => 
        prevClients.map(client => 
          client.email === clientToToggle 
            ? { ...client, hasPaid: !client.hasPaid, paymentDate: currentDate } 
            : client
        )
      );

    } catch (error) {
      console.error('Error toggling payment status:', error);
    } finally {
      setShowConfirmation(false);
      setClientToToggle(null);
    }
  };

  const filteredClients = clients
    .filter(client => !client.admin)
    .filter(client => 
      client.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.fullName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

  const currentClients = filteredClients.slice(
    (currentPage - 1) * clientsPerPage,
    currentPage * clientsPerPage
  );

  const renderExercisesByDay = (exercises: Exercise[] | undefined) => {
    if (!exercises || exercises.length === 0) {
      return <p>No exercises assigned.</p>;
    }

    const exercisesByDay = exercises.reduce((acc: { [key: string]: Exercise[] }, exercise) => {
      const { day } = exercise;
      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(exercise);
      return acc;
    }, {});

    const sortedDays = Object.keys(exercisesByDay).sort((a, b) => {
      const dayA = parseInt(a.replace('Day ', ''), 10);
      const dayB = parseInt(b.replace('Day ', ''), 10);
      return dayA - dayB;
    });

    return (
      <>
        <div className="mb-4 flex justify-center flex-wrap">
          {sortedDays.map(day => (
            <button
              key={day}
              className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 items-center justify-center ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setSelectedDay(day)}
            >
              <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
            </button>
          ))}
        </div>
        {Object.entries(exercisesByDay).map(([day, exercises], index) => (
          selectedDay === day && (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{day}</h3>
              <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Exercise</th>
                    <th className="py-2 px-4 border-b">Weights</th>
                    <th className="py-2 px-4 border-b">Reps</th>
                    <th className="py-2 px-4 border-b">GIF</th>
                  </tr>
                </thead>
                <tbody>
                  {exercises.map((exercise, i) => (
                    <tr key={i}>
                      <td className="py-2 px-4 border-b">{exercise.name}</td>
                      <td className="py-2 px-4 border-b">
                        {exercise.weights?.map((weight, index) => (
                          <div key={index}>{weight} kg</div>
                        ))}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {Array.isArray(exercise.reps) ? (
                          exercise.reps.map((rep, index) => (
                            <div key={index}>
                              {rep} reps, {exercise.weights ? exercise.weights[index] : 'Not Started'} kg
                            </div>
                          ))
                        ) : (
                          <div>Not Started</div>
                        )}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {exercise.gif ? (
                          <img
                            src={`${exercise.gif}`}
                            alt={exercise.name}
                            className="w-32 h-32 cursor-pointer min-w-32"
                            onClick={() => handleGifClick(`${exercise.gif}`)}
                          />
                        ) : (
                          'No GIF'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ))}
      </>
    );
  };

  const renderCardioByDay = (cardio: Cardio[] | undefined) => {
    if (!cardio || cardio.length === 0) {
      return <p>No cardio exercises assigned.</p>;
    }

    const cardioByDay = cardio.reduce((acc: { [key: string]: Cardio[] }, exercise) => {
      const { day } = exercise;
      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(exercise);
      return acc;
    }, {});

    return (
      <>
        <div className="mb-4 flex justify-center flex-wrap">
          {Object.keys(cardioByDay).map(day => (
            <button
              key={day}
              className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 items-center justify-center ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setSelectedDay(day)}
            >
              <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
            </button>
          ))}
        </div>
        {Object.entries(cardioByDay).map(([day, cardio], index) => (
          selectedDay === day && (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{day}</h3>
              <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Exercise</th>
                    <th className="py-2 px-4 border-b">Duration</th>
                    <th className="py-2 px-4 border-b">GIF</th>
                  </tr>
                </thead>
                <tbody>
                  {cardio.map((ex, i) => (
                    <tr key={i}>
                      <td className="py-2 px-4 border-b">{ex.name}</td>
                      <td className="py-2 px-4 border-b">{ex.duration}</td>
                      <td className="py-2 px-4 border-b text-center">
                        {ex.gif ? (
                          <img
                            src={`/gifs/${ex.gif}`}
                            alt={ex.name}
                            className="w-32 h-32 cursor-pointer"
                            onClick={() => handleGifClick(`/gifs/${ex.gif}`)}
                          />
                        ) : (
                          'No GIF'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ))}
      </>
    );
  };

  const renderPagination = () => (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`py-2 px-4 m-2 rounded-md shadow-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
  
  const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <DashboardLayout>
        <div className="w-full font-serif max-w-4xl p-6 bg-[var(--background-color)] text-[var(--text-color)] rounded-lg shadow-lg overflow-y-auto w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto" >
          <h1 className="text-2xl italic font-serif mb-10 text-center">Client List</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search clients"
            className="mb-4 px-4 py-2 border border-[var(--border-color)] rounded w-full"
          />
          <div className="mb-4">
            Showing {currentClients.length} of {filteredClients.length} clients
          </div>
          {filteredClients.length > 0 ? (
            <div className="">
              <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] ">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentClients.map((client, index) => (
                    <React.Fragment key={index}>
                      <tr className="border-b border-[var(--border-color)]">

                      <td className="py-2 px-4 text-lg font-semibold bg-transparent text-black-800 rounded-md flex items-center">
                        <div className={`w-10 h-10 flex items-center justify-center ${colors[index % colors.length]} text-white rounded-full mr-3`}>
                          {client.fullName ? client.fullName.charAt(0).toUpperCase() : client.email.charAt(0).toUpperCase()}
                        </div>
                        {client.fullName ? client.fullName : client.email}
                      </td>
                        <td className="py-2 px-4">
                          <div className="flex flex-row justify-center items-center space-x-3">
                            <button
                              onClick={() => toggleRow(index)}
                              className="text-blue-500 hover:text-green-500 transition duration-300"
                            >
                              {expandedRows.includes(index) ? (
                                <FontAwesomeIcon icon={faChevronUp} className="h-6 w-6" />
                              ) : (
                                <FontAwesomeIcon icon={faChevronDown} className="h-6 w-6" />
                              )}
                            </button>
                            <button
                              onClick={() => handleAssignExercise(client.email)}
                              className="text-blue-500 hover:text-green-500 hover:underline"
                            >
                              <FontAwesomeIcon icon={faDumbbell} className="h-6 w-6" />
                            </button>
                            <button
                              onClick={() => handleAssignCardio(client.email)}
                              className="text-blue-500 hover:text-green-500 hover:underline"
                            >
                              <FontAwesomeIcon icon={faHeartCircleBolt} className="h-6 w-6" />
                            </button>
                            <button
                              onClick={() => handleAssignNutrition(client.email)}
                              className="text-blue-500 hover:text-green-500 hover:underline "
                            >
                              <FontAwesomeIcon icon={faDrumstickBite} className="h-6 w-6" />
                            </button>
                            <button
                              onClick={() => handleTogglePaymentStatus(client.email)}
                              className={`text-blue-500 hover:text-green-500 hover:underline ${client.hasPaid ? 'text-green-500' : 'text-red-500'}`}
                            >
                              <FontAwesomeIcon icon={faDollarSign} className="h-6 w-6" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      {expandedRows.includes(index) && (
                        
                        <tr>
                          <td colSpan={2} className="py-2 px-4">


                          {/* <div className='text-center'>
                            <span className="text-[var(--text-color)] text-xl justify-center font-lg font-semibold font-serif mb-2 text-center">
                              <FontAwesomeIcon icon={faUsers} className="mr-2" />
                              {client.referrals.length} {client.referrals.length === 1 ? 'Referral' : 'Referrals'}
                            </span>
                          </div> */}

                        <div className='text-center'>
                          {/* Display Referral Count with Icon */}
                          <span className="text-[var(--text-color)] text-xl justify-center font-lg font-semibold font-serif mb-2 text-center">
                            <FontAwesomeIcon icon={faUsers} className="mr-2" />
                            {client.referrals.length} {client.referrals.length === 1 ? 'Referral' : 'Referrals'}
                          </span>

                          {/* Button to show referred users */}
                          <div className="mt-2">
                          <button
                            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
                            onClick={toggleReferredUsers}
                            aria-label={showReferredUsers ? 'Hide Referrals' : 'Show Referrals'} // Adds accessibility for screen readers
                          >
                            <FontAwesomeIcon icon={showReferredUsers ? faEyeSlash : faEye} className="h-5 w-5" />
                          </button>

                          </div>

                          {/* Display referred users */}
                          {showReferredUsers && (
                            <div className="mt-4 text-left bg-gray-100 p-4 rounded-md">
                              <h3 className="text-lg font-semibold mb-2">Referred Users:</h3>
                              {client.referrals.length > 0 ? (
                                <ul>
                              {client.referrals.map((referral: Referral, index: number) => (
                                <li key={index} className="mb-2">
                                  {referral.referredEmail}
                                </li>
                              ))}


                                </ul>
                              ) : (
                                <p>No referred users found.</p>
                              )}
                            </div>
                          )}
                        </div>


                            <div className="bg-[var(--background-color)] p-4 rounded-lg shadow-md relative">
                              <div className="absolute top-4 right-4 flex space-x-4">
                                <div
                                  className={`p-2 rounded-full ${showExercises ? 'bg-blue-500' : 'bg-gray-500'} cursor-pointer`}
                                  onClick={() => setShowExercises(!showExercises)}
                                >
                                  <FontAwesomeIcon
                                    icon={faDumbbell}
                                    className={`h-8 w-8 ${showExercises ? 'text-white' : 'text-gray-200'}`}
                                  />
                                </div>
                                <div
                                  className={`p-2 rounded-full ${showCardio ? 'bg-blue-500' : 'bg-gray-500'} cursor-pointer`}
                                  onClick={() => setShowCardio(!showCardio)}
                                >
                                  <FontAwesomeIcon
                                    icon={faHeartCircleBolt}
                                    className={`h-8 w-8 ${showCardio ? 'text-white' : 'text-gray-200'}`}
                                  />
                                </div>
                              </div>
                              <div>
                                {showExercises && <strong>Exercises:</strong>}
                                {showExercises && renderExercisesByDay(client.exercises)}
                              </div>
                              <div className="mt-4">
                                {showCardio && <strong>Cardio:</strong>}
                                {showCardio && renderCardioByDay(client.cardio)}
                              </div>
                              <div className="mt-4 bg-gradient-to-r from-blue-200 to-purple-200 p-4 rounded-lg shadow-lg">
                                <strong className="block text-lg mb-2">Payment Date:</strong>
                                <p className="text-lg">{client.paymentDate ? new Date(client.paymentDate).toLocaleDateString() : 'No payment date'}</p>
                              </div>

                              <div className="mt-4 ">
                                <strong className="block text-lg mb-2">Client Images:</strong>
                                <div className="flex flex-row flex-wrap items-center justify-center space-x-4">  {/* Adjusted container for images */}
                                  {client.images && (
                                    <>
                                      {client.images.front && (
                                        <img
                                          src={client.images.front.url}
                                          alt={`${client.fullName || client.email}'s front image`}
                                          className="rounded-lg shadow-md"
                                          style={{ width: '150px', height: '150px' }} // fixed size
                                        />
                                      )}
                                      {client.images.back && (
                                        <img
                                          src={client.images.back.url}
                                          alt={`${client.fullName || client.email}'s back image`}
                                          className="rounded-lg shadow-md"
                                          style={{ width: '150px', height: '150px' }} // fixed size
                                        />
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>


                            </div>
                            <div className="overflow-x-auto ">
                              <table className="min-w-full text-[var(--text-color)] rounded-lg shadow-lg mt-4">

                                <thead>
                                  <tr className="bg-gray-100">
                                    <th className="py-2 px-4 text-left font-bold">Label</th>
                                    <th className="py-2 px-4 text-left font-bold">Current</th>
                                    <th className="py-2 px-4 text-left font-bold">Previous</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    { label: 'Weight', current: client.weight, previous: client.previousWeight },
                                    { label: 'Height', current: client.height, previous: client.previousHeight },
                                    { label: 'Age', current: client.age, previous: client.previousAge },
                                    { label: 'Fat Weight', current: client.fatWeight, previous: client.previousFatWeight },
                                    { label: 'Muscle Weight', current: client.muscleWeight, previous: client.previousMuscleWeight },
                                    { label: 'Muscle Percentage', current: client.musclePercentage, previous: client.previousMusclePercentage },
                                    { label: 'Fat Percentage', current: client.fatPercentage, previous: client.previousFatPercentage },
                                    { label: 'Waist', current: client.waistMeasurement, previous: client.previousWaistMeasurement },
                                    { label: 'Right Arm', current: client.rightArmMeasurement, previous: client.previousRightArmMeasurement },
                                    { label: 'Left Arm', current: client.leftArmMeasurement, previous: client.previousLeftArmMeasurement },
                                    { label: 'Right Leg', current: client.rightLegMeasurement, previous: client.previousRightLegMeasurement },
                                    { label: 'Left Leg', current: client.leftLegMeasurement, previous: client.previousLeftLegMeasurement },
                                    { label: 'Sugar Cravings', current: client.sugarCravings, previous: client.previousSugarCravings },
                                    { label: 'Diabetes', current: client.diabetes, previous: client.previousDiabetes },
                                    { label: 'Blood Pressure', current: client.bloodPressure, previous: client.previousBloodPressure },
                                    { label: 'Online Training', current: client.onlineTrainingExperience, previous: client.previousOnlineTrainingExperience },
                                    { label: 'Injuries', current: client.previousInjuries, previous: client.previousPreviousInjuries },
                                    // Add more items if necessary
                                  ].map((item, index) => (
                                    <tr key={index} className="border-b border-gray-200">
                                      <td className="py-2 px-4">
                                        <strong>{item.label}:</strong>
                                      </td>
                                      <td className="py-2 px-4">
                                        <span className="bg-blue-100 text-blue-800 p-1 rounded-md">{item.current}</span>
                                      </td>
                                      <td className="py-2 px-4">
                                        <span className="bg-green-100 text-green-800 p-1 rounded-md">{item.previous}</span>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>



                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>No client data found.</div>
          )}
          {renderPagination()}
        </div>
      {selectedGif && (
        <Modal onClose={() => handleGifClick(null)}>
          <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
        </Modal>
      )}
      {showConfirmation && (
        <Modal onClose={() => setShowConfirmation(false)}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Confirm Action</h2>
            <p>Are you sure you want to toggle the payment status for this client?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={confirmTogglePaymentStatus}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      )}
    </DashboardLayout>
  );
};

export default AdminClientList;
