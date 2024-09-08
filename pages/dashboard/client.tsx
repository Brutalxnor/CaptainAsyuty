/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
<<<<<<< HEAD








// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useUser } from '@clerk/nextjs';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';


// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user, isSignedIn } = useUser();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         console.log(data.message);
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress;
//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const isNew = await checkAndAddEmail(userEmail);

//         const response = await fetch(`/api/client?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await response.json();
//         console.log('Fetched client data:', client);

//         if ((isNew && !client.hasPaid) || !client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//         }

//         setClientData(client);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching client data:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching client data');
//           setError('Unknown error fetching client data');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

    // const fetchMeals = async () => {
    //   if (!user) return;

    //   const userEmail = user.primaryEmailAddress?.emailAddress;
    //   if (!userEmail) return;

    //   try {
    //     const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
    //       method: 'GET',
    //     });

    //     if (!response.ok) {
    //       const errorData = await response.json();
    //       throw new Error(errorData.message || 'Failed to fetch meals');
    //     }

    //     const data = await response.json();
    //     setMeals(data.meals || []);
    //   } catch (error) {
    //     if (error instanceof Error) {
    //       console.error('Error fetching meals:', error.message);
    //       setError(error.message);
    //     } else {
    //       console.error('Unknown error fetching meals');
    //       setError('Unknown error fetching meals');
    //     }
    //   }
    // };

//     if (isSignedIn) {
//       fetchClientData();
//       fetchMeals();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, isSignedIn, router]);

//   useEffect(() => {
//     if (clientData?.exercises) {
//       const unlockedIndices = clientData.exercises.map((exercise, index) =>
//         isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//       ).filter(index => index !== -1);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     }
//   }, [clientData, clientData?.date]);

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);

//     // Calculate the date for the current exercise day
//     const exerciseDate = new Date(assigned);
//     exerciseDate.setDate(exerciseDate.getDate() + dayNumber - 1);

//     // Convert today and exercise date to 'YYYY-MM-DD' for comparison
//     const todayString = today.toISOString().split('T')[0];
//     const exerciseDateString = exerciseDate.toISOString().split('T')[0];

//     return todayString === exerciseDateString;
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];


//   return (
//     <DashboardLayout>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">

//               {days.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {days.sort().map(day => (
//                     <button
//                       key={day}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                       {!isCurrentDay(day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise.name, language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;








// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';


// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         // console.log(data.message);
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const checkPaymentStatus = async (email: string) => {
//       try {
//         const response = await fetch('/api/checkPaymentStatus', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });
    
//         if (!response.ok) {
//           throw new Error('Failed to check payment status');
//         }
    
//         const data = await response.json();
//         return data.hasPaid;
//       } catch (error) {
//         console.error('Error checking payment status:', error);
//         throw error;
//       }
//     };
    

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) {
//         // console.log('No user email found, skipping payment check');
//         setLoading(false);
//         return;
//       }

//       try {
//         const isNew = await checkAndAddEmail(userEmail);

//         const response = await fetch(`/api/client?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await response.json();
//         // console.log('Fetched client data:', client);

//         const hasPaid = await checkPaymentStatus(userEmail);

//         // console.log('Client payment status:', hasPaid);
//         // if ((isNew && !hasPaid) || !hasPaid) {
//         //     console.log('Redirecting to payments page');
//         //     router.push('/dashboard/payments');
//         //     return;
//         // }
//         if (!client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//       }
//         setClientData(client);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching client data:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching client data');
//           setError('Unknown error fetching client data');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchMeals = async () => {
//       if (!user) return;

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) return;

//       try {
//         const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch meals');
//         }

//         const data = await response.json();
//         setMeals(data.meals || []);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching meals:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching meals');
//           setError('Unknown error fetching meals');
//         }
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//       fetchMeals();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, isSignedIn, router]);

//   useEffect(() => {
//     if (clientData?.exercises) {
//       const unlockedIndices = clientData.exercises.map((exercise, index) =>
//         isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//       ).filter(index => index !== -1);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     }
//   }, [clientData, clientData?.date]);

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   // const isCurrentDay = (day: string, assignedDate: string): boolean => {
//   //   const assigned = new Date(assignedDate);
//   //   const today = new Date();
//   //   const dayNumber = parseInt(day.split(' ')[1], 10);

//   //   // Calculate the date for the current exercise day
//   //   const exerciseDate = new Date(assigned);
//   //   exerciseDate.setDate(exerciseDate.getDate() + dayNumber - 1);

//   //   // Convert today and exercise date to 'YYYY-MM-DD' for comparison
//   //   const todayString = today.toISOString().split('T')[0];
//   //   const exerciseDateString = exerciseDate.toISOString().split('T')[0];

//   //   return todayString === exerciseDateString;
//   // };

//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);

//     // Calculate the number of days since the assigned date
//     const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));

//     // Determine the day in the current rotation
//     const rotatedDay = ((diffDays % days.length) + 1);

//     // Check if the rotated day matches the current day
//     return dayNumber === rotatedDay;
// };


//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];


//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">

//               {days.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {days.sort().map(day => (
//                     <button
//                       key={day}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                       {!isCurrentDay(day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise.name, language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;















// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         // console.log(data.message);
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const checkPaymentStatus = async (email: string) => {
//       try {
//         const response = await fetch('/api/checkPaymentStatus', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });
    
//         if (!response.ok) {
//           throw new Error('Failed to check payment status');
//         }
    
//         const data = await response.json();
//         return data.hasPaid;
//       } catch (error) {
//         console.error('Error checking payment status:', error);
//         throw error;
//       }
//     };
    

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) {
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`/api/client?email=${userEmail}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch client data');
//       }

//       const client = await response.json();
//       console.log('Fetched client data:', client); // <-- Add this line to debug

//       if (!client.hasPaid) {
//         router.push('/dashboard/payments');
//         return;
//       }
//       setClientData(client);
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Error fetching client data:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching client data');
//         setError('Unknown error fetching client data');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//     const fetchMeals = async () => {
//       if (!user) return;

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) return;

//       try {
//         const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch meals');
//         }

//         const data = await response.json();
//         setMeals(data.meals || []);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching meals:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching meals');
//           setError('Unknown error fetching meals');
//         }
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//       fetchMeals();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, isSignedIn, router]);

//   useEffect(() => {
//     if (clientData?.exercises) {
//       const unlockedIndices = clientData.exercises.map((exercise, index) =>
//         isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//       ).filter(index => index !== -1);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     }
//   }, [clientData, clientData?.date]);

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   // const isCurrentDay = (day: string, assignedDate: string): boolean => {
//   //   const assigned = new Date(assignedDate);
//   //   const today = new Date();
//   //   const dayNumber = parseInt(day.split(' ')[1], 10);

//   //   // Calculate the number of days since the assigned date
//   //   const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));

//   //   // Determine the day in the current rotation
//   //   const rotatedDay = ((diffDays % days.length) + 1);

//   //   // Check if the rotated day matches the current day
//   //   return dayNumber === rotatedDay;
//   // };

//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);
  
//     // Calculate the number of days since the assigned date
//     const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));
  
//     // Adjust the day number for rotation (subtracting 1 so that Day 1 corresponds to the assigned date)
//     const rotatedDay = ((diffDays % days.length) + 1);
  
//     // Check if the rotated day matches the current day
//     return dayNumber === rotatedDay;
//   };
  


//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">

//               {days.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {days.sort().map(day => (
//                     <button
//                       key={day}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                       {!isCurrentDay(day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise.name, language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



































// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const checkPaymentStatus = async (email: string) => {
//       try {
//         const response = await fetch('/api/checkPaymentStatus', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });
    
//         if (!response.ok) {
//           throw new Error('Failed to check payment status');
//         }
    
//         const data = await response.json();
//         return data.hasPaid;
//       } catch (error) {
//         console.error('Error checking payment status:', error);
//         throw error;
//       }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(`/api/client?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await response.json();
//         if (!client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//         }
//         setClientData(client);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching client data:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching client data');
//           setError('Unknown error fetching client data');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchMeals = async () => {
//       if (!user) return;

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) return;

//       try {
//         const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch meals');
//         }

//         const data = await response.json();
//         setMeals(data.meals || []);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching meals:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching meals');
//           setError('Unknown error fetching meals');
//         }
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//       fetchMeals();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, isSignedIn, router]);

//   useEffect(() => {
//     if (clientData?.exercises) {
//       const unlockedIndices = clientData.exercises.map((exercise, index) =>
//         isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//       ).filter(index => index !== -1);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     }
//   }, [clientData, clientData?.date]);

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);
  
//     // Calculate the number of days since the assigned date
//     const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));
  
//     // Adjust the day number for rotation (subtracting 1 so that Day 1 corresponds to the assigned date)
//     const rotatedDay = ((diffDays % days.length) + 1);
  
//     // Check if the rotated day matches the current day
//     return dayNumber === rotatedDay;
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {days.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {days.sort().map(day => (
//                     <button
//                       key={day}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                       {!isCurrentDay(day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise.name, language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;











// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const checkPaymentStatus = async (email: string) => {
//       try {
//         const response = await fetch('/api/checkPaymentStatus', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });
    
//         if (!response.ok) {
//           throw new Error('Failed to check payment status');
//         }
    
//         const data = await response.json();
//         return data.hasPaid;
//       } catch (error) {
//         console.error('Error checking payment status:', error);
//         throw error;
//       }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(`/api/client?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await response.json();
//         if (!client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//         }
//         setClientData(client);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching client data:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching client data');
//           setError('Unknown error fetching client data');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchMeals = async () => {
//       if (!user) return;

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) return;

//       try {
//         const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch meals');
//         }

//         const data = await response.json();
//         setMeals(data.meals || []);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching meals:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching meals');
//           setError('Unknown error fetching meals');
//         }
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//       fetchMeals();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, isSignedIn, router]);

//   useEffect(() => {
//     if (clientData?.exercises) {
//       const unlockedIndices = clientData.exercises.map((exercise, index) =>
//         isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//       ).filter(index => index !== -1);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     }
//   }, [clientData, clientData?.date]);

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);
  
//     // Calculate the number of days since the assigned date
//     const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));
  
//     // Adjust the day number for rotation (subtracting 1 so that Day 1 corresponds to the assigned date)
//     const rotatedDay = ((diffDays % days.length) + 1);
  
//     // Check if the rotated day matches the current day
//     return dayNumber === rotatedDay;
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {days.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {days.sort().map(day => (
//                     <button
//                       key={day}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                       {!isCurrentDay(day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise.name, language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



















// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const checkPaymentStatus = async (email: string) => {
//       try {
//         const response = await fetch('/api/checkPaymentStatus', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });
    
//         if (!response.ok) {
//           throw new Error('Failed to check payment status');
//         }
    
//         const data = await response.json();
//         return data.hasPaid;
//       } catch (error) {
//         console.error('Error checking payment status:', error);
//         throw error;
//       }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(`/api/client?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await response.json();
//         if (!client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//         }
//         setClientData(client);
//         console.log("clientData:", client);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching client data:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching client data');
//           setError('Unknown error fetching client data');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchMeals = async () => {
//       if (!user) return;

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) return;

//       try {
//         const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch meals');
//         }

//         const data = await response.json();
//         setMeals(data.meals || []);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching meals:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching meals');
//           setError('Unknown error fetching meals');
//         }
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//       fetchMeals();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, isSignedIn, router]);

//   useEffect(() => {
//     if (clientData?.exercises) {
//       console.log("feeh EX")
//       const unlockedIndices = clientData.exercises.map((exercise, index) =>
//         isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//       ).filter(index => index !== -1);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     }
//   }, [clientData, clientData?.date]);

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);
  
//     // Calculate the number of days since the assigned date
//     const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));
  
//     // Adjust the day number for rotation (subtracting 1 so that Day 1 corresponds to the assigned date)
//     const rotatedDay = ((diffDays % days.length) + 1);
  
//     // Check if the rotated day matches the current day
//     return dayNumber === rotatedDay;
//   };

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map(ex => ex.day)))
//     .map(day => clientData?.exercises?.find(ex => ex.day === day))
//     .filter(ex => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise.name, language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;




















//// wroking 

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();




//   // useEffect(() => {
//   //   const fetchClientData = async () => {
//   //     if (!user) {
//   //       console.log('No user found, redirecting to sign-in page.');
//   //       router.push('/sign-in');
//   //       return;
//   //     }
  
//   //     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//   //     console.log('Fetching data for user:', userEmail);
  
//   //     try {
//   //       const [clientResponse, exercisesResponse] = await Promise.all([
//   //         fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//   //         fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//   //       ]);
  
//   //       if (!clientResponse.ok || !exercisesResponse.ok) {
//   //         throw new Error('Failed to fetch client data');
//   //       }
  
//   //       const client = await clientResponse.json();
//   //       const exercisesData = await exercisesResponse.json();
//   //       console.log('Client data:', client);
//   //       console.log('Exercises data:', exercisesData);
  
//   //       setClientData({ ...client, exercises: exercisesData.exercises, date: exercisesData.date });
//   //       setMeals(client.meals || []);
//   //       console.log("clientData?.date",clientData?.date)
//   //       setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//   //         isCurrentDay(exercise.day, exercise.date || '') ? index : -1
//   //       ).filter((index: number) => index !== -1));
        
//   //       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
  
//   //     } catch (error: any) {
//   //       console.error('Error fetching client data:', error);
//   //       setError(error.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };
  
//   //   if (isSignedIn) {
//   //     fetchClientData();
//   //   } else {
//   //     router.push('/sign-in');
//   //   }
//   // }, [user, router, isSignedIn]);
  

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         console.log('No user found, redirecting to sign-in page.');
//         router.push('/sign-in');
//         return;
//       }
  
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       console.log('Fetching data for user:', userEmail);
  
//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);
  
//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }
  
//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log('Client data:', client);
//         console.log('Exercises data:', exercisesData);
  
//         setClientData({ ...client, exercises: exercisesData.exercises, date: exercisesData.date });
//         setMeals(client.meals || []);
        
//         console.log('Exercises State in useEffect:', exercisesData.exercises);
        
//         const unlockedIndices = exercisesData.exercises.map((exercise: Exercise, index: number) => {
//           console.log(`Processing Exercise Day: ${exercise.day}, Date: ${exercise.date}`);
//           const isUnlocked = isCurrentDay(exercise.day, exercise.date || '');
//           console.log(`Is Current Day for Exercise ${index + 1}?`, isUnlocked);
//           return isUnlocked ? index : -1;
//         }).filter((index: number) => index !== -1);
        
//         console.log('Unlocked Indices:', unlockedIndices);
//         setUnlockedExerciseIndices(unlockedIndices);
//         setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
  
//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);
  



  

  
  
//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
  
//     const today = new Date();

//     const dayNumber = parseInt(day.split(' ')[1], 10); // Extract the day number from the exercise

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assigned.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Fix to ensure rotatedDay is within valid range
//     // const rotatedDay = ((diffDays % 6) + 6) % 6 + 1;
//     const rotatedDay = (diffDays % 4) + 1;
//     console.log(`Assigned Date: ${assignedDate}, Day: ${day}, Day Number: ${dayNumber}, Rotated Day: ${rotatedDay}`);
  
//     return dayNumber === rotatedDay;
//   };
  

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;


//////////////////////////////////////////////






// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const getCycleLengthBasedOnPlan = (exerciseType: string): number => {
//   switch (exerciseType) {
//     case 'Upper-Lower 3 Days':
//     case 'Power Series 3 Days':
//     case 'Push-Pull-Leg 3 Days':
//       return 3;
//     case 'Upper-Lower 4 Days':
//     case 'Pro Split 4 Days':
//       return 4;
//     case 'Upper-Lower 5 Days':
//     case 'Power Series 5 Days':
//     case 'Push-Pull-Leg 5 Days':
//       return 5;
//     case 'Upper-Lower 6 Days':
//     case 'Power Series 6 Days':
//     case 'Push-Pull-Leg 6 Days':
//       return 6;
//     default:
//       return 1; // Default to avoid errors
//   }
// };

// const isCurrentDay = (day: string, assignedDate: string, cycleLength: number): boolean => {
//   const assigned = new Date(assignedDate);
//   const today = new Date();

//   const dayNumber = parseInt(day.split(' ')[1], 10); // Extract the day number from the exercise

//   // Calculate the number of days since the program started
//   const diffTime = today.getTime() - assigned.getTime();
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   // Adjust the calculation to use the cycleLength dynamically
//   const rotatedDay = ((diffDays % cycleLength) + cycleLength) % cycleLength || cycleLength;

//   console.log(`Assigned Date: ${assignedDate}, Day: ${day}, Day Number: ${dayNumber}, Rotated Day: ${rotatedDay}`);

//   return dayNumber === rotatedDay;
// };


// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();


//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         console.log('No user found, redirecting to sign-in page.');
//         router.push('/sign-in');
//         return;
//       }
  
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       console.log('Fetching data for user:', userEmail);
  
//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);
  
//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }
  
//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log('Client data:', client);
//         console.log('Exercises data:', exercisesData);
  
//         const cycleLength = getCycleLengthBasedOnPlan(client.exerciseType || '');
  
//         setClientData({ ...client, exercises: exercisesData.exercises, date: exercisesData.date });
//         setMeals(client.meals || []);
  
//         setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//           isCurrentDay(exercise.day, exercise.date || '', cycleLength) ? index : -1
//         ).filter((index: number) => index !== -1));
        
//         setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
  
//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '', getCycleLengthBasedOnPlan(clientData.exerciseType || '')) ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '', getCycleLengthBasedOnPlan(clientData.exerciseType || '')) && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '', getCycleLengthBasedOnPlan(clientData.exerciseType || '')) && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;


























// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const getCycleDays = (exerciseType: string): string[] => {
//   switch (exerciseType) {
//     case 'Upper-Lower 3 Days':
//     case 'Power Series 3 Days':
//     case 'Push-Pull-Leg 3 Days':
//       return ['Day 1', 'Day 2', 'Day 3'];
//     case 'Upper-Lower 4 Days':
//     case 'Pro Split 4 Days':
//       return ['Day 1', 'Day 2', 'Day 3', 'Day 4'];
//     case 'Upper-Lower 5 Days':
//     case 'Power Series 5 Days':
//     case 'Push-Pull-Leg 5 Days':
//       return ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
//     case 'Upper-Lower 6 Days':
//     case 'Power Series 6 Days':
//     case 'Push-Pull-Leg 6 Days':
//       return ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'];
//     default:
//       return ['Day 1']; // Default to avoid errors
//   }
// };

// // const isCurrentDay = (day: string, assignedDate: string, cycleDays: string[]): boolean => {
// //   const assigned = new Date(assignedDate);
// //   const today = new Date();

// //   // Calculate the number of days since the program started
// //   const diffTime = today.getTime() - assigned.getTime();
// //   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// //   // Determine the current day index within the cycle
// //   const currentIndex = diffDays % cycleDays.length;

// //   // Check if today's exercise corresponds to the current index
// //   const currentDay = cycleDays[currentIndex];

// //   console.log(`Assigned Date: ${assignedDate}, Current Day in Cycle: ${currentDay}, Assigned Day: ${day}`);

// //   return day === currentDay;
// // };

// const isCurrentDay = (day: string, assignedDate: string, cycleDays: string[]): boolean => {
//   const assigned = new Date(assignedDate);
//   const today = new Date();

//   // Calculate the number of days since the program started
//   const diffTime = today.getTime() - assigned.getTime();
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   // Determine the current day index within the cycle
//   const currentIndex = diffDays % cycleDays.length;

//   // Check if today's exercise corresponds to the current index
//   const currentDay = cycleDays[currentIndex];

//   console.log(`Assigned Date: ${assignedDate}, Today: ${today.toISOString()}, DiffDays: ${diffDays}, Current Index: ${currentIndex}, Current Day in Cycle: ${currentDay}, Assigned Day: ${day}`);

//   return day === currentDay;
// };



// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         console.log('No user found, redirecting to sign-in page.');
//         router.push('/sign-in');
//         return;
//       }
  
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       console.log('Fetching data for user:', userEmail);
  
//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);
  
//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }
  
//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log('Client data:', client);
//         console.log('Exercises data:', exercisesData);
  
//         const cycleDays = getCycleDays(client.exerciseType || '');
  
//         setClientData({ ...client, exercises: exercisesData.exercises, date: exercisesData.date });
//         setMeals(client.meals || []);
  
//         setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//           isCurrentDay(exercise.day, exercise.date || '', cycleDays) ? index : -1
//         ).filter((index: number) => index !== -1));
        
//         setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
  
//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '', getCycleDays(clientData.exerciseType || '')) ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '', getCycleDays(clientData.exerciseType || '')) && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '', getCycleDays(clientData.exerciseType || '')) && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



















// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };


// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         console.log('No user found, redirecting to sign-in page.');
//         router.push('/sign-in');
//         return;
//       }
  
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       console.log('Fetching data for user:', userEmail);
      
//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);
  
//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }
        
//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log('Client data:', client);
//         console.log('Exercises data:', exercisesData);
  
//         setClientData({ ...client, exercises: exercisesData.exercises, date: exercisesData.date });
//         setMeals(client.meals || []);
        
//         setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//           isCurrentDay(exercise.day, exercise.date || '') ? index : -1
//       ).filter((index: number) => index !== -1));
        
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
  
//     } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);
  
//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();
  
//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);
  
//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
//     // Determine the current day in the cycle (based on the available days)
//     const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];
  
//     // Return true if the current day in the cycle matches the exercise day
//     return dayNumber === currentDayInCycle;
//   };


//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };
  
//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;






// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         console.log('No user found, redirecting to sign-in page.');
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       console.log('Fetching data for user:', userEmail);

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log('Client data:', client);
//         console.log('Exercises data:', exercisesData);

//         setClientData({ ...client, exercises: exercisesData.exercises, date: exercisesData.date });
//         setMeals(client.meals || []);

//         setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//           isCurrentDay(exercise.day, exercise.date || '') ? index : -1
//         ).filter((index: number) => index !== -1));

//         setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);

//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();

//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Determine the current day in the cycle (based on the available days)
//     const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

//     // Return true if the current day in the cycle matches the exercise day
//     return dayNumber === currentDayInCycle;
//   };

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   // const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//   const currentExercise = clientData?.exercises && validIndex !== undefined
//     ? clientData.exercises[validIndex]
//     : undefined;
  


//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



























// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         console.log('No user found, redirecting to sign-in page.');
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       console.log('Fetching data for user:', userEmail);

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log('Client data:', client);
//         console.log('Exercises data:', exercisesData);

//         setClientData((prevData) => ({
//           ...client,
//           exercises: exercisesData.exercises.length ? exercisesData.exercises : prevData?.exercises || [],
//           date: exercisesData.date || prevData?.date || ''
//         }));
//         setMeals(client.meals || []);

//         setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//           isCurrentDay(exercise.day, exercisesData.date || '') ? index : -1
//         ).filter((index: number) => index !== -1));

//         setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);

//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();

//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Determine the current day in the cycle (based on the available days)
//     const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

//     // Return true if the current day in the cycle matches the exercise day
//     return dayNumber === currentDayInCycle;
//   };

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//   const currentExercise = clientData?.exercises && validIndex !== undefined
//     ? clientData.exercises[validIndex]
//     : undefined;

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;
















// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   const fetchClientData = async () => {
//     if (!user) {
//       router.push('/sign-in');
//       return;
//     }

//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//     try {
//       const response = await fetch(`/api/clientData?email=${userEmail}`, { method: 'GET' });

//       if (!response.ok) {
//         throw new Error('Failed to fetch client data');
//       }

//       const { clientData, exercises, date } = await response.json();
//       setClientData({ ...clientData, exercises, date });

//       const unlockedIndices = exercises.map((exercise: Exercise, index: number) =>
//         isCurrentDay(exercise.day, date) ? index : -1
//       ).filter((index: number) => index !== -1);

//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0);
//     } catch (error: any) {
//       console.error('Error fetching client data:', error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (isSignedIn) fetchClientData();
//     else router.push('/sign-in');
//   }, [isSignedIn]);

//   useEffect(() => {
//     console.log('Unlocked Exercise Indices after setting:', unlockedExerciseIndices);
//     console.log('Current Unlocked Index:', currentUnlockedIndex);

//     const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//     console.log('Valid Index:', validIndex);

//     const currentExercise = clientData?.exercises && validIndex !== undefined
//       ? clientData.exercises[validIndex]
//       : undefined;
//     console.log('Current Exercise:', currentExercise);
//   }, [unlockedExerciseIndices, currentUnlockedIndex, clientData]);





//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();

//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     console.log(`Assigned Date: ${assignedDate}`);
//     console.log(`Today's Date: ${today}`);
//     console.log(`Days since program started: ${diffDays}`);

//     const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     console.log(`Cycle Days: ${cycleDays}`);

//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];
//     console.log(`Current Day in Cycle: ${currentDayInCycle}`);

//     const isCurrent = dayNumber === currentDayInCycle;
//     console.log(`Is ${exerciseDay} the current day? ${isCurrent}`);

//     return isCurrent;
//   };

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//   const currentExercise = clientData?.exercises && validIndex !== undefined
//     ? clientData.exercises[validIndex]
//     : undefined;

//   console.log("Current Exercise:", currentExercise);

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;

























































// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   // useEffect(() => {
//   //   const fetchClientData = async () => {
//   //     if (!user) {
//   //       console.log('No user found, redirecting to sign-in page.');
//   //       router.push('/sign-in');
//   //       return;
//   //     }

//   //     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//   //     console.log('Fetching data for user:', userEmail);

//   //     try {
//   //       const [clientResponse, exercisesResponse] = await Promise.all([
//   //         fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//   //         fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//   //       ]);

//   //       if (!clientResponse.ok || !exercisesResponse.ok) {
//   //         throw new Error('Failed to fetch client data');
//   //       }

//   //       const client = await clientResponse.json();
//   //       const exercisesData = await exercisesResponse.json();
//   //       console.log('Client data:', client);
//   //       console.log('Exercises data:', exercisesData);

//   //       setClientData((prevData) => ({
//   //         ...client,
//   //         exercises: exercisesData.exercises.length ? exercisesData.exercises : prevData?.exercises || [],
//   //         date: exercisesData.date || prevData?.date || ''
//   //       }));
//   //       setMeals(client.meals || []);

//   //       setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//   //         isCurrentDay(exercise.day, exercisesData.date || '') ? index : -1
//   //       ).filter((index: number) => index !== -1));

//   //       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise

//   //     } catch (error: any) {
//   //       console.error('Error fetching client data:', error);
//   //       setError(error.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   if (isSignedIn) {
//   //     fetchClientData();
//   //   } else {
//   //     router.push('/sign-in');
//   //   }
//   // }, [user, router, isSignedIn]);





//   // useEffect(() => {
//   //   const fetchClientData = async () => {
//   //     if (!user) {
//   //       console.log('No user found, redirecting to sign-in page.');
//   //       router.push('/sign-in');
//   //       return;
//   //     }
  
//   //     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//   //     console.log('Fetching data for user:', userEmail);
  
//   //     try {
//   //       const [clientResponse, exercisesResponse] = await Promise.all([
//   //         fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//   //         fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//   //       ]);
  
//   //       if (!clientResponse.ok || !exercisesResponse.ok) {
//   //         throw new Error('Failed to fetch client data');
//   //       }
  
//   //       const client = await clientResponse.json();
//   //       const exercisesData = await exercisesResponse.json();
//   //       console.log('Client data:', client);
//   //       console.log('Exercises data:', exercisesData);
  
//   //       setClientData((prevData) => ({
//   //         ...client,
//   //         exercises: exercisesData.exercises.length ? exercisesData.exercises : prevData?.exercises || [],
//   //         date: exercisesData.date || prevData?.date || ''
//   //       }));
//   //       setMeals(client.meals || []);
  
//   //       const unlockedIndices = exercisesData.exercises.map((exercise: Exercise, index: number) =>
//   //         isCurrentDay(exercise.day, exercisesData.date || '') ? index : -1
//   //       ).filter((index: number) => index !== -1);
  
//   //       console.log('Unlocked Exercise Indices:', unlockedIndices);
  
//   //       setUnlockedExerciseIndices(unlockedIndices);
//   //       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
  
//   //     } catch (error: any) {
//   //       console.error('Error fetching client data:', error);
//   //       setError(error.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };
  
//   //   if (isSignedIn) {
//   //     fetchClientData();
//   //   } else {
//   //     router.push('/sign-in');
//   //   }
//   // }, [user, router, isSignedIn]);





//   useEffect(() => {
//     const fetchClientData = async () => {
//         if (!user) {
//             router.push('/sign-in');
//             return;
//         }

//         const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//         try {
//             const response = await fetch(`/api/clientData?email=${userEmail}`, { method: 'GET' });
            
//             if (!response.ok) {
//                 throw new Error('Failed to fetch client data');
//             }

//             const { clientData, exercises, date } = await response.json();
//             setClientData({ ...clientData, exercises, date });

//             const unlockedIndices = exercises.map((exercise: Exercise, index: number) =>
//                 isCurrentDay(exercise.day, date) ? index : -1
//             ).filter((index: number) => index !== -1);

//             setUnlockedExerciseIndices(unlockedIndices);
//             setCurrentUnlockedIndex(0);
//         } catch (error: any) {
//             console.error('Error fetching client data:', error);
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (isSignedIn) fetchClientData();
//     else router.push('/sign-in');
// }, [user, router, isSignedIn]);


    

  
// useEffect(() => {
//   console.log('Unlocked Exercise Indices after setting:', unlockedExerciseIndices);
//   console.log('Current Unlocked Index:', currentUnlockedIndex);

//   const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//   console.log('Valid Index:', validIndex);

//   const currentExercise = clientData?.exercises && validIndex !== undefined
//       ? clientData.exercises[validIndex]
//       : undefined;
//   console.log('Current Exercise:', currentExercise);
// }, [unlockedExerciseIndices, currentUnlockedIndex, clientData]);

  




//   // const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//   //   const assignedDate = new Date(programStartDate);
//   //   const today = new Date();

//   //   const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//   //   // Calculate the number of days since the program started
//   //   const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//   //   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   //   // Determine the current day in the cycle (based on the available days)
//   //   const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//   //   const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

//   //   // Return true if the current day in the cycle matches the exercise day
//   //   return dayNumber === currentDayInCycle;
//   // };







//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();
  
//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);
  
//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
//     console.log(`Assigned Date: ${assignedDate}`);
//     console.log(`Today's Date: ${today}`);
//     console.log(`Days since program started: ${diffDays}`);
  
//     // Determine the current day in the cycle (based on the available days)
//     const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     console.log(`Cycle Days: ${cycleDays}`);
  
//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];
//     console.log(`Current Day in Cycle: ${currentDayInCycle}`);
  
//     // Return true if the current day in the cycle matches the exercise day
//     const isCurrent = dayNumber === currentDayInCycle;
//     console.log(`Is ${exerciseDay} the current day? ${isCurrent}`);
  
//     return isCurrent;
//   };
  







//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//   const currentExercise = clientData?.exercises && validIndex !== undefined
//     ? clientData.exercises[validIndex]
//     : undefined;

//   // Debugging log to check current exercise data
//   console.log("Current Exercise:", currentExercise);

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-hidden">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;


























// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   // Fetching logic from the second file integrated here
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         setClientData((prevData) => ({
//           ...client,
//           exercises: exercisesData.exercises.length ? exercisesData.exercises : prevData?.exercises || [],
//           date: exercisesData.date || prevData?.date || ''
//         }));
//         setMeals(client.meals || []);

//         const unlockedIndices = exercisesData.exercises.map((exercise: Exercise, index: number) =>
//           isCurrentDay(exercise.day, exercisesData.date || '') ? index : -1
//         ).filter((index: number) => index !== -1);

//         setUnlockedExerciseIndices(unlockedIndices);
//         setCurrentUnlockedIndex(0);

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);

//   useEffect(() => {
//     console.log('Unlocked Exercise Indices after setting:', unlockedExerciseIndices);
//     console.log('Current Unlocked Index:', currentUnlockedIndex);

//     const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//     console.log('Valid Index:', validIndex);

//     const currentExercise = clientData?.exercises && validIndex !== undefined
//       ? clientData.exercises[validIndex]
//       : undefined;
//     console.log('Current Exercise:', currentExercise);
//   }, [unlockedExerciseIndices, currentUnlockedIndex, clientData]);

//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();

//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     console.log(`Assigned Date: ${assignedDate}`);
//     console.log(`Today's Date: ${today}`);
//     console.log(`Days since program started: ${diffDays}`);

//     const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     console.log(`Cycle Days: ${cycleDays}`);

//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];
//     console.log(`Current Day in Cycle: ${currentDayInCycle}`);

//     const isCurrent = dayNumber === currentDayInCycle;
//     console.log(`Is ${exerciseDay} the current day? ${isCurrent}`);

//     return isCurrent;
//   };

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//   const currentExercise = clientData?.exercises && validIndex !== undefined
//     ? clientData.exercises[validIndex]
//     : undefined;

//   console.log("Current Exercise:", currentExercise);

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;





























// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string;
// }

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);

//   // Fetch Client Data
//   useEffect(() => {
//     const fetchData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       try {
//         const response = await fetch(`/api/client?email=${user.email}`, { method: 'GET' });
//         if (!response.ok) throw new Error('Failed to fetch client data');
        
//         const data = await response.json();
//         setClientData(data);
//         setUnlockedDays(data.exercises.map((exercise: Exercise) => parseInt(exercise.day.split(' ')[1])));
//       } catch (error) {
//         setError('Error fetching client data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [user, router]);

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   // Get the exercises for the currently selected day
//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome, {clientData?.fullName || 'Guest'}!
//         </h1>
//       </div>

//       {/* Days Row */}
//       <div className="flex justify-center mb-4">
//         {Array.from({ length: 6 }, (_, i) => `Day ${i + 1}`).map((day, index) => (
//           <button
//             key={day}
//             className={`mx-2 py-2 px-4 rounded ${unlockedDays.includes(index + 1) ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === day ? 'border-2 border-blue-500' : ''}`}
//             disabled={!unlockedDays.includes(index + 1)}
//             onClick={() => handleDaySelection(day)}
//           >
//             {unlockedDays.includes(index + 1) ? day : <FontAwesomeIcon icon={faLock} />}
//           </button>
//         ))}
//       </div>

//       {/* Exercise Display */}
//       {selectedDay && currentExercise && (
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//           <div className="flex justify-center items-center mb-4">
//             <div className="mx-2">
//               <FontAwesomeIcon icon={faWeightHanging} />
//               {currentExercise.weights?.join(', ')} kg
//             </div>
//             <div className="mx-2">
//               <FontAwesomeIcon icon={faRedoAlt} />
//               {currentExercise.reps?.join(', ')} reps
//             </div>
//           </div>
//           {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//         </div>
//       )}

//       {/* Navigation Buttons */}
//       {selectedDay && exercisesForDay.length > 1 && (
//         <div className="flex justify-center mb-4">
//           <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </button>
//           <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//             <FontAwesomeIcon icon={faArrowRight} />
//           </button>
//         </div>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



















// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]); // Track exercises separately
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number>(0);

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const isNew = await checkAndAddEmail(userEmail);

//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }), // Correct fetch endpoint
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         console.log('Fetched client data:', client);
//         console.log('Fetched exercises data:', exercisesData);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, client.date); // Compare exercises and program start date
//         } else {
//           setError('No exercises data found for this client.');
//         }

//         if ((isNew && !client.hasPaid) || !client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate); // Start date of the program
//     const today = new Date();

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Unique exercise days
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     // Set unlocked days and the current day in the cycle
//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);

//     console.log('Unlocked Days:', cycleDays);
//     console.log('Current Day in Cycle:', currentDay);
//   };

// // Function to check if today is part of the exercise cycle
// const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//   const assignedDate = new Date(programStartDate); // This is '2024-09-07'
//   const today = new Date(); // Today's date

//   // Extract day number from exerciseDay, assuming format 'Day 1', 'Day 2', etc.
//   const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//   // Calculate difference in days between today and the assigned date
//   const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   // Get the unique set of exercise days (e.g., 'Day 1', 'Day 2')
//   const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));

//   // Calculate which day of the cycle today corresponds to
//   const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

//   console.log('Assigned Date:', assignedDate);
//   console.log('Today:', today);
//   console.log('DiffDays:', diffDays);
//   console.log('Current Day in Cycle:', currentDayInCycle);

//   // Return true if the current day in the cycle matches the exercise day
//   return dayNumber === currentDayInCycle;
// };


//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome, {clientData?.fullName || 'Guest'}!
//         </h1>
//       </div>

//       {/* Days Row */}
//       <div className="flex justify-center mb-4">
//         {unlockedDays.map((dayNumber) => {
//           const dayName = `Day ${dayNumber}`;
//           return (
//             <button
//               key={dayName}
//               className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//               onClick={() => handleDaySelection(dayName)}
//             >
//               {dayNumber === currentDayInCycle ? (
//                 <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//               ) : (
//                 <FontAwesomeIcon icon={faLock} />
//               )}
//             </button>
//           );
//         })}
//       </div>

//       {/* Exercise Display */}
//       {selectedDay && currentExercise && (
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//           <div className="flex justify-center items-center mb-4">
//             <div className="mx-2">
//               <FontAwesomeIcon icon={faWeightHanging} />
//               {currentExercise.weights?.join(', ')} kg
//             </div>
//             <div className="mx-2">
//               <FontAwesomeIcon icon={faRedoAlt} />
//               {currentExercise.reps?.join(', ')} reps
//             </div>
//           </div>
//           {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//         </div>
//       )}

//       {/* Navigation Buttons */}
//       {selectedDay && exercisesForDay.length > 1 && (
//         <div className="flex justify-center mb-4">
//           <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </button>
//           <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//             <FontAwesomeIcon icon={faArrowRight} />
//           </button>
//         </div>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;















//////////////////////////////               wwwwwwwwwwwworking                    ///////////////////////// 



// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         console.log('Fetched client data:', client);
//         console.log('Fetched exercises data:', exercisesData);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date); // Compare exercises and program start date
//         } else {
//           setError('No exercises data found for this client.');
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Unique exercise days
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     // Set unlocked days and the current day in the cycle
//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);

//     console.log('Unlocked Days:', cycleDays);
//     console.log('Current Day in Cycle:', currentDay);
//   };

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome, {clientData?.fullName || 'Guest'}!
//         </h1>
//       </div>

//       {/* Days Row */}
//       <div className="flex justify-center mb-4">
//         {unlockedDays.map((dayNumber) => {
//           const dayName = `Day ${dayNumber}`;
//           return (
//             <button
//               key={dayName}
//               className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//               onClick={() => handleDaySelection(dayName)}
//             >
//               {dayNumber === currentDayInCycle ? (
//                 <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//               ) : (
//                 <FontAwesomeIcon icon={faLock} />
//               )}
//             </button>
//           );
//         })}
//       </div>

//       {/* Exercise Display */}
//       {selectedDay && currentExercise && (
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//           <div className="flex justify-center items-center mb-4">
//             <div className="mx-2">
//               <FontAwesomeIcon icon={faWeightHanging} />
//               {currentExercise.weights?.join(', ')} kg
//             </div>
//             <div className="mx-2">
//               <FontAwesomeIcon icon={faRedoAlt} />
//               {currentExercise.reps?.join(', ')} reps
//             </div>
//           </div>
//           {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//         </div>
//       )}

//       {/* Navigation Buttons */}
//       {selectedDay && exercisesForDay.length > 1 && (
//         <div className="flex justify-center mb-4">
//           <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </button>
//           <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//             <FontAwesomeIcon icon={faArrowRight} />
//           </button>
//         </div>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



















//////////////////////////////               wwwwwwwwwwwworking                    ///////////////////////// 
//////////////////////////////               wwwwwwwwwwwworking                    ///////////////////////// 



// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faDumbbell as faDumbbellSolid } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface Meal {
//   id: string;
//   name: string;
//   type: string; // e.g., Proteins, Carbs, etc.
//   calories?: number;
//   image?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [meals, setMeals] = useState<Meal[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         console.log('Fetched client data:', client);
//         console.log('Fetched exercises data:', exercisesData);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
//         } else {
//           setError('No exercises data found for this client.');
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Fetch Meals Data
//   const fetchMeals = async () => {
//     if (!user) return;

//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) return;

//     try {
//       const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch meals');
//       }

//       const data = await response.json();
//       setMeals(data.meals || []);
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Error fetching meals:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching meals');
//         setError('Unknown error fetching meals');
//       }
//     }
//   };

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Unique exercise days
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     // Set unlocked days and the current day in the cycle
//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);

//     console.log('Unlocked Days:', cycleDays);
//     console.log('Current Day in Cycle:', currentDay);
//   };

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   const toggleView = () => setShowMeals(!showMeals); // Toggle between meals and exercises

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           Welcome Champ, {clientData?.fullName || 'Champ'}!
//         </h1>

//         <div className="mb-4">
//           {/* Toggle between Meals and Exercises with Icons */}
//           <button
//             className={`px-4 py-2 rounded-lg mr-4 ${!showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={toggleView}
//           >
//             <FontAwesomeIcon icon={faDumbbellSolid} className="mr-2" />
//             Exercises
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={fetchMeals}
//           >
//             <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//             Meals
//           </button>
//         </div>

//         {showMeals ? (
//           // Meals Section
//           <div className="meals-section">
//             {meals.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {meals.map(meal => (
//                   <div key={meal.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
//                     <p>{meal.type}</p>
//                     {meal.calories && <p>Calories: {meal.calories}</p>}
//                     {meal.image && (
//                       <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2" />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No meals assigned yet.</p>
//             )}
//           </div>
//         ) : (
//           // Exercises Section
//           <>
//             <div className="flex justify-center mb-4">
//               {unlockedDays.map((dayNumber) => {
//                 const dayName = `Day ${dayNumber}`;
//                 return (
//                   <button
//                     key={dayName}
//                     className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                     onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)} // Only clickable if unlocked
//                     disabled={dayNumber !== currentDayInCycle} // Disabled if locked
//                   >
//                     {dayNumber === currentDayInCycle ? (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                       </>
//                     ) : (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={faLock} />
//                       </>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {selectedDay && currentExercise && (
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//                 <div className="flex justify-center items-center mb-4">
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faWeightHanging} />
//                     {currentExercise.weights?.join(', ')} kg
//                   </div>
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faRedoAlt} />
//                     {currentExercise.reps?.join(', ')} reps
//                   </div>
//                 </div>
//                 {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//               </div>
//             )}

//             {selectedDay && exercisesForDay.length > 1 && (
//               <div className="flex justify-center mb-4">
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;






















////////good


// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faDumbbell as faDumbbellSolid } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface Meal {
//   id: string;
//   name: string;
//   type: string; // e.g., Proteins, Carbs, etc.
//   calories?: number;
//   image?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [meals, setMeals] = useState<Meal[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
//         } else {
//           setError('No exercises data found for this client.');
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Fetch Meals Data
//   const fetchMeals = async () => {
//     if (!user) return;
  
//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) return;
  
//     try {
//       const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//         method: 'GET',
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch meals');
//       }
  
//       const data = await response.json();
//       setMeals(data.meals || []);
//     } catch (error: unknown) {
//       // Use a type guard to check if 'error' is an instance of 'Error'
//       if (error instanceof Error) {
//         console.error('Error fetching meals:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching meals');
//         setError('Unknown error occurred while fetching meals');
//       }
//     }
//   };
  

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);
//   };

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   const toggleView = () => {
//     setShowMeals(!showMeals);
//     if (!showMeals) {
//       fetchMeals(); // Fetch meals when toggling to the meals view
//     }
//   };

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto p-4 text-center">
//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           Welcome Champ, {clientData?.fullName || 'Champ'}!
//         </h1>

//         <div className="mb-4 flex justify-center space-x-4">
//           {/* Toggle between Meals and Exercises with Icons */}
//           <button
//             className={`p-4 rounded-lg ${!showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={toggleView}
//           >
//             <FontAwesomeIcon icon={faDumbbellSolid} className="mr-2" />
//             Exercises
//           </button>
//           <button
//             className={`p-4 rounded-lg ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={toggleView}
//           >
//             <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//             Meals
//           </button>
//         </div>

//         {showMeals ? (
//           <div className="meals-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {meals.length > 0 ? (
//               meals.map(meal => (
//                 <div key={meal.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                   <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
//                   <p>{meal.type}</p>
//                   {meal.calories && <p>Calories: {meal.calories}</p>}
//                   {meal.image && (
//                     <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2 rounded-md" />
//                   )}
//                 </div>
//               ))
//             ) : (
//               <p>No meals assigned yet.</p>
//             )}
//           </div>
//         ) : (
//           <>
//             <div className="flex justify-center mb-4">
//               {unlockedDays.map((dayNumber) => {
//                 const dayName = `Day ${dayNumber}`;
//                 return (
//                   <button
//                     key={dayName}
//                     className={`mx-2 py-2 px-4 rounded-lg ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                     onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)}
//                     disabled={dayNumber !== currentDayInCycle}
//                   >
//                     {dayNumber === currentDayInCycle ? (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                       </>
//                     ) : (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={faLock} />
//                       </>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {selectedDay && currentExercise && (
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//                 <div className="flex justify-center items-center mb-4">
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faWeightHanging} />
//                     {currentExercise.weights?.join(', ')} kg
//                   </div>
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faRedoAlt} />
//                     {currentExercise.reps?.join(', ')} reps
//                   </div>
//                 </div>
//                 {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto rounded-md" />}
//               </div>
//             )}

//             {selectedDay && exercisesForDay.length > 1 && (
//               <div className="flex justify-center mb-4">
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded-lg" onClick={handlePreviousExercise}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded-lg" onClick={handleNextExercise}>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



















//////////////good too

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faDumbbell as faDumbbellSolid } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface Meal {
//   id: string;
//   name: string;
//   type: string;
//   calories?: number;
//   image?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [meals, setMeals] = useState<Meal[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         console.log('Fetched client data:', client);
//         console.log('Fetched exercises data:', exercisesData);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
//         } else {
//           setError('No exercises data found for this client.');
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Fetch Meals Data
//   const fetchMeals = async () => {
//     if (!user) return;

//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) return;

//     try {
//       const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch meals');
//       }

//       const data = await response.json();
      
//       // Accessing meals correctly from the array
//       const mealsList = Array.isArray(data.meals) && data.meals.length > 0 ? data.meals[0] : [];

//       setMeals(mealsList);
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Error fetching meals:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching meals');
//         setError('Unknown error fetching meals');
//       }
//     }
//   };

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Unique exercise days
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     // Set unlocked days and the current day in the cycle
//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);

//     console.log('Unlocked Days:', cycleDays);
//     console.log('Current Day in Cycle:', currentDay);
//   };

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   const toggleView = () => setShowMeals(!showMeals); // Toggle between meals and exercises

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           Welcome Champ, {clientData?.fullName || 'Champ'}!
//         </h1>

//         <div className="mb-4">
//           {/* Toggle between Meals and Exercises with Icons */}
//           <button
//             className={`px-4 py-2 rounded-lg mr-4 ${!showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={toggleView}
//           >
//             <FontAwesomeIcon icon={faDumbbellSolid} className="mr-2" />
//             Exercises
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={fetchMeals}
//           >
//             <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//             Meals
//           </button>
//         </div>

//         {showMeals ? (
//           // Meals Section
//           <div className="meals-section">
//             {meals.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {meals.map((meal, index) => (
//                   <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
//                     <p>Type: {meal.type}</p>
//                     {meal.calories && <p>Calories: {meal.calories}</p>}
//                     {meal.image && (
//                       <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2" />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No meals assigned yet.</p>
//             )}
//           </div>
//         ) : (
//           // Exercises Section
//           <>
//             <div className="flex justify-center mb-4">
//               {unlockedDays.map((dayNumber) => {
//                 const dayName = `Day ${dayNumber}`;
//                 return (
//                   <button
//                     key={dayName}
//                     className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                     onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)} // Only clickable if unlocked
//                     disabled={dayNumber !== currentDayInCycle} // Disabled if locked
//                   >
//                     {dayNumber === currentDayInCycle ? (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                       </>
//                     ) : (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={faLock} />
//                       </>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {selectedDay && currentExercise && (
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//                 <div className="flex justify-center items-center mb-4">
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faWeightHanging} />
//                     {currentExercise.weights?.join(', ')} kg
//                   </div>
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faRedoAlt} />
//                     {currentExercise.reps?.join(', ')} reps
//                   </div>
//                 </div>
//                 {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//               </div>
//             )}

//             {selectedDay && exercisesForDay.length > 1 && (
//               <div className="flex justify-center mb-4">
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;











// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faDumbbell as faDumbbellSolid } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface Meal {
//   id: string;
//   name: string;
//   type: string;
//   calories?: number;
//   image?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [meals, setMeals] = useState<Meal[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         console.log('Fetched client data:', client);
//         console.log('Fetched exercises data:', exercisesData);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
//         } else {
//           setError('No exercises data found for this client.');
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Fetch Meals Data
//   const fetchMeals = async () => {
//     if (!user) return;

//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) return;

//     try {
//       const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch meals');
//       }

//       const data = await response.json();
      
//       // Accessing meals correctly from the array
//       const mealsList = Array.isArray(data.meals) && data.meals.length > 0 ? data.meals[0] : [];

//       setMeals(mealsList);
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Error fetching meals:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching meals');
//         setError('Unknown error fetching meals');
//       }
//     }
//   };

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Unique exercise days
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     // Set unlocked days and the current day in the cycle
//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);

//     console.log('Unlocked Days:', cycleDays);
//     console.log('Current Day in Cycle:', currentDay);
//   };

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   const toggleView = () => setShowMeals(!showMeals); // Toggle between meals and exercises

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           Welcome Champ, {clientData?.fullName || 'Champ'}!
//         </h1>

//         <div className="mb-4">
//           {/* Toggle between Meals and Exercises with Icons */}
//           <button
//             className={`px-4 py-2 rounded-lg mr-4 ${!showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={toggleView}
//           >
//             <FontAwesomeIcon icon={faDumbbellSolid} className="mr-2" />
//             Exercises
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={fetchMeals}
//           >
//             <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//             Meals
//           </button>
//         </div>

//         {showMeals ? (
//           // Meals Section
//           <div className="meals-section">
//             {meals.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {meals.map((meal, index) => (
//                   <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
//                     <p>Type: {meal.type}</p>
//                     {meal.calories && <p>Calories: {meal.calories}</p>}
//                     {meal.image && (
//                       <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2" />
//                     )}
//                     {/* Add a button for each meal */}
//                     <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Select Meal</button>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No meals assigned yet.</p>
//             )}
//           </div>
//         ) : (
//           // Exercises Section
//           <>
//             <div className="flex justify-center mb-4">
//               {unlockedDays.map((dayNumber) => {
//                 const dayName = `Day ${dayNumber}`;
//                 return (
//                   <button
//                     key={dayName}
//                     className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                     onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)} // Only clickable if unlocked
//                     disabled={dayNumber !== currentDayInCycle} // Disabled if locked
//                   >
//                     {dayNumber === currentDayInCycle ? (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                       </>
//                     ) : (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={faLock} />
//                       </>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {selectedDay && currentExercise && (
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//                 <div className="flex justify-center items-center mb-4">
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faWeightHanging} />
//                     {currentExercise.weights?.join(', ')} kg
//                   </div>
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faRedoAlt} />
//                     {currentExercise.reps?.join(', ')} reps
//                   </div>
//                 </div>
//                 {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//               </div>
//             )}

//             {selectedDay && exercisesForDay.length > 1 && (
//               <div className="flex justify-center mb-4">
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;








// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faCheck } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface Meal {
//   id: string;
//   name: string;
//   type: string;
//   calories?: number;
//   image?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [meals, setMeals] = useState<Meal[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [selectedMeals, setSelectedMeals] = useState<Meal[]>([]); // For selecting meals
//   const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         console.log('Fetched client data:', client);
//         console.log('Fetched exercises data.date:', exercisesData.date);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
//         } else {
//           setError('No exercises data found for this client.');
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Fetch Meals Data
//   const fetchMeals = async () => {
//     if (!user) return;

//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) return;

//     try {
//       const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch meals');
//       }

//       const data = await response.json();
//       const mealsList = Array.isArray(data.meals) && data.meals.length > 0 ? data.meals.flat() : []; // Flattening meals array

//       setMeals(mealsList);
//       setShowMeals(true); // Set to true to display the meals section
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Error fetching meals:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching meals');
//         setError('Unknown error fetching meals');
//       }
//     }
//   };

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();
  
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
//     // Sort cycleDays to ensure days are in correct order (Day 1, Day 2, Day 3, ...)
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);
    
//     // Calculate currentDay based on sorted cycleDays
//     const currentDay = cycleDays[diffDays % cycleDays.length];
  
//     console.log('Sorted cycleDays:', cycleDays);
//     console.log('Calculated currentDay:', currentDay);
  
//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);
//   };
  

//   // Meal Selection Logic
//   const handleMealSelection = (meal: Meal) => {
//     if (selectedMeals.includes(meal)) {
//       setSelectedMeals(selectedMeals.filter(m => m.id !== meal.id)); // Deselect meal
//     } else if (selectedMeals.length < 6) {
//       setSelectedMeals([...selectedMeals, meal]); // Select meal
//     }
//   };

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   const containerStyle = {
//     minHeight: 'calc(90vh - 4rem)',
//     backgroundColor: 'var(--background-color)',
//     color: 'var(--text-color)',
//   };


//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto text-center w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4" style={containerStyle}>
//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           Welcome Champ, {clientData?.fullName || 'Champ'}!
//         </h1>

//         <div className="mb-4">
//           {/* Toggle between Meals and Exercises with Icons */}
//           <button
//             className={`px-4 py-2 rounded-lg mr-4 ${!showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={() => setShowMeals(false)} // Toggle to show exercises
//           >
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             Exercises
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={fetchMeals} // Fetch and toggle to show meals
//           >
//             <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//             Meals
//           </button>
//         </div>

//         {showMeals ? (
//           // Meals Section
//           <div className="meals-section">
//             {meals.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {meals.map((meal, index) => (
//                   <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
//                     <p>Type: {meal.type}</p>
//                     {meal.calories && <p>Calories: {meal.calories}</p>}
//                     {meal.image && (
//                       <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2" />
//                     )}
//                     {/* Add a button for each meal */}
//                     <button
//                       onClick={() => handleMealSelection(meal)}
//                       className={`mt-4 px-4 py-2 rounded-lg ${selectedMeals.includes(meal) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}
//                     >
//                       {selectedMeals.includes(meal) ? (
//                         <>
//                           <FontAwesomeIcon icon={faCheck} className="mr-2" /> Selected
//                         </>
//                       ) : (
//                         'Select Meal'
//                       )}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No meals assigned yet.</p>
//             )}
//           </div>
//         ) : (
//           // Exercises Section
//           <>
//             <div className="flex justify-center mb-4">
//               {unlockedDays.map((dayNumber) => {
//                 const dayName = `Day ${dayNumber}`;
//                 return (
//                   <button
//                     key={dayName}
//                     className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                     onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)}
//                     disabled={dayNumber !== currentDayInCycle}
//                   >
//                     {dayNumber === currentDayInCycle ? (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                       </>
//                     ) : (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={faLock} />
//                       </>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* {selectedDay && currentExercise && (
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//                 <div className="flex justify-center items-center mb-4">
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faWeightHanging} />
//                     {currentExercise.weights?.join(', ')} kg
//                   </div>
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faRedoAlt} />
//                     {currentExercise.reps?.join(', ')} reps
//                   </div>
//                 </div>
//                 {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//               </div>
//             )} */}
//                 {selectedDay && currentExercise && (
//                   <div className="text-center mb-6">
//                     <h2 className={`text-2xl font-bold mb-4 ${!currentExercise.reps || !currentExercise.weights ? 'blur-md' : ''}`}>
//                       {currentExercise.name}
//                     </h2>
                    
//                     {/* Check if both reps and weights are available, otherwise censor the exercise */}
//                     {currentExercise.reps && currentExercise.weights ? (
//                       <div className="flex justify-center items-center mb-4">
//                         <div className="mx-2">
//                           <FontAwesomeIcon icon={faWeightHanging} />
//                           {currentExercise.weights?.join(', ')} kg
//                         </div>
//                         <div className="mx-2">
//                           <FontAwesomeIcon icon={faRedoAlt} />
//                           {currentExercise.reps?.join(', ')} reps
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="text-red-500 text-lg">
//                         {language === 'en' ? (
//                           <>
//                             <p>Head to exercises and start to unlock.</p>
//                           </>
//                         ) : (
//                           <>
//                             <p>اتجه إلى التمارين وابدأ لتفتحها.</p>
//                           </>
//                         )}
//                       </div>
//                     )}

//                     {currentExercise.gif ? (
//                       <img
//                         src={currentExercise.gif}
//                         alt={currentExercise.name}
//                         className={`w-32 h-32 mx-auto ${!currentExercise.reps || !currentExercise.weights ? 'blur-lg' : ''}`}
//                       />
//                     ) : (
//                       'No GIF available'
//                     )}
//                   </div>
//                 )}



//             {selectedDay && exercisesForDay.length > 1 && (
//               <div className="flex justify-center mb-4">
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;














=======
>>>>>>> c7cdd42 (Final V1)








// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useUser } from '@clerk/nextjs';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';


// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user, isSignedIn } = useUser();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         console.log(data.message);
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress;
//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const isNew = await checkAndAddEmail(userEmail);

//         const response = await fetch(`/api/client?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await response.json();
//         console.log('Fetched client data:', client);

//         if ((isNew && !client.hasPaid) || !client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//         }

//         setClientData(client);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching client data:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching client data');
//           setError('Unknown error fetching client data');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

    // const fetchMeals = async () => {
    //   if (!user) return;

    //   const userEmail = user.primaryEmailAddress?.emailAddress;
    //   if (!userEmail) return;

    //   try {
    //     const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
    //       method: 'GET',
    //     });

    //     if (!response.ok) {
    //       const errorData = await response.json();
    //       throw new Error(errorData.message || 'Failed to fetch meals');
    //     }

    //     const data = await response.json();
    //     setMeals(data.meals || []);
    //   } catch (error) {
    //     if (error instanceof Error) {
    //       console.error('Error fetching meals:', error.message);
    //       setError(error.message);
    //     } else {
    //       console.error('Unknown error fetching meals');
    //       setError('Unknown error fetching meals');
    //     }
    //   }
    // };

//     if (isSignedIn) {
//       fetchClientData();
//       fetchMeals();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, isSignedIn, router]);

//   useEffect(() => {
//     if (clientData?.exercises) {
//       const unlockedIndices = clientData.exercises.map((exercise, index) =>
//         isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//       ).filter(index => index !== -1);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     }
//   }, [clientData, clientData?.date]);

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);

//     // Calculate the date for the current exercise day
//     const exerciseDate = new Date(assigned);
//     exerciseDate.setDate(exerciseDate.getDate() + dayNumber - 1);

//     // Convert today and exercise date to 'YYYY-MM-DD' for comparison
//     const todayString = today.toISOString().split('T')[0];
//     const exerciseDateString = exerciseDate.toISOString().split('T')[0];

//     return todayString === exerciseDateString;
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];


//   return (
//     <DashboardLayout>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">

//               {days.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {days.sort().map(day => (
//                     <button
//                       key={day}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                       {!isCurrentDay(day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise.name, language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;








// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';


// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         // console.log(data.message);
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const checkPaymentStatus = async (email: string) => {
//       try {
//         const response = await fetch('/api/checkPaymentStatus', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });
    
//         if (!response.ok) {
//           throw new Error('Failed to check payment status');
//         }
    
//         const data = await response.json();
//         return data.hasPaid;
//       } catch (error) {
//         console.error('Error checking payment status:', error);
//         throw error;
//       }
//     };
    

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) {
//         // console.log('No user email found, skipping payment check');
//         setLoading(false);
//         return;
//       }

//       try {
//         const isNew = await checkAndAddEmail(userEmail);

//         const response = await fetch(`/api/client?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await response.json();
//         // console.log('Fetched client data:', client);

//         const hasPaid = await checkPaymentStatus(userEmail);

//         // console.log('Client payment status:', hasPaid);
//         // if ((isNew && !hasPaid) || !hasPaid) {
//         //     console.log('Redirecting to payments page');
//         //     router.push('/dashboard/payments');
//         //     return;
//         // }
//         if (!client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//       }
//         setClientData(client);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching client data:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching client data');
//           setError('Unknown error fetching client data');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchMeals = async () => {
//       if (!user) return;

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) return;

//       try {
//         const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch meals');
//         }

//         const data = await response.json();
//         setMeals(data.meals || []);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching meals:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching meals');
//           setError('Unknown error fetching meals');
//         }
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//       fetchMeals();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, isSignedIn, router]);

//   useEffect(() => {
//     if (clientData?.exercises) {
//       const unlockedIndices = clientData.exercises.map((exercise, index) =>
//         isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//       ).filter(index => index !== -1);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     }
//   }, [clientData, clientData?.date]);

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   // const isCurrentDay = (day: string, assignedDate: string): boolean => {
//   //   const assigned = new Date(assignedDate);
//   //   const today = new Date();
//   //   const dayNumber = parseInt(day.split(' ')[1], 10);

//   //   // Calculate the date for the current exercise day
//   //   const exerciseDate = new Date(assigned);
//   //   exerciseDate.setDate(exerciseDate.getDate() + dayNumber - 1);

//   //   // Convert today and exercise date to 'YYYY-MM-DD' for comparison
//   //   const todayString = today.toISOString().split('T')[0];
//   //   const exerciseDateString = exerciseDate.toISOString().split('T')[0];

//   //   return todayString === exerciseDateString;
//   // };

//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);

//     // Calculate the number of days since the assigned date
//     const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));

//     // Determine the day in the current rotation
//     const rotatedDay = ((diffDays % days.length) + 1);

//     // Check if the rotated day matches the current day
//     return dayNumber === rotatedDay;
// };


//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];


//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">

//               {days.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {days.sort().map(day => (
//                     <button
//                       key={day}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                       {!isCurrentDay(day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise.name, language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;















// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
<<<<<<< HEAD
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faCheck, faRunning } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

=======
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         // console.log(data.message);
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const checkPaymentStatus = async (email: string) => {
//       try {
//         const response = await fetch('/api/checkPaymentStatus', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });
    
//         if (!response.ok) {
//           throw new Error('Failed to check payment status');
//         }
    
//         const data = await response.json();
//         return data.hasPaid;
//       } catch (error) {
//         console.error('Error checking payment status:', error);
//         throw error;
//       }
//     };
    

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) {
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`/api/client?email=${userEmail}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch client data');
//       }

//       const client = await response.json();
//       console.log('Fetched client data:', client); // <-- Add this line to debug

//       if (!client.hasPaid) {
//         router.push('/dashboard/payments');
//         return;
//       }
//       setClientData(client);
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Error fetching client data:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching client data');
//         setError('Unknown error fetching client data');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//     const fetchMeals = async () => {
//       if (!user) return;

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) return;

//       try {
//         const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch meals');
//         }

//         const data = await response.json();
//         setMeals(data.meals || []);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching meals:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching meals');
//           setError('Unknown error fetching meals');
//         }
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//       fetchMeals();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, isSignedIn, router]);

//   useEffect(() => {
//     if (clientData?.exercises) {
//       const unlockedIndices = clientData.exercises.map((exercise, index) =>
//         isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//       ).filter(index => index !== -1);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     }
//   }, [clientData, clientData?.date]);

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   // const isCurrentDay = (day: string, assignedDate: string): boolean => {
//   //   const assigned = new Date(assignedDate);
//   //   const today = new Date();
//   //   const dayNumber = parseInt(day.split(' ')[1], 10);

//   //   // Calculate the number of days since the assigned date
//   //   const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));

//   //   // Determine the day in the current rotation
//   //   const rotatedDay = ((diffDays % days.length) + 1);

//   //   // Check if the rotated day matches the current day
//   //   return dayNumber === rotatedDay;
//   // };

//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);
  
//     // Calculate the number of days since the assigned date
//     const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));
  
//     // Adjust the day number for rotation (subtracting 1 so that Day 1 corresponds to the assigned date)
//     const rotatedDay = ((diffDays % days.length) + 1);
  
//     // Check if the rotated day matches the current day
//     return dayNumber === rotatedDay;
//   };
  


//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">

//               {days.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {days.sort().map(day => (
//                     <button
//                       key={day}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                       {!isCurrentDay(day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise.name, language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



































// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const checkPaymentStatus = async (email: string) => {
//       try {
//         const response = await fetch('/api/checkPaymentStatus', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });
    
//         if (!response.ok) {
//           throw new Error('Failed to check payment status');
//         }
    
//         const data = await response.json();
//         return data.hasPaid;
//       } catch (error) {
//         console.error('Error checking payment status:', error);
//         throw error;
//       }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(`/api/client?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await response.json();
//         if (!client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//         }
//         setClientData(client);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching client data:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching client data');
//           setError('Unknown error fetching client data');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchMeals = async () => {
//       if (!user) return;

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) return;

//       try {
//         const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch meals');
//         }

//         const data = await response.json();
//         setMeals(data.meals || []);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching meals:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching meals');
//           setError('Unknown error fetching meals');
//         }
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//       fetchMeals();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, isSignedIn, router]);

//   useEffect(() => {
//     if (clientData?.exercises) {
//       const unlockedIndices = clientData.exercises.map((exercise, index) =>
//         isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//       ).filter(index => index !== -1);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     }
//   }, [clientData, clientData?.date]);

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);
  
//     // Calculate the number of days since the assigned date
//     const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));
  
//     // Adjust the day number for rotation (subtracting 1 so that Day 1 corresponds to the assigned date)
//     const rotatedDay = ((diffDays % days.length) + 1);
  
//     // Check if the rotated day matches the current day
//     return dayNumber === rotatedDay;
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {days.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {days.sort().map(day => (
//                     <button
//                       key={day}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                       {!isCurrentDay(day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise.name, language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;











// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const checkPaymentStatus = async (email: string) => {
//       try {
//         const response = await fetch('/api/checkPaymentStatus', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });
    
//         if (!response.ok) {
//           throw new Error('Failed to check payment status');
//         }
    
//         const data = await response.json();
//         return data.hasPaid;
//       } catch (error) {
//         console.error('Error checking payment status:', error);
//         throw error;
//       }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(`/api/client?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await response.json();
//         if (!client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//         }
//         setClientData(client);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching client data:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching client data');
//           setError('Unknown error fetching client data');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchMeals = async () => {
//       if (!user) return;

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) return;

//       try {
//         const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch meals');
//         }

//         const data = await response.json();
//         setMeals(data.meals || []);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching meals:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching meals');
//           setError('Unknown error fetching meals');
//         }
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//       fetchMeals();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, isSignedIn, router]);

//   useEffect(() => {
//     if (clientData?.exercises) {
//       const unlockedIndices = clientData.exercises.map((exercise, index) =>
//         isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//       ).filter(index => index !== -1);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     }
//   }, [clientData, clientData?.date]);

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);
  
//     // Calculate the number of days since the assigned date
//     const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));
  
//     // Adjust the day number for rotation (subtracting 1 so that Day 1 corresponds to the assigned date)
//     const rotatedDay = ((diffDays % days.length) + 1);
  
//     // Check if the rotated day matches the current day
//     return dayNumber === rotatedDay;
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {days.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {days.sort().map(day => (
//                     <button
//                       key={day}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                       {!isCurrentDay(day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise.name, language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



















// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const checkPaymentStatus = async (email: string) => {
//       try {
//         const response = await fetch('/api/checkPaymentStatus', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });
    
//         if (!response.ok) {
//           throw new Error('Failed to check payment status');
//         }
    
//         const data = await response.json();
//         return data.hasPaid;
//       } catch (error) {
//         console.error('Error checking payment status:', error);
//         throw error;
//       }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(`/api/client?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await response.json();
//         if (!client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//         }
//         setClientData(client);
//         console.log("clientData:", client);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching client data:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching client data');
//           setError('Unknown error fetching client data');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchMeals = async () => {
//       if (!user) return;

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       if (!userEmail) return;

//       try {
//         const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//           method: 'GET',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to fetch meals');
//         }

//         const data = await response.json();
//         setMeals(data.meals || []);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching meals:', error.message);
//           setError(error.message);
//         } else {
//           console.error('Unknown error fetching meals');
//           setError('Unknown error fetching meals');
//         }
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//       fetchMeals();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, isSignedIn, router]);

//   useEffect(() => {
//     if (clientData?.exercises) {
//       console.log("feeh EX")
//       const unlockedIndices = clientData.exercises.map((exercise, index) =>
//         isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//       ).filter(index => index !== -1);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     }
//   }, [clientData, clientData?.date]);

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);
  
//     // Calculate the number of days since the assigned date
//     const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));
  
//     // Adjust the day number for rotation (subtracting 1 so that Day 1 corresponds to the assigned date)
//     const rotatedDay = ((diffDays % days.length) + 1);
  
//     // Check if the rotated day matches the current day
//     return dayNumber === rotatedDay;
//   };

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map(ex => ex.day)))
//     .map(day => clientData?.exercises?.find(ex => ex.day === day))
//     .filter(ex => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise.name, language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
//                           {currentExercise.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;




















//// wroking 

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();




//   // useEffect(() => {
//   //   const fetchClientData = async () => {
//   //     if (!user) {
//   //       console.log('No user found, redirecting to sign-in page.');
//   //       router.push('/sign-in');
//   //       return;
//   //     }
  
//   //     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//   //     console.log('Fetching data for user:', userEmail);
  
//   //     try {
//   //       const [clientResponse, exercisesResponse] = await Promise.all([
//   //         fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//   //         fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//   //       ]);
  
//   //       if (!clientResponse.ok || !exercisesResponse.ok) {
//   //         throw new Error('Failed to fetch client data');
//   //       }
  
//   //       const client = await clientResponse.json();
//   //       const exercisesData = await exercisesResponse.json();
//   //       console.log('Client data:', client);
//   //       console.log('Exercises data:', exercisesData);
  
//   //       setClientData({ ...client, exercises: exercisesData.exercises, date: exercisesData.date });
//   //       setMeals(client.meals || []);
//   //       console.log("clientData?.date",clientData?.date)
//   //       setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//   //         isCurrentDay(exercise.day, exercise.date || '') ? index : -1
//   //       ).filter((index: number) => index !== -1));
        
//   //       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
  
//   //     } catch (error: any) {
//   //       console.error('Error fetching client data:', error);
//   //       setError(error.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };
  
//   //   if (isSignedIn) {
//   //     fetchClientData();
//   //   } else {
//   //     router.push('/sign-in');
//   //   }
//   // }, [user, router, isSignedIn]);
  

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         console.log('No user found, redirecting to sign-in page.');
//         router.push('/sign-in');
//         return;
//       }
  
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       console.log('Fetching data for user:', userEmail);
  
//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);
  
//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }
  
//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log('Client data:', client);
//         console.log('Exercises data:', exercisesData);
  
//         setClientData({ ...client, exercises: exercisesData.exercises, date: exercisesData.date });
//         setMeals(client.meals || []);
        
//         console.log('Exercises State in useEffect:', exercisesData.exercises);
        
//         const unlockedIndices = exercisesData.exercises.map((exercise: Exercise, index: number) => {
//           console.log(`Processing Exercise Day: ${exercise.day}, Date: ${exercise.date}`);
//           const isUnlocked = isCurrentDay(exercise.day, exercise.date || '');
//           console.log(`Is Current Day for Exercise ${index + 1}?`, isUnlocked);
//           return isUnlocked ? index : -1;
//         }).filter((index: number) => index !== -1);
        
//         console.log('Unlocked Indices:', unlockedIndices);
//         setUnlockedExerciseIndices(unlockedIndices);
//         setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
  
//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);
  



  

  
  
//   const isCurrentDay = (day: string, assignedDate: string): boolean => {
//     const assigned = new Date(assignedDate);
  
//     const today = new Date();

//     const dayNumber = parseInt(day.split(' ')[1], 10); // Extract the day number from the exercise

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assigned.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Fix to ensure rotatedDay is within valid range
//     // const rotatedDay = ((diffDays % 6) + 6) % 6 + 1;
//     const rotatedDay = (diffDays % 4) + 1;
//     console.log(`Assigned Date: ${assignedDate}, Day: ${day}, Day Number: ${dayNumber}, Rotated Day: ${rotatedDay}`);
  
//     return dayNumber === rotatedDay;
//   };
  

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;


//////////////////////////////////////////////






// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const getCycleLengthBasedOnPlan = (exerciseType: string): number => {
//   switch (exerciseType) {
//     case 'Upper-Lower 3 Days':
//     case 'Power Series 3 Days':
//     case 'Push-Pull-Leg 3 Days':
//       return 3;
//     case 'Upper-Lower 4 Days':
//     case 'Pro Split 4 Days':
//       return 4;
//     case 'Upper-Lower 5 Days':
//     case 'Power Series 5 Days':
//     case 'Push-Pull-Leg 5 Days':
//       return 5;
//     case 'Upper-Lower 6 Days':
//     case 'Power Series 6 Days':
//     case 'Push-Pull-Leg 6 Days':
//       return 6;
//     default:
//       return 1; // Default to avoid errors
//   }
// };

// const isCurrentDay = (day: string, assignedDate: string, cycleLength: number): boolean => {
//   const assigned = new Date(assignedDate);
//   const today = new Date();

//   const dayNumber = parseInt(day.split(' ')[1], 10); // Extract the day number from the exercise

//   // Calculate the number of days since the program started
//   const diffTime = today.getTime() - assigned.getTime();
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   // Adjust the calculation to use the cycleLength dynamically
//   const rotatedDay = ((diffDays % cycleLength) + cycleLength) % cycleLength || cycleLength;

//   console.log(`Assigned Date: ${assignedDate}, Day: ${day}, Day Number: ${dayNumber}, Rotated Day: ${rotatedDay}`);

//   return dayNumber === rotatedDay;
// };


// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();


//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         console.log('No user found, redirecting to sign-in page.');
//         router.push('/sign-in');
//         return;
//       }
  
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       console.log('Fetching data for user:', userEmail);
  
//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);
  
//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }
  
//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log('Client data:', client);
//         console.log('Exercises data:', exercisesData);
  
//         const cycleLength = getCycleLengthBasedOnPlan(client.exerciseType || '');
  
//         setClientData({ ...client, exercises: exercisesData.exercises, date: exercisesData.date });
//         setMeals(client.meals || []);
  
//         setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//           isCurrentDay(exercise.day, exercise.date || '', cycleLength) ? index : -1
//         ).filter((index: number) => index !== -1));
        
//         setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
  
//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '', getCycleLengthBasedOnPlan(clientData.exerciseType || '')) ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '', getCycleLengthBasedOnPlan(clientData.exerciseType || '')) && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '', getCycleLengthBasedOnPlan(clientData.exerciseType || '')) && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;


























// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const getCycleDays = (exerciseType: string): string[] => {
//   switch (exerciseType) {
//     case 'Upper-Lower 3 Days':
//     case 'Power Series 3 Days':
//     case 'Push-Pull-Leg 3 Days':
//       return ['Day 1', 'Day 2', 'Day 3'];
//     case 'Upper-Lower 4 Days':
//     case 'Pro Split 4 Days':
//       return ['Day 1', 'Day 2', 'Day 3', 'Day 4'];
//     case 'Upper-Lower 5 Days':
//     case 'Power Series 5 Days':
//     case 'Push-Pull-Leg 5 Days':
//       return ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
//     case 'Upper-Lower 6 Days':
//     case 'Power Series 6 Days':
//     case 'Push-Pull-Leg 6 Days':
//       return ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'];
//     default:
//       return ['Day 1']; // Default to avoid errors
//   }
// };

// // const isCurrentDay = (day: string, assignedDate: string, cycleDays: string[]): boolean => {
// //   const assigned = new Date(assignedDate);
// //   const today = new Date();

// //   // Calculate the number of days since the program started
// //   const diffTime = today.getTime() - assigned.getTime();
// //   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// //   // Determine the current day index within the cycle
// //   const currentIndex = diffDays % cycleDays.length;

// //   // Check if today's exercise corresponds to the current index
// //   const currentDay = cycleDays[currentIndex];

// //   console.log(`Assigned Date: ${assignedDate}, Current Day in Cycle: ${currentDay}, Assigned Day: ${day}`);

// //   return day === currentDay;
// // };

// const isCurrentDay = (day: string, assignedDate: string, cycleDays: string[]): boolean => {
//   const assigned = new Date(assignedDate);
//   const today = new Date();

//   // Calculate the number of days since the program started
//   const diffTime = today.getTime() - assigned.getTime();
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   // Determine the current day index within the cycle
//   const currentIndex = diffDays % cycleDays.length;

//   // Check if today's exercise corresponds to the current index
//   const currentDay = cycleDays[currentIndex];

//   console.log(`Assigned Date: ${assignedDate}, Today: ${today.toISOString()}, DiffDays: ${diffDays}, Current Index: ${currentIndex}, Current Day in Cycle: ${currentDay}, Assigned Day: ${day}`);

//   return day === currentDay;
// };



// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         console.log('No user found, redirecting to sign-in page.');
//         router.push('/sign-in');
//         return;
//       }
  
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       console.log('Fetching data for user:', userEmail);
  
//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);
  
//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }
  
//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log('Client data:', client);
//         console.log('Exercises data:', exercisesData);
  
//         const cycleDays = getCycleDays(client.exerciseType || '');
  
//         setClientData({ ...client, exercises: exercisesData.exercises, date: exercisesData.date });
//         setMeals(client.meals || []);
  
//         setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//           isCurrentDay(exercise.day, exercise.date || '', cycleDays) ? index : -1
//         ).filter((index: number) => index !== -1));
        
//         setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
  
//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '', getCycleDays(clientData.exerciseType || '')) ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '', getCycleDays(clientData.exerciseType || '')) && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '', getCycleDays(clientData.exerciseType || '')) && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



















// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };


// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         console.log('No user found, redirecting to sign-in page.');
//         router.push('/sign-in');
//         return;
//       }
  
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       console.log('Fetching data for user:', userEmail);
      
//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);
  
//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }
        
//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log('Client data:', client);
//         console.log('Exercises data:', exercisesData);
  
//         setClientData({ ...client, exercises: exercisesData.exercises, date: exercisesData.date });
//         setMeals(client.meals || []);
        
//         setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//           isCurrentDay(exercise.day, exercise.date || '') ? index : -1
//       ).filter((index: number) => index !== -1));
        
//       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
  
//     } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);
  
//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();
  
//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);
  
//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
//     // Determine the current day in the cycle (based on the available days)
//     const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];
  
//     // Return true if the current day in the cycle matches the exercise day
//     return dayNumber === currentDayInCycle;
//   };


//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };
  
//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;






// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         console.log('No user found, redirecting to sign-in page.');
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       console.log('Fetching data for user:', userEmail);

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log('Client data:', client);
//         console.log('Exercises data:', exercisesData);

//         setClientData({ ...client, exercises: exercisesData.exercises, date: exercisesData.date });
//         setMeals(client.meals || []);

//         setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//           isCurrentDay(exercise.day, exercise.date || '') ? index : -1
//         ).filter((index: number) => index !== -1));

//         setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);

//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();

//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Determine the current day in the cycle (based on the available days)
//     const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

//     // Return true if the current day in the cycle matches the exercise day
//     return dayNumber === currentDayInCycle;
//   };

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   // const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//   const currentExercise = clientData?.exercises && validIndex !== undefined
//     ? clientData.exercises[validIndex]
//     : undefined;
  


//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



























// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         console.log('No user found, redirecting to sign-in page.');
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//       console.log('Fetching data for user:', userEmail);

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log('Client data:', client);
//         console.log('Exercises data:', exercisesData);

//         setClientData((prevData) => ({
//           ...client,
//           exercises: exercisesData.exercises.length ? exercisesData.exercises : prevData?.exercises || [],
//           date: exercisesData.date || prevData?.date || ''
//         }));
//         setMeals(client.meals || []);

//         setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//           isCurrentDay(exercise.day, exercisesData.date || '') ? index : -1
//         ).filter((index: number) => index !== -1));

//         setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);

//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();

//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Determine the current day in the cycle (based on the available days)
//     const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

//     // Return true if the current day in the cycle matches the exercise day
//     return dayNumber === currentDayInCycle;
//   };

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//   const currentExercise = clientData?.exercises && validIndex !== undefined
//     ? clientData.exercises[validIndex]
//     : undefined;

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;
















// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   const fetchClientData = async () => {
//     if (!user) {
//       router.push('/sign-in');
//       return;
//     }

//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//     try {
//       const response = await fetch(`/api/clientData?email=${userEmail}`, { method: 'GET' });

//       if (!response.ok) {
//         throw new Error('Failed to fetch client data');
//       }

//       const { clientData, exercises, date } = await response.json();
//       setClientData({ ...clientData, exercises, date });

//       const unlockedIndices = exercises.map((exercise: Exercise, index: number) =>
//         isCurrentDay(exercise.day, date) ? index : -1
//       ).filter((index: number) => index !== -1);

//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0);
//     } catch (error: any) {
//       console.error('Error fetching client data:', error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (isSignedIn) fetchClientData();
//     else router.push('/sign-in');
//   }, [isSignedIn]);

//   useEffect(() => {
//     console.log('Unlocked Exercise Indices after setting:', unlockedExerciseIndices);
//     console.log('Current Unlocked Index:', currentUnlockedIndex);

//     const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//     console.log('Valid Index:', validIndex);

//     const currentExercise = clientData?.exercises && validIndex !== undefined
//       ? clientData.exercises[validIndex]
//       : undefined;
//     console.log('Current Exercise:', currentExercise);
//   }, [unlockedExerciseIndices, currentUnlockedIndex, clientData]);





//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();

//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     console.log(`Assigned Date: ${assignedDate}`);
//     console.log(`Today's Date: ${today}`);
//     console.log(`Days since program started: ${diffDays}`);

//     const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     console.log(`Cycle Days: ${cycleDays}`);

//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];
//     console.log(`Current Day in Cycle: ${currentDayInCycle}`);

//     const isCurrent = dayNumber === currentDayInCycle;
//     console.log(`Is ${exerciseDay} the current day? ${isCurrent}`);

//     return isCurrent;
//   };

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//   const currentExercise = clientData?.exercises && validIndex !== undefined
//     ? clientData.exercises[validIndex]
//     : undefined;

//   console.log("Current Exercise:", currentExercise);

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;

























































// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   // useEffect(() => {
//   //   const fetchClientData = async () => {
//   //     if (!user) {
//   //       console.log('No user found, redirecting to sign-in page.');
//   //       router.push('/sign-in');
//   //       return;
//   //     }

//   //     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//   //     console.log('Fetching data for user:', userEmail);

//   //     try {
//   //       const [clientResponse, exercisesResponse] = await Promise.all([
//   //         fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//   //         fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//   //       ]);

//   //       if (!clientResponse.ok || !exercisesResponse.ok) {
//   //         throw new Error('Failed to fetch client data');
//   //       }

//   //       const client = await clientResponse.json();
//   //       const exercisesData = await exercisesResponse.json();
//   //       console.log('Client data:', client);
//   //       console.log('Exercises data:', exercisesData);

//   //       setClientData((prevData) => ({
//   //         ...client,
//   //         exercises: exercisesData.exercises.length ? exercisesData.exercises : prevData?.exercises || [],
//   //         date: exercisesData.date || prevData?.date || ''
//   //       }));
//   //       setMeals(client.meals || []);

//   //       setUnlockedExerciseIndices(exercisesData.exercises.map((exercise: Exercise, index: number) =>
//   //         isCurrentDay(exercise.day, exercisesData.date || '') ? index : -1
//   //       ).filter((index: number) => index !== -1));

//   //       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise

//   //     } catch (error: any) {
//   //       console.error('Error fetching client data:', error);
//   //       setError(error.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   if (isSignedIn) {
//   //     fetchClientData();
//   //   } else {
//   //     router.push('/sign-in');
//   //   }
//   // }, [user, router, isSignedIn]);





//   // useEffect(() => {
//   //   const fetchClientData = async () => {
//   //     if (!user) {
//   //       console.log('No user found, redirecting to sign-in page.');
//   //       router.push('/sign-in');
//   //       return;
//   //     }
  
//   //     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//   //     console.log('Fetching data for user:', userEmail);
  
//   //     try {
//   //       const [clientResponse, exercisesResponse] = await Promise.all([
//   //         fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//   //         fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//   //       ]);
  
//   //       if (!clientResponse.ok || !exercisesResponse.ok) {
//   //         throw new Error('Failed to fetch client data');
//   //       }
  
//   //       const client = await clientResponse.json();
//   //       const exercisesData = await exercisesResponse.json();
//   //       console.log('Client data:', client);
//   //       console.log('Exercises data:', exercisesData);
  
//   //       setClientData((prevData) => ({
//   //         ...client,
//   //         exercises: exercisesData.exercises.length ? exercisesData.exercises : prevData?.exercises || [],
//   //         date: exercisesData.date || prevData?.date || ''
//   //       }));
//   //       setMeals(client.meals || []);
  
//   //       const unlockedIndices = exercisesData.exercises.map((exercise: Exercise, index: number) =>
//   //         isCurrentDay(exercise.day, exercisesData.date || '') ? index : -1
//   //       ).filter((index: number) => index !== -1);
  
//   //       console.log('Unlocked Exercise Indices:', unlockedIndices);
  
//   //       setUnlockedExerciseIndices(unlockedIndices);
//   //       setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
  
//   //     } catch (error: any) {
//   //       console.error('Error fetching client data:', error);
//   //       setError(error.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };
  
//   //   if (isSignedIn) {
//   //     fetchClientData();
//   //   } else {
//   //     router.push('/sign-in');
//   //   }
//   // }, [user, router, isSignedIn]);





//   useEffect(() => {
//     const fetchClientData = async () => {
//         if (!user) {
//             router.push('/sign-in');
//             return;
//         }

//         const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//         try {
//             const response = await fetch(`/api/clientData?email=${userEmail}`, { method: 'GET' });
            
//             if (!response.ok) {
//                 throw new Error('Failed to fetch client data');
//             }

//             const { clientData, exercises, date } = await response.json();
//             setClientData({ ...clientData, exercises, date });

//             const unlockedIndices = exercises.map((exercise: Exercise, index: number) =>
//                 isCurrentDay(exercise.day, date) ? index : -1
//             ).filter((index: number) => index !== -1);

//             setUnlockedExerciseIndices(unlockedIndices);
//             setCurrentUnlockedIndex(0);
//         } catch (error: any) {
//             console.error('Error fetching client data:', error);
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (isSignedIn) fetchClientData();
//     else router.push('/sign-in');
// }, [user, router, isSignedIn]);


    

  
// useEffect(() => {
//   console.log('Unlocked Exercise Indices after setting:', unlockedExerciseIndices);
//   console.log('Current Unlocked Index:', currentUnlockedIndex);

//   const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//   console.log('Valid Index:', validIndex);

//   const currentExercise = clientData?.exercises && validIndex !== undefined
//       ? clientData.exercises[validIndex]
//       : undefined;
//   console.log('Current Exercise:', currentExercise);
// }, [unlockedExerciseIndices, currentUnlockedIndex, clientData]);

  




//   // const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//   //   const assignedDate = new Date(programStartDate);
//   //   const today = new Date();

//   //   const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//   //   // Calculate the number of days since the program started
//   //   const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//   //   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   //   // Determine the current day in the cycle (based on the available days)
//   //   const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//   //   const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

//   //   // Return true if the current day in the cycle matches the exercise day
//   //   return dayNumber === currentDayInCycle;
//   // };







//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();
  
//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);
  
//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
//     console.log(`Assigned Date: ${assignedDate}`);
//     console.log(`Today's Date: ${today}`);
//     console.log(`Days since program started: ${diffDays}`);
  
//     // Determine the current day in the cycle (based on the available days)
//     const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     console.log(`Cycle Days: ${cycleDays}`);
  
//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];
//     console.log(`Current Day in Cycle: ${currentDayInCycle}`);
  
//     // Return true if the current day in the cycle matches the exercise day
//     const isCurrent = dayNumber === currentDayInCycle;
//     console.log(`Is ${exerciseDay} the current day? ${isCurrent}`);
  
//     return isCurrent;
//   };
  







//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//   const currentExercise = clientData?.exercises && validIndex !== undefined
//     ? clientData.exercises[validIndex]
//     : undefined;

//   // Debugging log to check current exercise data
//   console.log("Current Exercise:", currentExercise);

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-hidden">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;


























// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: fa1,
//   2: fa2,
//   3: fa3,
//   4: fa4,
//   5: fa5,
//   6: fa6,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets?: { weight: number; reps: number }[];
//   reps?: number[];
//   weights?: number[];
//   started?: boolean;
//   finished?: boolean;
//   timer?: string;
//   duration?: string; // Add duration for cardio exercises
//   date?: string;
// }

// interface Meal {
//   name: string;
//   calories: number;
//   fats: number;
//   carbs: number;
//   image?: string;
// }

// interface ClientData {
//   email: string;
//   fullName: string;
//   hasPaid: boolean;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   date?: string;
// }

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
//   'Assigned Exercises:': 'التمارين المخصصة:',
//   'Assigned Meals:': 'الوجبات المخصصة:',
//   Exercise: 'تمرين',
//   Weights: 'الأوزان',
//   Reps: 'التكرارات',
//   GIF: 'GIF',
//   'No days available.': 'لا توجد أيام متاحة.',
//   'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
//   'No meals assigned.': 'لم يتم تعيين أي وجبات.',
//   Calories: 'سعرات حرارية',
//   Fats: 'الدهون',
//   Carbs: 'الكربوهيدرات',
// };

// const translate = (text: string, language: string) => {
//   return language === 'ar' && translations[text] ? translations[text] : text;
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [meals, setMeals] = useState<Meal[][]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
//   const [showExercises, setShowExercises] = useState<boolean>(true);
//   const [showMeals, setShowMeals] = useState<boolean>(true);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
//   const router = useRouter();

//   // Fetching logic from the second file integrated here
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         setClientData((prevData) => ({
//           ...client,
//           exercises: exercisesData.exercises.length ? exercisesData.exercises : prevData?.exercises || [],
//           date: exercisesData.date || prevData?.date || ''
//         }));
//         setMeals(client.meals || []);

//         const unlockedIndices = exercisesData.exercises.map((exercise: Exercise, index: number) =>
//           isCurrentDay(exercise.day, exercisesData.date || '') ? index : -1
//         ).filter((index: number) => index !== -1);

//         setUnlockedExerciseIndices(unlockedIndices);
//         setCurrentUnlockedIndex(0);

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isSignedIn) {
//       fetchClientData();
//     } else {
//       router.push('/sign-in');
//     }
//   }, [user, router, isSignedIn]);

//   useEffect(() => {
//     console.log('Unlocked Exercise Indices after setting:', unlockedExerciseIndices);
//     console.log('Current Unlocked Index:', currentUnlockedIndex);

//     const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//     console.log('Valid Index:', validIndex);

//     const currentExercise = clientData?.exercises && validIndex !== undefined
//       ? clientData.exercises[validIndex]
//       : undefined;
//     console.log('Current Exercise:', currentExercise);
//   }, [unlockedExerciseIndices, currentUnlockedIndex, clientData]);

//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();

//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     console.log(`Assigned Date: ${assignedDate}`);
//     console.log(`Today's Date: ${today}`);
//     console.log(`Days since program started: ${diffDays}`);

//     const cycleDays = Array.from(new Set(clientData?.exercises?.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     console.log(`Cycle Days: ${cycleDays}`);

//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];
//     console.log(`Current Day in Cycle: ${currentDayInCycle}`);

//     const isCurrent = dayNumber === currentDayInCycle;
//     console.log(`Is ${exerciseDay} the current day? ${isCurrent}`);

//     return isCurrent;
//   };

//   const uniqueSortedExercises = Array.from(new Set(clientData?.exercises?.map((ex: Exercise) => ex.day)))
//     .map(day => clientData?.exercises?.find((ex: Exercise) => ex.day === day))
//     .filter((ex): ex is Exercise => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleImageClick = (foodName: string) => {
//     setScaledImages((prev) => ({
//       ...prev,
//       [foodName]: !prev[foodName],
//     }));
//   };

//   const handleNextExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (unlockedExerciseIndices.length) {
//       setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//     }
//   };

//   const validIndex = unlockedExerciseIndices[currentUnlockedIndex];
//   const currentExercise = clientData?.exercises && validIndex !== undefined
//     ? clientData.exercises[validIndex]
//     : undefined;

//   console.log("Current Exercise:", currentExercise);

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome Champion, {user ? (user.fullName || user.username) : 'Guest'}!
//         </h1>
//       </div>
//       <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
//         <div className="absolute top-1 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faUtensils}
//             className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowMeals(!showMeals)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {translate('Assigned Exercises and Meals:', language)}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mt-24 mb-4">
//               {uniqueSortedExercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {uniqueSortedExercises.map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                         isCurrentDay(exercise!.day, clientData.date || '') ? '' : 'locked'
//                       }`}
//                       onClick={() => isCurrentDay(exercise!.day, clientData.date || '') && setSelectedDay(exercise!.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise!.day, clientData.date || '') && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No days available.', language)}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
//                         <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className={!currentExercise?.started ? 'censored' : ''}>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {translate(currentExercise?.name || '', language)}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.weights?.map((weight, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
//                             </div>
//                           ))}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise?.started ? 'censored-text' : ''}`}>
//                           {currentExercise?.reps?.map((rep, setIndex) => (
//                             <div key={setIndex} className="flex items-center justify-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
//                             </div>
//                           ))}
//                         </td>
//                         <td className="py-2 px-4 border-b min-w-32 mr-3">
//                           {currentExercise?.gif ? (
//                             <img
//                               src={`${currentExercise?.gif}`}
//                               alt={currentExercise?.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise?.started ? 'censored-gif' : ''}`}
//                               onClick={() => handleGifClick(currentExercise?.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             translate('No GIF', language)
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{translate('No exercises assigned.', language)}</p>
//               )}
//             </div>
//           ) : null}
//           {showMeals && (
//             <div className="mb-4">
//               <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
//                 <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//                 {translate('Assigned Meals:', language)}
//               </h2>
//               {meals.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {meals.map((mealDay, index) => (
//                     <div key={index} className="mb-4">
//                       <button
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                         onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
//                       >
//                         <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
//                       </button>
//                       {selectedMeal === index && (
//                         <ul>
//                           {mealDay.map((food, foodIndex) => (
//                             <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
//                               <div>
//                                 <div>{translate(food.name, language)}</div>
//                                 <div className="text-sm text-[var(--input-text-color)]">
//                                   {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
//                                 </div>
//                               </div>
//                               {food.image && (
//                                 <img
//                                   src={food.image}
//                                   alt={food.name}
//                                   className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
//                                     scaledImages[food.name] ? 'scale-8' : 'scale-1'
//                                   }`}
//                                   onClick={() => handleImageClick(food.name)}
//                                 />
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{translate('No meals assigned.', language)}</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;





























// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

>>>>>>> c7cdd42 (Final V1)
// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

<<<<<<< HEAD
// interface Meal {
//   id: string;
//   name: string;
//   type: string;
//   calories?: number;
//   image?: string;
// }

// interface Cardio {
//   id: string;
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
=======
// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string;
// }

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);

//   // Fetch Client Data
//   useEffect(() => {
//     const fetchData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       try {
//         const response = await fetch(`/api/client?email=${user.email}`, { method: 'GET' });
//         if (!response.ok) throw new Error('Failed to fetch client data');
        
//         const data = await response.json();
//         setClientData(data);
//         setUnlockedDays(data.exercises.map((exercise: Exercise) => parseInt(exercise.day.split(' ')[1])));
//       } catch (error) {
//         setError('Error fetching client data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [user, router]);

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   // Get the exercises for the currently selected day
//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome, {clientData?.fullName || 'Guest'}!
//         </h1>
//       </div>

//       {/* Days Row */}
//       <div className="flex justify-center mb-4">
//         {Array.from({ length: 6 }, (_, i) => `Day ${i + 1}`).map((day, index) => (
//           <button
//             key={day}
//             className={`mx-2 py-2 px-4 rounded ${unlockedDays.includes(index + 1) ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === day ? 'border-2 border-blue-500' : ''}`}
//             disabled={!unlockedDays.includes(index + 1)}
//             onClick={() => handleDaySelection(day)}
//           >
//             {unlockedDays.includes(index + 1) ? day : <FontAwesomeIcon icon={faLock} />}
//           </button>
//         ))}
//       </div>

//       {/* Exercise Display */}
//       {selectedDay && currentExercise && (
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//           <div className="flex justify-center items-center mb-4">
//             <div className="mx-2">
//               <FontAwesomeIcon icon={faWeightHanging} />
//               {currentExercise.weights?.join(', ')} kg
//             </div>
//             <div className="mx-2">
//               <FontAwesomeIcon icon={faRedoAlt} />
//               {currentExercise.reps?.join(', ')} reps
//             </div>
//           </div>
//           {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//         </div>
//       )}

//       {/* Navigation Buttons */}
//       {selectedDay && exercisesForDay.length > 1 && (
//         <div className="flex justify-center mb-4">
//           <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </button>
//           <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//             <FontAwesomeIcon icon={faArrowRight} />
//           </button>
//         </div>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



















// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]); // Track exercises separately
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number>(0);

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//       try {
//         const response = await fetch('/api/addEmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (!response.ok) {
//           throw new Error('Error checking/adding email');
//         }

//         const data = await response.json();
//         return !data.exists;
//       } catch (error) {
//         console.error('Error checking/adding email:', error);
//         return false;
//       }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const isNew = await checkAndAddEmail(userEmail);

//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }), // Correct fetch endpoint
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         console.log('Fetched client data:', client);
//         console.log('Fetched exercises data:', exercisesData);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, client.date); // Compare exercises and program start date
//         } else {
//           setError('No exercises data found for this client.');
//         }

//         if ((isNew && !client.hasPaid) || !client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate); // Start date of the program
//     const today = new Date();

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Unique exercise days
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     // Set unlocked days and the current day in the cycle
//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);

//     console.log('Unlocked Days:', cycleDays);
//     console.log('Current Day in Cycle:', currentDay);
//   };

// // Function to check if today is part of the exercise cycle
// const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//   const assignedDate = new Date(programStartDate); // This is '2024-09-07'
//   const today = new Date(); // Today's date

//   // Extract day number from exerciseDay, assuming format 'Day 1', 'Day 2', etc.
//   const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//   // Calculate difference in days between today and the assigned date
//   const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   // Get the unique set of exercise days (e.g., 'Day 1', 'Day 2')
//   const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));

//   // Calculate which day of the cycle today corresponds to
//   const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

//   console.log('Assigned Date:', assignedDate);
//   console.log('Today:', today);
//   console.log('DiffDays:', diffDays);
//   console.log('Current Day in Cycle:', currentDayInCycle);

//   // Return true if the current day in the cycle matches the exercise day
//   return dayNumber === currentDayInCycle;
// };


//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome, {clientData?.fullName || 'Guest'}!
//         </h1>
//       </div>

//       {/* Days Row */}
//       <div className="flex justify-center mb-4">
//         {unlockedDays.map((dayNumber) => {
//           const dayName = `Day ${dayNumber}`;
//           return (
//             <button
//               key={dayName}
//               className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//               onClick={() => handleDaySelection(dayName)}
//             >
//               {dayNumber === currentDayInCycle ? (
//                 <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//               ) : (
//                 <FontAwesomeIcon icon={faLock} />
//               )}
//             </button>
//           );
//         })}
//       </div>

//       {/* Exercise Display */}
//       {selectedDay && currentExercise && (
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//           <div className="flex justify-center items-center mb-4">
//             <div className="mx-2">
//               <FontAwesomeIcon icon={faWeightHanging} />
//               {currentExercise.weights?.join(', ')} kg
//             </div>
//             <div className="mx-2">
//               <FontAwesomeIcon icon={faRedoAlt} />
//               {currentExercise.reps?.join(', ')} reps
//             </div>
//           </div>
//           {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//         </div>
//       )}

//       {/* Navigation Buttons */}
//       {selectedDay && exercisesForDay.length > 1 && (
//         <div className="flex justify-center mb-4">
//           <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </button>
//           <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//             <FontAwesomeIcon icon={faArrowRight} />
//           </button>
//         </div>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;















//////////////////////////////               wwwwwwwwwwwworking                    ///////////////////////// 



// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
>>>>>>> c7cdd42 (Final V1)
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
<<<<<<< HEAD
//   const isSignedIn = !!user;
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [meals, setMeals] = useState<Meal[]>([]);
//   const [cardio, setCardio] = useState<Cardio[]>([]); // State to hold cardio data
=======
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
>>>>>>> c7cdd42 (Final V1)
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
<<<<<<< HEAD
//   const [selectedMeals, setSelectedMeals] = useState<Meal[]>([]); // For selecting meals
//   const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises
//   const [showCardio, setShowCardio] = useState(false); // Toggle between cardio and exercises
=======

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         console.log('Fetched client data:', client);
//         console.log('Fetched exercises data:', exercisesData);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date); // Compare exercises and program start date
//         } else {
//           setError('No exercises data found for this client.');
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Unique exercise days
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     // Set unlocked days and the current day in the cycle
//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);

//     console.log('Unlocked Days:', cycleDays);
//     console.log('Current Day in Cycle:', currentDay);
//   };

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="text-center mb-4">
//         <h1 className="text-4xl font-bold text-blue-500">
//           Welcome, {clientData?.fullName || 'Guest'}!
//         </h1>
//       </div>

//       {/* Days Row */}
//       <div className="flex justify-center mb-4">
//         {unlockedDays.map((dayNumber) => {
//           const dayName = `Day ${dayNumber}`;
//           return (
//             <button
//               key={dayName}
//               className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//               onClick={() => handleDaySelection(dayName)}
//             >
//               {dayNumber === currentDayInCycle ? (
//                 <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//               ) : (
//                 <FontAwesomeIcon icon={faLock} />
//               )}
//             </button>
//           );
//         })}
//       </div>

//       {/* Exercise Display */}
//       {selectedDay && currentExercise && (
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//           <div className="flex justify-center items-center mb-4">
//             <div className="mx-2">
//               <FontAwesomeIcon icon={faWeightHanging} />
//               {currentExercise.weights?.join(', ')} kg
//             </div>
//             <div className="mx-2">
//               <FontAwesomeIcon icon={faRedoAlt} />
//               {currentExercise.reps?.join(', ')} reps
//             </div>
//           </div>
//           {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//         </div>
//       )}

//       {/* Navigation Buttons */}
//       {selectedDay && exercisesForDay.length > 1 && (
//         <div className="flex justify-center mb-4">
//           <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </button>
//           <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//             <FontAwesomeIcon icon={faArrowRight} />
//           </button>
//         </div>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



















//////////////////////////////               wwwwwwwwwwwworking                    ///////////////////////// 
//////////////////////////////               wwwwwwwwwwwworking                    ///////////////////////// 



// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faDumbbell as faDumbbellSolid } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface Meal {
//   id: string;
//   name: string;
//   type: string; // e.g., Proteins, Carbs, etc.
//   calories?: number;
//   image?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [meals, setMeals] = useState<Meal[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         console.log('Fetched client data:', client);
//         console.log('Fetched exercises data:', exercisesData);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
//         } else {
//           setError('No exercises data found for this client.');
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Fetch Meals Data
//   const fetchMeals = async () => {
//     if (!user) return;

//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) return;

//     try {
//       const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch meals');
//       }

//       const data = await response.json();
//       setMeals(data.meals || []);
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Error fetching meals:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching meals');
//         setError('Unknown error fetching meals');
//       }
//     }
//   };

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Unique exercise days
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     // Set unlocked days and the current day in the cycle
//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);

//     console.log('Unlocked Days:', cycleDays);
//     console.log('Current Day in Cycle:', currentDay);
//   };

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   const toggleView = () => setShowMeals(!showMeals); // Toggle between meals and exercises

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           Welcome Champ, {clientData?.fullName || 'Champ'}!
//         </h1>

//         <div className="mb-4">
//           {/* Toggle between Meals and Exercises with Icons */}
//           <button
//             className={`px-4 py-2 rounded-lg mr-4 ${!showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={toggleView}
//           >
//             <FontAwesomeIcon icon={faDumbbellSolid} className="mr-2" />
//             Exercises
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={fetchMeals}
//           >
//             <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//             Meals
//           </button>
//         </div>

//         {showMeals ? (
//           // Meals Section
//           <div className="meals-section">
//             {meals.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {meals.map(meal => (
//                   <div key={meal.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
//                     <p>{meal.type}</p>
//                     {meal.calories && <p>Calories: {meal.calories}</p>}
//                     {meal.image && (
//                       <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2" />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No meals assigned yet.</p>
//             )}
//           </div>
//         ) : (
//           // Exercises Section
//           <>
//             <div className="flex justify-center mb-4">
//               {unlockedDays.map((dayNumber) => {
//                 const dayName = `Day ${dayNumber}`;
//                 return (
//                   <button
//                     key={dayName}
//                     className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                     onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)} // Only clickable if unlocked
//                     disabled={dayNumber !== currentDayInCycle} // Disabled if locked
//                   >
//                     {dayNumber === currentDayInCycle ? (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                       </>
//                     ) : (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={faLock} />
//                       </>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {selectedDay && currentExercise && (
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//                 <div className="flex justify-center items-center mb-4">
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faWeightHanging} />
//                     {currentExercise.weights?.join(', ')} kg
//                   </div>
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faRedoAlt} />
//                     {currentExercise.reps?.join(', ')} reps
//                   </div>
//                 </div>
//                 {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//               </div>
//             )}

//             {selectedDay && exercisesForDay.length > 1 && (
//               <div className="flex justify-center mb-4">
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;






















////////good


// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faDumbbell as faDumbbellSolid } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface Meal {
//   id: string;
//   name: string;
//   type: string; // e.g., Proteins, Carbs, etc.
//   calories?: number;
//   image?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [meals, setMeals] = useState<Meal[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises
>>>>>>> c7cdd42 (Final V1)

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
//         } else {
//           setError('No exercises data found for this client.');
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
<<<<<<< HEAD
//     } finally {
//       setLoading(false);
//     }
//   };
=======
//     };
>>>>>>> c7cdd42 (Final V1)

//     fetchClientData();
//   }, [user, router]);

<<<<<<< HEAD
=======
//   // Fetch Meals Data
//   const fetchMeals = async () => {
//     if (!user) return;
  
//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) return;
  
//     try {
//       const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//         method: 'GET',
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch meals');
//       }
  
//       const data = await response.json();
//       setMeals(data.meals || []);
//     } catch (error: unknown) {
//       // Use a type guard to check if 'error' is an instance of 'Error'
//       if (error instanceof Error) {
//         console.error('Error fetching meals:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching meals');
//         setError('Unknown error occurred while fetching meals');
//       }
//     }
//   };
  

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);
//   };

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   const toggleView = () => {
//     setShowMeals(!showMeals);
//     if (!showMeals) {
//       fetchMeals(); // Fetch meals when toggling to the meals view
//     }
//   };

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto p-4 text-center">
//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           Welcome Champ, {clientData?.fullName || 'Champ'}!
//         </h1>

//         <div className="mb-4 flex justify-center space-x-4">
//           {/* Toggle between Meals and Exercises with Icons */}
//           <button
//             className={`p-4 rounded-lg ${!showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={toggleView}
//           >
//             <FontAwesomeIcon icon={faDumbbellSolid} className="mr-2" />
//             Exercises
//           </button>
//           <button
//             className={`p-4 rounded-lg ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={toggleView}
//           >
//             <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//             Meals
//           </button>
//         </div>

//         {showMeals ? (
//           <div className="meals-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {meals.length > 0 ? (
//               meals.map(meal => (
//                 <div key={meal.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                   <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
//                   <p>{meal.type}</p>
//                   {meal.calories && <p>Calories: {meal.calories}</p>}
//                   {meal.image && (
//                     <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2 rounded-md" />
//                   )}
//                 </div>
//               ))
//             ) : (
//               <p>No meals assigned yet.</p>
//             )}
//           </div>
//         ) : (
//           <>
//             <div className="flex justify-center mb-4">
//               {unlockedDays.map((dayNumber) => {
//                 const dayName = `Day ${dayNumber}`;
//                 return (
//                   <button
//                     key={dayName}
//                     className={`mx-2 py-2 px-4 rounded-lg ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                     onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)}
//                     disabled={dayNumber !== currentDayInCycle}
//                   >
//                     {dayNumber === currentDayInCycle ? (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                       </>
//                     ) : (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={faLock} />
//                       </>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {selectedDay && currentExercise && (
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//                 <div className="flex justify-center items-center mb-4">
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faWeightHanging} />
//                     {currentExercise.weights?.join(', ')} kg
//                   </div>
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faRedoAlt} />
//                     {currentExercise.reps?.join(', ')} reps
//                   </div>
//                 </div>
//                 {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto rounded-md" />}
//               </div>
//             )}

//             {selectedDay && exercisesForDay.length > 1 && (
//               <div className="flex justify-center mb-4">
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded-lg" onClick={handlePreviousExercise}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded-lg" onClick={handleNextExercise}>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;



















//////////////good too

// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faDumbbell as faDumbbellSolid } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface Meal {
//   id: string;
//   name: string;
//   type: string;
//   calories?: number;
//   image?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [meals, setMeals] = useState<Meal[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         console.log('Fetched client data:', client);
//         console.log('Fetched exercises data:', exercisesData);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
//         } else {
//           setError('No exercises data found for this client.');
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Fetch Meals Data
//   const fetchMeals = async () => {
//     if (!user) return;

//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) return;

//     try {
//       const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch meals');
//       }

//       const data = await response.json();
      
//       // Accessing meals correctly from the array
//       const mealsList = Array.isArray(data.meals) && data.meals.length > 0 ? data.meals[0] : [];

//       setMeals(mealsList);
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Error fetching meals:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching meals');
//         setError('Unknown error fetching meals');
//       }
//     }
//   };

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Unique exercise days
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     // Set unlocked days and the current day in the cycle
//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);

//     console.log('Unlocked Days:', cycleDays);
//     console.log('Current Day in Cycle:', currentDay);
//   };

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   const toggleView = () => setShowMeals(!showMeals); // Toggle between meals and exercises

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           Welcome Champ, {clientData?.fullName || 'Champ'}!
//         </h1>

//         <div className="mb-4">
//           {/* Toggle between Meals and Exercises with Icons */}
//           <button
//             className={`px-4 py-2 rounded-lg mr-4 ${!showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={toggleView}
//           >
//             <FontAwesomeIcon icon={faDumbbellSolid} className="mr-2" />
//             Exercises
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={fetchMeals}
//           >
//             <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//             Meals
//           </button>
//         </div>

//         {showMeals ? (
//           // Meals Section
//           <div className="meals-section">
//             {meals.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {meals.map((meal, index) => (
//                   <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
//                     <p>Type: {meal.type}</p>
//                     {meal.calories && <p>Calories: {meal.calories}</p>}
//                     {meal.image && (
//                       <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2" />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No meals assigned yet.</p>
//             )}
//           </div>
//         ) : (
//           // Exercises Section
//           <>
//             <div className="flex justify-center mb-4">
//               {unlockedDays.map((dayNumber) => {
//                 const dayName = `Day ${dayNumber}`;
//                 return (
//                   <button
//                     key={dayName}
//                     className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                     onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)} // Only clickable if unlocked
//                     disabled={dayNumber !== currentDayInCycle} // Disabled if locked
//                   >
//                     {dayNumber === currentDayInCycle ? (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                       </>
//                     ) : (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={faLock} />
//                       </>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {selectedDay && currentExercise && (
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//                 <div className="flex justify-center items-center mb-4">
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faWeightHanging} />
//                     {currentExercise.weights?.join(', ')} kg
//                   </div>
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faRedoAlt} />
//                     {currentExercise.reps?.join(', ')} reps
//                   </div>
//                 </div>
//                 {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//               </div>
//             )}

//             {selectedDay && exercisesForDay.length > 1 && (
//               <div className="flex justify-center mb-4">
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;











// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faDumbbell as faDumbbellSolid } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface Meal {
//   id: string;
//   name: string;
//   type: string;
//   calories?: number;
//   image?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [meals, setMeals] = useState<Meal[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         console.log('Fetched client data:', client);
//         console.log('Fetched exercises data:', exercisesData);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
//         } else {
//           setError('No exercises data found for this client.');
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Fetch Meals Data
//   const fetchMeals = async () => {
//     if (!user) return;

//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) return;

//     try {
//       const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch meals');
//       }

//       const data = await response.json();
      
//       // Accessing meals correctly from the array
//       const mealsList = Array.isArray(data.meals) && data.meals.length > 0 ? data.meals[0] : [];

//       setMeals(mealsList);
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Error fetching meals:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching meals');
//         setError('Unknown error fetching meals');
//       }
//     }
//   };

//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Unique exercise days
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     // Set unlocked days and the current day in the cycle
//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);

//     console.log('Unlocked Days:', cycleDays);
//     console.log('Current Day in Cycle:', currentDay);
//   };

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   const toggleView = () => setShowMeals(!showMeals); // Toggle between meals and exercises

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           Welcome Champ, {clientData?.fullName || 'Champ'}!
//         </h1>

//         <div className="mb-4">
//           {/* Toggle between Meals and Exercises with Icons */}
//           <button
//             className={`px-4 py-2 rounded-lg mr-4 ${!showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={toggleView}
//           >
//             <FontAwesomeIcon icon={faDumbbellSolid} className="mr-2" />
//             Exercises
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={fetchMeals}
//           >
//             <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//             Meals
//           </button>
//         </div>

//         {showMeals ? (
//           // Meals Section
//           <div className="meals-section">
//             {meals.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {meals.map((meal, index) => (
//                   <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
//                     <p>Type: {meal.type}</p>
//                     {meal.calories && <p>Calories: {meal.calories}</p>}
//                     {meal.image && (
//                       <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2" />
//                     )}
//                     {/* Add a button for each meal */}
//                     <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Select Meal</button>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No meals assigned yet.</p>
//             )}
//           </div>
//         ) : (
//           // Exercises Section
//           <>
//             <div className="flex justify-center mb-4">
//               {unlockedDays.map((dayNumber) => {
//                 const dayName = `Day ${dayNumber}`;
//                 return (
//                   <button
//                     key={dayName}
//                     className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                     onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)} // Only clickable if unlocked
//                     disabled={dayNumber !== currentDayInCycle} // Disabled if locked
//                   >
//                     {dayNumber === currentDayInCycle ? (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                       </>
//                     ) : (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={faLock} />
//                       </>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {selectedDay && currentExercise && (
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//                 <div className="flex justify-center items-center mb-4">
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faWeightHanging} />
//                     {currentExercise.weights?.join(', ')} kg
//                   </div>
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faRedoAlt} />
//                     {currentExercise.reps?.join(', ')} reps
//                   </div>
//                 </div>
//                 {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//               </div>
//             )}

//             {selectedDay && exercisesForDay.length > 1 && (
//               <div className="flex justify-center mb-4">
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;








// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faCheck } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
// }

// interface Meal {
//   id: string;
//   name: string;
//   type: string;
//   calories?: number;
//   image?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const dayIcons: Record<string, typeof faDumbbell> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
//   'Day 7': faDumbbell,
// };

// const ClientDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [meals, setMeals] = useState<Meal[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [selectedMeals, setSelectedMeals] = useState<Meal[]>([]); // For selecting meals
//   const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises

//   // Fetch Client Data and Exercises
//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const [clientResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         console.log('Fetched client data:', client);
//         console.log('Fetched exercises data.date:', exercisesData.date);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
//         } else {
//           setError('No exercises data found for this client.');
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);
>>>>>>> c7cdd42 (Final V1)

//   // Fetch Meals Data
//   const fetchMeals = async () => {
//     if (!user) return;

//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) return;

//     try {
//       const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch meals');
//       }

//       const data = await response.json();
//       const mealsList = Array.isArray(data.meals) && data.meals.length > 0 ? data.meals.flat() : []; // Flattening meals array

//       setMeals(mealsList);
//       setShowMeals(true); // Set to true to display the meals section
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Error fetching meals:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching meals');
//         setError('Unknown error fetching meals');
//       }
//     }
//   };

<<<<<<< HEAD
//   // Fetch Cardio Data
//   const fetchCardio = async () => {
//     if (!user) return;

//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//     if (!userEmail) return;

//     try {
//       const response = await fetch(`/api/assignCardio?email=${userEmail}`, {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch cardio');
//       }

//       const data = await response.json();
//       const cardioList = Array.isArray(data.cardio) && data.cardio.length > 0 ? data.cardio.flat() : [];

//       setCardio(cardioList);
//       setShowCardio(true); // Set to true to display the cardio section
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Error fetching cardio:', error.message);
//         setError(error.message);
//       } else {
//         console.error('Unknown error fetching cardio');
//         setError('Unknown error fetching cardio');
//       }
//     }
//   };

=======
>>>>>>> c7cdd42 (Final V1)
//   // Calculate the days that should be unlocked
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();
<<<<<<< HEAD

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Sort cycleDays to ensure days are in correct order (Day 1, Day 2, Day 3, ...)
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);

//     // Calculate currentDay based on sorted cycleDays
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);

//   };
  


=======
  
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
//     // Sort cycleDays to ensure days are in correct order (Day 1, Day 2, Day 3, ...)
//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);
    
//     // Calculate currentDay based on sorted cycleDays
//     const currentDay = cycleDays[diffDays % cycleDays.length];
  
//     console.log('Sorted cycleDays:', cycleDays);
//     console.log('Calculated currentDay:', currentDay);
  
//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);
//   };
  

>>>>>>> c7cdd42 (Final V1)
//   // Meal Selection Logic
//   const handleMealSelection = (meal: Meal) => {
//     if (selectedMeals.includes(meal)) {
//       setSelectedMeals(selectedMeals.filter(m => m.id !== meal.id)); // Deselect meal
//     } else if (selectedMeals.length < 6) {
//       setSelectedMeals([...selectedMeals, meal]); // Select meal
//     }
//   };

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

//   const handleNextExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
//     }
//   };

//   const handlePreviousExercise = () => {
//     if (clientData && selectedDay) {
//       const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
//       setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
//     }
//   };

//   const containerStyle = {
//     minHeight: 'calc(90vh - 4rem)',
//     backgroundColor: 'var(--background-color)',
//     color: 'var(--text-color)',
//   };

<<<<<<< HEAD
=======

>>>>>>> c7cdd42 (Final V1)
//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>{error}</div>;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto text-center w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4" style={containerStyle}>
//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           Welcome Champ, {clientData?.fullName || 'Champ'}!
//         </h1>

<<<<<<< HEAD

//         <div className="mb-4">
//           {/* Toggle between Meals, Exercises, and Cardio with Icons */}
//           <button
//             className={`px-4 py-2 rounded-lg mr-4 ${!showMeals && !showCardio ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={() => {
//               setShowMeals(false);
//               setShowCardio(false);
//             }} // Toggle to show exercises
=======
//         <div className="mb-4">
//           {/* Toggle between Meals and Exercises with Icons */}
//           <button
//             className={`px-4 py-2 rounded-lg mr-4 ${!showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={() => setShowMeals(false)} // Toggle to show exercises
>>>>>>> c7cdd42 (Final V1)
//           >
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             Exercises
//           </button>
//           <button
<<<<<<< HEAD
//             className={`px-4 py-2 rounded-lg mr-4 ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
=======
//             className={`px-4 py-2 rounded-lg ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
>>>>>>> c7cdd42 (Final V1)
//             onClick={fetchMeals} // Fetch and toggle to show meals
//           >
//             <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//             Meals
//           </button>
<<<<<<< HEAD
//           {/* <button
//             className={`px-4 py-2 rounded-lg ${showCardio ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={fetchCardio} // Fetch and toggle to show cardio
//           >
//             <FontAwesomeIcon icon={faRunning} className="mr-2" />
//             Cardio
//           </button> */}
=======
>>>>>>> c7cdd42 (Final V1)
//         </div>

//         {showMeals ? (
//           // Meals Section
//           <div className="meals-section">
//             {meals.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {meals.map((meal, index) => (
//                   <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
//                     <p>Type: {meal.type}</p>
//                     {meal.calories && <p>Calories: {meal.calories}</p>}
//                     {meal.image && (
//                       <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2" />
//                     )}
//                     {/* Add a button for each meal */}
//                     <button
//                       onClick={() => handleMealSelection(meal)}
//                       className={`mt-4 px-4 py-2 rounded-lg ${selectedMeals.includes(meal) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}
//                     >
//                       {selectedMeals.includes(meal) ? (
//                         <>
//                           <FontAwesomeIcon icon={faCheck} className="mr-2" /> Selected
//                         </>
//                       ) : (
//                         'Select Meal'
//                       )}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No meals assigned yet.</p>
//             )}
//           </div>
<<<<<<< HEAD
//         ) : showCardio ? (
//           // Cardio Section
//           <div className="cardio-section">
//             {cardio.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {cardio.map((exercise, index) => (
//                   <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
//                     <p>Duration: {exercise.duration}</p>
//                     {exercise.gif && (
//                       <img src={exercise.gif} alt={exercise.name} className="w-full h-32 object-cover mt-2" />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No cardio assigned yet.</p>
//             )}
//           </div>
=======
>>>>>>> c7cdd42 (Final V1)
//         ) : (
//           // Exercises Section
//           <>
//             <div className="flex justify-center mb-4">
//               {unlockedDays.map((dayNumber) => {
//                 const dayName = `Day ${dayNumber}`;
//                 return (
//                   <button
//                     key={dayName}
//                     className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                     onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)}
//                     disabled={dayNumber !== currentDayInCycle}
//                   >
//                     {dayNumber === currentDayInCycle ? (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                       </>
//                     ) : (
//                       <>
//                         {dayName} <FontAwesomeIcon icon={faLock} />
//                       </>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

<<<<<<< HEAD
//             {selectedDay && currentExercise && (
//               <div className="text-center mb-6">
//                 <h2 className={`text-2xl font-bold mb-4 ${!currentExercise.reps || !currentExercise.weights ? 'blur-md' : ''}`}>
//                   {currentExercise.name}
//                 </h2>
                
//                 {/* Check if both reps and weights are available, otherwise censor the exercise */}
//                 {currentExercise.reps && currentExercise.weights ? (
//                   <div className="flex justify-center items-center mb-4">
//                     <div className="mx-2">
//                       <FontAwesomeIcon icon={faWeightHanging} />
//                       {currentExercise.weights?.join(', ')} kg
//                     </div>
//                     <div className="mx-2">
//                       <FontAwesomeIcon icon={faRedoAlt} />
//                       {currentExercise.reps?.join(', ')} reps
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="text-red-500 text-lg">
//                     {language === 'en' ? (
//                       <>
//                         <p>Head to exercises and start to unlock.</p>
//                       </>
//                     ) : (
//                       <>
//                         <p>اتجه إلى التمارين وابدأ لتفتحها.</p>
//                       </>
=======
//             {/* {selectedDay && currentExercise && (
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold mb-4">{currentExercise.name}</h2>
//                 <div className="flex justify-center items-center mb-4">
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faWeightHanging} />
//                     {currentExercise.weights?.join(', ')} kg
//                   </div>
//                   <div className="mx-2">
//                     <FontAwesomeIcon icon={faRedoAlt} />
//                     {currentExercise.reps?.join(', ')} reps
//                   </div>
//                 </div>
//                 {currentExercise.gif && <img src={currentExercise.gif} alt={currentExercise.name} className="w-32 h-32 mx-auto" />}
//               </div>
//             )} */}
//                 {selectedDay && currentExercise && (
//                   <div className="text-center mb-6">
//                     <h2 className={`text-2xl font-bold mb-4 ${!currentExercise.reps || !currentExercise.weights ? 'blur-md' : ''}`}>
//                       {currentExercise.name}
//                     </h2>
                    
//                     {/* Check if both reps and weights are available, otherwise censor the exercise */}
//                     {currentExercise.reps && currentExercise.weights ? (
//                       <div className="flex justify-center items-center mb-4">
//                         <div className="mx-2">
//                           <FontAwesomeIcon icon={faWeightHanging} />
//                           {currentExercise.weights?.join(', ')} kg
//                         </div>
//                         <div className="mx-2">
//                           <FontAwesomeIcon icon={faRedoAlt} />
//                           {currentExercise.reps?.join(', ')} reps
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="text-red-500 text-lg">
//                         {language === 'en' ? (
//                           <>
//                             <p>Head to exercises and start to unlock.</p>
//                           </>
//                         ) : (
//                           <>
//                             <p>اتجه إلى التمارين وابدأ لتفتحها.</p>
//                           </>
//                         )}
//                       </div>
//                     )}

//                     {currentExercise.gif ? (
//                       <img
//                         src={currentExercise.gif}
//                         alt={currentExercise.name}
//                         className={`w-32 h-32 mx-auto ${!currentExercise.reps || !currentExercise.weights ? 'blur-lg' : ''}`}
//                       />
//                     ) : (
//                       'No GIF available'
>>>>>>> c7cdd42 (Final V1)
//                     )}
//                   </div>
//                 )}

<<<<<<< HEAD
//                 {currentExercise.gif ? (
//                   <img
//                     src={currentExercise.gif}
//                     alt={currentExercise.name}
//                     className={`w-32 h-32 mx-auto ${!currentExercise.reps || !currentExercise.weights ? 'blur-lg' : ''}`}
//                   />
//                 ) : (
//                   'No GIF available'
//                 )}
//               </div>
//             )}
=======

>>>>>>> c7cdd42 (Final V1)

//             {selectedDay && exercisesForDay.length > 1 && (
//               <div className="flex justify-center mb-4">
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientDashboard;





















<<<<<<< HEAD
=======

>>>>>>> c7cdd42 (Final V1)
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faCheck, faRunning } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useLanguage } from '@/contexts/LanguageContext';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Correct missing import

<<<<<<< HEAD
const dayIcons: Record<string, IconDefinition> = {
  'Day 1': faDumbbell,
  'Day 2': faDumbbell,
  'Day 3': faDumbbell,
  'Day 4': faDumbbell,
  'Day 5': faDumbbell,
  'Day 6': faDumbbell,
};

const mealIcons: Record<number, IconDefinition> = {
  1: faDumbbell,
  2: faDumbbell,
  3: faDumbbell,
  4: faDumbbell,
  5: faDumbbell,
  6: faDumbbell,
};

=======
>>>>>>> c7cdd42 (Final V1)
interface Exercise {
  id: string;
  name: string;
  day: string;
  reps?: number[];
  weights?: number[];
  gif?: string;
  started?: boolean;
}

interface Meal {
  id: string;
  name: string;
  type: string;
  calories?: number;
  image?: string;
}

interface Cardio {
  id: string;
  name: string;
  duration: string;
  day: string;
  gif?: string;
}

interface ClientData {
  fullName: string;
  exercises: Exercise[];
  date: string; // Program start date
}
<<<<<<< HEAD
=======

const dayIcons: Record<string, typeof faDumbbell> = {
  'Day 1': faDumbbell,
  'Day 2': faDumbbell,
  'Day 3': faDumbbell,
  'Day 4': faDumbbell,
  'Day 5': faDumbbell,
  'Day 6': faDumbbell,
  'Day 7': faDumbbell,
};
>>>>>>> c7cdd42 (Final V1)

const ClientDashboard: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { language } = useLanguage();
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [cardio, setCardio] = useState<Cardio[]>([]); // State to hold cardio data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
  const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
  const [selectedMeals, setSelectedMeals] = useState<Meal[]>([]); // For selecting meals
  const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises
  const [showCardio, setShowCardio] = useState(false); // Toggle between cardio and exercises

  // Fetch Client Data and Exercises
  useEffect(() => {
    const fetchClientData = async () => {
      if (!user) {
        router.push('/sign-in');
        return;
      }

      const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
<<<<<<< HEAD
=======

>>>>>>> c7cdd42 (Final V1)
      if (!userEmail) {
        setLoading(false);
        return;
      }

      try {
        const [clientResponse, exercisesResponse] = await Promise.all([
          fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
          fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
        ]);

        if (!clientResponse.ok || !exercisesResponse.ok) {
          const errorData = await clientResponse.json();
          throw new Error(errorData.message || 'Failed to fetch client data');
        }

        const client = await clientResponse.json();
        const exercisesData = await exercisesResponse.json();

        if (exercisesData.exercises && exercisesData.exercises.length > 0) {
          setExercises(exercisesData.exercises);
          setClientData({ ...client, exercises: exercisesData.exercises });
          calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
        } else {
          setError('No exercises data found for this client.');
        }

      } catch (error: any) {
        console.error('Error fetching client data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, [user, router]);

<<<<<<< HEAD
  const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
    const assignedDate = new Date(startDate);
    const today = new Date();

    const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);
    const currentDay = cycleDays[diffDays % cycleDays.length];

    setUnlockedDays(cycleDays);
    setCurrentDayInCycle(currentDay);
  };

=======
  

  // Fetch Meals Data
>>>>>>> c7cdd42 (Final V1)
  const fetchMeals = async () => {
    if (!user) return;

    const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
    if (!userEmail) return;

    try {
      const response = await fetch(`/api/assignMeals?email=${userEmail}`, {
        method: 'GET',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch meals');
      }

      const data = await response.json();
      const mealsList = Array.isArray(data.meals) && data.meals.length > 0 ? data.meals.flat() : []; // Flattening meals array

      setMeals(mealsList);
      setShowMeals(true); // Set to true to display the meals section
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching meals:', error.message);
        setError(error.message);
      } else {
        console.error('Unknown error fetching meals');
        setError('Unknown error fetching meals');
      }
    }
  };

<<<<<<< HEAD
=======
  // Fetch Cardio Data
>>>>>>> c7cdd42 (Final V1)
  const fetchCardio = async () => {
    if (!user) return;

    const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
    if (!userEmail) return;

    try {
      const response = await fetch(`/api/assignCardio?email=${userEmail}`, {
        method: 'GET',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch cardio');
      }

      const data = await response.json();
      const cardioList = Array.isArray(data.cardio) && data.cardio.length > 0 ? data.cardio.flat() : [];

      setCardio(cardioList);
      setShowCardio(true); // Set to true to display the cardio section
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching cardio:', error.message);
        setError(error.message);
      } else {
        console.error('Unknown error fetching cardio');
        setError('Unknown error fetching cardio');
      }
    }
<<<<<<< HEAD
  };

=======
  };

  // Calculate the days that should be unlocked
  const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
    const assignedDate = new Date(startDate);
    const today = new Date();

    const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Sort cycleDays to ensure days are in correct order (Day 1, Day 2, Day 3, ...)
    const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);

    // Calculate currentDay based on sorted cycleDays
    const currentDay = cycleDays[diffDays % cycleDays.length];

    setUnlockedDays(cycleDays);
    setCurrentDayInCycle(currentDay);
  };

  // Meal Selection Logic
>>>>>>> c7cdd42 (Final V1)
  const handleMealSelection = (meal: Meal) => {
    if (selectedMeals.includes(meal)) {
      setSelectedMeals(selectedMeals.filter(m => m.id !== meal.id)); // Deselect meal
    } else if (selectedMeals.length < 6) {
      setSelectedMeals([...selectedMeals, meal]); // Select meal
    }
  };

  const handleDaySelection = (day: string) => {
    setSelectedDay(day);
    setCurrentExerciseIndex(0);
  };

  const handleNextExercise = () => {
    if (clientData && selectedDay) {
      const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
      setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
    }
  };

  const handlePreviousExercise = () => {
    if (clientData && selectedDay) {
      const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
      setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
    }
  };

  const containerStyle = {
    minHeight: 'calc(90vh - 4rem)',
    backgroundColor: 'var(--background-color)',
    color: 'var(--text-color)',
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div>{error}</div>;

  const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
  const currentExercise = exercisesForDay[currentExerciseIndex];

  return (
    <DashboardLayout>
      <div className="container mx-auto text-center w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4" style={containerStyle}>
        <h1 className="text-4xl font-bold text-blue-500 mb-8">
          Welcome Champ, {clientData?.fullName || 'Champ'}!
        </h1>

        <div className="mb-4">
<<<<<<< HEAD
=======
          {/* Toggle between Meals, Exercises, and Cardio with Icons */}
>>>>>>> c7cdd42 (Final V1)
          <button
            className={`px-4 py-2 rounded-lg mr-4 ${!showMeals && !showCardio ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            onClick={() => {
              setShowMeals(false);
              setShowCardio(false);
            }} // Toggle to show exercises
          >
            <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
            Exercises
          </button>
          <button
            className={`px-4 py-2 rounded-lg mr-4 ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            onClick={fetchMeals} // Fetch and toggle to show meals
          >
            <FontAwesomeIcon icon={faUtensils} className="mr-2" />
            Meals
          </button>
<<<<<<< HEAD
        </div>

        {showMeals ? (
=======
          {/* <button
            className={`px-4 py-2 rounded-lg ${showCardio ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            onClick={fetchCardio} // Fetch and toggle to show cardio
          >
            <FontAwesomeIcon icon={faRunning} className="mr-2" />
            Cardio
          </button> */}
        </div>

        {showMeals ? (
          // Meals Section
>>>>>>> c7cdd42 (Final V1)
          <div className="meals-section">
            {meals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {meals.map((meal, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
                    <p>Type: {meal.type}</p>
                    {meal.calories && <p>Calories: {meal.calories}</p>}
                    {meal.image && (
                      <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2" />
                    )}
<<<<<<< HEAD
=======
                    {/* Add a button for each meal */}
>>>>>>> c7cdd42 (Final V1)
                    <button
                      onClick={() => handleMealSelection(meal)}
                      className={`mt-4 px-4 py-2 rounded-lg ${selectedMeals.includes(meal) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}
                    >
                      {selectedMeals.includes(meal) ? (
                        <>
                          <FontAwesomeIcon icon={faCheck} className="mr-2" /> Selected
                        </>
                      ) : (
                        'Select Meal'
                      )}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>No meals assigned yet.</p>
            )}
          </div>
        ) : showCardio ? (
<<<<<<< HEAD
=======
          // Cardio Section
>>>>>>> c7cdd42 (Final V1)
          <div className="cardio-section">
            {cardio.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cardio.map((exercise, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
                    <p>Duration: {exercise.duration}</p>
                    {exercise.gif && (
                      <img src={exercise.gif} alt={exercise.name} className="w-full h-32 object-cover mt-2" />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>No cardio assigned yet.</p>
            )}
          </div>
        ) : (
<<<<<<< HEAD
=======
          // Exercises Section
>>>>>>> c7cdd42 (Final V1)
          <>
            <div className="flex justify-center mb-4">
              {unlockedDays.map((dayNumber) => {
                const dayName = `Day ${dayNumber}`;
                return (
                  <button
                    key={dayName}
                    className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
                    onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)}
                    disabled={dayNumber !== currentDayInCycle}
                  >
                    {dayNumber === currentDayInCycle ? (
                      <>
                        {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
                      </>
                    ) : (
                      <>
                        {dayName} <FontAwesomeIcon icon={faLock} />
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {selectedDay && currentExercise && (
              <div className="text-center mb-6">
                <h2 className={`text-2xl font-bold mb-4 ${!currentExercise.reps || !currentExercise.weights ? 'blur-md' : ''}`}>
                  {currentExercise.name}
                </h2>
                
<<<<<<< HEAD
=======
                {/* Check if both reps and weights are available, otherwise censor the exercise */}
>>>>>>> c7cdd42 (Final V1)
                {currentExercise.reps && currentExercise.weights ? (
                  <div className="flex justify-center items-center mb-4">
                    <div className="mx-2">
                      <FontAwesomeIcon icon={faWeightHanging} />
                      {currentExercise.weights?.join(', ')} kg
                    </div>
                    <div className="mx-2">
                      <FontAwesomeIcon icon={faRedoAlt} />
                      {currentExercise.reps?.join(', ')} reps
                    </div>
                  </div>
                ) : (
                  <div className="text-red-500 text-lg">
                    {language === 'en' ? (
                      <>
                        <p>Head to exercises and start to unlock.</p>
                      </>
                    ) : (
                      <>
                        <p>اتجه إلى التمارين وابدأ لتفتحها.</p>
                      </>
                    )}
                  </div>
                )}

                {currentExercise.gif ? (
                  <img
                    src={currentExercise.gif}
                    alt={currentExercise.name}
                    className={`w-32 h-32 mx-auto ${!currentExercise.reps || !currentExercise.weights ? 'blur-lg' : ''}`}
                  />
                ) : (
                  'No GIF available'
                )}
              </div>
            )}

            {selectedDay && exercisesForDay.length > 1 && (
              <div className="flex justify-center mb-4">
                <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handlePreviousExercise}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 mx-2 rounded" onClick={handleNextExercise}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ClientDashboard;
<<<<<<< HEAD
=======














>>>>>>> c7cdd42 (Final V1)
