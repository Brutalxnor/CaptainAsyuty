
  // const isCurrentDay = (day: string, assignedDate: string): boolean => {
  //   const assigned = new Date(assignedDate);
  //   const today = new Date();
  //   const dayNumber = parseInt(day.split(' ')[1], 10);


  //   // Calculate the date for the current exercise day
  //   const exerciseDate = new Date(assigned);
  //   exerciseDate.setDate(exerciseDate.getDate() + dayNumber - 1);

  //   // Convert today and exercise date to 'YYYY-MM-DD' for comparison
  //   const todayString = today.toISOString().split('T')[0];
  //   const exerciseDateString = exerciseDate.toISOString().split('T')[0];

  //   return todayString === exerciseDateString;
  // };


//   const handleSaveWeights = async () => {
//     if (selectedExercise && activeSetIndex !== null && clientData) {
//       try {
//         const updatedWeights = selectedExercise.weights ? [...selectedExercise.weights] : [];
//         const updatedReps = selectedExercise.reps ? [...selectedExercise.reps] : [];

//         updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
//         updatedReps[activeSetIndex] = sets[activeSetIndex].reps;

//         console.log('Weights:', updatedWeights);
//         console.log('Reps:', updatedReps);
//         console.log('Selected Exercise:', selectedExercise);
//         console.log('Active Set Index:', activeSetIndex);
//         console.log('Client Data:', clientData);

//         const response = await fetch('/api/assign-weights', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights: updatedWeights,
//             reps: updatedReps,
//           }),
//         });

//         console.log('Response status:', response.status);
//         console.log('Response:', response);

//         if (!response.ok) {
//           const errorData = await response.json();
//           console.error('Error data:', errorData);
//           throw new Error(errorData.message || 'Failed to assign weights and reps');
//         }

//         // Update the local state to reflect the changes
//         const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id
//             ? { ...exercise, weights: updatedWeights, reps: updatedReps }
//             : exercise
//         );

//         console.log('Updated Exercises:', updatedExercises);

//         setClientData({
//           ...clientData,
//           exercises: updatedExercises,
//         });

//         setShowWeightsModal(false); // Close the modal after saving
//         setSelectedExercise(null); // Reset the selected exercise
//         setSets([]); // Clear the sets array

//         console.log('Weights and reps assigned successfully');
//       } catch (error: any) {
//         console.error('Error assigning weights and reps:', error);
//       }
//     } else {
//       if (!selectedExercise) console.error('selectedExercise is null or undefined');
//       if (activeSetIndex === null) console.error('activeSetIndex is null');
//       if (!clientData) console.error('clientData is null or undefined');
//     }
//   };



//   const handleToggleExerciseStart = async (exercise: Exercise) => {
        //     if (clientData) {
        //       const updatedExercises = clientData.exercises?.map(ex =>
        //         ex.id === exercise.id
        //           ? { ...ex, started: !ex.started }
        //           : { ...ex, started: false } // Close all other exercises
        //       );
        
        //       const updatedClientData = {
        //         ...clientData,
        //         email: clientData.email,
        //         exercises: updatedExercises,
        //       };
        
        //       setClientData(updatedClientData);
        
        //       try {
        //         const response = await fetch('/api/update-exercise', {
        //           method: 'POST',
        //           headers: {
        //             'Content-Type': 'application/json',
        //           },
        //           body: JSON.stringify({
        //             email: clientData.email,
        //             exerciseId: exercise.id,
        //             exerciseStarted: !exercise.started,
        //           }),
        //         });
        
        //         if (!response.ok) {
        //           const errorData = await response.json();
        //           throw new Error(errorData.message || 'Failed to update exercise');
        //         }
        //       } catch (error: any) {
        //         console.error('Error updating exercise:', error);
        //       }
        //     }
        //   };































  //   // Calculate the date for the current exercise day
  //   const exerciseDate = new Date(assigned);
  //   exerciseDate.setDate(exerciseDate.getDate() + dayNumber - 1);

  //   // Convert today and exercise date to 'YYYY-MM-DD' for comparison
  //   const todayString = today.toISOString().split('T')[0];
  //   const exerciseDateString = exerciseDate.toISOString().split('T')[0];

  //   return todayString === exerciseDateString;
  // };



// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faPlus, faSave, faTrash, faDumbbell, faHeartCircleBolt, faLock, faPlay, faStop, faWeightHanging, faRedoAlt, faClock, faArrowLeft, faArrowRight, fa7 } from '@fortawesome/free-solid-svg-icons';
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
//   'Day 7': fa7,
// };

// const translations: Record<string, string> = {
//     'Day 1': 'اليوم 1',
//     'Day 2': 'اليوم 2',
//     'Day 3': 'اليوم 3',
//     'Day 4': 'اليوم 4',
//     'Day 5': 'اليوم 5',
//     'Day 6': 'اليوم 6',
//     'Day 7': 'اليوم 7',
//     Proteins: 'البروتينات',
//     Vegetables: 'الخضروات',
//     Grains: 'الحبوب',
//     Dairy: 'منتجات الألبان',
//     Fruits: 'الفواكه',
//     Nuts: 'المكسرات',
// };

// interface Set {
//   weight: number;
//   reps: number;
//   timer?: string;
//   started?: boolean;
//   finished?: boolean;
// }

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets: number; // Number of sets
//   restTime: number; // Rest time in seconds
//   weights: number[]; // Array of weights
//   reps: number[]; // Array of reps
//   started?: boolean;
//   finished?: boolean;
// }

// interface Cardio {
//     id: string;
//     name: string;
//     duration: string;
//     day: string;
//     gif?: string;
//   }
  

// interface ClientData {
//   email: string;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   cardio?: Cardio[];
//   date?: string; // Added date field
// }

// interface Timers {
//   [key: string]: string;
// }

// interface ClickedButtons {
//   [key: string]: boolean[];
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
//   const [sets, setSets] = useState<Set[]>([]);
//   const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [timers, setTimers] = useState<Timers>({});
//   const [showCardio, setShowCardio] = useState(false);
//   const [showExercises, setShowExercises] = useState(true);
//   const [restTimer, setRestTimer] = useState<string | null>(null);
//   const [showWeightsModal, setShowWeightsModal] = useState(false);
//   const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [cardioTimers, setCardioTimers] = useState<Timers>({});
//   const [cardioIntervalId, setCardioIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [cardioClickedButtons, setCardioClickedButtons] = useState<ClickedButtons>({});

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

//   // useEffect(() => {
//   //   const checkAndAddEmail = async (email: string): Promise<boolean> => {
//   //     try {
//   //       const response = await fetch('/api/addEmail', {
//   //         method: 'POST',
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //         },
//   //         body: JSON.stringify({ email }),
//   //       });

//   //       if (!response.ok) {
//   //         throw new Error('Error checking/adding email');
//   //       }

//   //       const data = await response.json();
//   //       // console.log(data.message);
//   //       return !data.exists;
//   //     } catch (error) {
//   //       console.error('Error checking/adding email:', error);
//   //       return false;
//   //     }
//   //   };

//   //   const fetchClientData = async () => {
//   //     if (!user) {
//   //       router.push('/sign-in');
//   //       return;
//   //     }

//   //     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//   //     if (!userEmail) {
//   //       setLoading(false);
//   //       return;
//   //     }

//   //     const isNew = await checkAndAddEmail(userEmail);

//   //     try {
//   //       const [clientResponse, cardioResponse] = await Promise.all([
//   //         fetch(`/api/client?email=${userEmail}`, {
//   //           method: 'GET',
//   //         }),
//   //         fetch(`/api/adminAddCardio?email=${userEmail}`, {
//   //           method: 'GET',
//   //         }),
//   //       ]);

//   //       if (!clientResponse.ok) {
//   //         const errorData = await clientResponse.json();
//   //         throw new Error(errorData.message || 'Failed to fetch client data');
//   //       }

//   //       if (!cardioResponse.ok) {
//   //         const errorData = await cardioResponse.json();
//   //         throw new Error(errorData.message || 'Failed to fetch cardio data');
//   //       }

//   //       const client = await clientResponse.json();
//   //       const cardio = await cardioResponse.json();

//   //       if ((isNew && !client.hasPaid) || !client.hasPaid) {
//   //         router.push('/dashboard/payments');
//   //         return;
//   //       }

//   //       setClientData({ ...client, cardio: cardio.exercises });
//   //     } catch (error: any) {
//   //       console.error('Error fetching client data:', error);
//   //       setError(error.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchClientData();
//   // }, [user, router]);


//   // useEffect(() => {
//   //   if (clientData?.exercises) {
//   //     const unlockedIndices = clientData.exercises.map((exercise, index) => 
//   //       isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//   //     ).filter(index => index !== -1);
//   //     setUnlockedExerciseIndices(unlockedIndices);
//   //     setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//   //   }
//   // }, [clientData, clientData?.date]);






//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//         try {
//             const response = await fetch('/api/addEmail', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email }),
//             });

//             if (!response.ok) {
//                 throw new Error('Error checking/adding email');
//             }

//             const data = await response.json();
//             return !data.exists;
//         } catch (error) {
//             console.error('Error checking/adding email:', error);
//             return false;
//         }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       if (!userEmail) {
//         setLoading(false);
//         return;
//       }

//       const isNew = await checkAndAddEmail(userEmail);

//       try {
//         const [clientResponse, cardioResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, {
//             method: 'GET',
//           }),
//           fetch(`/api/adminAddCardio?email=${userEmail}`, {
//             method: 'GET',
//           }),
//         ]);

//         if (!clientResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         if (!cardioResponse.ok) {
//           const errorData = await cardioResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch cardio data');
//         }

//         const client = await clientResponse.json();
//         const cardio = await cardioResponse.json();

//         if ((isNew && !client.hasPaid) || !client.hasPaid) {
//           router.push('/dashboard/payments');
//           return;
//         }

//         setClientData({ ...client, cardio: cardio.exercises });
//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

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

//   const cardioDays = clientData?.cardio?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div className="text-[var(--text-color)]">Error: {error}</div>;

//   const containerStyle = {
//     minHeight: 'calc(90vh - 4rem)', // Adjust this value as needed
//     backgroundColor: 'var(--background-color)',
//     color: 'var(--text-color)',
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

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



//   const handleAddSet = () => {
//     setSets([...sets, { weight: 0, reps: 0, timer: '00:00', started: false, finished: false }]);
//   };

//   const handleSetChange = (index: number, field: 'weight' | 'reps', value: number) => {
//     const updatedSets = sets.map((set, i) => (i === index ? { ...set, [field]: value } : set));
//     setSets(updatedSets);
//   };

//   const handleSaveSets = async () => {
//     if (selectedExercise && clientData) {
//       try {
//         const weights = sets.map(set => set.weight);
//         const reps = sets.map(set => set.reps);

//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights,
//             reps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to save sets');
//         }

//                 const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, sets: sets.length, weights, reps } : exercise
//         );

//         const updatedClientData = {
//           ...clientData,
//           email: clientData.email as string,
//           exercises: updatedExercises,
//         };

//         setClientData(updatedClientData);
//         setSelectedExercise(null);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error saving sets:', error);
//         setError(error.message);
//       }
//     }
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




// const handleToggleExerciseStart = async (exercise: Exercise) => {
//     if (clientData) {
//       const updatedExercises = clientData.exercises?.map(ex =>
//         ex.id === exercise.id
//           ? { ...ex, started: !ex.started }
//           : { ...ex, started: false } // Close all other exercises
//       );

//       const updatedClientData = {
//         ...clientData,
//         email: clientData.email,
//         exercises: updatedExercises,
//       };

//       setClientData(updatedClientData);

//       try {
//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: exercise.id,
//             exerciseStarted: !exercise.started,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to update exercise');
//         }

//         // Ensure the current exercise index points to the newly started exercise
//         const newCurrentIndex = unlockedExerciseIndices.indexOf(clientData.exercises?.indexOf(exercise) || 0);
//         setCurrentUnlockedIndex(newCurrentIndex);

//       } catch (error: any) {
//         console.error('Error updating exercise:', error);
//       }
//     }
//   };



//   const handleRemoveSet = (index: number) => {
//     const updatedSets = sets.filter((_, i) => i !== index);
//     setSets(updatedSets);
//   };

//   const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }
//     setClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][setIndex] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setRestTimer('00:00');
//         setIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
//   };

//   const weights = Array.from({ length: 20 }, (_, i) => 2.5 * (i + 1));

//   const openWeightsModal = (exercise: Exercise, setIndex: number) => {
//     // console.log('Opening weights modal for exercise:', exercise);
//     // console.log('Set index:', setIndex);

//     // Ensure sets array has enough elements without causing performance issues
//     if (setIndex >= sets.length) {
//       setSets(prevSets => {
//         const newSets = [...prevSets];
//         for (let i = prevSets.length; i <= setIndex; i++) {
//           newSets.push({ weight: 0, reps: 0, started: false, finished: false });
//         }
//         return newSets;
//       });
//     }

//     // console.log('Sets after initialization:', sets);
//     setSelectedExercise(exercise);
//     setActiveSetIndex(setIndex);
//     setShowWeightsModal(true);

//     // console.log('Selected exercise set to:', exercise);
//     // console.log('Active set index set to:', setIndex);
//   };

//   const closeWeightsModal = () => {
//     setShowWeightsModal(false);
//     setActiveSetIndex(null);
//   };




// //   const handleToggleExerciseStart = async (exercise: Exercise) => {
//         //     if (clientData) {
//         //       const updatedExercises = clientData.exercises?.map(ex =>
//         //         ex.id === exercise.id
//         //           ? { ...ex, started: !ex.started }
//         //           : { ...ex, started: false } // Close all other exercises
//         //       );
        
//         //       const updatedClientData = {
//         //         ...clientData,
//         //         email: clientData.email,
//         //         exercises: updatedExercises,
//         //       };
        
//         //       setClientData(updatedClientData);
        
//         //       try {
//         //         const response = await fetch('/api/update-exercise', {
//         //           method: 'POST',
//         //           headers: {
//         //             'Content-Type': 'application/json',
//         //           },
//         //           body: JSON.stringify({
//         //             email: clientData.email,
//         //             exerciseId: exercise.id,
//         //             exerciseStarted: !exercise.started,
//         //           }),
//         //         });
        
//         //         if (!response.ok) {
//         //           const errorData = await response.json();
//         //           throw new Error(errorData.message || 'Failed to update exercise');
//         //         }
//         //       } catch (error: any) {
//         //         console.error('Error updating exercise:', error);
//         //       }
//         //     }
//         //   };


































// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faPlus, faSave, faTrash, faDumbbell, faHeartCircleBolt, faLock, faPlay, faStop, faWeightHanging, faRedoAlt, faClock, faArrowLeft, faArrowRight, fa7 } from '@fortawesome/free-solid-svg-icons';
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
//   'Day 7': fa7,
// };

// const translations: Record<string, string> = {
//     'Day 1': 'اليوم 1',
//     'Day 2': 'اليوم 2',
//     'Day 3': 'اليوم 3',
//     'Day 4': 'اليوم 4',
//     'Day 5': 'اليوم 5',
//     'Day 6': 'اليوم 6',
//     'Day 7': 'اليوم 7',
//     Proteins: 'البروتينات',
//     Vegetables: 'الخضروات',
//     Grains: 'الحبوب',
//     Dairy: 'منتجات الألبان',
//     Fruits: 'الفواكه',
//     Nuts: 'المكسرات',
// };

// interface Set {
//   weight: number;
//   reps: number;
//   timer?: string;
//   started?: boolean;
//   finished?: boolean;
// }

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets: number; // Number of sets
//   restTime: number; // Rest time in seconds
//   weights: number[]; // Array of weights
//   reps: number[]; // Array of reps
//   started?: boolean;
//   finished?: boolean;
//   date: string;
// }

// interface Cardio {
//     id: string;
//     name: string;
//     duration: string;
//     day: string;
//     gif?: string;
//   }
  

// interface ClientData {
//   email: string;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   cardio?: Cardio[];
//   date?: string; // Added date field
// }

// interface Timers {
//   [key: string]: string;
// }

// interface ClickedButtons {
//   [key: string]: boolean[];
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
//   const [sets, setSets] = useState<Set[]>([]);
//   const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [timers, setTimers] = useState<Timers>({});
//   const [showCardio, setShowCardio] = useState(false);
//   const [showExercises, setShowExercises] = useState(true);
//   const [restTimer, setRestTimer] = useState<string | null>(null);
//   const [showWeightsModal, setShowWeightsModal] = useState(false);
//   const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [cardioTimers, setCardioTimers] = useState<Timers>({});
//   const [cardioIntervalId, setCardioIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [cardioClickedButtons, setCardioClickedButtons] = useState<ClickedButtons>({});

//   const router = useRouter();

//   // useEffect(() => {
//   //   const checkAndAddEmail = async (email: string): Promise<boolean> => {
//   //     try {
//   //       const response = await fetch('/api/addEmail', {
//   //         method: 'POST',
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //         },
//   //         body: JSON.stringify({ email }),
//   //       });

//   //       if (!response.ok) {
//   //         throw new Error('Error checking/adding email');
//   //       }

//   //       const data = await response.json();
//   //       // console.log(data.message);
//   //       return !data.exists;
//   //     } catch (error) {
//   //       console.error('Error checking/adding email:', error);
//   //       return false;
//   //     }
//   //   };

//   //   const fetchClientData = async () => {
//   //     if (!user) {
//   //       router.push('/sign-in');
//   //       return;
//   //     }

//   //     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//   //     if (!userEmail) {
//   //       setLoading(false);
//   //       return;
//   //     }

//   //     const isNew = await checkAndAddEmail(userEmail);

//   //     try {
//   //       const [clientResponse, cardioResponse] = await Promise.all([
//   //         fetch(`/api/client?email=${userEmail}`, {
//   //           method: 'GET',
//   //         }),
//   //         fetch(`/api/adminAddCardio?email=${userEmail}`, {
//   //           method: 'GET',
//   //         }),
//   //       ]);

//   //       if (!clientResponse.ok) {
//   //         const errorData = await clientResponse.json();
//   //         throw new Error(errorData.message || 'Failed to fetch client data');
//   //       }

//   //       if (!cardioResponse.ok) {
//   //         const errorData = await cardioResponse.json();
//   //         throw new Error(errorData.message || 'Failed to fetch cardio data');
//   //       }

//   //       const client = await clientResponse.json();
//   //       const cardio = await cardioResponse.json();

//   //       if ((isNew && !client.hasPaid) || !client.hasPaid) {
//   //         router.push('/dashboard/payments');
//   //         return;
//   //       }

//   //       setClientData({ ...client, cardio: cardio.exercises });
//   //     } catch (error: any) {
//   //       console.error('Error fetching client data:', error);
//   //       setError(error.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchClientData();
//   // }, [user, router]);


//   // useEffect(() => {
//   //   if (clientData?.exercises) {
//   //     const unlockedIndices = clientData.exercises.map((exercise, index) => 
//   //       isCurrentDay(exercise.day, clientData.date || '') ? index : -1
//   //     ).filter(index => index !== -1);
//   //     setUnlockedExerciseIndices(unlockedIndices);
//   //     setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//   //   }
//   // }, [clientData, clientData?.date]);






//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//         try {
//             const response = await fetch('/api/addEmail', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email }),
//             });

//             if (!response.ok) {
//                 throw new Error('Error checking/adding email');
//             }

//             const data = await response.json();
//             return !data.exists;
//         } catch (error) {
//             console.error('Error checking/adding email:', error);
//             return false;
//         }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//           router.push('/sign-in');
//           return;
//       }
  
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
  
//           return;
//       }
  
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
  
//           setLoading(false);
//           return;
//       }
  
//       try {
//           const isNew = await checkAndAddEmail(userEmail);
  
//           const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
//               fetch(`/api/client?email=${userEmail}`, {
//                   method: 'GET',
//               }),
//               fetch(`/api/adminAddCardio?email=${userEmail}`, {
//                   method: 'GET',
//               }),
//               fetch(`/api/fetchExercises?email=${userEmail}`, {
//                   method: 'GET',
//               }),
//           ]);
  
//           if (!clientResponse.ok) {
//               const errorData = await clientResponse.json();
//               throw new Error(errorData.message || 'Failed to fetch client data');
//           }
  
//           if (!cardioResponse.ok) {
//               const errorData = await cardioResponse.json();
//               throw new Error(errorData.message || 'Failed to fetch cardio data');
//           }
  
//           if (!exercisesResponse.ok) {
//               const errorData = await exercisesResponse.json();
//               throw new Error(errorData.message || 'Failed to fetch exercises');
//           }
  
//           const client = await clientResponse.json();
//           const cardio = await cardioResponse.json();
//           const exercises = await exercisesResponse.json();
  
//           if ((isNew && !client.hasPaid) || !client.hasPaid) {
//               router.push('/dashboard/payments');
//               return;
//           }
  
//           if (exercises.exercises && exercises.exercises.length > 0) {
//               console.log("feeh excersise")
//               setClientData({ ...client, exercises: exercises.exercises, cardio: cardio.exercises });
//           } else {
//               console.log("mafeesh excersise")
//               setError('No exercises data found for this client.');
//           }
//       } catch (error: any) {
//           console.error('Error fetching client data:', error);
//           setError(error.message);
//       } finally {
//           setLoading(false);
//       }
//   };

//     fetchClientData();
// }, [user, router]);

// useEffect(() => {
//     if (exercises) {
//         const unlockedIndices = clientData.exercises.map((exercise, index) => {
//             const isUnlocked = isCurrentDay(exercise.day, exercise.date);
//             console.log(`Exercise: ${exercise.name}, Day: ${exercise.day}, Assigned Date: ${exercise.date}, Is Unlocked: ${isUnlocked}`);
//             return isUnlocked ? index : -1;
//         }).filter(index => index !== -1);

//         console.log('Unlocked Exercise Indices:', unlockedIndices);
//         setUnlockedExerciseIndices(unlockedIndices);
//         setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
//     } else {
//         console.log('Client data or exercises are undefined');
//     }
// }, [clientData]);

// const isCurrentDay = (day: string, exerciseAssignedDate: string): boolean => {
//     const assigned = new Date(exerciseAssignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);

//     // Calculate the number of days since the exercise was assigned
//     const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));

//     // Calculate the correct day within the 7-day cycle
//     const rotatedDay = ((diffDays + (dayNumber - 1)) % 7) + 1;

//     // Debugging output
//     console.log('Assigned Date:', assigned);
//     console.log('Today\'s Date:', today);
//     console.log('Difference in Days:', diffDays);
//     console.log('Day Number from Exercise:', dayNumber);
//     console.log('Rotated Day Calculated:', rotatedDay);
//     console.log('Is Current Day?', dayNumber === rotatedDay);

//     return dayNumber === rotatedDay;
// };


  
//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];    

//   const cardioDays = clientData?.cardio?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];    

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div className="text-[var(--text-color)]">Error: {error}</div>;

//   const containerStyle = {
//     minHeight: 'calc(90vh - 4rem)', // Adjust this value as needed
//     backgroundColor: 'var(--background-color)',
//     color: 'var(--text-color)',
//   };    

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };  






//   const handleAddSet = () => {
//     setSets([...sets, { weight: 0, reps: 0, timer: '00:00', started: false, finished: false }]);
//   };

//   const handleSetChange = (index: number, field: 'weight' | 'reps', value: number) => {
//     const updatedSets = sets.map((set, i) => (i === index ? { ...set, [field]: value } : set));
//     setSets(updatedSets);
//   };

//   const handleSaveSets = async () => {
//     if (selectedExercise && clientData) {
//       try {
//         const weights = sets.map(set => set.weight);
//         const reps = sets.map(set => set.reps);

//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights,
//             reps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to save sets');
//         }

//                 const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, sets: sets.length, weights, reps } : exercise
//         );

//         const updatedClientData = {
//           ...clientData,
//           email: clientData.email as string,
//           exercises: updatedExercises,
//         };

//         setClientData(updatedClientData);
//         setSelectedExercise(null);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error saving sets:', error);
//         setError(error.message);
//       }
//     }
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




// const handleToggleExerciseStart = async (exercise: Exercise) => {
//     if (clientData) {
//       const updatedExercises = clientData.exercises?.map(ex =>
//         ex.id === exercise.id
//           ? { ...ex, started: !ex.started }
//           : { ...ex, started: false } // Close all other exercises
//       );

//       const updatedClientData = {
//         ...clientData,
//         email: clientData.email,
//         exercises: updatedExercises,
//       };

//       setClientData(updatedClientData);

//       try {
//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: exercise.id,
//             exerciseStarted: !exercise.started,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to update exercise');
//         }

//         // Ensure the current exercise index points to the newly started exercise
//         const newCurrentIndex = unlockedExerciseIndices.indexOf(clientData.exercises?.indexOf(exercise) || 0);
//         setCurrentUnlockedIndex(newCurrentIndex);

//       } catch (error: any) {
//         console.error('Error updating exercise:', error);
//       }
//     }
//   };



//   const handleRemoveSet = (index: number) => {
//     const updatedSets = sets.filter((_, i) => i !== index);
//     setSets(updatedSets);
//   };

//   const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }
//     setClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][setIndex] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setRestTimer('00:00');
//         setIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
//   };

//   const weights = Array.from({ length: 20 }, (_, i) => 2.5 * (i + 1));

//   const openWeightsModal = (exercise: Exercise, setIndex: number) => {
//     // console.log('Opening weights modal for exercise:', exercise);
//     // console.log('Set index:', setIndex);

//     // Ensure sets array has enough elements without causing performance issues
//     if (setIndex >= sets.length) {
//       setSets(prevSets => {
//         const newSets = [...prevSets];
//         for (let i = prevSets.length; i <= setIndex; i++) {
//           newSets.push({ weight: 0, reps: 0, started: false, finished: false });
//         }
//         return newSets;
//       });
//     }

//     // console.log('Sets after initialization:', sets);
//     setSelectedExercise(exercise);
//     setActiveSetIndex(setIndex);
//     setShowWeightsModal(true);

//     // console.log('Selected exercise set to:', exercise);
//     // console.log('Active set index set to:', setIndex);
//   };

//   const closeWeightsModal = () => {
//     setShowWeightsModal(false);
//     setActiveSetIndex(null);
//   };



// const handleStartCardioTimer = (exerciseId: string, duration: number) => {
//     if (cardioIntervalId) {
//       clearInterval(cardioIntervalId);
//     }
//     setCardioClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][0] = true;
//       return newState;
//     });
  
//     const startTime = Date.now();
//     const endTime = startTime + duration * 60000; // Duration is in minutes
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: '00:00' }));
//         setCardioIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);
  
//     setCardioIntervalId(newIntervalId);
//   };
  


// const handleSaveWeights = async () => {
//     if (selectedExercise && activeSetIndex !== null && clientData) {
//         try {
//             const updatedWeights = selectedExercise.weights ? [...selectedExercise.weights] : [];
//             const updatedReps = selectedExercise.reps ? [...selectedExercise.reps] : [];

//             updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
//             updatedReps[activeSetIndex] = sets[activeSetIndex].reps;
//             // console.log('Weights:', updatedWeights);
//             // console.log('Reps:', updatedReps);
//             // console.log('Selected Exercise:', selectedExercise);
//             // console.log('Active Set Index:', activeSetIndex);
//             // console.log('Client Data:', clientData);

//             const response = await fetch('/api/assign-weights', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email: clientData.email,
//                     exerciseId: selectedExercise.id,
//                     weights: updatedWeights,
//                     reps: updatedReps,
//                 }),
//             });

//             // console.log('Response status:', response.status);
//             // console.log('Response:', response);

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 console.error('Error data:', errorData);
//                 throw new Error(errorData.message || 'Failed to assign weights and reps');
//             }

//             // Update the local state to reflect the changes
//             const updatedExercises = clientData.exercises?.map(exercise =>
//                 exercise.id === selectedExercise.id
//                     ? { ...exercise, weights: updatedWeights, reps: updatedReps }
//                     : exercise
//             );

//             console.log('Updated Exercises:', updatedExercises);

//             setClientData({
//                 ...clientData,
//                 exercises: updatedExercises,
//             });

//             setShowWeightsModal(false); // Close the modal after saving
//             // setSelectedExercise(null); // Do not reset the selected exercise
//             setSets([]); // Clear the sets array
//             // console.log('Weights and reps assigned successfully');
//         } catch (error: any) {
//             console.error('Error assigning weights and reps:', error);
//         }
//     } else {
//         if (!selectedExercise) console.error('selectedExercise is null or undefined');
//         if (activeSetIndex === null) console.error('activeSetIndex is null');
//         if (!clientData) console.error('clientData is null or undefined');
//     }
// };


//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col justify-center items-center min-h-screen relative" style={containerStyle}>
//         <div className="absolute top-4 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faHeartCircleBolt}
//             className={`h-8 w-8 cursor-pointer ${showCardio ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowCardio(!showCardio)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-4">{language === 'en' ? 'Assigned Exercises and Cardio:' : 'التمارين والكارديو المخصصة:'}</h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && clientData ? (
//             <div className="mb-4">
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
//                 <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full overflow-x-auto md:overflow-hidden">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">#</th>
//                         <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise' : 'التمرين'}</th>
//                         <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'GIF' : 'صورة متحركة'}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td className="py-2 px-4 border-b text-center">
//                           <FontAwesomeIcon icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]} className="h-6 w-6" />
//                         </td>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored' : ''}`}>
//                           {currentExercise.name}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center min-w-32 mr-3 ${!currentExercise.started ? 'censored' : ''}`}>
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             'No GIF'
//                           )}
//                         </td>
//                       </tr>
//                       {currentExercise.started && (
//                         Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
//                           <React.Fragment key={setIndex}>
//                             <tr>
//                               <td colSpan={3} className="py-2 px-4 border-b text-center">

//                                 <div className="flex flex-col italic font-serif text-left italic text-xl">
//                                     {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
//                                 </div>
//                                 <div className="flex justify-center items-center space-x-4">
//                                   <div className="flex flex-col items-center">
//                                     <FontAwesomeIcon icon={faWeightHanging} className="h-4 w-4 mr-1" /> {(currentExercise.weights && currentExercise.weights[setIndex]) || 0} kg
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     <FontAwesomeIcon icon={faRedoAlt} className="h-4 w-4 mr-1" /> {(currentExercise.reps && currentExercise.reps[setIndex]) || 0} reps
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     <button
//                                       onClick={() => openWeightsModal(currentExercise, setIndex)}
//                                       className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
//                                     >
//                                       <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
//                                     </button>
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                             <tr>
//                               <td colSpan={3} className="py-2 px-4 border-b text-center">
//                                 <div className="flex flex-col italic font-serif text-left italic text-xl">
//                                     {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
//                                 </div>
//                                 <div className="flex justify-center items-center space-x-4">
//                                   <div className="flex flex-col items-center">
//                                     {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     {!clickedButtons[currentExercise.id]?.[setIndex] && (
//                                       <button
//                                         className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
//                                         onClick={() => handleStartRestTimer(currentExercise.id, setIndex, currentExercise.restTime)}
//                                       >
//                                         <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
//                                       </button>
//                                     )}
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                           </React.Fragment>
//                         ))
//                       )}
//                       <tr>
//                         <td colSpan={3} className="py-2 px-4 border-b text-center min-w-full">
//                           <button
//                             className="min-w-full flex justify-center items-center bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 mt-2"
//                             onClick={() => handleToggleExerciseStart(currentExercise)}
//                           >
//                             <FontAwesomeIcon icon={currentExercise.started ? faStop : faPlay} className="h-4 w-4 mr-2" />
//                           </button>
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
//                 <p>{language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}</p>
//               )}
//             </div>
//           ) : null}
  
//           {/* {showCardio && (
//             <div className="mb-4">
//               {clientData?.cardio && clientData.cardio.length > 0 ? (
//                 <div className="mb-4 justify-center items-center flex flex-col">
//                   {cardioDays.length > 0 ? (
//                     <div className="mb-4 flex justify-center flex-wrap">
//                       {cardioDays.sort().map(day => (
//                         <button
//                           key={day}
//                           className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 justify-center items-center ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                             isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                           }`}
//                           onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                         >
//                           <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                           {!isCurrentDay(day, clientData.date || '') && (
//                             <div className="locked-overlay">
//                               <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-white" />
//                             </div>
//                           )}
//                         </button>
//                       ))}
//                     </div>
//                   ) : (
//                     <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//                   )}
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                       <thead>
//                         <tr>
//                           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise' : 'التمرين'}</th>
//                           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Duration' : 'المدة'}</th>
//                           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'GIF' : 'صورة متحركة'}</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {clientData.cardio.filter(exercise => exercise.day === selectedDay).map((exercise, index) => (
//                           <tr key={index}>
//                             <td className="py-2 px-4 border-b text-left text-xl font-bold font-serif">{exercise.name}</td>
//                             <td className="py-2 px-4 border-b text-center text-xl font-bold font-serif">{exercise.duration}</td>
//                             <td className="py-2 px-4 border-b text-center min-w-32 mr-3">
//                               {exercise.gif ? (
//                                 <img
//                                   src={`${exercise.day}/${exercise.gif}`}
//                                   alt={exercise.name}
//                                   className="w-32 h-32 cursor-pointer"
//                                   onClick={() => handleGifClick(`${exercise.day}/${exercise.gif}`)}
//                                 />
//                               ) : (
//                                 'No GIF'
//                               )}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
//               )}
//             </div>
//           )} */}

// {showCardio && (
//   <div className="mb-4">
//     {clientData?.cardio && clientData.cardio.length > 0 ? (
//       <div className="mb-4 justify-center items-center flex flex-col">
//         {cardioDays.length > 0 ? (
//           <div className="mb-4 flex justify-center flex-wrap">
//             {cardioDays.sort().map(day => (
//               <button
//                 key={day}
//                 className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 justify-center items-center ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                   isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                 }`}
//                 onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//               >
//                 <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                 {!isCurrentDay(day, clientData.date || '') && (
//                   <div className="locked-overlay">
//                     <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-white" />
//                   </div>
//                 )}
//               </button>
//             ))}
//           </div>
//         ) : (
//           <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//         )}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise #' : 'رقم التمرين'}</th>
//                 <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise' : 'التمرين'}</th>
//                 <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Duration' : 'المدة'}</th>
//                 <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'GIF' : 'صورة متحركة'}</th>
//               </tr>
//             </thead>
//             <tbody>
//               {clientData.cardio
//                 .filter(exercise => exercise.day === selectedDay)
//                 .slice(currentUnlockedIndex, currentUnlockedIndex + 1)
//                 .map((exercise, index) => (
//                   <React.Fragment key={exercise.id}>
//                     <tr>
//                       <td className="py-2 px-4 border-b text-center text-xl font-bold font-serif">{currentUnlockedIndex + 1}</td>
//                       <td className="py-2 px-4 border-b text-left text-xl font-bold font-serif">{exercise.name}</td>
//                       <td className="py-2 px-4 border-b text-center text-xl font-bold font-serif">{exercise.duration}</td>
//                       <td className="py-2 px-4 border-b text-center min-w-32 mr-3">
//                         {exercise.gif ? (
//                           <img
//                             src={`/cardio/${exercise.gif}`}
//                             alt={exercise.name}
//                             className="w-32 h-32 cursor-pointer"
//                             onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
//                           />
//                         ) : (
//                           'No GIF'
//                         )}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td colSpan={4} className="py-2 px-4 border-b text-center">
//                         <div className="flex flex-col items-center">
//                           {cardioTimers[exercise.id] || '00:00'}
//                         </div>
//                         <div className="flex flex-col items-center">
//                           {!cardioClickedButtons[exercise.id]?.[0] && (
//                             <button
//                               className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
//                               onClick={() => handleStartCardioTimer(exercise.id, parseInt(exercise.duration))}
//                             >
//                               <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
//                             </button>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   </React.Fragment>
//                 ))}
//             </tbody>
//           </table>
//           <div className="flex justify-between mt-4">
//             <button
//               className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//               onClick={() => setCurrentUnlockedIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
//             >
//               <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//             </button>
//             <button
//               className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//               onClick={() => setCurrentUnlockedIndex((prevIndex) => {
//                 if (clientData.cardio) {
//                   return Math.min(prevIndex + 1, clientData.cardio.filter(exercise => exercise.day === selectedDay).length - 1);
//                 }
//                 return prevIndex;
//               })}
//             >
//               <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     ) : (
//       <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
//     )}
//   </div>
// )}


//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//       {showWeightsModal && activeSetIndex !== null && (
//         <Modal onClose={closeWeightsModal}>
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-4">{language === 'en' ? 'Set Weights and Reps' : 'تحديد الأوزان والتكرارات'}</h2>
//             <div className="mb-4 flex justify-between items-center bg-[var(--background-color)]">
//               <select
//                 value={sets[activeSetIndex].weight}
//                 onChange={(e) => handleSetChange(activeSetIndex, 'weight', parseFloat(e.target.value))}
//                 className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//               >
//                 {weights.map((weight) => (
//                   <option key={weight} value={weight}>
//                     {weight} kg
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={sets[activeSetIndex].reps}
//                 onChange={(e) => handleSetChange(activeSetIndex, 'reps', parseInt(e.target.value))}
//                 className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//               >
//                 {Array.from({ length: 25 }, (_, i) => i + 1).map(reps => (
//                   <option key={reps} value={reps}>{reps} {language === 'en' ? 'reps' : 'تكرارات'}</option>
//                 ))}
//               </select>
//             </div>
//             <button
//               className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 w-full"
//               onClick={handleSaveWeights}
//             >
//               {language === 'en' ? 'Save' : 'حفظ'}
//             </button>
//           </div>
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientExercises;





































































// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, faPlus, faSave, faTrash, faDumbbell, faHeartCircleBolt, faLock, faPlay, faStop, faWeightHanging, faRedoAlt, faClock, faArrowLeft, faArrowRight, fa7 } from '@fortawesome/free-solid-svg-icons';
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
//   'Day 7': fa7,
// };

// const translations: Record<string, string> = {
//     'Day 1': 'اليوم 1',
//     'Day 2': 'اليوم 2',
//     'Day 3': 'اليوم 3',
//     'Day 4': 'اليوم 4',
//     'Day 5': 'اليوم 5',
//     'Day 6': 'اليوم 6',
//     'Day 7': 'اليوم 7',
//     Proteins: 'البروتينات',
//     Vegetables: 'الخضروات',
//     Grains: 'الحبوب',
//     Dairy: 'منتجات الألبان',
//     Fruits: 'الفواكه',
//     Nuts: 'المكسرات',
// };

// interface Set {
//   weight: number;
//   reps: number;
//   timer?: string;
//   started?: boolean;
//   finished?: boolean;
// }

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets: number; // Number of sets
//   restTime: number; // Rest time in seconds
//   weights: number[]; // Array of weights
//   reps: number[]; // Array of reps
//   started?: boolean;
//   finished?: boolean;
//   date: string;
// }

// interface Cardio {
//     id: string;
//     name: string;
//     duration: string;
//     day: string;
//     gif?: string;
//   }
  

// interface ClientData {
//   email: string;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   cardio?: Cardio[];
//   date?: string; // Added date field
// }

// interface Timers {
//   [key: string]: string;
// }

// interface ClickedButtons {
//   [key: string]: boolean[];
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
//   const [sets, setSets] = useState<Set[]>([]);
//   const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [timers, setTimers] = useState<Timers>({});
//   const [showCardio, setShowCardio] = useState(false);
//   const [showExercises, setShowExercises] = useState(true);
//   const [restTimer, setRestTimer] = useState<string | null>(null);
//   const [showWeightsModal, setShowWeightsModal] = useState(false);
//   const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [cardioTimers, setCardioTimers] = useState<Timers>({});
//   const [cardioIntervalId, setCardioIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [cardioClickedButtons, setCardioClickedButtons] = useState<ClickedButtons>({});
//   const [exercises, setExercises] = useState<Exercise[]>([]); // <-- Add this line to store exercises in state

//   const router = useRouter();

//   useEffect(() => {
//     const checkAndAddEmail = async (email: string): Promise<boolean> => {
//         try {
//             const response = await fetch('/api/addEmail', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email }),
//             });

//             if (!response.ok) {
//                 throw new Error('Error checking/adding email');
//             }

//             const data = await response.json();
//             return !data.exists;
//         } catch (error) {
//             console.error('Error checking/adding email:', error);
//             return false;
//         }
//     };

//     const fetchClientData = async () => {
//       if (!user) {
//           router.push('/sign-in');
//           return;
//       }
  
//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
  
//       if (!userEmail) {
//           setLoading(false);
//           return;
//       }
  
//       try {
//           const isNew = await checkAndAddEmail(userEmail);
  
//           const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
//               fetch(`/api/client?email=${userEmail}`, {
//                   method: 'GET',
//               }),
//               fetch(`/api/adminAddCardio?email=${userEmail}`, {
//                   method: 'GET',
//               }),
//               fetch(`/api/fetchExercises?email=${userEmail}`, {
//                   method: 'GET',
//               }),
//           ]);
  
//           if (!clientResponse.ok) {
//               const errorData = await clientResponse.json();
//               throw new Error(errorData.message || 'Failed to fetch client data');
//           }
  
//           if (!cardioResponse.ok) {
//               const errorData = await cardioResponse.json();
//               throw new Error(errorData.message || 'Failed to fetch cardio data');
//           }
  
//           if (!exercisesResponse.ok) {
//               const errorData = await exercisesResponse.json();
//               throw new Error(errorData.message || 'Failed to fetch exercises');
//           }
  
//           const client = await clientResponse.json();
//           const cardio = await cardioResponse.json();
//           const exercises = await exercisesResponse.json();
//           setClientData({ ...client, exercises: exercises.exercises, cardio: cardio.exercises });
  
//           if ((isNew && !client.hasPaid) || !client.hasPaid) {
//               router.push('/dashboard/payments');
//               return;
//           }
  
//           // if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           //     console.log("Exercises found");
//           //     setExercises(exercisesData.exercises); // <-- Store exercises in state
//           //     setClientData({ ...client, exercises: exercisesData.exercises, cardio: cardio.exercises });
//           // } else {
//           //     console.log("No exercises found");
//           //     setError('No exercises data found for this client.');
//           // }
//       } catch (error: any) {
//           console.error('Error fetching client data:', error);
//           setError(error.message);
//       } finally {
//           setLoading(false);
//       }
//   };

//     fetchClientData();
// }, [user, router]);

// useEffect(() => {
//   if (exercises) {
//     const unlockedIndices = exercises.map((exercise, index) => {
//       const isUnlocked = isCurrentDay(exercise.day, exercise.date);
//       return isUnlocked ? index : -1;
//     }).filter(index => index !== -1);

//     setUnlockedExerciseIndices(unlockedIndices);
//     setCurrentUnlockedIndex(0);
//   }
// }, [exercises]);


// const isCurrentDay = (day: string, exerciseAssignedDate: string): boolean => {
//     const assigned = new Date(exerciseAssignedDate);
//     const today = new Date();
//     const dayNumber = parseInt(day.split(' ')[1], 10);

//     // Calculate the number of days since the exercise was assigned
//     const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));

//     // Calculate the correct day within the 7-day cycle
//     const rotatedDay = ((diffDays + (dayNumber - 1)) % 7) + 1;

//     // Debugging output
//     console.log('Assigned Date:', assigned);
//     console.log('Today\'s Date:', today);
//     console.log('Difference in Days:', diffDays);
//     console.log('Day Number from Exercise:', dayNumber);
//     console.log('Rotated Day Calculated:', rotatedDay);
//     console.log('Is Current Day?', dayNumber === rotatedDay);

//     return dayNumber === rotatedDay;
// };

//   const days = exercises.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];    

//   const cardioDays = clientData?.cardio?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];    

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div className="text-[var(--text-color)]">Error: {error}</div>;

//   const containerStyle = {
//     minHeight: 'calc(90vh - 4rem)', // Adjust this value as needed
//     backgroundColor: 'var(--background-color)',
//     color: 'var(--text-color)',
//   };    

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };  

//   const handleAddSet = () => {
//     setSets([...sets, { weight: 0, reps: 0, timer: '00:00', started: false, finished: false }]);
//   };

//   const handleSetChange = (index: number, field: 'weight' | 'reps', value: number) => {
//     const updatedSets = sets.map((set, i) => (i === index ? { ...set, [field]: value } : set));
//     setSets(updatedSets);
//   };

//   const handleSaveSets = async () => {
//     if (selectedExercise && clientData) {
//       try {
//         const weights = sets.map(set => set.weight);
//         const reps = sets.map(set => set.reps);

//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights,
//             reps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to save sets');
//         }

//                 const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, sets: sets.length, weights, reps } : exercise
//         );

//         const updatedClientData = {
//           ...clientData,
//           email: clientData.email as string,
//           exercises: updatedExercises,
//         };

//         setClientData(updatedClientData);
//         setSelectedExercise(null);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error saving sets:', error);
//         setError(error.message);
//       }
//     }
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

// const handleToggleExerciseStart = async (exercise: Exercise) => {
//     if (clientData) {
//       const updatedExercises = clientData.exercises?.map(ex =>
//         ex.id === exercise.id
//           ? { ...ex, started: !ex.started }
//           : { ...ex, started: false } // Close all other exercises
//       );

//       const updatedClientData = {
//         ...clientData,
//         email: clientData.email,
//         exercises: updatedExercises,
//       };

//       setClientData(updatedClientData);

//       try {
//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: exercise.id,
//             exerciseStarted: !exercise.started,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to update exercise');
//         }

//         // Ensure the current exercise index points to the newly started exercise
//         const newCurrentIndex = unlockedExerciseIndices.indexOf(clientData.exercises?.indexOf(exercise) || 0);
//         setCurrentUnlockedIndex(newCurrentIndex);

//       } catch (error: any) {
//         console.error('Error updating exercise:', error);
//       }
//     }
//   };

//   const handleRemoveSet = (index: number) => {
//     const updatedSets = sets.filter((_, i) => i !== index);
//     setSets(updatedSets);
//   };

//   const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }
//     setClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][setIndex] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setRestTimer('00:00');
//         setIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
//   };

//   const weights = Array.from({ length: 20 }, (_, i) => 2.5 * (i + 1));

//   const openWeightsModal = (exercise: Exercise, setIndex: number) => {
//     if (setIndex >= sets.length) {
//       setSets(prevSets => {
//         const newSets = [...prevSets];
//         for (let i = prevSets.length; i <= setIndex; i++) {
//           newSets.push({ weight: 0, reps: 0, started: false, finished: false });
//         }
//         return newSets;
//       });
//     }

//     setSelectedExercise(exercise);
//     setActiveSetIndex(setIndex);
//     setShowWeightsModal(true);
//   };

//   const closeWeightsModal = () => {
//     setShowWeightsModal(false);
//     setActiveSetIndex(null);
//   };

// const handleStartCardioTimer = (exerciseId: string, duration: number) => {
//     if (cardioIntervalId) {
//       clearInterval(cardioIntervalId);
//     }
//     setCardioClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][0] = true;
//       return newState;
//     });
  
//     const startTime = Date.now();
//     const endTime = startTime + duration * 60000; // Duration is in minutes
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: '00:00' }));
//         setCardioIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);
  
//     setCardioIntervalId(newIntervalId);
//   };

// const handleSaveWeights = async () => {
//     if (selectedExercise && activeSetIndex !== null && clientData) {
//         try {
//             const updatedWeights = selectedExercise.weights ? [...selectedExercise.weights] : [];
//             const updatedReps = selectedExercise.reps ? [...selectedExercise.reps] : [];

//             updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
//             updatedReps[activeSetIndex] = sets[activeSetIndex].reps;

//             const response = await fetch('/api/assign-weights', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email: clientData.email,
//                     exerciseId: selectedExercise.id,
//                     weights: updatedWeights,
//                     reps: updatedReps,
//                 }),
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 console.error('Error data:', errorData);
//                 throw new Error(errorData.message || 'Failed to assign weights and reps');
//             }

//             // Update the local state to reflect the changes
//             const updatedExercises = clientData.exercises?.map(exercise =>
//                 exercise.id === selectedExercise.id
//                     ? { ...exercise, weights: updatedWeights, reps: updatedReps }
//                     : exercise
//             );

//             setClientData({
//                 ...clientData,
//                 exercises: updatedExercises,
//             });

//             setShowWeightsModal(false); // Close the modal after saving
//             setSets([]); // Clear the sets array
//         } catch (error: any) {
//             console.error('Error assigning weights and reps:', error);
//         }
//     }
// };

//   const currentExercise = exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col justify-center items-center min-h-screen relative" style={containerStyle}>
//         <div className="absolute top-4 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faHeartCircleBolt}
//             className={`h-8 w-8 cursor-pointer ${showCardio ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowCardio(!showCardio)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-4">{language === 'en' ? 'Assigned Exercises and Cardio:' : 'التمارين والكارديو المخصصة:'}</h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}
//           {showExercises && exercises.length > 0 ? (
//             <div className="mb-4">
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
//                 <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full overflow-x-auto md:overflow-hidden">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">#</th>
//                         <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise' : 'التمرين'}</th>
//                         <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'GIF' : 'صورة متحركة'}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td className="py-2 px-4 border-b text-center">
//                           <FontAwesomeIcon icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]} className="h-6 w-6" />
//                         </td>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored' : ''}`}>
//                           {currentExercise.name}
//                         </td>
//                         <td className={`py-2 px-4 border-b text-center min-w-32 mr-3 ${!currentExercise.started ? 'censored' : ''}`}>
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored' : ''}`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             'No GIF'
//                           )}
//                         </td>
//                       </tr>
//                       {currentExercise.started && (
//                         Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
//                           <React.Fragment key={setIndex}>
//                             <tr>
//                               <td colSpan={3} className="py-2 px-4 border-b text-center">

//                                 <div className="flex flex-col italic font-serif text-left italic text-xl">
//                                     {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
//                                 </div>
//                                 <div className="flex justify-center items-center space-x-4">
//                                   <div className="flex flex-col items-center">
//                                     <FontAwesomeIcon icon={faWeightHanging} className="h-4 w-4 mr-1" /> {(currentExercise.weights && currentExercise.weights[setIndex]) || 0} kg
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     <FontAwesomeIcon icon={faRedoAlt} className="h-4 w-4 mr-1" /> {(currentExercise.reps && currentExercise.reps[setIndex]) || 0} reps
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     <button
//                                       onClick={() => openWeightsModal(currentExercise, setIndex)}
//                                       className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
//                                     >
//                                       <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
//                                     </button>
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                             <tr>
//                               <td colSpan={3} className="py-2 px-4 border-b text-center">
//                                 <div className="flex flex-col italic font-serif text-left italic text-xl">
//                                     {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
//                                 </div>
//                                 <div className="flex justify-center items-center space-x-4">
//                                   <div className="flex flex-col items-center">
//                                     {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     {!clickedButtons[currentExercise.id]?.[setIndex] && (
//                                       <button
//                                         className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
//                                         onClick={() => handleStartRestTimer(currentExercise.id, setIndex, currentExercise.restTime)}
//                                       >
//                                         <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
//                                       </button>
//                                     )}
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                           </React.Fragment>
//                         ))
//                       )}
//                       <tr>
//                         <td colSpan={3} className="py-2 px-4 border-b text-center min-w-full">
//                           <button
//                             className="min-w-full flex justify-center items-center bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 mt-2"
//                             onClick={() => handleToggleExerciseStart(currentExercise)}
//                           >
//                             <FontAwesomeIcon icon={currentExercise.started ? faStop : faPlay} className="h-4 w-4 mr-2" />
//                           </button>
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
//                 <p>{language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}</p>
//               )}
//             </div>
//           ) : null}
  
// {showCardio && (
//   <div className="mb-4">
//     {clientData?.cardio && clientData.cardio.length > 0 ? (
//       <div className="mb-4 justify-center items-center flex flex-col">
//         {cardioDays.length > 0 ? (
//           <div className="mb-4 flex justify-center flex-wrap">
//             {cardioDays.sort().map(day => (
//               <button
//                 key={day}
//                 className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 justify-center items-center ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
//                   isCurrentDay(day, clientData.date || '') ? '' : 'locked'
//                 }`}
//                 onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//               >
//                 <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                 {!isCurrentDay(day, clientData.date || '') && (
//                   <div className="locked-overlay">
//                     <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-white" />
//                   </div>
//                 )}
//               </button>
//             ))}
//           </div>
//         ) : (
//           <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//         )}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise #' : 'رقم التمرين'}</th>
//                 <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise' : 'التمرين'}</th>
//                 <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Duration' : 'المدة'}</th>
//                 <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'GIF' : 'صورة متحركة'}</th>
//               </tr>
//             </thead>
//             <tbody>
//               {clientData.cardio
//                 .filter(exercise => exercise.day === selectedDay)
//                 .slice(currentUnlockedIndex, currentUnlockedIndex + 1)
//                 .map((exercise, index) => (
//                   <React.Fragment key={exercise.id}>
//                     <tr>
//                       <td className="py-2 px-4 border-b text-center text-xl font-bold font-serif">{currentUnlockedIndex + 1}</td>
//                       <td className="py-2 px-4 border-b text-left text-xl font-bold font-serif">{exercise.name}</td>
//                       <td className="py-2 px-4 border-b text-center text-xl font-bold font-serif">{exercise.duration}</td>
//                       <td className="py-2 px-4 border-b text-center min-w-32 mr-3">
//                         {exercise.gif ? (
//                           <img
//                             src={`/cardio/${exercise.gif}`}
//                             alt={exercise.name}
//                             className="w-32 h-32 cursor-pointer"
//                             onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
//                           />
//                         ) : (
//                           'No GIF'
//                         )}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td colSpan={4} className="py-2 px-4 border-b text-center">
//                         <div className="flex flex-col items-center">
//                           {cardioTimers[exercise.id] || '00:00'}
//                         </div>
//                         <div className="flex flex-col items-center">
//                           {!cardioClickedButtons[exercise.id]?.[0] && (
//                             <button
//                               className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
//                               onClick={() => handleStartCardioTimer(exercise.id, parseInt(exercise.duration))}
//                             >
//                               <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
//                             </button>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   </React.Fragment>
//                 ))}
//             </tbody>
//           </table>
//           <div className="flex justify-between mt-4">
//             <button
//               className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//               onClick={() => setCurrentUnlockedIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
//             >
//               <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//             </button>
//             <button
//               className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//               onClick={() => setCurrentUnlockedIndex((prevIndex) => {
//                 if (clientData.cardio) {
//                   return Math.min(prevIndex + 1, clientData.cardio.filter(exercise => exercise.day === selectedDay).length - 1);
//                 }
//                 return prevIndex;
//               })}
//             >
//               <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     ) : (
//       <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
//     )}
//   </div>
// )}

//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//       {showWeightsModal && activeSetIndex !== null && (
//         <Modal onClose={closeWeightsModal}>
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-4">{language === 'en' ? 'Set Weights and Reps' : 'تحديد الأوزان والتكرارات'}</h2>
//             <div className="mb-4 flex justify-between items-center bg-[var(--background-color)]">
//               <select
//                 value={sets[activeSetIndex].weight}
//                 onChange={(e) => handleSetChange(activeSetIndex, 'weight', parseFloat(e.target.value))}
//                 className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//               >
//                 {weights.map((weight) => (
//                   <option key={weight} value={weight}>
//                     {weight} kg
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={sets[activeSetIndex].reps}
//                 onChange={(e) => handleSetChange(activeSetIndex, 'reps', parseInt(e.target.value))}
//                 className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//               >
//                 {Array.from({ length: 25 }, (_, i) => i + 1).map(reps => (
//                   <option key={reps} value={reps}>{reps} {language === 'en' ? 'reps' : 'تكرارات'}</option>
//                 ))}
//               </select>
//             </div>
//             <button
//               className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 w-full"
//               onClick={handleSaveWeights}
//             >
//               {language === 'en' ? 'Save' : 'حفظ'}
//             </button>
//           </div>
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientExercises;
















          {/* {showExercises && clientData ? (
            <div className="mb-4">
              {days.length > 0 ? (
                <div className="mb-4 flex justify-center flex-wrap">
                  {days.sort().map(day => (
                    <button
                      key={day}
                      className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${
                        selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                      } ${isCurrentDay(day, exercise.date || '') ? '' : 'locked'}`}
                      onClick={() => isCurrentDay(day, exercise.date || '') && setSelectedDay(day)}
                    >
                      <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
                      {!isCurrentDay(day, exercise.date || '') && (
                        <div className="locked-overlay">
                          <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
              )}
              {currentExercise ? (
                <div className="w-full overflow-x-auto md:overflow-hidden">
                  <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-center">#</th>
                        <th className="py-2 px-4 border-b text-center">
                          {language === 'en' ? 'Exercise' : 'التمرين'}
                        </th>
                        <th className="py-2 px-4 border-b text-center">
                          {language === 'en' ? 'GIF' : 'صورة متحركة'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b text-center">
                          <FontAwesomeIcon
                            icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]}
                            className="h-6 w-6"
                          />
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${
                            !currentExercise.started ? 'censored' : ''
                          }`}
                        >
                          {currentExercise.name}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-center min-w-32 mr-3 ${
                            !currentExercise.started ? 'censored' : ''
                          }`}
                        >
                          {currentExercise.gif ? (
                            <img
                              src={`${currentExercise.gif}`}
                              alt={currentExercise.name}
                              className={`w-32 h-32 cursor-pointer ${
                                !currentExercise.started ? 'censored' : ''
                              }`}
                              onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
                            />
                          ) : (
                            'No GIF'
                          )}
                        </td>
                      </tr>
                      {currentExercise.started &&
                        Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
                          <React.Fragment key={setIndex}>
                            <tr>
                              <td colSpan={3} className="py-2 px-4 border-b text-center">
                                <div className="flex flex-col italic font-serif text-left italic text-xl">
                                  {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
                                </div>
                                <div className="flex justify-center items-center space-x-4">
                                  <div className="flex flex-col items-center">
                                    <FontAwesomeIcon
                                      icon={faWeightHanging}
                                      className="h-4 w-4 mr-1"
                                    />{' '}
                                    {(currentExercise.weights && currentExercise.weights[setIndex]) ||
                                      0}{' '}
                                    kg
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <FontAwesomeIcon icon={faRedoAlt} className="h-4 w-4 mr-1" />{' '}
                                    {(currentExercise.reps && currentExercise.reps[setIndex]) ||
                                      0}{' '}
                                    reps
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <button
                                      onClick={() => openWeightsModal(currentExercise, setIndex)}
                                      className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
                                    >
                                      <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={3} className="py-2 px-4 border-b text-center">
                                <div className="flex flex-col italic font-serif text-left italic text-xl">
                                  {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
                                </div>
                                <div className="flex justify-center items-center space-x-4">
                                  <div className="flex flex-col items-center">
                                    {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
                                  </div>
                                  <div className="flex flex-col items-center">
                                    {!clickedButtons[currentExercise.id]?.[setIndex] && (
                                      <button
                                        className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
                                        onClick={() =>
                                          handleStartRestTimer(
                                            currentExercise.id,
                                            setIndex,
                                            currentExercise.restTime
                                          )
                                        }
                                      >
                                        <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                      <tr>
                        <td colSpan={3} className="py-2 px-4 border-b text-center min-w-full">
                          <button
                            className="min-w-full flex justify-center items-center bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 mt-2"
                            onClick={() => handleToggleExerciseStart(currentExercise)}
                          >
                            <FontAwesomeIcon
                              icon={currentExercise.started ? faStop : faPlay}
                              className="h-4 w-4 mr-2"
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex justify-between mt-4">
                    <button
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
                      onClick={handlePreviousExercise}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
                    </button>
                    <button
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
                      onClick={handleNextExercise}
                    >
                      <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <p>{language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}</p>
              )}
            </div>
          ) : null} */}

          {/* {showExercises && clientData ? (
            <div className="mb-4">
              {exercises.length > 0 ? (
                <div className="mb-4 flex justify-center flex-wrap">
                  {exercises.map((exercise, index) => (
                    <button
                      key={index}
                      className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${
                        selectedDay === exercise.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                      } ${isCurrentDay(exercise.day, exercise.date) ? '' : 'locked'}`}
                      onClick={() => isCurrentDay(exercise.day, exercise.date) && setSelectedDay(exercise.day)}
                    >
                      <FontAwesomeIcon icon={dayIcons[exercise.day]} className="h-6 w-6" />
                      {!isCurrentDay(exercise.day, exercise.date) && (
                        <div className="locked-overlay">
                          <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
              )}
              {currentExercise ? (
                <div className="w-full overflow-x-auto md:overflow-hidden">
                  <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-center">#</th>
                        <th className="py-2 px-4 border-b text-center">
                          {language === 'en' ? 'Exercise' : 'التمرين'}
                        </th>
                        <th className="py-2 px-4 border-b text-center">
                          {language === 'en' ? 'GIF' : 'صورة متحركة'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b text-center">
                          <FontAwesomeIcon
                            icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]}
                            className="h-6 w-6"
                          />
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${
                            !currentExercise.started ? 'censored' : ''
                          }`}
                        >
                          {currentExercise.name}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-center min-w-32 mr-3 ${
                            !currentExercise.started ? 'censored' : ''
                          }`}
                        >
                          {currentExercise.gif ? (
                            <img
                              src={`${currentExercise.gif}`}
                              alt={currentExercise.name}
                              className={`w-32 h-32 cursor-pointer ${
                                !currentExercise.started ? 'censored' : ''
                              }`}
                              onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
                            />
                          ) : (
                            'No GIF'
                          )}
                        </td>
                      </tr>
                      {currentExercise.started &&
                        Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
                          <React.Fragment key={setIndex}>
                            <tr>
                              <td colSpan={3} className="py-2 px-4 border-b text-center">
                                <div className="flex flex-col italic font-serif text-left italic text-xl">
                                  {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
                                </div>
                                <div className="flex justify-center items-center space-x-4">
                                  <div className="flex flex-col items-center">
                                    <FontAwesomeIcon
                                      icon={faWeightHanging}
                                      className="h-4 w-4 mr-1"
                                    />{' '}
                                    {(currentExercise.weights && currentExercise.weights[setIndex]) ||
                                      0}{' '}
                                    kg
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <FontAwesomeIcon icon={faRedoAlt} className="h-4 w-4 mr-1" />{' '}
                                    {(currentExercise.reps && currentExercise.reps[setIndex]) ||
                                      0}{' '}
                                    reps
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <button
                                      onClick={() => openWeightsModal(currentExercise, setIndex)}
                                      className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
                                    >
                                      <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={3} className="py-2 px-4 border-b text-center">
                                <div className="flex flex-col italic font-serif text-left italic text-xl">
                                  {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
                                </div>
                                <div className="flex justify-center items-center space-x-4">
                                  <div className="flex flex-col items-center">
                                    {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
                                  </div>
                                  <div className="flex flex-col items-center">
                                    {!clickedButtons[currentExercise.id]?.[setIndex] && (
                                      <button
                                        className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
                                        onClick={() =>
                                          handleStartRestTimer(
                                            currentExercise.id,
                                            setIndex,
                                            currentExercise.restTime
                                          )
                                        }
                                      >
                                        <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                      <tr>
                        <td colSpan={3} className="py-2 px-4 border-b text-center min-w-full">
                          <button
                            className="min-w-full flex justify-center items-center bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 mt-2"
                            onClick={() => handleToggleExerciseStart(currentExercise)}
                          >
                            <FontAwesomeIcon
                              icon={currentExercise.started ? faStop : faPlay}
                              className="h-4 w-4 mr-2"
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex justify-between mt-4">
                    <button
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
                      onClick={handlePreviousExercise}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
                    </button>
                    <button
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
                      onClick={handleNextExercise}
                    >
                      <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                      </button>
                      </div>
                      </div>
              ) : (
                <p>{language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}</p>
              )}
            </div>
          ) : null} */}


          

          // useEffect(() => {
          //   if (exercisesLoaded && exercises.length > 0) {
          //       console.log('Exercises State in useEffect:', exercises);
          //       const unlockedIndices = exercises.map((exercise, index) => {
          //           console.log("exercise.date", exercise.date);
          //           const isUnlocked = isCurrentDay(exercise.day, exercise.date);
          //           return isUnlocked ? index : -1;
          //       }).filter(index => index !== -1);
          
          //       setUnlockedExerciseIndices(unlockedIndices);
          //       setCurrentUnlockedIndex(0);
          //   } else {
          //       console.log('No exercises found.');
          //   }
          // }, [exercises, exercisesLoaded]);


          










































// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, faPlus, faSave, faTrash, faDumbbell, faHeartCircleBolt, faLock, faPlay, faStop, faWeightHanging, faRedoAlt, faClock, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
//   'Day 7': fa7,
// };

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Day 7': 'اليوم 7',
//   Proteins: 'البروتينات',
//   Vegetables: 'الخضروات',
//   Grains: 'الحبوب',
//   Dairy: 'منتجات الألبان',
//   Fruits: 'الفواكه',
//   Nuts: 'المكسرات',
// };

// interface Set {
//   weight: number;
//   reps: number;
//   timer?: string;
//   started?: boolean;
//   finished?: boolean;
// }

// interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets: number;
//   restTime: number;
//   weights: number[];
//   reps: number[];
//   started?: boolean;
//   finished?: boolean;
//   date: string;
// }

// interface Cardio {
//   id: string;
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// interface ClientData {
//   email: string;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   cardio?: Cardio[];
//   date?: string;
// }

// interface Timers {
//   [key: string]: string;
// }

// interface ClickedButtons {
//   [key: string]: boolean[];
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
//   const [sets, setSets] = useState<Set[]>([]);
//   const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [timers, setTimers] = useState<Timers>({});
//   const [showCardio, setShowCardio] = useState(false);
//   const [showExercises, setShowExercises] = useState(true);
//   const [restTimer, setRestTimer] = useState<string | null>(null);
//   const [showWeightsModal, setShowWeightsModal] = useState(false);
//   const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [cardioTimers, setCardioTimers] = useState<Timers>({});
//   const [cardioIntervalId, setCardioIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [cardioClickedButtons, setCardioClickedButtons] = useState<ClickedButtons>({});
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [exercisesLoaded, setExercisesLoaded] = useState(false);

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

//         try {
//             const isNew = await checkAndAddEmail(userEmail);

//             const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
//                 fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//                 fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
//                 fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//             ]);

//             if (!clientResponse.ok || !cardioResponse.ok || !exercisesResponse.ok) {
//                 const errorData = await clientResponse.json();
//                 throw new Error(errorData.message || 'Failed to fetch client data');
//             }

//             const client = await clientResponse.json();
//             const cardio = await cardioResponse.json();
//             const exercisesData = await exercisesResponse.json();
//             console.log("exercisesData", exercisesData);

//             if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//                 setExercises(exercisesData.exercises);
//                 setExercisesLoaded(true);  // This ensures that the data is loaded
//                 setClientData({ ...client, exercises: exercisesData.exercises, cardio: cardio.exercises });
//             } else {
//                 setError('No exercises data found for this client.');
//                 setExercisesLoaded(false);  // This ensures that the data is loaded
//             }

//             if ((isNew && !client.hasPaid) || !client.hasPaid) {
//                 router.push('/dashboard/payments');
//                 return;
//             }

//         } catch (error: any) {
//             console.error('Error fetching client data:', error);
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     fetchClientData();
// }, [user, router]);


// useEffect(() => {
//   if (exercisesLoaded && exercises.length > 0 && clientData?.date) {
//     console.log('Exercises State in useEffect:', exercises);
//     const unlockedIndices = exercises.map((exercise, index) => {
//       console.log(`Processing Exercise Day: ${exercise.day}, Date: ${exercise.date}`);
//       const isUnlocked = isCurrentDay(exercise.day, exercise.date || '');
//       console.log(`Is Current Day for Exercise ${index + 1}?`, isUnlocked);
//       return isUnlocked ? index : -1;
//     }).filter(index => index !== -1);

//     console.log('Unlocked Indices:', unlockedIndices);
//     setUnlockedExerciseIndices(unlockedIndices);
//     setCurrentUnlockedIndex(0);
//   } else {
//     console.log('No exercises found or client data incomplete.');
//   }
// }, [exercises, exercisesLoaded, clientData]);


// // const isCurrentDay = (day: string, exerciseAssignedDate: string): boolean => {
// //   const assigned = new Date(exerciseAssignedDate);
// //   const today = new Date();
// //   const dayNumber = parseInt(day.split(' ')[1], 10);

// //   // Calculate the number of days since the exercise was assigned
// //   const diffTime = Math.abs(today.getTime() - assigned.getTime());
// //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// //   // Assume a 7-day cycle by default
// //   const cycleDays = 7;

// //   // Calculate the current day in the cycle
// //   const currentDay = (diffDays % cycleDays) || cycleDays;

// //   console.log('Assigned Date:', assigned);
// //   // console.log('Today\'s Date:', today);
// //   // console.log('Difference in Days:', diffDays);
// //   // console.log('Day Number from Exercise:', dayNumber);
// //   // console.log('Calculated Current Day:', currentDay);
// //   console.log('Is Current Day?', dayNumber === currentDay);

// //   return dayNumber === currentDay;
// // };


// const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//   const assignedDate = new Date(programStartDate);
//   const today = new Date();
  
//   const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

//   // Calculate the number of days since the program was assigned
//   const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   // Determine the current day in the cycle (assuming a 7-day cycle)
//   const currentDay = (diffDays % 7) + 1;

//   return dayNumber === currentDay;
// };






// // const isCurrentDay = (day: string, exerciseAssignedDate: string): boolean => {
// //   const assigned = new Date(exerciseAssignedDate);
// //   const today = new Date();
// //   const dayNumber = parseInt(day.split(' ')[1], 10);

// //   // Calculate the number of days since the exercise was assigned
// //   const diffDays = Math.floor((today.getTime() - assigned.getTime()) / (1000 * 60 * 60 * 24));

// //   // Calculate the correct day within the 7-day cycle
// //   const rotatedDay = ((diffDays + (dayNumber - 1)) % 7) + 1;

// //   // Debugging output
// //   console.log('Assigned Date:', assigned);
// //   console.log('Today\'s Date:', today);
// //   console.log('Difference in Days:', diffDays);
// //   console.log('Day Number from Exercise:', dayNumber);
// //   console.log('Rotated Day Calculated:', rotatedDay);
// //   console.log('Is Current Day?', dayNumber === rotatedDay);

// //   return dayNumber === rotatedDay;
// // };


//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   const cardioDays = clientData?.cardio?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div className="text-[var(--text-color)]">Error: {error}</div>;

//   const containerStyle = {
//     minHeight: 'calc(90vh - 4rem)',
//     backgroundColor: 'var(--background-color)',
//     color: 'var(--text-color)',
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleAddSet = () => {
//     setSets([...sets, { weight: 0, reps: 0, timer: '00:00', started: false, finished: false }]);
//   };

//   const handleSetChange = (index: number, field: 'weight' | 'reps', value: number) => {
//     const updatedSets = sets.map((set, i) => (i === index ? { ...set, [field]: value } : set));
//     setSets(updatedSets);
//   };

//   const handleSaveSets = async () => {
//     if (selectedExercise && clientData) {
//       try {
//         const weights = sets.map(set => set.weight);
//         const reps = sets.map(set => set.reps);

//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights,
//             reps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to save sets');
//         }

//         const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, sets: sets.length, weights, reps } : exercise
//         );

//         setClientData({ ...clientData, exercises: updatedExercises });
//         setSelectedExercise(null);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error saving sets:', error);
//         setError(error.message);
//       }
//     }
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

//   const handleToggleExerciseStart = async (exercise: Exercise) => {
//     if (clientData) {
//       const updatedExercises = clientData.exercises?.map(ex =>
//         ex.id === exercise.id ? { ...ex, started: !ex.started } : { ...ex, started: false }
//       );

//       setClientData({ ...clientData, exercises: updatedExercises });

//       try {
//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: exercise.id,
//             exerciseStarted: !exercise.started,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to update exercise');
//         }

//         const newCurrentIndex = unlockedExerciseIndices.indexOf(clientData.exercises?.indexOf(exercise) || 0);
//         setCurrentUnlockedIndex(newCurrentIndex);

//       } catch (error: any) {
//         console.error('Error updating exercise:', error);
//       }
//     }
//   };

//   const handleRemoveSet = (index: number) => {
//     const updatedSets = sets.filter((_, i) => i !== index);
//     setSets(updatedSets);
//   };

//   const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }
//     setClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][setIndex] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setRestTimer('00:00');
//         setIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
//   };

//   const weights = Array.from({ length: 20 }, (_, i) => 2.5 * (i + 1));

//   const openWeightsModal = (exercise: Exercise, setIndex: number) => {
//     if (setIndex >= sets.length) {
//       setSets(prevSets => {
//         const newSets = [...prevSets];
//         for (let i = prevSets.length; i <= setIndex; i++) {
//           newSets.push({ weight: 0, reps: 0, started: false, finished: false });
//         }
//         return newSets;
//       });
//     }

//     setSelectedExercise(exercise);
//     setActiveSetIndex(setIndex);
//     setShowWeightsModal(true);
//   };

//   const closeWeightsModal = () => {
//     setShowWeightsModal(false);
//     setActiveSetIndex(null);
//   };

//   const handleStartCardioTimer = (exerciseId: string, duration: number) => {
//     if (cardioIntervalId) {
//       clearInterval(cardioIntervalId);
//     }
//     setCardioClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][0] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 60000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: '00:00' }));
//         setCardioIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setCardioIntervalId(newIntervalId);
//   };

//   const handleSaveWeights = async () => {
//     if (selectedExercise && activeSetIndex !== null && clientData) {
//       try {
//         const updatedWeights = selectedExercise.weights ? [...selectedExercise.weights] : [];
//         const updatedReps = selectedExercise.reps ? [...selectedExercise.reps] : [];

//         updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
//         updatedReps[activeSetIndex] = sets[activeSetIndex].reps;

//         const response = await fetch('/api/assign-weights', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights: updatedWeights,
//             reps: updatedReps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to assign weights and reps');
//         }

//         const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, weights: updatedWeights, reps: updatedReps } : exercise
//         );

//         setClientData({
//           ...clientData,
//           exercises: updatedExercises,
//         });

//         setShowWeightsModal(false);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error assigning weights and reps:', error);
//       }
//     } else {
//       if (!selectedExercise) console.error('selectedExercise is null or undefined');
//       if (activeSetIndex === null) console.error('activeSetIndex is null');
//       if (!clientData) console.error('clientData is null or undefined');
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];



  
//   return (
//     <DashboardLayout>
//       <div className="flex flex-col justify-center items-center min-h-screen relative" style={containerStyle}>
//         <div className="absolute top-4 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faHeartCircleBolt}
//             className={`h-8 w-8 cursor-pointer ${showCardio ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowCardio(!showCardio)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-4">
//             {language === 'en' ? 'Assigned Exercises and Cardio:' : 'التمارين والكارديو المخصصة:'}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}


//           {/* {showExercises && clientData ? (
//             <div className="mb-4">
//               {exercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {exercises
//                     .filter((exercise, index, self) =>
//                       index === self.findIndex(e => e.day === exercise.day)
//                     ) // Filter to get unique days
//                     .sort((a, b) => parseInt(a.day.split(' ')[1], 10) - parseInt(b.day.split(' ')[1], 10)) // Sort by day number
//                     .map((exercise, index) => (
//                       <button
//                         key={index}
//                         className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${
//                           selectedDay === exercise.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//                         } ${isCurrentDay(exercise.day, exercise.date) ? '' : 'locked'}`}
//                         onClick={() => isCurrentDay(exercise.day, exercise.date) && setSelectedDay(exercise.day)}
//                       >
//                         <FontAwesomeIcon icon={dayIcons[exercise.day]} className="h-6 w-6" />
//                         {!isCurrentDay(exercise.day, exercise.date) && (
//                           <div className="locked-overlay">
//                             <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                           </div>
//                         )}
//                       </button>
//                     ))}
//                 </div>
//               ) : (
//                 <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full overflow-x-auto md:overflow-hidden">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">#</th>
//                         <th className="py-2 px-4 border-b text-center">
//                           {language === 'en' ? 'Exercise' : 'التمرين'}
//                         </th>
//                         <th className="py-2 px-4 border-b text-center">
//                           {language === 'en' ? 'GIF' : 'صورة متحركة'}
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td className="py-2 px-4 border-b text-center">
//                           <FontAwesomeIcon
//                             icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]}
//                             className="h-6 w-6"
//                           />
//                         </td>
//                         <td
//                           className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${
//                             !currentExercise.started ? 'censored' : ''
//                           }`}
//                         >
//                           {currentExercise.name}
//                         </td>
//                         <td
//                           className={`py-2 px-4 border-b text-center min-w-32 mr-3 ${
//                             !currentExercise.started ? 'censored' : ''
//                           }`}
//                         >
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${
//                                 !currentExercise.started ? 'censored' : ''
//                               }`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             'No GIF'
//                           )}
//                         </td>
//                       </tr>
//                       {currentExercise.started &&
//                         Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
//                           <React.Fragment key={setIndex}>
//                             <tr>
//                               <td colSpan={3} className="py-2 px-4 border-b text-center">
//                                 <div className="flex flex-col italic font-serif text-left italic text-xl">
//                                   {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
//                                 </div>
//                                 <div className="flex justify-center items-center space-x-4">
//                                   <div className="flex flex-col items-center">
//                                     <FontAwesomeIcon
//                                       icon={faWeightHanging}
//                                       className="h-4 w-4 mr-1"
//                                     />{' '}
//                                     {(currentExercise.weights && currentExercise.weights[setIndex]) ||
//                                       0}{' '}
//                                     kg
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     <FontAwesomeIcon icon={faRedoAlt} className="h-4 w-4 mr-1" />{' '}
//                                     {(currentExercise.reps && currentExercise.reps[setIndex]) ||
//                                       0}{' '}
//                                     reps
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     <button
//                                       onClick={() => openWeightsModal(currentExercise, setIndex)}
//                                       className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
//                                     >
//                                       <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
//                                     </button>
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                             <tr>
//                               <td colSpan={3} className="py-2 px-4 border-b text-center">
//                                 <div className="flex flex-col italic font-serif text-left italic text-xl">
//                                   {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
//                                 </div>
//                                 <div className="flex justify-center items-center space-x-4">
//                                   <div className="flex flex-col items-center">
//                                     {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     {!clickedButtons[currentExercise.id]?.[setIndex] && (
//                                       <button
//                                         className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
//                                         onClick={() =>
//                                           handleStartRestTimer(
//                                             currentExercise.id,
//                                             setIndex,
//                                             currentExercise.restTime
//                                           )
//                                         }
//                                       >
//                                         <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
//                                       </button>
//                                     )}
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                           </React.Fragment>
//                         ))}
//                       <tr>
//                         <td colSpan={3} className="py-2 px-4 border-b text-center min-w-full">
//                           <button
//                             className="min-w-full flex justify-center items-center bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 mt-2"
//                             onClick={() => handleToggleExerciseStart(currentExercise)}
//                           >
//                             <FontAwesomeIcon
//                               icon={currentExercise.started ? faStop : faPlay}
//                               className="h-4 w-4 mr-2"
//                             />
//                           </button>
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
//                 <p>{language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}</p>
//               )}
//             </div>
//           ) : null} */}

// {showExercises && clientData ? (
//   <div className="mb-4">
//     {exercises.length > 0 ? (
//       <div className="mb-4 flex justify-center flex-wrap">
//         {exercises
//           .filter((exercise, index, self) =>
//             index === self.findIndex(e => e.day === exercise.day)
//           ) // Filter to get unique days
//           .sort((a, b) => parseInt(a.day.split(' ')[1], 10) - parseInt(b.day.split(' ')[1], 10)) // Sort by day number
//           .map((exercise, index) => (
//             <button
//               key={index}
//               className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${
//                 selectedDay === exercise.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//               } ${isCurrentDay(exercise.day, exercise.date) ? '' : 'locked'}`}
//               onClick={() => isCurrentDay(exercise.day, exercise.date) && setSelectedDay(exercise.day)}
//             >
//               <FontAwesomeIcon icon={dayIcons[exercise.day]} className="h-6 w-6" />
//               {!isCurrentDay(exercise.day, exercise.date) && (
//                 <div className="locked-overlay">
//                   <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                 </div>
//               )}
//             </button>
//           ))}
//       </div>
//     ) : (
//       <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//     )}
//     {currentExercise ? (
//       <div className="w-full overflow-x-auto md:overflow-hidden">
//         <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b text-center">#</th>
//               <th className="py-2 px-4 border-b text-center">
//                 {language === 'en' ? 'Exercise' : 'التمرين'}
//               </th>
//               <th className="py-2 px-4 border-b text-center">
//                 {language === 'en' ? 'GIF' : 'صورة متحركة'}
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="py-2 px-4 border-b text-center">
//                 <FontAwesomeIcon
//                   icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]}
//                   className="h-6 w-6"
//                 />
//               </td>
//               <td
//                 className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${
//                   !currentExercise.started ? 'censored' : ''
//                 }`}
//               >
//                 {currentExercise.name}
//               </td>
//               <td
//                 className={`py-2 px-4 border-b text-center min-w-32 mr-3 ${
//                   !currentExercise.started ? 'censored' : ''
//                 }`}
//               >
//                 {currentExercise.gif ? (
//                   <img
//                     src={`${currentExercise.gif}`}
//                     alt={currentExercise.name}
//                     className={`w-32 h-32 cursor-pointer ${
//                       !currentExercise.started ? 'censored' : ''
//                     }`}
//                     onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                   />
//                 ) : (
//                   'No GIF'
//                 )}
//               </td>
//             </tr>
//             {currentExercise.started &&
//               Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
//                 <React.Fragment key={setIndex}>
//                   <tr>
//                     <td colSpan={3} className="py-2 px-4 border-b text-center">
//                       <div className="flex flex-col italic font-serif text-left italic text-xl">
//                         {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
//                       </div>
//                       <div className="flex justify-center items-center space-x-4">
//                         <div className="flex flex-col items-center">
//                           <FontAwesomeIcon
//                             icon={faWeightHanging}
//                             className="h-4 w-4 mr-1"
//                           />{' '}
//                           {(currentExercise.weights && currentExercise.weights[setIndex]) ||
//                             0}{' '}
//                           kg
//                         </div>
//                         <div className="flex flex-col items-center">
//                           <FontAwesomeIcon icon={faRedoAlt} className="h-4 w-4 mr-1" />{' '}
//                           {(currentExercise.reps && currentExercise.reps[setIndex]) ||
//                             0}{' '}
//                           reps
//                         </div>
//                         <div className="flex flex-col items-center">
//                           <button
//                             onClick={() => openWeightsModal(currentExercise, setIndex)}
//                             className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
//                           >
//                             <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
//                           </button>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td colSpan={3} className="py-2 px-4 border-b text-center">
//                       <div className="flex flex-col italic font-serif text-left italic text-xl">
//                         {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
//                       </div>
//                       <div className="flex justify-center items-center space-x-4">
//                         <div className="flex flex-col items-center">
//                           {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
//                         </div>
//                         <div className="flex flex-col items-center">
//                           {!clickedButtons[currentExercise.id]?.[setIndex] && (
//                             <button
//                               className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
//                               onClick={() =>
//                                 handleStartRestTimer(
//                                   currentExercise.id,
//                                   setIndex,
//                                   currentExercise.restTime
//                                 )
//                               }
//                             >
//                               <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 </React.Fragment>
//               ))}
//             <tr>
//               <td colSpan={3} className="py-2 px-4 border-b text-center min-w-full">
//                 <button
//                   className="min-w-full flex justify-center items-center bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 mt-2"
//                   onClick={() => handleToggleExerciseStart(currentExercise)}
//                 >
//                   <FontAwesomeIcon
//                     icon={currentExercise.started ? faStop : faPlay}
//                     className="h-4 w-4 mr-2"
//                   />
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <div className="flex justify-between mt-4">
//           <button
//             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//             onClick={handlePreviousExercise}
//           >
//             <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//           </button>
//           <button
//             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//             onClick={handleNextExercise}
//           >
//             <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     ) : (
//       <p>{language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}</p>
//     )}
//   </div>
// ) : null}





//           {showCardio && (
//             <div className="mb-4">
//               {clientData?.cardio && clientData.cardio.length > 0 ? (
//                 <div className="mb-4 justify-center items-center flex flex-col">
//                   {cardioDays.length > 0 ? (
//                     <div className="mb-4 flex justify-center flex-wrap">
//                       {cardioDays.sort().map(day => (
//                         <button
//                           key={day}
//                           className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 justify-center items-center ${
//                             selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//                           } ${isCurrentDay(day, clientData.date || '') ? '' : 'locked'}`}
//                           onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                         >
//                           <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                           {!isCurrentDay(day, clientData.date || '') && (
//                             <div className="locked-overlay">
//                               <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-white" />
//                             </div>
//                           )}
//                         </button>
//                       ))}
//                     </div>
//                   ) : (
//                     <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//                   )}
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                       <thead>
//                         <tr>
//                           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise #' : 'رقم التمرين'}</th>
//                           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise' : 'التمرين'}</th>
//                           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Duration' : 'المدة'}</th>
//                           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'GIF' : 'صورة متحركة'}</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {clientData.cardio
//                           .filter(exercise => exercise.day === selectedDay)
//                           .slice(currentUnlockedIndex, currentUnlockedIndex + 1)
//                           .map((exercise, index) => (
//                             <React.Fragment key={exercise.id}>
//                               <tr>
//                                 <td className="py-2 px-4 border-b text-center text-xl font-bold font-serif">
//                                   {currentUnlockedIndex + 1}
//                                 </td>
//                                 <td className="py-2 px-4 border-b text-left text-xl font-bold font-serif">
//                                   {exercise.name}
//                                 </td>
//                                 <td className="py-2 px-4 border-b text-center text-xl font-bold font-serif">
//                                   {exercise.duration}
//                                 </td>
//                                 <td className="py-2 px-4 border-b text-center min-w-32 mr-3">
//                                   {exercise.gif ? (
//                                     <img
//                                       src={`/cardio/${exercise.gif}`}
//                                       alt={exercise.name}
//                                       className="w-32 h-32 cursor-pointer"
//                                       onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
//                                     />
//                                   ) : (
//                                     'No GIF'
//                                   )}
//                                 </td>
//                               </tr>
//                               <tr>
//                                 <td colSpan={4} className="py-2 px-4 border-b text-center">
//                                   <div className="flex flex-col items-center">
//                                     {cardioTimers[exercise.id] || '00:00'}
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     {!cardioClickedButtons[exercise.id]?.[0] && (
//                                       <button
//                                         className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
//                                         onClick={() => handleStartCardioTimer(exercise.id, parseInt(exercise.duration))}
//                                       >
//                                         <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
//                                       </button>
//                                     )}
//                                   </div>
//                                 </td>
//                               </tr>
//                             </React.Fragment>
//                           ))}
//                       </tbody>
//                     </table>
//                     <div className="flex justify-between mt-4">
//                       <button
//                         className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                         onClick={() => setCurrentUnlockedIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
//                       >
//                         <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                       </button>
//                       <button
//                         className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                         onClick={() =>
//                           setCurrentUnlockedIndex((prevIndex) => {
//                             if (clientData.cardio) {
//                               return Math.min(
//                                 prevIndex + 1,
//                                 clientData.cardio.filter(exercise => exercise.day === selectedDay).length - 1
//                               );
//                             }
//                             return prevIndex;
//                           })
//                         }
//                       >
//                         <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
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
//       {showWeightsModal && activeSetIndex !== null && (
//         <Modal onClose={closeWeightsModal}>
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-4">
//               {language === 'en' ? 'Set Weights and Reps' : 'تحديد الأوزان والتكرارات'}
//             </h2>
//             <div className="mb-4 flex justify-between items-center bg-[var(--background-color)]">
//               <select
//                 value={sets[activeSetIndex].weight}
//                 onChange={(e) => handleSetChange(activeSetIndex, 'weight', parseFloat(e.target.value))}
//                 className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//               >
//                 {weights.map(weight => (
//                   <option key={weight} value={weight}>
//                     {weight} kg
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={sets[activeSetIndex].reps}
//                 onChange={(e) => handleSetChange(activeSetIndex, 'reps', parseInt(e.target.value))}
//                 className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//               >
//                 {Array.from({ length: 25 }, (_, i) => i + 1).map(reps => (
//                   <option key={reps} value={reps}>
//                     {reps} {language === 'en' ? 'reps' : 'تكرارات'}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button
//               className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 w-full"
//               onClick={handleSaveWeights}
//             >
//               {language === 'en' ? 'Save' : 'حفظ'}
//             </button>
//           </div>
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientExercises;





















































































































// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, faPlus, faSave, faTrash, faDumbbell, faHeartCircleBolt, faLock, faPlay, faStop, faWeightHanging, faRedoAlt, faClock, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
//   'Day 7': fa7,
// };

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Day 7': 'اليوم 7',
//   Proteins: 'البروتينات',
//   Vegetables: 'الخضروات',
//   Grains: 'الحبوب',
//   Dairy: 'منتجات الألبان',
//   Fruits: 'الفواكه',
//   Nuts: 'المكسرات',
// };

// interface Set {
//   weight: number;
//   reps: number;
//   timer?: string;
//   started?: boolean;
//   finished?: boolean;
// }

// interface Exercise {
//   date: string;
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets: number;
//   restTime: number;
//   weights: number[];
//   reps: number[];
//   started?: boolean;
//   finished?: boolean;
// }

// interface Cardio {
//   id: string;
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// interface ClientData {
//   email: string;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   cardio?: Cardio[];
//   date: string;
// }

// interface Timers {
//   [key: string]: string;
// }

// interface ClickedButtons {
//   [key: string]: boolean[];
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
//   const [sets, setSets] = useState<Set[]>([]);
//   const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [timers, setTimers] = useState<Timers>({});
//   const [showCardio, setShowCardio] = useState(false);
//   const [showExercises, setShowExercises] = useState(true);
//   const [restTimer, setRestTimer] = useState<string | null>(null);
//   const [showWeightsModal, setShowWeightsModal] = useState(false);
//   const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [cardioTimers, setCardioTimers] = useState<Timers>({});
//   const [cardioIntervalId, setCardioIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [cardioClickedButtons, setCardioClickedButtons] = useState<ClickedButtons>({});
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [exercisesLoaded, setExercisesLoaded] = useState(false);

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

//         const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !cardioResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const cardio = await cardioResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log("exercisesData", exercisesData);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setExercisesLoaded(true);  // This ensures that the data is loaded
//           setClientData({ ...client, exercises: exercisesData.exercises, cardio: cardio.exercises });
//         } else {
//           setError('No exercises data found for this client.');
//           setExercisesLoaded(false);  // This ensures that the data is loaded
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

//   useEffect(() => {
//     if (exercisesLoaded && exercises.length > 0) {
//       console.log('Exercises State in useEffect:', exercises);
//       const unlockedIndices = exercises.map((exercise, index) => {
//         console.log(`Processing Exercise Day: ${exercise.day}, Date: ${exercise.date}`);
//         const isUnlocked = isCurrentDay(exercise.day, exercise.date);
//         console.log(`Is Current Day for Exercise ${index + 1}?`, isUnlocked);
//         return isUnlocked ? index : -1;
//       }).filter(index => index !== -1);

//       console.log('Unlocked Indices:', unlockedIndices);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0);
//     } else {
//       console.log('No exercises found or client data incomplete.');
//     }
//   }, [exercises, exercisesLoaded]);

//   const isCurrentDay = (exerciseDay: string, exerciseAssignedDate: string): boolean => {
//     const assignedDate = new Date(exerciseAssignedDate); // This is the start date or the date assigned to the specific exercise
//     const today = new Date();
  
//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);
  
//     // Calculate the number of days since the exercise was assigned
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
//     // Determine the current day in the cycle (assuming a 7-day cycle)
//     const currentDay = (diffDays % 7) + 1;
  
//     return dayNumber === currentDay;
//   };
  

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   const cardioDays = clientData?.cardio?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div className="text-[var(--text-color)]">Error: {error}</div>;

//   const containerStyle = {
//     minHeight: 'calc(90vh - 4rem)',
//     backgroundColor: 'var(--background-color)',
//     color: 'var(--text-color)',
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleAddSet = () => {
//     setSets([...sets, { weight: 0, reps: 0, timer: '00:00', started: false, finished: false }]);
//   };

//   const handleSetChange = (index: number, field: 'weight' | 'reps', value: number) => {
//     const updatedSets = sets.map((set, i) => (i === index ? { ...set, [field]: value } : set));
//     setSets(updatedSets);
//   };

//   const handleSaveSets = async () => {
//     if (selectedExercise && clientData) {
//       try {
//         const weights = sets.map(set => set.weight);
//         const reps = sets.map(set => set.reps);

//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights,
//             reps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to save sets');
//         }

//         const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, sets: sets.length, weights, reps } : exercise
//         );

//         setClientData({ ...clientData, exercises: updatedExercises });
//         setSelectedExercise(null);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error saving sets:', error);
//         setError(error.message);
//       }
//     }
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

//   const handleToggleExerciseStart = async (exercise: Exercise) => {
//     if (clientData) {
//       const updatedExercises = clientData.exercises?.map(ex =>
//         ex.id === exercise.id ? { ...ex, started: !ex.started } : { ...ex, started: false }
//       );

//       setClientData({ ...clientData, exercises: updatedExercises });

//       try {
//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: exercise.id,
//             exerciseStarted: !exercise.started,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to update exercise');
//         }

//         const newCurrentIndex = unlockedExerciseIndices.indexOf(clientData.exercises?.indexOf(exercise) || 0);
//         setCurrentUnlockedIndex(newCurrentIndex);

//       } catch (error: any) {
//         console.error('Error updating exercise:', error);
//       }
//     }
//   };

//   const handleRemoveSet = (index: number) => {
//     const updatedSets = sets.filter((_, i) => i !== index);
//     setSets(updatedSets);
//   };

//   const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }
//     setClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][setIndex] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setRestTimer('00:00');
//         setIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
//   };

//   const weights = Array.from({ length: 20 }, (_, i) => 2.5 * (i + 1));

//   const openWeightsModal = (exercise: Exercise, setIndex: number) => {
//     if (setIndex >= sets.length) {
//       setSets(prevSets => {
//         const newSets = [...prevSets];
//         for (let i = prevSets.length; i <= setIndex; i++) {
//           newSets.push({ weight: 0, reps: 0, started: false, finished: false });
//         }
//         return newSets;
//       });
//     }

//     setSelectedExercise(exercise);
//     setActiveSetIndex(setIndex);
//     setShowWeightsModal(true);
//   };

//   const closeWeightsModal = () => {
//     setShowWeightsModal(false);
//     setActiveSetIndex(null);
//   };

//   const handleStartCardioTimer = (exerciseId: string, duration: number) => {
//     if (cardioIntervalId) {
//       clearInterval(cardioIntervalId);
//     }
//     setCardioClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][0] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 60000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: '00:00' }));
//         setCardioIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setCardioIntervalId(newIntervalId);
//   };

//   const handleSaveWeights = async () => {
//     if (selectedExercise && activeSetIndex !== null && clientData) {
//       try {
//         const updatedWeights = selectedExercise.weights ? [...selectedExercise.weights] : [];
//         const updatedReps = selectedExercise.reps ? [...selectedExercise.reps] : [];

//         updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
//         updatedReps[activeSetIndex] = sets[activeSetIndex].reps;

//         const response = await fetch('/api/assign-weights', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights: updatedWeights,
//             reps: updatedReps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to assign weights and reps');
//         }

//         const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, weights: updatedWeights, reps: updatedReps } : exercise
//         );

//         setClientData({
//           ...clientData,
//           exercises: updatedExercises,
//         });

//         setShowWeightsModal(false);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error assigning weights and reps:', error);
//       }
//     } else {
//       if (!selectedExercise) console.error('selectedExercise is null or undefined');
//       if (activeSetIndex === null) console.error('activeSetIndex is null');
//       if (!clientData) console.error('clientData is null or undefined');
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col justify-center items-center min-h-screen relative" style={containerStyle}>
//         <div className="absolute top-4 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faHeartCircleBolt}
//             className={`h-8 w-8 cursor-pointer ${showCardio ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowCardio(!showCardio)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4">
//           <h1 className="text-2xl justify-center font-lg italic font-serif mb-4">
//             {language === 'en' ? 'Assigned Exercises and Cardio:' : 'التمارين والكارديو المخصصة:'}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}

//           {showExercises && clientData ? (
//             <div className="mb-4">
//               {exercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap">
//                   {exercises
//                   .filter((exercise, index, self) =>
//                     index === self.findIndex(e => e.day === exercise.day)
//                   ) // Filter to get unique days
//                   .sort((a, b) => parseInt(a.day.split(' ')[1], 10) - parseInt(b.day.split(' ')[1], 10)) // Sort by day number
//                   .map((exercise, index) => (
//                     <button
//                       key={index}
//                       className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${
//                         selectedDay === exercise.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//                       } ${isCurrentDay(exercise.day, exercise.date) ? '' : 'locked'}`}
//                       onClick={() => isCurrentDay(exercise.day, exercise.date) && setSelectedDay(exercise.day)}
//                     >
//                       <FontAwesomeIcon icon={dayIcons[exercise.day]} className="h-6 w-6" />
//                       {!isCurrentDay(exercise.day, exercise.date) && (
//                         <div className="locked-overlay">
//                           <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//               )}
//               {currentExercise ? (
//                 <div className="w-full overflow-x-auto md:overflow-hidden">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b text-center">#</th>
//                         <th className="py-2 px-4 border-b text-center">
//                           {language === 'en' ? 'Exercise' : 'التمرين'}
//                         </th>
//                         <th className="py-2 px-4 border-b text-center">
//                           {language === 'en' ? 'GIF' : 'صورة متحركة'}
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td className="py-2 px-4 border-b text-center">
//                           <FontAwesomeIcon
//                             icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]}
//                             className="h-6 w-6"
//                           />
//                         </td>
//                         <td
//                           className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${
//                             !currentExercise.started ? 'censored' : ''
//                           }`}
//                         >
//                           {currentExercise.name}
//                         </td>
//                         <td
//                           className={`py-2 px-4 border-b text-center min-w-32 mr-3 ${
//                             !currentExercise.started ? 'censored' : ''
//                           }`}
//                         >
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 cursor-pointer ${
//                                 !currentExercise.started ? 'censored' : ''
//                               }`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             'No GIF'
//                           )}
//                         </td>
//                       </tr>
//                       {currentExercise.started &&
//                         Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
//                           <React.Fragment key={setIndex}>
//                             <tr>
//                               <td colSpan={3} className="py-2 px-4 border-b text-center">
//                                 <div className="flex flex-col italic font-serif text-left italic text-xl">
//                                   {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
//                                 </div>
//                                 <div className="flex justify-center items-center space-x-4">
//                                   <div className="flex flex-col items-center">
//                                     <FontAwesomeIcon
//                                       icon={faWeightHanging}
//                                       className="h-4 w-4 mr-1"
//                                     />{' '}
//                                     {(currentExercise.weights && currentExercise.weights[setIndex]) ||
//                                       0}{' '}
//                                     kg
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     <FontAwesomeIcon icon={faRedoAlt} className="h-4 w-4 mr-1" />{' '}
//                                     {(currentExercise.reps && currentExercise.reps[setIndex]) ||
//                                       0}{' '}
//                                     reps
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     <button
//                                       onClick={() => openWeightsModal(currentExercise, setIndex)}
//                                       className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
//                                     >
//                                       <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
//                                     </button>
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                             <tr>
//                               <td colSpan={3} className="py-2 px-4 border-b text-center">
//                                 <div className="flex flex-col italic font-serif text-left italic text-xl">
//                                   {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
//                                 </div>
//                                 <div className="flex justify-center items-center space-x-4">
//                                   <div className="flex flex-col items-center">
//                                     {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     {!clickedButtons[currentExercise.id]?.[setIndex] && (
//                                       <button
//                                         className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
//                                         onClick={() =>
//                                           handleStartRestTimer(
//                                             currentExercise.id,
//                                             setIndex,
//                                             currentExercise.restTime
//                                           )
//                                         }
//                                       >
//                                         <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
//                                       </button>
//                                     )}
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                           </React.Fragment>
//                         ))}
//                       <tr>
//                         <td colSpan={3} className="py-2 px-4 border-b text-center min-w-full">
//                           <button
//                             className="min-w-full flex justify-center items-center bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 mt-2"
//                             onClick={() => handleToggleExerciseStart(currentExercise)}
//                           >
//                             <FontAwesomeIcon
//                               icon={currentExercise.started ? faStop : faPlay}
//                               className="h-4 w-4 mr-2"
//                             />
//                           </button>
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
//                 <p>{language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}</p>
//               )}
//             </div>
//           ) : null}

//           {showCardio && (
//             <div className="mb-4">
//               {clientData?.cardio && clientData.cardio.length > 0 ? (
//                 <div className="mb-4 justify-center items-center flex flex-col">
//                   {cardioDays.length > 0 ? (
//                     <div className="mb-4 flex justify-center flex-wrap">
//                       {cardioDays.sort().map(day => (
//                         <button
//                           key={day}
//                           className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 justify-center items-center ${
//                             selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//                           } ${isCurrentDay(day, clientData.date || '') ? '' : 'locked'}`}
//                           onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                         >
//                           <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                           {!isCurrentDay(day, clientData.date || '') && (
//                             <div className="locked-overlay">
//                               <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-white" />
//                             </div>
//                           )}
//                         </button>
//                       ))}
//                     </div>
//                   ) : (
//                     <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//                   )}
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//                       <thead>
//                         <tr>
//                           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise #' : 'رقم التمرين'}</th>
//                           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise' : 'التمرين'}</th>
//                           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Duration' : 'المدة'}</th>
//                           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'GIF' : 'صورة متحركة'}</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {clientData.cardio
//                           .filter(exercise => exercise.day === selectedDay)
//                           .slice(currentUnlockedIndex, currentUnlockedIndex + 1)
//                           .map((exercise, index) => (
//                             <React.Fragment key={exercise.id}>
//                               <tr>
//                                 <td className="py-2 px-4 border-b text-center text-xl font-bold font-serif">
//                                   {currentUnlockedIndex + 1}
//                                 </td>
//                                 <td className="py-2 px-4 border-b text-left text-xl font-bold font-serif">
//                                   {exercise.name}
//                                 </td>
//                                 <td className="py-2 px-4 border-b text-center text-xl font-bold font-serif">
//                                   {exercise.duration}
//                                 </td>
//                                 <td className="py-2 px-4 border-b text-center min-w-32 mr-3">
//                                   {exercise.gif ? (
//                                     <img
//                                       src={`/cardio/${exercise.gif}`}
//                                       alt={exercise.name}
//                                       className="w-32 h-32 cursor-pointer"
//                                       onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
//                                     />
//                                   ) : (
//                                     'No GIF'
//                                   )}
//                                 </td>
//                               </tr>
//                               <tr>
//                                 <td colSpan={4} className="py-2 px-4 border-b text-center">
//                                   <div className="flex flex-col items-center">
//                                     {cardioTimers[exercise.id] || '00:00'}
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     {!cardioClickedButtons[exercise.id]?.[0] && (
//                                       <button
//                                         className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
//                                         onClick={() => handleStartCardioTimer(exercise.id, parseInt(exercise.duration))}
//                                       >
//                                         <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
//                                       </button>
//                                     )}
//                                   </div>
//                                 </td>
//                               </tr>
//                             </React.Fragment>
//                           ))}
//                       </tbody>
//                     </table>
//                     <div className="flex justify-between mt-4">
//                       <button
//                         className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                         onClick={() => setCurrentUnlockedIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
//                       >
//                         <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//                       </button>
//                       <button
//                         className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                         onClick={() =>
//                           setCurrentUnlockedIndex((prevIndex) => {
//                             if (clientData.cardio) {
//                               return Math.min(
//                                 prevIndex + 1,
//                                 clientData.cardio.filter(exercise => exercise.day === selectedDay).length - 1
//                               );
//                             }
//                             return prevIndex;
//                           })
//                         }
//                       >
//                         <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
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
//       {showWeightsModal && activeSetIndex !== null && (
//         <Modal onClose={closeWeightsModal}>
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-4">
//               {language === 'en' ? 'Set Weights and Reps' : 'تحديد الأوزان والتكرارات'}
//             </h2>
//             <div className="mb-4 flex justify-between items-center bg-[var(--background-color)]">
//               <select
//                 value={sets[activeSetIndex].weight}
//                 onChange={(e) => handleSetChange(activeSetIndex, 'weight', parseFloat(e.target.value))}
//                 className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//               >
//                 {weights.map(weight => (
//                   <option key={weight} value={weight}>
//                     {weight} kg
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={sets[activeSetIndex].reps}
//                 onChange={(e) => handleSetChange(activeSetIndex, 'reps', parseInt(e.target.value))}
//                 className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//               >
//                 {Array.from({ length: 25 }, (_, i) => i + 1).map(reps => (
//                   <option key={reps} value={reps}>
//                     {reps} {language === 'en' ? 'reps' : 'تكرارات'}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button
//               className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 w-full"
//               onClick={handleSaveWeights}
//             >
//               {language === 'en' ? 'Save' : 'حفظ'}
//             </button>
//           </div>
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientExercises;



















































//////// Fixed days with rotation ////////////





// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { fa1, fa2, fa3, fa4, fa5, fa6, fa7 } from '@fortawesome/free-solid-svg-icons';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
//   'Day 7': fa7,
// };

// interface Exercise {
//   date: string;
//   id: string;
//   name: string;
//   day: string;
//   gif?: string;
//   sets: number;
//   restTime: number;
//   weights: number[];
//   reps: number[];
//   started?: boolean;
//   finished?: boolean;
// }

// interface Cardio {
//   id: string;
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// interface ClientData {
//   email: string;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   cardio?: Cardio[];
//   date: string; // This is the top-level date you want to use
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const router = useRouter();

//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchClientData = async () => {
//       if (!user) {
//         router.push('/sign-in');
//         return;
//       }

//       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

//       try {
//         const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !cardioResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const cardio = await cardioResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         // Use the top-level date from the exercisesData
//         setClientData({ ...client, exercises: exercisesData.exercises, cardio: cardio.exercises, date: exercisesData.date });
//         setExercises(exercisesData.exercises);
//       } catch (error: any) {
//         console.error('Error fetching client data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate); // This is the top-level date
//     const today = new Date();

//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10); // Extract the day number from the exercise

//     // Calculate the number of days since the program started
//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     // Determine the current day in the cycle (assuming a 7-day cycle)
//     const currentDayInCycle = (diffDays % 4) + 1; // Modifying this to reflect a 4-day cycle instead of 7

//     // Return true if the current day in the cycle matches the exercise day
//     return dayNumber === currentDayInCycle;
//   };

//   // Remove duplicate days and sort them
//   const uniqueSortedExercises = Array.from(new Set(exercises.map(ex => ex.day)))
//     .map(day => exercises.find(ex => ex.day === day))
//     .filter(ex => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col justify-center items-center min-h-screen relative">
//         <div className="w-full max-w-3xl p-6 bg-white border rounded-lg shadow-lg">
//           <h1 className="text-2xl font-bold mb-4">
//             {language === 'en' ? 'Assigned Exercises and Cardio:' : 'التمارين والكارديو المخصصة:'}
//           </h1>

//           {clientData && uniqueSortedExercises.length > 0 ? (
//             <div className="flex justify-center flex-wrap">
//               {uniqueSortedExercises.map((exercise, index) => (
//                 <button
//                   key={index}
//                   className={`py-2 px-4 m-2 rounded-md shadow-md ${
//                     isCurrentDay(exercise!.day, clientData.date) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//                   }`}
//                   onClick={() => isCurrentDay(exercise!.day, clientData.date) && setSelectedDay(exercise!.day)}
//                 >
//                   <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                   {!isCurrentDay(exercise!.day, clientData.date) && (
//                     <div className="locked-overlay">
//                       <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                     </div>
//                   )}
//                 </button>
//               ))}
//             </div>
//           ) : (
//             <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//           )}
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientExercises;



////////////////////////////////////////////////////////////////////////////////////////////////














////////////////////////////////////////

/////////////////////////////////////////
///// DRAFT


          {/* {showExercises && clientData ? (
            <div className="mb-4">
              {exercises.length > 0 ? (
                <div className="mb-4 flex justify-center flex-wrap">
                  {uniqueSortedExercises
                    .filter((exercise, index, self) =>
                      index === self.findIndex(e => e!.day === exercise!.day)
                    ) // Filter to get unique days
                    .sort((a, b) => parseInt(a!.day.split(' ')[1], 10) - parseInt(b!.day.split(' ')[1], 10)) // Sort by day number
                    .map((exercise, index) => (
                      <button
                        key={index}
                        className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${
                          selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        } ${isCurrentDay(exercise!.day, clientData.date) ? '' : 'locked'}`}
                        onClick={() => isCurrentDay(exercise!.day, clientData.date) && setSelectedDay(exercise!.day)}
                      >
                        <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
                        {!isCurrentDay(exercise!.day, clientData.date) && (
                          <div className="locked-overlay">
                            <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
                          </div>
                        )}
                      </button>
                    ))}
                </div>
              ) : (
                <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
              )}
              {currentExercise ? (
                <div className="w-full overflow-x-auto md:overflow-hidden">
                  <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-center">#</th>
                        <th className="py-2 px-4 border-b text-center">
                          {language === 'en' ? 'Exercise' : 'التمرين'}
                        </th>
                        <th className="py-2 px-4 border-b text-center">
                          {language === 'en' ? 'GIF' : 'صورة متحركة'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b text-center">
                          <FontAwesomeIcon
                            icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]}
                            className="h-6 w-6"
                          />
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${
                            !currentExercise.started ? 'censored' : ''
                          }`}
                        >
                          {currentExercise.name}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-center min-w-32 mr-3 ${
                            !currentExercise.started ? 'censored' : ''
                          }`}
                        >
                          {currentExercise.gif ? (
                            <img
                              src={`${currentExercise.gif}`}
                              alt={currentExercise.name}
                              className={`w-32 h-32 cursor-pointer ${
                                !currentExercise.started ? 'censored' : ''
                              }`}
                              onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
                            />
                          ) : (
                            'No GIF'
                          )}
                        </td>
                      </tr>
                      {currentExercise.started &&
                        Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
                          <React.Fragment key={setIndex}>
                            <tr>
                              <td colSpan={3} className="py-2 px-4 border-b text-center">
                                <div className="flex flex-col italic font-serif text-left italic text-xl">
                                  {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
                                </div>
                                <div className="flex justify-center items-center space-x-4">
                                  <div className="flex flex-col items-center">
                                    <FontAwesomeIcon
                                      icon={faWeightHanging}
                                      className="h-4 w-4 mr-1"
                                    />{' '}
                                    {(currentExercise.weights && currentExercise.weights[setIndex]) ||
                                      0}{' '}
                                    kg
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <FontAwesomeIcon icon={faRedoAlt} className="h-4 w-4 mr-1" />{' '}
                                    {(currentExercise.reps && currentExercise.reps[setIndex]) ||
                                      0}{' '}
                                    reps
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <button
                                      onClick={() => openWeightsModal(currentExercise, setIndex)}
                                      className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
                                    >
                                      <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={3} className="py-2 px-4 border-b text-center">
                                <div className="flex flex-col italic font-serif text-left italic text-xl">
                                  {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
                                </div>
                                <div className="flex justify-center items-center space-x-4">
                                  <div className="flex flex-col items-center">
                                    {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
                                  </div>
                                  <div className="flex flex-col items-center">
                                    {!clickedButtons[currentExercise.id]?.[setIndex] && (
                                      <button
                                        className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
                                        onClick={() =>
                                          handleStartRestTimer(
                                            currentExercise.id,
                                            setIndex,
                                            currentExercise.restTime
                                          )
                                        }
                                      >
                                        <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                      <tr>
                        <td colSpan={3} className="py-2 px-4 border-b text-center min-w-full">
                          <button
                            className="min-w-full flex justify-center items-center bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 mt-2"
                            onClick={() => handleToggleExerciseStart(currentExercise)}
                          >
                            <FontAwesomeIcon
                              icon={currentExercise.started ? faStop : faPlay}
                              className="h-4 w-4 mr-2"
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex justify-between mt-4">
                    <button
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
                      onClick={handlePreviousExercise}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
                    </button>
                    <button
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
                      onClick={handleNextExercise}
                    >
                      <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <p>{language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}</p>
              )}
            </div>
          ) : null} */}












///// not workin reverse
// const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//   const assignedDate = new Date(programStartDate);
//   const today = new Date();

//   console.log("Assigned Date:", assignedDate.toISOString(), "Today:", today.toISOString());

//   const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);
//   console.log("Processing Day:", dayNumber);

//   // Calculate the number of days since the program started
//   const diffTime = today.getTime() - assignedDate.getTime();
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   console.log("DiffDays:", diffDays);

//   // Determine the current day in the cycle (based on the available days)
//   const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//   console.log("Cycle Days:", cycleDays);

//   const currentDayIndex = (diffDays % cycleDays.length + cycleDays.length) % cycleDays.length;  // Ensure index is positive
//   const currentDayInCycle = cycleDays[currentDayIndex];
//   console.log("Current Day in Cycle:", currentDayInCycle);

//   // Return true if the current day in the cycle matches the exercise day
//   return dayNumber === currentDayInCycle;
// };




/////////////////////// REVERSE   REVERSE    REVERSE   REVERSE

// const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//   const assignedDate = new Date(programStartDate);
//   const today = new Date();

//   console.log("Assigned Date:", assignedDate.toISOString(), "Today:", today.toISOString());

//   const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);
//   console.log("Processing Day:", dayNumber);

//   // Calculate the number of days since the program started
//   const diffTime = today.getTime() - assignedDate.getTime();
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   console.log("DiffDays:", diffDays);

//   // Determine the current day in the cycle (based on the available days)
//   const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
//   console.log("Cycle Days:", cycleDays);

//   // Adjust diffDays to always be positive (taking into account the cycle length)
//   const currentDayIndex = ((diffDays % cycleDays.length) + cycleDays.length) % cycleDays.length;
//   const currentDayInCycle = cycleDays[currentDayIndex];
//   console.log("Current Day in Cycle:", currentDayInCycle);

//   // Return true if the current day in the cycle matches the exercise day
//   return dayNumber === currentDayInCycle;
// };
















































/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////// best worki version
/////////////////////////////////////////////////////////////////////






// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, faPlus, faSave, faTrash, faDumbbell, faHeartCircleBolt, faLock, faPlay, faStop, faWeightHanging, faRedoAlt, faClock, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
//   'Day 7': fa7,
// };

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   adaptiveHeight: true,
// };

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Day 7': 'اليوم 7',
//   Proteins: 'البروتينات',
//   Vegetables: 'الخضروات',
//   Grains: 'الحبوب',
//   Dairy: 'منتجات الألبان',
//   Fruits: 'الفواكه',
//   Nuts: 'المكسرات',
// };

// interface Set {
//   weight: number;
//   reps: number;
//   timer?: string;
//   started?: boolean;
//   finished?: boolean;
// }

// interface Exercise {
//   date: string;
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets: number;
//   restTime: number;
//   weights: number[];
//   reps: number[];
//   started?: boolean;
//   finished?: boolean;
// }

// interface Cardio {
//   id: string;
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// interface ClientData {
//   email: string;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   cardio?: Cardio[];
//   date: string;
// }

// interface Timers {
//   [key: string]: string;
// }

// interface ClickedButtons {
//   [key: string]: boolean[];
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
//   const [sets, setSets] = useState<Set[]>([]);
//   const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [timers, setTimers] = useState<Timers>({});
//   const [showCardio, setShowCardio] = useState(true);
//   const [showExercises, setShowExercises] = useState(true);
//   const [restTimer, setRestTimer] = useState<string | null>(null);
//   const [showWeightsModal, setShowWeightsModal] = useState(false);
//   const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [cardioTimers, setCardioTimers] = useState<Timers>({});
//   const [cardioIntervalId, setCardioIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [cardioClickedButtons, setCardioClickedButtons] = useState<ClickedButtons>({});
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [exercisesLoaded, setExercisesLoaded] = useState(false);

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

//         const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         if (!clientResponse.ok || !cardioResponse.ok || !exercisesResponse.ok) {
//           const errorData = await clientResponse.json();
//           throw new Error(errorData.message || 'Failed to fetch client data');
//         }

//         const client = await clientResponse.json();
//         const cardio = await cardioResponse.json();
//         const exercisesData = await exercisesResponse.json();
//         console.log("exercisesData", exercisesData);

//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setExercisesLoaded(true);  // This ensures that the data is loaded
//           setClientData({ ...client, exercises: exercisesData.exercises, cardio: cardio.exercises, date: exercisesData.date });
//         } else {
//           setError('No exercises data found for this client.');
//           setExercisesLoaded(false);  // This ensures that the data is loaded
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

//   useEffect(() => {
//     if (exercisesLoaded && exercises.length > 0) {
//       console.log('Exercises State in useEffect:', exercises);
//       const unlockedIndices = exercises.map((exercise, index) => {
//         console.log(`Processing Exercise Day: ${exercise.day}, Date: ${exercise.date}`);
//         const isUnlocked = isCurrentDay(exercise.day, clientData?.date || '');
//         console.log(`clientData?.date`, clientData?.date);
//         console.log(`Is Current Day for Exercise ${index + 1}?`, isUnlocked);
//         return isUnlocked ? index : -1;
//       }).filter(index => index !== -1);

//       console.log('Unlocked Indices:', unlockedIndices);
//       setUnlockedExerciseIndices(unlockedIndices);
//       setCurrentUnlockedIndex(0);
//     } else {
//       console.log('No exercises found or client data incomplete.');
//     }
//   }, [exercises, exercisesLoaded, clientData?.date]);



  
// //   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
// //     const assignedDate = new Date(programStartDate);
// //     const today = new Date();

// //     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10);

// //     // Calculate the number of days since the program started
// //     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
// //     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// //     // Determine the current day in the cycle (based on the available days)
// //     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10))));
// //     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

// //     // Return true if the current day in the cycle matches the exercise day
// //     return dayNumber === currentDayInCycle;
// // };


// const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//   const assignedDate = new Date(programStartDate);
//   const today = new Date();

//   const dayNumber = parseInt(exerciseDay.split(' ')[1], 10); // Assuming day is in "Day X" format

//   // Calculate the number of days since the program started
//   const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   // Get and sort the unique cycle days
//   const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);

//   // Determine the current day in the cycle (based on sorted days)
//   const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

//   // Return true if the current day in the cycle matches the exercise day
//   return dayNumber === currentDayInCycle;
// };



//   // Remove duplicate days and sort them
//   const uniqueSortedExercises = Array.from(new Set(exercises.map(ex => ex.day)))
//     .map(day => exercises.find(ex => ex.day === day))
//     .filter(ex => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

  
//   const cardioDays = clientData?.cardio?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div className="text-[var(--text-color)]">Error: {error}</div>;

//   const containerStyle = {
//     minHeight: 'calc(90vh - 4rem)',
//     backgroundColor: 'var(--background-color)',
//     color: 'var(--text-color)',
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleAddSet = () => {
//     setSets([...sets, { weight: 0, reps: 0, timer: '00:00', started: false, finished: false }]);
//   };

//   const handleSetChange = (index: number, field: 'weight' | 'reps', value: number) => {
//     const updatedSets = sets.map((set, i) => (i === index ? { ...set, [field]: value } : set));
//     setSets(updatedSets);
//   };

//   const handleSaveSets = async () => {
//     if (selectedExercise && clientData) {
//       try {
//         const weights = sets.map(set => set.weight);
//         const reps = sets.map(set => set.reps);

//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights,
//             reps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to save sets');
//         }

//         const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, sets: sets.length, weights, reps } : exercise
//         );

//         setClientData({ ...clientData, exercises: updatedExercises });
//         setSelectedExercise(null);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error saving sets:', error);
//         setError(error.message);
//       }
//     }
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

//   const handleToggleExerciseStart = async (exercise: Exercise) => {
//     if (clientData) {
//       const updatedExercises = clientData.exercises?.map(ex =>
//         ex.id === exercise.id ? { ...ex, started: !ex.started } : { ...ex, started: false }
//       );

//       setClientData({ ...clientData, exercises: updatedExercises });

//       try {
//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: exercise.id,
//             exerciseStarted: !exercise.started,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to update exercise');
//         }

//         const newCurrentIndex = unlockedExerciseIndices.indexOf(clientData.exercises?.indexOf(exercise) || 0);
//         setCurrentUnlockedIndex(newCurrentIndex);

//       } catch (error: any) {
//         console.error('Error updating exercise:', error);
//       }
//     }
//   };

//   const handleRemoveSet = (index: number) => {
//     const updatedSets = sets.filter((_, i) => i !== index);
//     setSets(updatedSets);
//   };

//   const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }
//     setClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][setIndex] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setRestTimer('00:00');
//         setIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
//   };

//   const weights = Array.from({ length: 20 }, (_, i) => 2.5 * (i + 1));

//   const openWeightsModal = (exercise: Exercise, setIndex: number) => {
//     if (setIndex >= sets.length) {
//       setSets(prevSets => {
//         const newSets = [...prevSets];
//         for (let i = prevSets.length; i <= setIndex; i++) {
//           newSets.push({ weight: 0, reps: 0, started: false, finished: false });
//         }
//         return newSets;
//       });
//     }

//     setSelectedExercise(exercise);
//     setActiveSetIndex(setIndex);
//     setShowWeightsModal(true);
//   };

//   const closeWeightsModal = () => {
//     setShowWeightsModal(false);
//     setActiveSetIndex(null);
//   };

  // const handleStartCardioTimer = (exerciseId: string, duration: number) => {
  //   if (cardioIntervalId) {
  //     clearInterval(cardioIntervalId);
  //   }
  //   setCardioClickedButtons(prevState => {
  //     const newState = { ...prevState };
  //     if (!newState[exerciseId]) {
  //       newState[exerciseId] = [];
  //     }
  //     newState[exerciseId][0] = true;
  //     return newState;
  //   });

  //   const startTime = Date.now();
  //   const endTime = startTime + duration * 60000;
  //   const newIntervalId = setInterval(() => {
  //     const remainingTime = endTime - Date.now();
  //     if (remainingTime <= 0) {
  //       clearInterval(newIntervalId);
  //       setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: '00:00' }));
  //       setCardioIntervalId(null);
  //     } else {
  //       const minutes = Math.floor(remainingTime / 60000);
  //       const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
  //       setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: `${minutes}:${seconds}` }));
  //     }
  //   }, 1000);

  //   setCardioIntervalId(newIntervalId);
  // };

//   const handleSaveWeights = async () => {
//     if (selectedExercise && activeSetIndex !== null && clientData) {
//       try {
//         const updatedWeights = selectedExercise.weights ? [...selectedExercise.weights] : [];
//         const updatedReps = selectedExercise.reps ? [...selectedExercise.reps] : [];

//         updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
//         updatedReps[activeSetIndex] = sets[activeSetIndex].reps;

//         const response = await fetch('/api/assign-weights', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights: updatedWeights,
//             reps: updatedReps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to assign weights and reps');
//         }

//         const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, weights: updatedWeights, reps: updatedReps } : exercise
//         );

//         setClientData({
//           ...clientData,
//           exercises: updatedExercises,
//         });

//         setShowWeightsModal(false);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error assigning weights and reps:', error);
//       }
//     } else {
//       if (!selectedExercise) console.error('selectedExercise is null or undefined');
//       if (activeSetIndex === null) console.error('activeSetIndex is null');
//       if (!clientData) console.error('clientData is null or undefined');
//     }
//   };

//   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];



  
//   return (
//     <DashboardLayout>
//       <div className="flex flex-col justify-center items-center min-h-screen relative" style={containerStyle}>
//         <div className="absolute top-4 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faHeartCircleBolt}
//             className={`h-8 w-8 cursor-pointer ${showCardio ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowCardio(!showCardio)}
//           />
//         </div>
//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4">
//           <h1 className="text-2xl justify-center text-center font-lg italic font-serif mb-4">
//             {language === 'en' ? 'Exercises:' : 'التمارين:'}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}


// {/* 

// {showExercises && clientData ? (
//   <div className="mb-4">
//     {exercises.length > 0 ? (
//       <div className="mb-4 flex justify-center flex-wrap">
//         {uniqueSortedExercises
//           .filter((exercise, index, self) =>
//             index === self.findIndex(e => e!.day === exercise!.day)
//           ) // Filter to get unique days
//           .sort((a, b) => parseInt(a!.day.split(' ')[1], 10) - parseInt(b!.day.split(' ')[1], 10)) // Sort by day number
//           // Remove .reverse() from here since we want ascending order
//           .map((exercise, index) => (
//             <button
//               key={index}
//               className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${
//                 selectedDay === exercise!.day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//               } ${isCurrentDay(exercise!.day, clientData.date) ? '' : 'locked'}`}
//               onClick={() => isCurrentDay(exercise!.day, clientData.date) && setSelectedDay(exercise!.day)}
//             >
//               <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//               {!isCurrentDay(exercise!.day, clientData.date) && (
//                 <div className="locked-overlay">
//                   <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                 </div>
//               )}
//             </button>
//           ))}
//       </div>
//     ) : (
//       <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//     )}
//     {currentExercise ? (
//       <div className="w-full overflow-x-auto md:overflow-hidden">
//         <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b text-center">#</th>
//               <th className="py-2 px-4 border-b text-center">
//                 {language === 'en' ? 'Exercise' : 'التمرين'}
//               </th>
//               <th className="py-2 px-4 border-b text-center">
//                 {language === 'en' ? 'GIF' : 'صورة متحركة'}
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="py-2 px-4 border-b text-center">
//                 <FontAwesomeIcon
//                   icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]}
//                   className="h-6 w-6"
//                 />
//               </td>
//               <td
//                 className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${
//                   !currentExercise.started ? 'censored' : ''
//                 }`}
//               >
//                 {currentExercise.name}
//               </td>
//               <td
//                 className={`py-2 px-4 border-b text-center min-w-32 mr-3 ${
//                   !currentExercise.started ? 'censored' : ''
//                 }`}
//               >
//                 {currentExercise.gif ? (
//                   <img
//                     src={`${currentExercise.gif}`}
//                     alt={currentExercise.name}
//                     className={`w-32 h-32 cursor-pointer ${
//                       !currentExercise.started ? 'censored' : ''
//                     }`}
//                     onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                   />
//                 ) : (
//                   'No GIF'
//                 )}
//               </td>
//             </tr>
//             {currentExercise.started &&
//               Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
//                 <React.Fragment key={setIndex}>
//                   <tr>
//                     <td colSpan={3} className="py-2 px-4 border-b text-center">
//                       <div className="flex flex-col italic font-serif text-left italic text-xl">
//                         {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
//                       </div>
//                       <div className="flex justify-center items-center space-x-4">
//                         <div className="flex flex-col items-center">
//                           <FontAwesomeIcon
//                             icon={faWeightHanging}
//                             className="h-4 w-4 mr-1"
//                           />{' '}
//                           {(currentExercise.weights && currentExercise.weights[setIndex]) ||
//                             0}{' '}
//                           kg
//                         </div>
//                         <div className="flex flex-col items-center">
//                           <FontAwesomeIcon icon={faRedoAlt} className="h-4 w-4 mr-1" />{' '}
//                           {(currentExercise.reps && currentExercise.reps[setIndex]) ||
//                             0}{' '}
//                           reps
//                         </div>
//                         <div className="flex flex-col items-center">
//                           <button
//                             onClick={() => openWeightsModal(currentExercise, setIndex)}
//                             className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
//                           >
//                             <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
//                           </button>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td colSpan={3} className="py-2 px-4 border-b text-center">
//                       <div className="flex flex-col italic font-serif text-left italic text-xl">
//                         {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
//                       </div>
//                       <div className="flex justify-center items-center space-x-4">
//                         <div className="flex flex-col items-center">
//                           {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
//                         </div>
//                         <div className="flex flex-col items-center">
//                           {!clickedButtons[currentExercise.id]?.[setIndex] && (
//                             <button
//                               className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
//                               onClick={() =>
//                                 handleStartRestTimer(
//                                   currentExercise.id,
//                                   setIndex,
//                                   currentExercise.restTime
//                                 )
//                               }
//                             >
//                               <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 </React.Fragment>
//               ))}
//             <tr>
//               <td colSpan={3} className="py-2 px-4 border-b text-center min-w-full">
//                 <button
//                   className="min-w-full flex justify-center items-center bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 mt-2"
//                   onClick={() => handleToggleExerciseStart(currentExercise)}
//                 >
//                   <FontAwesomeIcon
//                     icon={currentExercise.started ? faStop : faPlay}
//                     className="h-4 w-4 mr-2"
//                   />
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <div className="flex justify-between mt-4">
//           <button
//             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//             onClick={handlePreviousExercise}
//           >
//             <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//           </button>
//           <button
//             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//             onClick={handleNextExercise}
//           >
//             <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     ) : (
//       <p>{language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}</p>
//     )}
//   </div>
// ) : null} */}

// {showExercises && clientData ? (
//   <div className="mb-4">
//     {exercises.length > 0 ? (
//       <div className="mb-4 flex justify-center flex-wrap gap-4">
//         {uniqueSortedExercises.map((exercise, index) => {
//           const isCurrent = isCurrentDay(exercise!.day, clientData.date);
//           const isSelected = selectedDay === exercise!.day;
          
//           return (
//             <button
//               key={index}
//               aria-label={`Select ${exercise!.day}`}
//               className={`relative flex items-center justify-center p-4 rounded-md shadow-md transition-all duration-300 ease-in-out transform ${
//                 isSelected ? 'bg-blue-500 text-white scale-105' : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
//               } ${isCurrent ? '' : 'locked'}`}
//               onClick={() => isCurrent && setSelectedDay(exercise!.day)}
//               disabled={!isCurrent}
//             >
//               <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//               {!isCurrent && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 rounded-md">
//                   <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                 </div>
//               )}
//             </button>
//           );
//         })}
//       </div>
//     ) : (
//       <p className="text-center text-lg font-semibold">
//         {language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}
//       </p>
//     )}

//     {currentExercise ? (
//       <div className="w-full overflow-x-auto">
//         <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg mb-4 transition-all duration-300 ease-in-out">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="py-2 px-4 border-b text-center">#</th>
//               <th className="py-2 px-4 border-b text-center">
//                 {language === 'en' ? 'Exercise' : 'التمرين'}
//               </th>
//               <th className="py-2 px-4 border-b text-center">
//                 {language === 'en' ? 'GIF' : 'صورة متحركة'}
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="py-2 px-4 border-b text-center">
//                 <FontAwesomeIcon
//                   icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]}
//                   className="h-6 w-6"
//                 />
//               </td>
//               <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'blur-sm' : ''}`}>
//                 {currentExercise.name}
//               </td>
//               <td className="py-2 px-4 border-b text-center min-w-32">
//                 {currentExercise.gif ? (
//                   <img
//                     src={`${currentExercise.gif}`}
//                     alt={currentExercise.name}
//                     className={`w-32 h-32 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${
//                       !currentExercise.started ? 'blur-sm' : ''
//                     }`}
//                     onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                   />
//                 ) : (
//                   'No GIF'
//                 )}
//               </td>
//             </tr>

//             {currentExercise.started && 
//               Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
//                 <React.Fragment key={setIndex}>
//                   <tr>
//                     <td colSpan={3} className="py-2 px-4 border-b text-center">
//                       <div className="text-lg font-serif font-semibold italic text-left">
//                         {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
//                       </div>
//                       <div className="flex justify-center items-center space-x-4 mt-2">
//                         <div className="flex flex-col items-center">
//                           <FontAwesomeIcon icon={faWeightHanging} className="h-5 w-5 mr-1" />
//                           {currentExercise.weights?.[setIndex] || 0} kg
//                         </div>
//                         <div className="flex flex-col items-center">
//                           <FontAwesomeIcon icon={faRedoAlt} className="h-5 w-5 mr-1" />
//                           {currentExercise.reps?.[setIndex] || 0} reps
//                         </div>
//                         <button
//                           onClick={() => openWeightsModal(currentExercise, setIndex)}
//                           className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-200"
//                         >
//                           <FontAwesomeIcon icon={faPlus} className="mr-1" />
//                           {language === 'en' ? 'Add' : 'إضافة'}
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td colSpan={3} className="py-2 px-4 border-b text-center">
//                       <div className="text-lg font-serif font-semibold italic text-left">
//                         {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
//                       </div>
//                       <div className="flex justify-center items-center space-x-4 mt-2">
//                         <div>
//                           <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
//                           {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
//                         </div>
//                         {!clickedButtons[currentExercise.id]?.[setIndex] && (
//                           <button
//                             className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
//                             onClick={() => handleStartRestTimer(currentExercise.id, setIndex, currentExercise.restTime)}
//                           >
//                             <FontAwesomeIcon icon={faClock} className="mr-1" />
//                             {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
//                           </button>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 </React.Fragment>
//               ))}
//             <tr>
//               <td colSpan={3} className="py-2 px-4 text-center">
//                 <button
//                   className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
//                   onClick={() => handleToggleExerciseStart(currentExercise)}
//                 >
//                   <FontAwesomeIcon icon={currentExercise.started ? faStop : faPlay} className="mr-2" />
//                   {currentExercise.started ? (language === 'en' ? 'Stop Exercise' : 'أوقف التمرين') : (language === 'en' ? 'Start Exercise' : 'ابدأ التمرين')}
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         <div className="flex justify-between mt-4">
//           <button
//             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//             onClick={handlePreviousExercise}
//           >
//             <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
//             {language === 'en' ? 'Previous' : 'السابق'}
//           </button>
//           <button
//             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//             onClick={handleNextExercise}
//           >
//             <FontAwesomeIcon icon={faArrowRight} className="mr-1" />
//             {language === 'en' ? 'Next' : 'التالي'}
//           </button>
//         </div>
//       </div>
//     ) : (
//       <p className="text-center text-lg font-semibold">
//         {language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}
//       </p>
//     )}
//   </div>
// ) : null}



//                       {/* {cardioDays.sort().map(day => (
//                         <button
//                           key={day}
//                           className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 justify-center items-center ${
//                             selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//                           } ${isCurrentDay(day, clientData.date || '') ? '' : 'locked'}`}
//                           onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
//                         >
//                           <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                           {!isCurrentDay(day, clientData.date || '') && (
//                             <div className="locked-overlay">
//                             <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-white" />
//                             </div>
//                             )}
//                           </button> */}
//           {/* <div className="overflow-x-auto">
//             <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise #' : 'رقم التمرين'}</th>
//                   <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise' : 'التمرين'}</th>
//                   <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Duration' : 'المدة'}</th>
//                   <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'GIF' : 'صورة متحركة'}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {clientData.cardio
//                   .filter(exercise => exercise.day === selectedDay)
//                   .slice(currentUnlockedIndex, currentUnlockedIndex + 1)
//                   .map((exercise, index) => (
//                     <React.Fragment key={exercise.id}>
//                       <tr>
//                         <td className="py-2 px-4 border-b text-center text-xl font-bold font-serif">
//                           {currentUnlockedIndex + 1}
//                         </td>
//                         <td className="py-2 px-4 border-b text-left text-xl font-bold font-serif">
//                           {exercise.name}
//                         </td>
//                         <td className="py-2 px-4 border-b text-center text-xl font-bold font-serif">
//                           {exercise.duration}
//                         </td>
//                         <td className="py-2 px-4 border-b text-center min-w-32 mr-3">
//                           {exercise.gif ? (
//                             <img
//                               src={`/cardio/${exercise.gif}`}
//                               alt={exercise.name}
//                               className="w-32 h-32 cursor-pointer"
//                               onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
//                             />
//                           ) : (
//                             'No GIF'
//                           )}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td colSpan={4} className="py-2 px-4 border-b text-center">
//                           <div className="flex flex-col items-center">
//                             {cardioTimers[exercise.id] || '00:00'}
//                           </div>
//                           <div className="flex flex-col items-center">
//                             {!cardioClickedButtons[exercise.id]?.[0] && (
//                               <button
//                                 className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
//                                 onClick={() => handleStartCardioTimer(exercise.id, parseInt(exercise.duration))}
//                               >
//                                 <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
//                               </button>
//                             )}
//                           </div>
//                         </td>
//                       </tr>
//                     </React.Fragment>
//                   ))}
//               </tbody>
//             </table>
//             <div className="flex justify-between mt-4">
//               <button
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                 onClick={() => setCurrentUnlockedIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
//               >
//                 <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
//               </button>
//               <button
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                 onClick={() =>
//                   setCurrentUnlockedIndex((prevIndex) => {
//                     if (clientData.cardio) {
//                       return Math.min(
//                         prevIndex + 1,
//                         clientData.cardio.filter(exercise => exercise.day === selectedDay).length - 1
//                       );
//                     }
//                     return prevIndex;
//                   })
//                 }
//               >
//                 <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
//               </button>
//             </div>
//           </div> */}

//           <h1 className="text-2xl justify-center text-center font-lg italic font-serif mb-4">
//             {language === 'en' ? 'Cardio:' : 'تمارين الكارديو :'}
//           </h1>
//               {/* {showCardio && (
//                 <div className="mb-4">
//                   {clientData?.cardio && clientData.cardio.length > 0 ? (
//                     <div className="mb-4 justify-center items-center flex flex-col">
//                       {cardioDays.length > 0 ? (
//                         <div className="mb-4 flex justify-center flex-wrap">
//                         {cardioDays.sort().map(day => (
//                         <button
//                           key={day}
//                           className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 justify-center items-center ${
//                             selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//                           }`}
//                           onClick={() => setSelectedDay(day)}
//                         >
//                           <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
//                         </button>
//                         ))}
//                     </div>
//                   ) : (
//                     <p>{language === 'en' ? 'No days available.' : 'لا توجد أيام متاحة.'}</p>
//                   )}
//                 <div className="overflow-x-auto">
//                   {clientData.cardio
//                     .filter(exercise => exercise.day === selectedDay)
//                     .slice(currentUnlockedIndex, currentUnlockedIndex + 1)
//                     .map((exercise, index) => (
//                       <React.Fragment key={exercise.id}>
//                         <div className="shadow-md rounded-lg p-6 border-[var(--border-color)] text-[var(--text-color)] flex flex-col items-center">
//                           <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)]">{exercise.name}</h3>

//                           <div className="w-32 h-32 flex justify-center mb-4">
//                             {exercise.gif ? (
//                               <img
//                                 src={`/cardio/${exercise.gif}`}
//                                 alt={exercise.name}
//                                 className="w-full h-full object-cover rounded-lg cursor-pointer"
//                                 onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
//                               />
//                             ) : (
//                               <p className="text-[var(--text-color)]">{language === 'en' ? 'No GIF available' : 'لا توجد صورة متحركة'}</p>
//                             )}
//                           </div>

//                           <div className="w-full text-center mb-4">
//                             <h4 className="text-xl font-semibold text-[var(--text-color)]">
//                               {language === 'en' ? 'Duration' : 'المدة'}: {exercise.duration}
//                             </h4>
//                           </div>

//                           <div className="flex justify-center items-center mb-4">
//                             <div className="flex items-center">
//                               <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
//                               <span>{cardioTimers[exercise.id] || '00:00'}</span>
//                             </div>
//                             {!cardioClickedButtons[exercise.id]?.[0] && (
//                               <button
//                                 className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200 ml-4"
//                                 onClick={() => handleStartCardioTimer(exercise.id, parseInt(exercise.duration))}
//                               >
//                               <FontAwesomeIcon icon={faClock} className="mr-1" />
//                                 {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
//                               </button>
//                             )}
//                           </div>
//                         </div>

//                         <div className="flex justify-between mt-6">
//                           <button
//                             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                             onClick={() => setCurrentUnlockedIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
//                           >
//                             <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
//                             {language === 'en' ? 'Previous' : 'السابق'}
//                           </button>
//                           <button
//                             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
//                             onClick={() =>
//                               setCurrentUnlockedIndex((prevIndex) => {
//                                 if (clientData.cardio) {
//                                   return Math.min(
//                                     prevIndex + 1,
//                                     clientData.cardio.filter(exercise => exercise.day === selectedDay).length - 1
//                                   );
//                                 }
//                                 return prevIndex;
//                               })
//                             }
//                           >
//                             <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
//                             {language === 'en' ? 'Next' : 'التالي'}
//                           </button>
//                         </div>
//                       </React.Fragment>
//                     ))}
//                 </div>
//                 </div>
//               ) : (
//                 <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
//               )}
//             </div>
//           )} */}


// {showCardio && (
//           <div className="mb-4">
//             {clientData?.cardio && clientData.cardio.length > 0 ? (
//               <Slider {...sliderSettings}>
//                 {clientData.cardio.map((exercise, index) => (
//                   <div key={exercise.id} className="p-4">
//                     <div className="shadow-md rounded-lg p-6 border-[var(--border-color)] text-[var(--text-color)] flex flex-col items-center">
//                       <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)]">{exercise.name}</h3>

//                       {/* Display GIF */}
//                       <div className="w-32 h-32 flex justify-center mb-4">
//                         {exercise.gif ? (
//                           <img
//                             src={`/cardio/${exercise.gif}`}
//                             alt={exercise.name}
//                             className="w-full h-full object-cover rounded-lg cursor-pointer"
//                             onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
//                           />
//                         ) : (
//                           <p className="text-[var(--text-color)]">{language === 'en' ? 'No GIF available' : 'لا توجد صورة متحركة'}</p>
//                         )}
//                       </div>

//                       {/* Duration Display */}
//                       <div className="w-full text-center mb-4">
//                         <h4 className="text-xl font-semibold text-[var(--text-color)]">
//                           {language === 'en' ? 'Duration' : 'المدة'}: {exercise.duration}
//                         </h4>
//                       </div>

//                       {/* Rest Timer */}
//                       <div className="flex justify-center items-center mb-4">
//                         <div className="flex items-center">
//                           <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
//                           <span>{cardioTimers[exercise.id] || '00:00'}</span>
//                         </div>
//                         {!cardioClickedButtons[exercise.id]?.[0] && (
//                           <button
//                             className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200 ml-4"
//                             onClick={() => handleStartCardioTimer(exercise.id, parseInt(exercise.duration))}
//                           >
//                             <FontAwesomeIcon icon={faClock} className="mr-1" />
//                             {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             ) : (
//               <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
//             )}
//           </div>
//         )}


//         </div>
//       </div>
//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//       {showWeightsModal && activeSetIndex !== null && (
//         <Modal onClose={closeWeightsModal}>
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-4">
//               {language === 'en' ? 'Set Weights and Reps' : 'تحديد الأوزان والتكرارات'}
//             </h2>
//             <div className="mb-4 flex justify-between items-center bg-[var(--background-color)]">
//               <select
//                 value={sets[activeSetIndex].weight}
//                 onChange={(e) => handleSetChange(activeSetIndex, 'weight', parseFloat(e.target.value))}
//                 className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//               >
//                 {weights.map(weight => (
//                   <option key={weight} value={weight}>
//                     {weight} kg
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={sets[activeSetIndex].reps}
//                 onChange={(e) => handleSetChange(activeSetIndex, 'reps', parseInt(e.target.value))}
//                 className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//               >
//                 {Array.from({ length: 25 }, (_, i) => i + 1).map(reps => (
//                   <option key={reps} value={reps}>
//                     {reps} {language === 'en' ? 'reps' : 'تكرارات'}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button
//               className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 w-full"
//               onClick={handleSaveWeights}
//             >
//               {language === 'en' ? 'Save' : 'حفظ'}
//             </button>
//           </div>
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientExercises;





///////////////////////////////////////////////////////////////////////////






























// useEffect(() => {
  //   const checkPaymentStatus = async () => {
    //     if (!user) {
  //       router.push('/sign-in');
  //       return;
  //     }

  //     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
  //     try {
  //       const res = await fetch('/api/checkPaymentStatus', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ email: userEmail }),
  //       });
  //       const data = await res.json();

  //       if (!data.hasPaid) {
  //         router.push('/dashboard/payments'); // Redirect to payments page if not paid
  //         return;
  //       }
  //     } catch (error) {
  //       console.error('Error checking payment status:', error);
  //     }
  //   };
  //   checkPaymentStatus();
  // }, [user, router]);



  // useEffect(() => {
  //   const checkAndAddEmail = async (email: string): Promise<boolean> => {
  //     try {
  //       const response = await fetch('/api/addEmail', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ email }),
  //       });

  //       if (!response.ok) {
  //         throw new Error('Error checking/adding email');
  //       }

  //       const data = await response.json();
  //       return !data.exists;
  //     } catch (error) {
  //       console.error('Error checking/adding email:', error);
  //       return false;
  //     }
  //   };
    
    // const fetchClientData = async () => {
    //   if (!user) {
    //     router.push('/sign-in');
    //     return;
    //   }

    //   const userEmail = user.primaryEmailAddress?.emailAddress || user.email;

    //   if (!userEmail) {
    //     setLoading(false);
    //     return;
    //   }

    //   try {
    //     const isNew = await checkAndAddEmail(userEmail);

    //     const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
    //       fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
    //       fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
    //       fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
    //     ]);

    //     if (!clientResponse.ok || !cardioResponse.ok || !exercisesResponse.ok) {
    //       const errorData = await clientResponse.json();
    //       throw new Error(errorData.message || 'Failed to fetch client data');
    //     }

    //     const client = await clientResponse.json();
    //     const cardio = await cardioResponse.json();
    //     const exercisesData = await exercisesResponse.json();
    //     console.log("exercisesData", exercisesData);

    //     if (exercisesData.exercises && exercisesData.exercises.length > 0) {
    //       setExercises(exercisesData.exercises);
    //       setExercisesLoaded(true);  
    //       setClientData({ ...client, exercises: exercisesData.exercises, cardio: cardio.exercises, date: exercisesData.date });
    //     } else {
    //       setError('No exercises data found for this client.');
    //       setExercisesLoaded(false);  
    //     }
    
    //     if ((isNew && !client.hasPaid) || !client.hasPaid) {
    //       router.push('/dashboard/payments');
    //       return;
    //     }
    
    //   } catch (error: any) {
      //     console.error('Error fetching client data:', error);
      //     setError(error.message);
    //   } finally {
    //     setLoading(false);
    //   }

    // };
    
    // const fetchClientData = async () => {
      //   if (!user) {
    //     router.push('/sign-in');
    //     return;
    //   }
    
    //   const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
    
    //   if (!userEmail) {
    //     setLoading(false);
    //     return;
    //   }
    
    //   try {
      //     const isNew = await checkAndAddEmail(userEmail);
    
      //     // Fetch client, cardio, and exercises data
      //     const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
        //       fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
    //       fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
    //       fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
    //     ]);
    
    //     // Process client data
    //     const client = clientResponse.ok ? await clientResponse.json() : { email: userEmail };
    
    //     // Process cardio data (default to empty array if not available)
    //     const cardio = cardioResponse.ok ? await cardioResponse.json() : { exercises: [] };
    
    //     // Process exercises data (default to empty array if not available)
    //     const exercisesData = exercisesResponse.ok ? await exercisesResponse.json() : { exercises: [], date: new Date().toISOString() };
    
    //     // Assign data, even if some parts are missing
    //     setClientData({
    //       ...client,
    //       exercises: exercisesData.exercises || [], // Default to empty array if no exercises
    //       cardio: cardio.exercises || [],           // Default to empty array if no cardio
    //       date: exercisesData.date || new Date().toISOString(),
    //     });
    
    //     // Check if the client has paid
    //     if ((isNew && !client.hasPaid) || !client.hasPaid) {
    //       router.push('/dashboard/payments');
    //       return;
    //     }
    
    //   } catch (error) {
    //     // Log the error and set default values to allow the app to proceed
    //     console.error('Error fetching client data:', error);
    //     setClientData({
    //       email: userEmail,
    //       exercises: [],   // Proceed with no exercises assigned
    //       cardio: [],      // Proceed with no cardio assigned
    //       date: new Date().toISOString(),
    //     });
    //   } finally {
      //     setLoading(false); // Always stop loading once the data is processed or failed
    //   }
    // };
    

    
// const fetchClientData = async () => {
  //    if (!user) {
//      router.push('/sign-in');
//      return;
//    }

//    const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
 
//    if (!userEmail) {
//      setLoading(false);
//      return;
//    }

//    try {
//      const isNew = await checkAndAddEmail(userEmail);

//      // Fetch client, cardio, and exercises data
//      const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
//        fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//        fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
//        fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//      ]);

//      // Process client data
//      const client = clientResponse.ok ? await clientResponse.json() : { email: userEmail };
//      console.log('Client data fetched:', client);

//      // Process cardio data (default to empty array if not available)
//      const cardio = cardioResponse.ok ? await cardioResponse.json() : { exercises: [] };
//      console.log('Cardio data fetched:', cardio);
     
//      // Process exercises data (default to empty array if not available)
//      const exercisesData = exercisesResponse.ok ? await exercisesResponse.json() : { exercises: [], date: new Date().toISOString() };
//      console.log('Exercises data fetched:', exercisesData);

//      // Assign data, even if some parts are missing
//      setClientData({
//        ...client,
//        exercises: exercisesData.exercises || [], // Default to empty array if no exercises
//        cardio: cardio.exercises || [],           // Default to empty array if no cardio
//        date: exercisesData.date || new Date().toISOString(),
//      });
//    } catch (error) {
//      console.error('Error fetching client data:', error);
//      setClientData({
  //        email: userEmail,
  //        exercises: [],   // Proceed with no exercises assigned
  //        cardio: [],      // Proceed with no cardio assigned
  //        date: new Date().toISOString(),
  //      });
  //    } finally {
    //      setLoading(false);
    //    }
//  };




//     fetchClientData();
//   }, [user, router]);





// const fetchClientData = async () => {
//   if (!user) {
  //     router.push('/sign-in');
  //     return;
  //   }
  
  //   const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
  
  //   if (!userEmail) {
    //     setLoading(false);
//     return;
//   }

//   try {
//     const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
  //       fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
  //       fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
  //       fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
  //     ]);
  
  //     // Process client data
  //     const client = clientResponse.ok ? await clientResponse.json() : { email: userEmail };
  //     const cardio = cardioResponse.ok ? await cardioResponse.json() : { exercises: [] };
  //     const exercisesData = exercisesResponse.ok ? await exercisesResponse.json() : { exercises: [], date: new Date().toISOString() };
  
  //     setClientData({
    //       ...client,
//       exercises: exercisesData.exercises || [],
//       cardio: cardio.exercises || [],
//       date: exercisesData.date || new Date().toISOString(),
//     });

//     setExercises(exercisesData.exercises || []);
//     setExercisesLoaded(true);

//   } catch (error) {
//     console.error('Error fetching client data:', error);
//     setClientData({
//       email: userEmail,
//       exercises: [],
//       cardio: [],
//       date: new Date().toISOString(),
//     });
//     setError('Failed to fetch exercises.');
//   } finally {
//     setLoading(false);
//   }
// };

// useEffect(() => {
//   fetchClientData();
// }, [user, router]);






































// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, faPlus, faSave, faTrash, faDumbbell, faHeartCircleBolt, faLock, faPlay, faStop, faWeightHanging, faRedoAlt, faClock, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
//   'Day 7': fa7,
// };

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   adaptiveHeight: true,
// };

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Day 7': 'اليوم 7',
//   Proteins: 'البروتينات',
//   Vegetables: 'الخضروات',
//   Grains: 'الحبوب',
//   Dairy: 'منتجات الألبان',
//   Fruits: 'الفواكه',
//   Nuts: 'المكسرات',
// };

// interface Set {
//   weight: number;
//   reps: number;
//   timer?: string;
//   started?: boolean;
//   finished?: boolean;
// }

// interface Exercise {
//   date: string;
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets: number;
//   restTime: number;
//   weights: number[];
//   reps: number[];
//   started?: boolean;
//   finished?: boolean;
// }

// interface Cardio {
//   id: string;
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// interface ClientData {
//   email: string;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   cardio?: Cardio[];
//   date: string;
// }

// interface Timers {
//   [key: string]: string;
// }

// interface ClickedButtons {
//   [key: string]: boolean[];
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
//   const [sets, setSets] = useState<Set[]>([]);
//   const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [timers, setTimers] = useState<Timers>({});
//   const [showCardio, setShowCardio] = useState(true);
//   const [showExercises, setShowExercises] = useState(true);
//   const [restTimer, setRestTimer] = useState<string | null>(null);
//   const [showWeightsModal, setShowWeightsModal] = useState(false);
//   const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [cardioTimers, setCardioTimers] = useState<Timers>({});
//   const [cardioIntervalId, setCardioIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [cardioClickedButtons, setCardioClickedButtons] = useState<ClickedButtons>({});
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [exercisesLoaded, setExercisesLoaded] = useState(false);

//   const router = useRouter();
  


// const fetchClientData = async () => {
//   if (!user) {
//     console.log("User not found, redirecting to sign-in...");
//     router.push('/sign-in');
//     return;
//   }

//   const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
  
//   if (!userEmail) {
//     console.log("User email is missing");
//     setLoading(false);
//     return;
//   }

//   console.log("Fetching data for email:", userEmail);

//   try {
//     const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
//       fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//       fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
//       fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//     ]);

//     // Log response statuses
//     console.log("Client response status:", clientResponse.status);
//     console.log("Cardio response status:", cardioResponse.status);
//     console.log("Exercises response status:", exercisesResponse.status);

//     // Process client data
//     const client = clientResponse.ok ? await clientResponse.json() : { email: userEmail };
//     const cardio = cardioResponse.ok ? await cardioResponse.json() : { exercises: [] };
//     const exercisesData = exercisesResponse.ok ? await exercisesResponse.json() : { exercises: [], date: new Date().toISOString() };

//     console.log("Client data:", client);
//     console.log("Cardio data:", cardio);
//     console.log("Exercises data:", exercisesData);

//     setClientData({
//       ...client,
//       exercises: exercisesData.exercises || [],
//       cardio: cardio.exercises || [],
//       date: exercisesData.date || new Date().toISOString(),
//     });

//     setExercises(exercisesData.exercises);
//     setExercisesLoaded(true);

//   } catch (error) {
//     console.error('Error fetching client data:', error);
//     setClientData({
//       email: userEmail,
//       exercises: [],
//       cardio: [],
//       date: new Date().toISOString(),
//     });
//     setError('Failed to fetch exercises.');
//   } finally {
//     setLoading(false);
//     console.log("Loading finished");
//   }
// };

// useEffect(() => {
//   console.log("Running fetchClientData");
//   fetchClientData();
// }, [user, router]);







//   // useEffect(() => {
//   //   if (exercisesLoaded && exercises.length > 0) {
//   //     console.log('Exercises State in useEffect:', exercises);
//   //     const unlockedIndices = exercises.map((exercise, index) => {
//   //       console.log(`Processing Exercise Day: ${exercise.day}, Date: ${exercise.date}`);
//   //       const isUnlocked = isCurrentDay(exercise.day, clientData?.date || '');
//   //       console.log(`clientData?.date`, clientData?.date);
//   //       console.log(`Is Current Day for Exercise ${index + 1}?`, isUnlocked);
//   //       return isUnlocked ? index : -1;
//   //     }).filter(index => index !== -1);

//   //     console.log('Unlocked Indices:', unlockedIndices);
//   //     setUnlockedExerciseIndices(unlockedIndices);
//   //     setCurrentUnlockedIndex(0);
//   //   } else {
//   //     console.log('No exercises found or client data incomplete.');
//   //   }
//   // }, [exercises, exercisesLoaded, clientData?.date]);


  




// const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//   const assignedDate = new Date(programStartDate);
//   const today = new Date();

//   const dayNumber = parseInt(exerciseDay.split(' ')[1], 10); 

//   const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);

//   const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

//   return dayNumber === currentDayInCycle;
// };

// const uniqueSortedExercises = Array.from(new Set(exercises.map(ex => ex.day)))
//   .map(day => exercises.find(ex => ex.day === day))
//   .filter(ex => ex !== undefined)
//   .sort((a, b) => {
//     const dayA = parseInt(a!.day.split(' ')[1], 10);
//     const dayB = parseInt(b!.day.split(' ')[1], 10);
//     return dayA - dayB;
//   });

// const days = clientData?.exercises?.reduce((acc, exercise) => {
//   if (!acc.includes(exercise.day)) acc.push(exercise.day);
//   return acc;
// }, [] as string[]) || [];

// const cardioDays = clientData?.cardio?.reduce((acc, exercise) => {
//   if (!acc.includes(exercise.day)) acc.push(exercise.day);
//   return acc;
// }, [] as string[]) || [];

// if (loading) return <LoadingSpinner />;
// if (error) return <div className="text-[var(--text-color)]">Error: {error}</div>;

// const containerStyle = {
//   minHeight: 'calc(90vh - 4rem)',
//   backgroundColor: 'var(--background-color)',
//   color: 'var(--text-color)',
// };

// const handleGifClick = (gif: string | null) => {
//   setSelectedGif(gif);
// };

// const handleAddSet = () => {
//   setSets([...sets, { weight: 0, reps: 0, timer: '00:00', started: false, finished: false }]);
// };

// const handleSetChange = (index: number, field: 'weight' | 'reps', value: number) => {
//   const updatedSets = sets.map((set, i) => (i === index ? { ...set, [field]: value } : set));
//   setSets(updatedSets);
// };

// const handleSaveSets = async () => {
//   if (selectedExercise && clientData) {
//     try {
//       const weights = sets.map(set => set.weight);
//       const reps = sets.map(set => set.reps);

//       const response = await fetch('/api/update-exercise', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: clientData.email,
//           exerciseId: selectedExercise.id,
//           weights,
//           reps,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to save sets');
//       }

//       const updatedExercises = clientData.exercises?.map(exercise =>
//         exercise.id === selectedExercise.id ? { ...exercise, sets: sets.length, weights, reps } : exercise
//       );

//       setClientData({ ...clientData, exercises: updatedExercises });
//       setSelectedExercise(null);
//       setSets([]);
//     } catch (error: any) {
//       console.error('Error saving sets:', error);
//       setError(error.message);
//     }
//   }
// };

// const handleNextExercise = () => {
//   if (unlockedExerciseIndices.length) {
//     setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
//   }
// };

// const handlePreviousExercise = () => {
//   if (unlockedExerciseIndices.length) {
//     setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
//   }
// };

// const handleToggleExerciseStart = async (exercise: Exercise) => {
//   if (clientData) {
//     const updatedExercises = clientData.exercises?.map(ex =>
//       ex.id === exercise.id ? { ...ex, started: !ex.started } : { ...ex, started: false }
//     );

//     setClientData({ ...clientData, exercises: updatedExercises });

//     try {
//       const response = await fetch('/api/update-exercise', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: clientData.email,
//           exerciseId: exercise.id,
//           exerciseStarted: !exercise.started,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to update exercise');
//       }

//       const newCurrentIndex = unlockedExerciseIndices.indexOf(clientData.exercises?.indexOf(exercise) || 0);
//       setCurrentUnlockedIndex(newCurrentIndex);

//     } catch (error: any) {
//       console.error('Error updating exercise:', error);
//     }
//   }
// };

// const handleRemoveSet = (index: number) => {
//   const updatedSets = sets.filter((_, i) => i !== index);
//   setSets(updatedSets);
// };

// const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
//   if (intervalId) {
//     clearInterval(intervalId);
//   }
//   setClickedButtons(prevState => {
//     const newState = { ...prevState };
//     if (!newState[exerciseId]) {
//       newState[exerciseId] = [];
//     }
//     newState[exerciseId][setIndex] = true;
//     return newState;
//   });

//   const startTime = Date.now();
//   const endTime = startTime + duration * 1000;
//   const newIntervalId = setInterval(() => {
//     const remainingTime = endTime - Date.now();
//     if (remainingTime <= 0) {
//       clearInterval(newIntervalId);
//       setRestTimer('00:00');
//       setIntervalId(null);
//     } else {
//       const minutes = Math.floor(remainingTime / 60000);
//       const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//       setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}` }));
//     }
//   }, 1000);

//   setIntervalId(newIntervalId);
// };

// const weights = Array.from({ length: 20 }, (_, i) => 2.5 * (i + 1));

// const openWeightsModal = (exercise: Exercise, setIndex: number) => {
//   if (setIndex >= sets.length) {
//     setSets(prevSets => {
//       const newSets = [...prevSets];
//       for (let i = prevSets.length; i <= setIndex; i++) {
//         newSets.push({ weight: 0, reps: 0, started: false, finished: false });
//       }
//       return newSets;
//     });
//   }

//   setSelectedExercise(exercise);
//   setActiveSetIndex(setIndex);
//   setShowWeightsModal(true);
// };

// const closeWeightsModal = () => {
//   setShowWeightsModal(false);
//   setActiveSetIndex(null);
// };

// const handleStartCardioTimer = (exerciseId: string, duration: number) => {
//   if (cardioIntervalId) {
//     clearInterval(cardioIntervalId);
//   }
//   setCardioClickedButtons(prevState => {
//     const newState = { ...prevState };
//     if (!newState[exerciseId]) {
//       newState[exerciseId] = [];
//     }
//     newState[exerciseId][0] = true;
//     return newState;
//   });

//   const startTime = Date.now();
//   const endTime = startTime + duration * 60000;
//   const newIntervalId = setInterval(() => {
//     const remainingTime = endTime - Date.now();
//     if (remainingTime <= 0) {
//       clearInterval(newIntervalId);
//       setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: '00:00' }));
//       setCardioIntervalId(null);
//     } else {
//       const minutes = Math.floor(remainingTime / 60000);
//       const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//       setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: `${minutes}:${seconds}` }));
//     }
//   }, 1000);

//   setCardioIntervalId(newIntervalId);
// };

// const handleSaveWeights = async () => {
//   if (selectedExercise && activeSetIndex !== null && clientData) {
//     try {
//       const updatedWeights = selectedExercise.weights ? [...selectedExercise.weights] : [];
//       const updatedReps = selectedExercise.reps ? [...selectedExercise.reps] : [];

//       updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
//       updatedReps[activeSetIndex] = sets[activeSetIndex].reps;

//       const response = await fetch('/api/assign-weights', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: clientData.email,
//           exerciseId: selectedExercise.id,
//           weights: updatedWeights,
//           reps: updatedReps,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to assign weights and reps');
//       }

//       const updatedExercises = clientData.exercises?.map(exercise =>
//         exercise.id === selectedExercise.id ? { ...exercise, weights: updatedWeights, reps: updatedReps } : exercise
//       );

//       setClientData({
//         ...clientData,
//         exercises: updatedExercises,
//       });

//       setShowWeightsModal(false);
//       setSets([]);
//     } catch (error: any) {
//       console.error('Error assigning weights and reps:', error);
//     }
//   } else {
//     if (!selectedExercise) console.error('selectedExercise is null or undefined');
//     if (activeSetIndex === null) console.error('activeSetIndex is null');
//     if (!clientData) console.error('clientData is null or undefined');
//   }
// };

// // const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];

// const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]] || null;



// console.log("curen", currentExercise);



















// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, faPlus, faSave, faTrash, faDumbbell, faHeartCircleBolt, faLock, faPlay, faStop, faWeightHanging, faRedoAlt, faClock, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
//   'Day 7': fa7,
// };

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   adaptiveHeight: true,
// };

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Day 7': 'اليوم 7',
//   Proteins: 'البروتينات',
//   Vegetables: 'الخضروات',
//   Grains: 'الحبوب',
//   Dairy: 'منتجات الألبان',
//   Fruits: 'الفواكه',
//   Nuts: 'المكسرات',
// };

// interface Set {
//   weight: number;
//   reps: number;
//   timer?: string;
//   started?: boolean;
//   finished?: boolean;
// }

// interface Exercise {
//   date: string;
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets: number;
//   restTime: number;
//   weights: number[];
//   reps: number[];
//   started?: boolean;
//   finished?: boolean;
// }

// interface Cardio {
//   id: string;
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// interface ClientData {
//   email: string;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   cardio?: Cardio[];
//   date: string;
// }

// interface Timers {
//   [key: string]: string;
// }

// interface ClickedButtons {
//   [key: string]: boolean[];
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
//   const [sets, setSets] = useState<Set[]>([]);
//   const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [timers, setTimers] = useState<Timers>({});
//   const [showCardio, setShowCardio] = useState(true);
//   const [showExercises, setShowExercises] = useState(true);
//   const [restTimer, setRestTimer] = useState<string | null>(null);
//   const [showWeightsModal, setShowWeightsModal] = useState(false);
//   const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [cardioTimers, setCardioTimers] = useState<Timers>({});
//   const [cardioIntervalId, setCardioIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [cardioClickedButtons, setCardioClickedButtons] = useState<ClickedButtons>({});
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [exercisesLoaded, setExercisesLoaded] = useState(false);

//   const router = useRouter();

//   const fetchClientData = async () => {
//     if (!user) {
//       console.log("User not found, redirecting to sign-in...");
//       router.push('/sign-in');
//       return;
//     }

//     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
    
//     if (!userEmail) {
//       console.log("User email is missing");
//       setLoading(false);
//       return;
//     }

//     console.log("Fetching data for email:", userEmail);

    // try {
    //   const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
    //     fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
    //     fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
    //     fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
    //   ]);

    //   // Log response statuses
    //   console.log("Client response status:", clientResponse.status);
    //   console.log("Cardio response status:", cardioResponse.status);
    //   console.log("Exercises response status:", exercisesResponse.status);

    //   // Process client data
    //   const client = clientResponse.ok ? await clientResponse.json() : { email: userEmail };
    //   const cardio = cardioResponse.ok ? await cardioResponse.json() : { exercises: [] };
    //   const exercisesData = exercisesResponse.ok ? await exercisesResponse.json() : { exercises: [], date: new Date().toISOString() };

    //   console.log("Client data:", client);
    //   console.log("Cardio data:", cardio);
    //   console.log("Exercises data:", exercisesData);

    //   setClientData({
    //     ...client,
    //     exercises: exercisesData.exercises || [],
    //     cardio: cardio.exercises || [],
    //     date: exercisesData.date || new Date().toISOString(),
    //   });

//       setExercises(exercisesData.exercises);
//       setExercisesLoaded(true);

//     } catch (error) {
//       console.error('Error fetching client data:', error);
//       setClientData({
//         email: userEmail,
//         exercises: [],
//         cardio: [],
//         date: new Date().toISOString(),
//       });
//       setError('Failed to fetch exercises.');
//     } finally {
//       setLoading(false);
//       console.log("Loading finished");
//     }
//   };

//   useEffect(() => {
//     console.log("Running fetchClientData");
//     fetchClientData();
//   }, [user, router]);

//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();

//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10); 

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);

//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

//     return dayNumber === currentDayInCycle;
//   };

//   const uniqueSortedExercises = Array.from(new Set(exercises.map(ex => ex.day)))
//     .map(day => exercises.find(ex => ex.day === day))
//     .filter(ex => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   const cardioDays = clientData?.cardio?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div className="text-[var(--text-color)]">Error: {error}</div>;

//   const containerStyle = {
//     minHeight: 'calc(90vh - 4rem)',
//     backgroundColor: 'var(--background-color)',
//     color: 'var(--text-color)',
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleAddSet = () => {
//     setSets([...sets, { weight: 0, reps: 0, timer: '00:00', started: false, finished: false }]);
//   };

//   const handleSetChange = (index: number, field: 'weight' | 'reps', value: number) => {
//     const updatedSets = sets.map((set, i) => (i === index ? { ...set, [field]: value } : set));
//     setSets(updatedSets);
//   };

//   const handleSaveSets = async () => {
//     if (selectedExercise && clientData) {
//       try {
//         const weights = sets.map(set => set.weight);
//         const reps = sets.map(set => set.reps);

//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights,
//             reps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to save sets');
//         }

//         const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, sets: sets.length, weights, reps } : exercise
//         );

//         setClientData({ ...clientData, exercises: updatedExercises });
//         setSelectedExercise(null);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error saving sets:', error);
//         setError(error.message);
//       }
//     }
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

//   const handleToggleExerciseStart = async (exercise: Exercise) => {
//     if (clientData) {
//       const updatedExercises = clientData.exercises?.map(ex =>
//         ex.id === exercise.id ? { ...ex, started: !ex.started } : { ...ex, started: false }
//       );

//       setClientData({ ...clientData, exercises: updatedExercises });

//       try {
//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: exercise.id,
//             exerciseStarted: !exercise.started,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to update exercise');
//         }

//         const newCurrentIndex = unlockedExerciseIndices.indexOf(clientData.exercises?.indexOf(exercise) || 0);
//         setCurrentUnlockedIndex(newCurrentIndex);

//       } catch (error: any) {
//         console.error('Error updating exercise:', error);
//       }
//     }
//   };

//   const handleRemoveSet = (index: number) => {
//     const updatedSets = sets.filter((_, i) => i !== index);
//     setSets(updatedSets);
//   };

//   const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }
//     setClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][setIndex] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setRestTimer('00:00');
//         setIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
//   };

//   const weights = Array.from({ length: 20 }, (_, i) => 2.5 * (i + 1));

//   const openWeightsModal = (exercise: Exercise, setIndex: number) => {
//     if (setIndex >= sets.length) {
//       setSets(prevSets => {
//         const newSets = [...prevSets];
//         for (let i = prevSets.length; i <= setIndex; i++) {
//           newSets.push({ weight: 0, reps: 0, started: false, finished: false });
//         }
//         return newSets;
//       });
//     }

//     setSelectedExercise(exercise);
//     setActiveSetIndex(setIndex);
//     setShowWeightsModal(true);
//   };

//   const closeWeightsModal = () => {
//     setShowWeightsModal(false);
//     setActiveSetIndex(null);
//   };

//   const handleStartCardioTimer = (exerciseId: string, duration: number) => {
//     if (cardioIntervalId) {
//       clearInterval(cardioIntervalId);
//     }
//     setCardioClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][0] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 60000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: '00:00' }));
//         setCardioIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setCardioIntervalId(newIntervalId);
//   };

//   const handleSaveWeights = async () => {
//     if (selectedExercise && activeSetIndex !== null && clientData) {
//       try {
//         const updatedWeights = selectedExercise.weights ? [...selectedExercise.weights] : [];
//         const updatedReps = selectedExercise.reps ? [...selectedExercise.reps] : [];

//         updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
//         updatedReps[activeSetIndex] = sets[activeSetIndex].reps;

//         const response = await fetch('/api/assign-weights', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights: updatedWeights,
//             reps: updatedReps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to assign weights and reps');
//         }

//         const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, weights: updatedWeights, reps: updatedReps } : exercise
//         );

//         setClientData({
//           ...clientData,
//           exercises: updatedExercises,
//         });

//         setShowWeightsModal(false);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error assigning weights and reps:', error);
//       }
//     } else {
//       if (!selectedExercise) console.error('selectedExercise is null or undefined');
//       if (activeSetIndex === null) console.error('activeSetIndex is null');
//       if (!clientData) console.error('clientData is null or undefined');
//     }
//   };




//   const currentExercise = unlockedExerciseIndices.length > 0 
//   ? clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]] 
//   : null;




// return (
//   <DashboardLayout>
//     <div className="flex flex-col justify-center items-center min-h-screen relative" style={containerStyle}>
//       <div className="absolute top-4 right-4 flex space-x-4">
//         <FontAwesomeIcon
//           icon={faDumbbell}
//           className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//           onClick={() => setShowExercises(!showExercises)}
//         />
//         <FontAwesomeIcon
//           icon={faHeartCircleBolt}
//           className={`h-8 w-8 cursor-pointer ${showCardio ? 'text-blue-500' : 'text-gray-500'}`}
//           onClick={() => setShowCardio(!showCardio)}
//         />
//       </div>
//       <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4">
//         <h1 className="text-2xl justify-center text-center font-lg italic font-serif mb-4">
//           {language === 'en' ? 'Exercises:' : 'التمارين:'}
//         </h1>
//         {clientData?.exerciseType && (
//           <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//         )}

//       {/* {showExercises && clientData ? (
//         <div className="mb-4">
//           {exercises.length > 0 ? (
//             <div className="mb-4 flex justify-center flex-wrap gap-4">
//               {uniqueSortedExercises.map((exercise, index) => {
//                 const isCurrent = isCurrentDay(exercise!.day, clientData.date);
//                 const isSelected = selectedDay === exercise!.day;
                
//                 return (
//                   <button
//                     key={index}
//                     aria-label={`Select ${exercise!.day}`}
//                     className={`relative flex items-center justify-center p-4 rounded-md shadow-md transition-all duration-300 ease-in-out transform ${
//                       isSelected ? 'bg-blue-500 text-white scale-105' : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
//                     } ${isCurrent ? '' : 'locked'}`}
//                     onClick={() => isCurrent && setSelectedDay(exercise!.day)}
//                     disabled={!isCurrent}
//                   >
//                     <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                     {!isCurrent && (
//                       <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 rounded-md">
//                         <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                       </div>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>
//           ) : (
//             <p className="text-center text-lg font-semibold">
//               {language === 'en' ? 'No exercises available.' : 'لا توجد تمارين متاحة.'}
//             </p>
//           )}



//     {currentExercise ? (
//       <div className="w-full overflow-x-auto">
//         <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg mb-4 transition-all duration-300 ease-in-out">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="py-2 px-4 border-b text-center">#</th>
//               <th className="py-2 px-4 border-b text-center">
//                 {language === 'en' ? 'Exercise' : 'التمرين'}
//               </th>
//               <th className="py-2 px-4 border-b text-center">
//                 {language === 'en' ? 'GIF' : 'صورة متحركة'}
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="py-2 px-4 border-b text-center">
//                 <FontAwesomeIcon
//                   icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]}
//                   className="h-6 w-6"
//                 />
//               </td>
//               <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'blur-sm' : ''}`}>
//                 {currentExercise.name}
//               </td>
//               <td className="py-2 px-4 border-b text-center min-w-32">
//                 {currentExercise.gif ? (
//                   <img
//                     src={`${currentExercise.gif}`}
//                     alt={currentExercise.name}
//                     className={`w-32 h-32 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${
//                       !currentExercise.started ? 'blur-sm' : ''
//                     }`}
//                     onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                   />
//                 ) : (
//                   'No GIF'
//                 )}
//               </td>
//             </tr>

//             {currentExercise.started && 
//               Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
//                 <React.Fragment key={setIndex}>
//                   <tr>
//                     <td colSpan={3} className="py-2 px-4 border-b text-center">
//                       <div className="text-lg font-serif font-semibold italic text-left">
//                         {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
//                       </div>
//                       <div className="flex justify-center items-center space-x-4 mt-2">
//                         <div className="flex flex-col items-center">
//                           <FontAwesomeIcon icon={faWeightHanging} className="h-5 w-5 mr-1" />
//                           {currentExercise.weights?.[setIndex] || 0} kg
//                         </div>
//                         <div className="flex flex-col items-center">
//                           <FontAwesomeIcon icon={faRedoAlt} className="h-5 w-5 mr-1" />
//                           {currentExercise.reps?.[setIndex] || 0} reps
//                         </div>
//                         <button
//                           onClick={() => openWeightsModal(currentExercise, setIndex)}
//                           className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-200"
//                         >
//                           <FontAwesomeIcon icon={faPlus} className="mr-1" />
//                           {language === 'en' ? 'Add' : 'إضافة'}
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td colSpan={3} className="py-2 px-4 border-b text-center">
//                       <div className="text-lg font-serif font-semibold italic text-left">
//                         {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
//                       </div>
//                       <div className="flex justify-center items-center space-x-4 mt-2">
//                         <div>
//                           <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
//                           {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
//                         </div>
//                         {!clickedButtons[currentExercise.id]?.[setIndex] && (
//                           <button
//                             className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
//                             onClick={() => handleStartRestTimer(currentExercise.id, setIndex, currentExercise.restTime)}
//                           >
//                             <FontAwesomeIcon icon={faClock} className="mr-1" />
//                             {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
//                           </button>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 </React.Fragment>
//               ))}
//             <tr>
//               <td colSpan={3} className="py-2 px-4 text-center">
//                 <button
//                   className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
//                   onClick={() => handleToggleExerciseStart(currentExercise)}
//                 >
//                   <FontAwesomeIcon icon={currentExercise.started ? faStop : faPlay} className="mr-2" />
//                   {currentExercise.started ? (language === 'en' ? 'Stop Exercise' : 'أوقف التمرين') : (language === 'en' ? 'Start Exercise' : 'ابدأ التمرين')}
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         <div className="flex justify-between mt-4">
//           <button
//             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//             onClick={handlePreviousExercise}
//           >
//             <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
//             {language === 'en' ? 'Previous' : 'السابق'}
//           </button>
//           <button
//             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//             onClick={handleNextExercise}
//           >
//             <FontAwesomeIcon icon={faArrowRight} className="mr-1" />
//             {language === 'en' ? 'Next' : 'التالي'}
//           </button>
//         </div>
//         </div>
//       ) : (
//         <p className="text-center text-lg font-semibold">
//           {language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}
//         </p>
//           )}
//         </div>
//       ) : null} */}



// {showExercises && clientData ? (
//   <div className="mb-4">
//     {exercises.length > 0 ? (
//       <div className="mb-4 flex justify-center flex-wrap gap-4">
//         {uniqueSortedExercises.map((exercise, index) => {
//           const isCurrent = isCurrentDay(exercise!.day, clientData.date);
//           const isSelected = selectedDay === exercise!.day;

//           return (
//             <button
//               key={index}
//               aria-label={`Select ${exercise!.day}`}
//               className={`relative flex items-center justify-center p-4 rounded-md shadow-md transition-all duration-300 ease-in-out transform ${
//                 isSelected ? 'bg-blue-500 text-white scale-105' : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
//               } ${isCurrent ? '' : 'locked'}`}
//               onClick={() => isCurrent && setSelectedDay(exercise!.day)}
//               disabled={!isCurrent}
//             >
//               <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//               {!isCurrent && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 rounded-md">
//                   <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                 </div>
//               )}
//             </button>
//           );
//         })}
//       </div>
//     ) : (
//       <p className="text-center text-lg font-semibold">
//         {language === 'en' ? 'No exercises available.' : 'لا توجد تمارين متاحة.'}
//       </p>
//     )}

//     {currentExercise ? (
//       <div className="w-full overflow-x-auto">
//         <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg mb-4 transition-all duration-300 ease-in-out">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="py-2 px-4 border-b text-center">#</th>
//               <th className="py-2 px-4 border-b text-center">
//                 {language === 'en' ? 'Exercise' : 'التمرين'}
//               </th>
//               <th className="py-2 px-4 border-b text-center">
//                 {language === 'en' ? 'GIF' : 'صورة متحركة'}
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="py-2 px-4 border-b text-center">
//                 <FontAwesomeIcon
//                   icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]}
//                   className="h-6 w-6"
//                 />
//               </td>
//               <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'blur-sm' : ''}`}>
//                 {currentExercise.name}
//               </td>
//               <td className="py-2 px-4 border-b text-center min-w-32">
//                 {currentExercise.gif ? (
//                   <img
//                     src={`${currentExercise.gif}`}
//                     alt={currentExercise.name}
//                     className={`w-32 h-32 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${
//                       !currentExercise.started ? 'blur-sm' : ''
//                     }`}
//                     onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                   />
//                 ) : (
//                   'No GIF'
//                 )}
//               </td>
//             </tr>

//             {currentExercise.started &&
//               Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
//                 <React.Fragment key={setIndex}>
//                   <tr>
//                     <td colSpan={3} className="py-2 px-4 border-b text-center">
//                       <div className="text-lg font-serif font-semibold italic text-left">
//                         {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
//                       </div>
//                       <div className="flex justify-center items-center space-x-4 mt-2">
//                         <div className="flex flex-col items-center">
//                           <FontAwesomeIcon icon={faWeightHanging} className="h-5 w-5 mr-1" />
//                           {currentExercise.weights?.[setIndex] || 0} kg
//                         </div>
//                         <div className="flex flex-col items-center">
//                           <FontAwesomeIcon icon={faRedoAlt} className="h-5 w-5 mr-1" />
//                           {currentExercise.reps?.[setIndex] || 0} reps
//                         </div>
//                         <button
//                           onClick={() => openWeightsModal(currentExercise, setIndex)}
//                           className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-200"
//                         >
//                           <FontAwesomeIcon icon={faPlus} className="mr-1" />
//                           {language === 'en' ? 'Add' : 'إضافة'}
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td colSpan={3} className="py-2 px-4 border-b text-center">
//                       <div className="text-lg font-serif font-semibold italic text-left">
//                         {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
//                       </div>
//                       <div className="flex justify-center items-center space-x-4 mt-2">
//                         <div>
//                           <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
//                           {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
//                         </div>
//                         {!clickedButtons[currentExercise.id]?.[setIndex] && (
//                           <button
//                             className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
//                             onClick={() => handleStartRestTimer(currentExercise.id, setIndex, currentExercise.restTime)}
//                           >
//                             <FontAwesomeIcon icon={faClock} className="mr-1" />
//                             {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
//                           </button>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 </React.Fragment>
//               ))}
//             <tr>
//               <td colSpan={3} className="py-2 px-4 text-center">
//                 <button
//                   className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
//                   onClick={() => handleToggleExerciseStart(currentExercise)}
//                 >
//                   <FontAwesomeIcon icon={currentExercise.started ? faStop : faPlay} className="mr-2" />
//                   {currentExercise.started ? (language === 'en' ? 'Stop Exercise' : 'أوقف التمرين') : (language === 'en' ? 'Start Exercise' : 'ابدأ التمرين')}
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         <div className="flex justify-between mt-4">
//           <button
//             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//             onClick={handlePreviousExercise}
//           >
//             <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
//             {language === 'en' ? 'Previous' : 'السابق'}
//           </button>
//           <button
//             className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//             onClick={handleNextExercise}
//           >
//             <FontAwesomeIcon icon={faArrowRight} className="mr-1" />
//             {language === 'en' ? 'Next' : 'التالي'}
//           </button>
//         </div>
//       </div>
//     ) : (
//       <p className="text-center text-lg font-semibold">
//         {language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}
//       </p>
//     )}
//   </div>
// ) : null}





// {showCardio && (
//   <div className="mb-4" style={{ overflow: 'hidden', maxWidth: '100%' }}> 
//     {clientData?.cardio && clientData.cardio.length > 0 ? (
//       <div className="w-64 max-w-3xl mx-auto">
//         <Slider {...sliderSettings}>
//           {clientData.cardio.map((exercise, index) => (
//             <div key={exercise.id} className="p-4">
//               <div className="shadow-md rounded-lg p-6 border-[var(--border-color)] text-[var(--text-color)] flex flex-col items-center" style={{ maxWidth: '100%', width: '100%' }}>
//                 <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)]">{exercise.name}</h3>

//                 <div className="w-32 h-32 flex justify-center mb-4">
//                   {exercise.gif ? (
//                     <img
//                       src={`/cardio/${exercise.gif}`}
//                       alt={exercise.name}
//                       className="w-full h-full object-cover rounded-lg cursor-pointer"
//                       onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
//                     />
//                   ) : (
//                     <p className="text-[var(--text-color)]">
//                       {language === 'en' ? 'No GIF available' : 'لا توجد صورة متحركة'}
//                     </p>
//                   )}
//                 </div>

//                 <div className="w-full text-center mb-4">
//                   <h4 className="text-xl font-semibold text-[var(--text-color)]">
//                     {language === 'en' ? 'Duration' : 'المدة'}: {exercise.duration}
//                   </h4>
//                 </div>

//                 <div className="flex justify-center items-center mb-4">
//                   <div className="flex items-center">
//                     <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
//                     <span>{cardioTimers[exercise.id] || '00:00'}</span>
//                   </div>
//                   {!cardioClickedButtons[exercise.id]?.[0] && (
//                     <button
//                       className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200 ml-4"
//                       onClick={() => handleStartCardioTimer(exercise.id, parseInt(exercise.duration))}
//                     >
//                       <FontAwesomeIcon icon={faClock} className="mr-1" />
//                       {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     ) : (
//       <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
//     )}
//   </div>
// )}






//       </div>
//     </div>
//     {selectedGif && (
//       <Modal onClose={() => handleGifClick(null)}>
//         <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//       </Modal>
//     )}
//     {showWeightsModal && activeSetIndex !== null && (
//       <Modal onClose={closeWeightsModal}>
//         <div className="p-4">
//           <h2 className="text-xl font-bold mb-4">
//             {language === 'en' ? 'Set Weights and Reps' : 'تحديد الأوزان والتكرارات'}
//           </h2>
//           <div className="mb-4 flex justify-between items-center bg-[var(--background-color)]">
//             <select
//               value={sets[activeSetIndex].weight}
//               onChange={(e) => handleSetChange(activeSetIndex, 'weight', parseFloat(e.target.value))}
//               className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//             >
//               {weights.map(weight => (
//                 <option key={weight} value={weight}>
//                   {weight} kg
//                 </option>
//               ))}
//             </select>
//             <select
//               value={sets[activeSetIndex].reps}
//               onChange={(e) => handleSetChange(activeSetIndex, 'reps', parseInt(e.target.value))}
//               className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//             >
//               {Array.from({ length: 25 }, (_, i) => i + 1).map(reps => (
//                 <option key={reps} value={reps}>
//                   {reps} {language === 'en' ? 'reps' : 'تكرارات'}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 w-full"
//             onClick={handleSaveWeights}
//           >
//             {language === 'en' ? 'Save' : 'حفظ'}
//           </button>
//         </div>
//       </Modal>
//     )}
//   </DashboardLayout>
//   );
// };

// export default ClientExercises;



































// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, faPlus, faSave, faTrash, faDumbbell, faHeartCircleBolt, faLock, faPlay, faStop, faWeightHanging, faRedoAlt, faClock, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
//   'Day 7': fa7,
// };

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   adaptiveHeight: true,
// };

// const translations: Record<string, string> = {
//   'Day 1': 'اليوم 1',
//   'Day 2': 'اليوم 2',
//   'Day 3': 'اليوم 3',
//   'Day 4': 'اليوم 4',
//   'Day 5': 'اليوم 5',
//   'Day 6': 'اليوم 6',
//   'Day 7': 'اليوم 7',
//   Proteins: 'البروتينات',
//   Vegetables: 'الخضروات',
//   Grains: 'الحبوب',
//   Dairy: 'منتجات الألبان',
//   Fruits: 'الفواكه',
//   Nuts: 'المكسرات',
// };

// interface Set {
//   weight: number;
//   reps: number;
//   timer?: string;
//   started?: boolean;
//   finished?: boolean;
// }

// interface Exercise {
//   date: string;
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets: number;
//   restTime: number;
//   weights: number[];
//   reps: number[];
//   started?: boolean;
//   finished?: boolean;
// }

// interface Cardio {
//   id: string;
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// interface ClientData {
//   email: string;
//   exerciseType?: string;
//   exercises?: Exercise[];
//   cardio?: Cardio[];
//   date: string;
// }

// interface Timers {
//   [key: string]: string;
// }

// interface ClickedButtons {
//   [key: string]: boolean[];
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
//   const [sets, setSets] = useState<Set[]>([]);
//   const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [timers, setTimers] = useState<Timers>({});
//   const [showCardio, setShowCardio] = useState(true);
//   const [showExercises, setShowExercises] = useState(true);
//   const [restTimer, setRestTimer] = useState<string | null>(null);
//   const [showWeightsModal, setShowWeightsModal] = useState(false);
//   const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);
//   const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
//   const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
//   const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
//   const [cardioTimers, setCardioTimers] = useState<Timers>({});
//   const [cardioIntervalId, setCardioIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [cardioClickedButtons, setCardioClickedButtons] = useState<ClickedButtons>({});
//   const [exercises, setExercises] = useState<Exercise[]>([]);


//   const [isLoading, setIsLoading] = useState(true);

//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();

//   // const [exercisesLoaded, setExercisesLoaded] = useState(false);
//   const [isDataReady, setIsDataReady] = useState(false);

//   const router = useRouter();




// //   const fetchClientData = async () => {
// //     if (!user) {
// //       console.log("User not found, redirecting to sign-in...");
// //       router.push('/sign-in');
// //       return;
// //     }

// //     const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
    
// //     if (!userEmail) {
// //       console.log("User email is missing");
// //       setLoading(false);
// //       return;
// //     }

// //     console.log("Fetching data for email:", userEmail);

// //     try {
// //       const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
// //         fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
// //         fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
// //         fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
// //       ]);

// //       // Log response statuses
// //       console.log("Client response status:", clientResponse.status);
// //       console.log("Cardio response status:", cardioResponse.status);
// //       console.log("Exercises response status:", exercisesResponse.status);

// //       // Process client data
// //       const client = clientResponse.ok ? await clientResponse.json() : { email: userEmail };
// //       const cardio = cardioResponse.ok ? await cardioResponse.json() : { exercises: [] };
// //       const exercisesData = exercisesResponse.ok ? await exercisesResponse.json() : { exercises: [], date: new Date().toISOString() };

// //       console.log("Client data:", client);
// //       console.log("Cardio data:", cardio);
// //       console.log("Exercises data:", exercisesData);

// //       setClientData({
// //         ...client,
// //         exercises: exercisesData.exercises || [],
// //         cardio: cardio.exercises || [],
// //         date: exercisesData.date || new Date().toISOString(),
// //       });

// //       // if (exercisesData.exercises && exercisesData.exercises.length > 0) {
// //       //   setExercises(exercisesData.exercises);
// //       //   setClientData({ ...client, exercises: exercisesData.exercises });
// //       //   calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
// //       // } else {
// //       //   setError("No exercises found."); // Set the error but continue
// //       //   setClientData({ ...client, exercises: [], date: new Date().toISOString() }); // Allow app to proceed
// //       // }

// //       setExercises(exercisesData.exercises);
// //       // setExercisesLoaded(true);

// //       const unlockedIndices = exercisesData.exercises
// //       .map((exercise: Exercise, index: number) => isCurrentDay(exercise.day, exercisesData.date) ? index : null)
// //       .filter((index: number | null): index is number => index !== null); // Type guard to filter out null values
    

// //       setUnlockedExerciseIndices(unlockedIndices); // Store the unlocked indices

// //     } catch (error) {
// //       console.error('Error fetching client data:', error);
// //       setClientData({
// //         email: userEmail,
// //         exercises: [],
// //         cardio: [],
// //         date: new Date().toISOString(),
// //       });
// //       setError('Failed to fetch exercises.');
// //     } finally {
// //       setLoading(false);
// //       console.log("Loading finished");
// //     }
// //   };



// //   // Log the current state of the data
// //   console.log("clientData:", clientData);
// //   console.log("clientData.exercises:", clientData?.exercises);

// // // Log the unlocked exercise indices and the current unlocked index
// //   console.log("unlockedExerciseIndices:", unlockedExerciseIndices);
// //   console.log("currentUnlockedIndex:", currentUnlockedIndex);

// // // Log the value from `unlockedExerciseIndices[currentUnlockedIndex]`
// //   console.log("Selected index from unlockedExerciseIndices:", unlockedExerciseIndices[currentUnlockedIndex]);

// //   const validUnlockedIndex = unlockedExerciseIndices[currentUnlockedIndex] !== undefined 
// //   ? currentUnlockedIndex 
// //   : 0;

// //   const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[validUnlockedIndex]] || null;

// //   console.log("currentExercise:", currentExercise);



// //   useEffect(() => {
// //     fetchClientData();
// //   }, [user]);


// //   // Ensure currentExercise is valid before rendering

// //   // Ensure all necessary data is available before rendering anything dependent on it
// //   useEffect(() => {
// //     if (clientData && unlockedExerciseIndices.length > 0 && currentExercise) {
// //       setIsDataReady(true); // Data is ready when there are valid indices and current exercise is not null
// //     }
// //   }, [clientData, unlockedExerciseIndices, currentExercise]);



// // const fetchClientData = async () => {

// //   setIsLoading(true);

// //   if (!user) {
// //     console.log("User not found, redirecting to sign-in...");
// //     router.push('/sign-in');
// //     return;
// //   }

// //   const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
  
// //   if (!userEmail) {
// //     console.log("User email is missing");
// //     setLoading(false);
// //     return;
// //   }

// //   console.log("Fetching data for email:", userEmail);

// //   try {
// //     const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
// //       fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
// //       fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
// //       fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
// //     ]);

// //     // Log response statuses
// //     console.log("Client response status:", clientResponse.status);
// //     console.log("Cardio response status:", cardioResponse.status);
// //     console.log("Exercises response status:", exercisesResponse.status);

// //     // Process client data
// //     const client = clientResponse.ok ? await clientResponse.json() : { email: userEmail };
// //     const cardio = cardioResponse.ok ? await cardioResponse.json() : { exercises: [] };
// //     const exercisesData = exercisesResponse.ok ? await exercisesResponse.json() : { exercises: [], date: new Date().toISOString() };

// //     console.log("Client data:", client);
// //     console.log("Cardio data:", cardio);
// //     console.log("Exercises data:", exercisesData);

// //     setClientData({
// //       ...client,
// //       exercises: exercisesData.exercises || [],
// //       cardio: cardio.exercises || [],
// //       date: exercisesData.date || new Date().toISOString(),
// //     });
    
// //     setExercises(exercisesData.exercises);

// //     localStorage.setItem('clientData', JSON.stringify(clientData));
// //     const cachedData = localStorage.getItem('clientData');
// //     if (cachedData) {
// //       setClientData(JSON.parse(cachedData));
// //     }

// //     const unlockedIndices = exercisesData.exercises
// //       .map((exercise: Exercise, index: number) => isCurrentDay(exercise.day, exercisesData.date) ? index : null)
// //       .filter((index: number | null): index is number => index !== null);

// //     setUnlockedExerciseIndices(unlockedIndices);

// //     setIsLoading(false);

// //   } catch (error) {
// //     console.error('Error fetching client data:', error);
// //     setClientData({
// //       email: userEmail,
// //       exercises: [],
// //       cardio: [],
// //       date: new Date().toISOString(),
// //     });
// //     setError('Failed to fetch exercises.');
// //   } finally {
// //     setLoading(false);
// //     console.log("Loading finished");
// //   }
// // };


// const fetchClientData = async () => {
//   if (!user) {
//     console.log("User not found, redirecting to sign-in...");
//     router.push('/sign-in');
//     return;
//   }

//   const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
  
//   if (!userEmail) {
//     console.log("User email is missing");
//     setLoading(false);
//     return;
//   }

//   console.log("Fetching data for email:", userEmail);

//   try {
//     const [clientData, cardioData, exercisesData] = await Promise.all([
//       fetchWithRetry(`/api/client?email=${userEmail}`, { method: 'GET' }),
//       fetchWithRetry(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
//       fetchWithRetry(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//     ]);

//     // Log response data
//     console.log("Client data:", clientData);
//     console.log("Cardio data:", cardioData);
//     console.log("Exercises data:", exercisesData);

//     setClientData({
//       ...clientData,
//       exercises: exercisesData.exercises || [],
//       cardio: cardioData.exercises || [],
//       date: exercisesData.date || new Date().toISOString(),
//     });

//     setExercises(exercisesData.exercises);

//     const unlockedIndices = exercisesData.exercises
//       .map((exercise: Exercise, index: number) => isCurrentDay(exercise.day, exercisesData.date) ? index : null)
//       .filter((index: number | null): index is number => index !== null);

//     setUnlockedExerciseIndices(unlockedIndices);

//   } catch (error) {
//     console.error('Error fetching client data:', error);
//     setClientData({
//       email: userEmail,
//       exercises: [],
//       cardio: [],
//       date: new Date().toISOString(),
//     });
//     setError('Failed to fetch exercises.');
//   } finally {
//     setLoading(false);
//     console.log("Loading finished");
//   }
// };


// type FetchOptions = RequestInit;

// const fetchWithRetry = async (url: string, options: FetchOptions, maxRetries: number = 3): Promise<any> => {
//   for (let i = 0; i < maxRetries; i++) {
//     try {
//       const response = await fetch(url, options);
//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//       return await response.json();
//     } catch (e) {
//       if (i === maxRetries - 1) throw e;
//     }
//   }
//   throw new Error('Max retries reached');
// };


// // Use this in your fetchClientData function

// // Log the current state of the data
// console.log("clientData:", clientData);
// console.log("clientData.exercises:", clientData?.exercises);
// console.log("unlockedExerciseIndices:", unlockedExerciseIndices);
// console.log("currentUnlockedIndex:", currentUnlockedIndex);

// // Define a fallback exercise to prevent null
// // const fallbackExercise: Exercise = {
// //   id: 'default',
// //   name: 'No available exercise',
// //   sets: 0,
// //   day: '',
// //   restTime: 0,
// //   weights: [],
// //   reps: [],
// //   date: new Date().toISOString(),
// // };

// // Use a valid unlocked index, or default to the first exercise or fallback
// const validUnlockedIndex = unlockedExerciseIndices[currentUnlockedIndex] !== undefined 
//   ? currentUnlockedIndex 
//   : 0;

// // Ensure we have a valid exercise or return the fallback object
// const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[validUnlockedIndex]] || null;

// console.log("currentExercise:", currentExercise);

// useEffect(() => {
//   fetchClientData();
// }, [user]);


// useEffect(() => {
//   if (clientData && unlockedExerciseIndices.length > 0) {
//     const validIndex = unlockedExerciseIndices[currentUnlockedIndex] ?? 0;
//     const exercise = clientData.exercises?.[validIndex];
//     console.log("Current exercise updated:", exercise);
//     // You can set a new state here if needed
//   }
// }, [clientData, unlockedExerciseIndices, currentUnlockedIndex]);


// // useEffect(() => {
// //   if (clientData && unlockedExerciseIndices.length > 0 && currentExercise) {
// //     setIsDataReady(true);
// //   }
// // }, [clientData, unlockedExerciseIndices, currentExercise]);






  // const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
  //   const assignedDate = new Date(startDate);
  //   const today = new Date();

  //   const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
  //   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  //   const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);
  //   const currentDay = cycleDays[diffDays % cycleDays.length];

  //   setUnlockedDays(cycleDays);
  //   setCurrentDayInCycle(currentDay);
  // };

//   // const fetchClientData = async () => {
//   //   if (!user) {
//   //     console.log("User is not authenticated. Skipping fetch.");
//   //     return; // Ensure we only fetch when the user is available
//   //   }

//   //   const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
//   //   if (!userEmail) {
//   //     console.log("No user email found. Aborting fetch.");
//   //     setLoading(false);
//   //     return;
//   //   }

//   //   try {
//   //     console.log("Fetching client data for email:", userEmail);

//   //     const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
//   //       fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//   //       fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
//   //       fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//   //     ]);

//   //     // Log API responses
//   //     console.log("Client response status:", clientResponse.status);
//   //     console.log("Cardio response status:", cardioResponse.status);
//   //     console.log("Exercises response status:", exercisesResponse.status);

//   //     if (!clientResponse.ok || !exercisesResponse.ok) {
//   //       throw new Error("Failed to fetch client data or exercises.");
//   //     }

//   //     const client = await clientResponse.json();
//   //     const exercisesData = await exercisesResponse.json();

//   //     setClientData({
//   //       ...client,
//   //       exercises: exercisesData.exercises || [],
//   //       date: exercisesData.date || new Date().toISOString(),
//   //     });

//   //     setExercises(exercisesData.exercises);

//   //     const unlockedIndices = exercisesData.exercises
//   //       .map((exercise: Exercise, index: number) => isCurrentDay(exercise.day, exercisesData.date) ? index : null)
//   //       .filter((index: number | null): index is number => index !== null);

//   //     setUnlockedExerciseIndices(unlockedIndices);

//   //   } catch (error: any) {
//   //     console.error("Error fetching client data:", error);
//   //     setError("Failed to fetch exercises.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // // Ensure fetchClientData runs only after user is authenticated
//   // useEffect(() => {
//   //   if (user) {
//   //     fetchClientData();
//   //   }
//   // }, [user]);


//   const isCurrentDay = (exerciseDay: string, programStartDate: string): boolean => {
//     const assignedDate = new Date(programStartDate);
//     const today = new Date();

//     const dayNumber = parseInt(exerciseDay.split(' ')[1], 10); 

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);

//     const currentDayInCycle = cycleDays[diffDays % cycleDays.length];

//     return dayNumber === currentDayInCycle;
//   };

//   const uniqueSortedExercises = Array.from(new Set(exercises.map(ex => ex.day)))
//     .map(day => exercises.find(ex => ex.day === day))
//     .filter(ex => ex !== undefined)
//     .sort((a, b) => {
//       const dayA = parseInt(a!.day.split(' ')[1], 10);
//       const dayB = parseInt(b!.day.split(' ')[1], 10);
//       return dayA - dayB;
//     });

//   const days = clientData?.exercises?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   const cardioDays = clientData?.cardio?.reduce((acc, exercise) => {
//     if (!acc.includes(exercise.day)) acc.push(exercise.day);
//     return acc;
//   }, [] as string[]) || [];

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div className="text-[var(--text-color)]">Error: {error}</div>;

//   const containerStyle = {
//     minHeight: 'calc(90vh - 4rem)',
//     backgroundColor: 'var(--background-color)',
//     color: 'var(--text-color)',
//   };

//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const handleAddSet = () => {
//     setSets([...sets, { weight: 0, reps: 0, timer: '00:00', started: false, finished: false }]);
//   };

//   const handleSetChange = (index: number, field: 'weight' | 'reps', value: number) => {
//     const updatedSets = sets.map((set, i) => (i === index ? { ...set, [field]: value } : set));
//     setSets(updatedSets);
//   };

//   const handleSaveSets = async () => {
//     if (selectedExercise && clientData) {
//       try {
//         const weights = sets.map(set => set.weight);
//         const reps = sets.map(set => set.reps);

//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights,
//             reps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to save sets');
//         }

//         const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, sets: sets.length, weights, reps } : exercise
//         );

//         setClientData({ ...clientData, exercises: updatedExercises });
//         setSelectedExercise(null);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error saving sets:', error);
//         setError(error.message);
//       }
//     }
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

//   const handleToggleExerciseStart = async (exercise: Exercise) => {
//     if (clientData) {
//       const updatedExercises = clientData.exercises?.map(ex =>
//         ex.id === exercise.id ? { ...ex, started: !ex.started } : { ...ex, started: false }
//       );

//       setClientData({ ...clientData, exercises: updatedExercises });

//       try {
//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: exercise.id,
//             exerciseStarted: !exercise.started,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to update exercise');
//         }

//         const newCurrentIndex = unlockedExerciseIndices.indexOf(clientData.exercises?.indexOf(exercise) || 0);
//         setCurrentUnlockedIndex(newCurrentIndex);

//       } catch (error: any) {
//         console.error('Error updating exercise:', error);
//       }
//     }
//   };

//   const handleRemoveSet = (index: number) => {
//     const updatedSets = sets.filter((_, i) => i !== index);
//     setSets(updatedSets);
//   };

//   const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }
//     setClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][setIndex] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setRestTimer('00:00');
//         setIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
//   };

//   const weights = Array.from({ length: 20 }, (_, i) => 2.5 * (i + 1));

//   const openWeightsModal = (exercise: Exercise, setIndex: number) => {
//     if (setIndex >= sets.length) {
//       setSets(prevSets => {
//         const newSets = [...prevSets];
//         for (let i = prevSets.length; i <= setIndex; i++) {
//           newSets.push({ weight: 0, reps: 0, started: false, finished: false });
//         }
//         return newSets;
//       });
//     }

//     setSelectedExercise(exercise);
//     setActiveSetIndex(setIndex);
//     setShowWeightsModal(true);
//   };

//   const closeWeightsModal = () => {
//     setShowWeightsModal(false);
//     setActiveSetIndex(null);
//   };

//   const handleStartCardioTimer = (exerciseId: string, duration: number) => {
//     if (cardioIntervalId) {
//       clearInterval(cardioIntervalId);
//     }
//     setCardioClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][0] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 60000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: '00:00' }));
//         setCardioIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setCardioTimers(prevTimers => ({ ...prevTimers, [exerciseId]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setCardioIntervalId(newIntervalId);
//   };

//   const handleSaveWeights = async () => {
//     if (selectedExercise && activeSetIndex !== null && clientData) {
//       try {
//         const updatedWeights = selectedExercise.weights ? [...selectedExercise.weights] : [];
//         const updatedReps = selectedExercise.reps ? [...selectedExercise.reps] : [];

//         updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
//         updatedReps[activeSetIndex] = sets[activeSetIndex].reps;

//         const response = await fetch('/api/assign-weights', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.email,
//             exerciseId: selectedExercise.id,
//             weights: updatedWeights,
//             reps: updatedReps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to assign weights and reps');
//         }

//         const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, weights: updatedWeights, reps: updatedReps } : exercise
//         );

//         setClientData({
//           ...clientData,
//           exercises: updatedExercises,
//         });

//         setShowWeightsModal(false);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error assigning weights and reps:', error);
//       }
//     } else {
//       if (!selectedExercise) console.error('selectedExercise is null or undefined');
//       if (activeSetIndex === null) console.error('activeSetIndex is null');
//       if (!clientData) console.error('clientData is null or undefined');
//     }
//   };
  
//   // const currentExercise = unlockedExerciseIndices.length > 0
//   // ? clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]]
//   // : null;
  
//   // const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]] || null;


//   // if (loading) {
//   //   return <LoadingSpinner />;
//   // }


//   // if (isLoading) {
//   //   return <LoadingSpinner />;
//   // }
  
//   if (!clientData ) {
//     return <div>No exercises available.</div>;
//   }

//   // const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]] || null;
  

// console.log("currentExercise", currentExercise)

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col justify-center items-center min-h-screen relative" style={containerStyle}>
//         <div className="absolute top-4 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faHeartCircleBolt}
//             className={`h-8 w-8 cursor-pointer ${showCardio ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowCardio(!showCardio)}
//           />
//         </div>


//         <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4">
//           <h1 className="text-2xl justify-center text-center font-lg italic font-serif mb-4">
//             {language === 'en' ? 'Exercises:' : 'التمارين:'}
//           </h1>
//           {clientData?.exerciseType && (
//             <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
//           )}

//           {showExercises && clientData ? (
//             <div className="mb-4">
//               {clientData.exercises && clientData.exercises.length > 0 ? (
//                 <div className="mb-4 flex justify-center flex-wrap gap-4">
//                   {uniqueSortedExercises.map((exercise, index) => {
//                     const isCurrent = isCurrentDay(exercise!.day, clientData.date);
//                     const isSelected = selectedDay === exercise!.day;

//                     return (
//                       <button
//                         key={index}
//                         aria-label={`Select ${exercise!.day}`}
//                         className={`relative flex items-center justify-center p-4 rounded-md shadow-md transition-all duration-300 ease-in-out transform ${
//                           isSelected ? 'bg-blue-500 text-white scale-105' : 'bg-gray-200 text-gray-800 hover:bg-blue-200'
//                         } ${isCurrent ? '' : 'locked'}`}
//                         onClick={() => isCurrent && setSelectedDay(exercise!.day)}
//                         disabled={!isCurrent}
//                       >
//                         <FontAwesomeIcon icon={dayIcons[exercise!.day]} className="h-6 w-6" />
//                         {!isCurrent && (
//                           <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 rounded-md">
//                             <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
//                           </div>
//                         )}
//                       </button>
//                     );
//                   })}
//                 </div>
//               ) : (
//                 <p className="text-center text-lg font-semibold">
//                   {language === 'en' ? 'No exercises available.' : 'لا توجد تمارين متاحة.'}
//                 </p>
//               )}

//               {currentExercise ? (
//                 <div className="w-full overflow-x-auto">
//                   <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg mb-4 transition-all duration-300 ease-in-out">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="py-2 px-4 border-b text-center">#</th>
//                         <th className="py-2 px-4 border-b text-center">
//                           {language === 'en' ? 'Exercise' : 'التمرين'}
//                         </th>
//                         <th className="py-2 px-4 border-b text-center">
//                           {language === 'en' ? 'GIF' : 'صورة متحركة'}
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td className="py-2 px-4 border-b text-center">
//                           <FontAwesomeIcon
//                             icon={dayIcons[`Day ${currentUnlockedIndex + 1}`]}
//                             className="h-6 w-6"
//                           />
//                         </td>
//                         <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'blur-sm' : ''}`}>
//                           {currentExercise.name}
//                         </td>
//                         <td className="py-2 px-4 border-b text-center min-w-32">
//                           {currentExercise.gif ? (
//                             <img
//                               src={`${currentExercise.gif}`}
//                               alt={currentExercise.name}
//                               className={`w-32 h-32 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${
//                                 !currentExercise.started ? 'blur-sm' : ''
//                               }`}
//                               onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
//                             />
//                           ) : (
//                             'No GIF'
//                           )}
//                         </td>
//                       </tr>

//                       {currentExercise.started &&
//                         Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
//                           <React.Fragment key={setIndex}>
//                             <tr>
//                               <td colSpan={3} className="py-2 px-4 border-b text-center">
//                                 <div className="text-lg font-serif font-semibold italic text-left">
//                                   {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
//                                 </div>
//                                 <div className="flex justify-center items-center space-x-4 mt-2">
//                                   <div className="flex flex-col items-center">
//                                     <FontAwesomeIcon icon={faWeightHanging} className="h-5 w-5 mr-1" />
//                                     {currentExercise.weights?.[setIndex] || 0} kg
//                                   </div>
//                                   <div className="flex flex-col items-center">
//                                     <FontAwesomeIcon icon={faRedoAlt} className="h-5 w-5 mr-1" />
//                                     {currentExercise.reps?.[setIndex] || 0} reps
//                                   </div>
//                                   <button
//                                     onClick={() => openWeightsModal(currentExercise, setIndex)}
//                                     className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-200"
//                                   >
//                                     <FontAwesomeIcon icon={faPlus} className="mr-1" />
//                                     {language === 'en' ? 'Add' : 'إضافة'}
//                                   </button>
//                                 </div>
//                               </td>
//                             </tr>
//                             <tr>
//                               <td colSpan={3} className="py-2 px-4 border-b text-center">
//                                 <div className="text-lg font-serif font-semibold italic text-left">
//                                   {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
//                                 </div>
//                                 <div className="flex justify-center items-center space-x-4 mt-2">
//                                   <div>
//                                     <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
//                                     {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
//                                   </div>
//                                   {!clickedButtons[currentExercise.id]?.[setIndex] && (
//                                     <button
//                                       className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
//                                       onClick={() => handleStartRestTimer(currentExercise.id, setIndex, currentExercise.restTime)}
//                                     >
//                                       <FontAwesomeIcon icon={faClock} className="mr-1" />
//                                       {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
//                                     </button>
//                                   )}
//                                 </div>
//                               </td>
//                             </tr>
//                           </React.Fragment>
//                         ))}
//                       <tr>
//                         <td colSpan={3} className="py-2 px-4 text-center">
//                           <button
//                             className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
//                             onClick={() => handleToggleExerciseStart(currentExercise)}
//                           >
//                             <FontAwesomeIcon icon={currentExercise.started ? faStop : faPlay} className="mr-2" />
//                             {currentExercise.started ? (language === 'en' ? 'Stop Exercise' : 'أوقف التمرين') : (language === 'en' ? 'Start Exercise' : 'ابدأ التمرين')}
//                           </button>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>

//                   <div className="flex justify-between mt-4">
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//                       onClick={handlePreviousExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
//                       {language === 'en' ? 'Previous' : 'السابق'}
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//                       onClick={handleNextExercise}
//                     >
//                       <FontAwesomeIcon icon={faArrowRight} className="mr-1" />
//                       {language === 'en' ? 'Next' : 'التالي'}
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <p className="text-center text-lg font-semibold">
//                   {language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}
//                 </p>
//               )}
//             </div>
//           ) : null}

//           {showCardio && (
//             <div className="mb-4" style={{ overflow: 'hidden', maxWidth: '100%' }}> 
//               {clientData?.cardio && clientData.cardio.length > 0 ? (
//                 <div className="w-64 max-w-3xl mx-auto">
//                   <Slider {...sliderSettings}>
//                     {clientData.cardio.map((exercise, index) => (
//                       <div key={exercise.id} className="p-4">
//                         <div className="shadow-md rounded-lg p-6 border-[var(--border-color)] text-[var(--text-color)] flex flex-col items-center" style={{ maxWidth: '100%', width: '100%' }}>
//                           <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)]">{exercise.name}</h3>

//                           <div className="w-32 h-32 flex justify-center mb-4">
//                             {exercise.gif ? (
//                               <img
//                                 src={`/cardio/${exercise.gif}`}
//                                 alt={exercise.name}
//                                 className="w-full h-full object-cover rounded-lg cursor-pointer"
//                                 onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
//                               />
//                             ) : (
//                               <p className="text-[var(--text-color)]">
//                                 {language === 'en' ? 'No GIF available' : 'لا توجد صورة متحركة'}
//                               </p>
//                             )}
//                           </div>

//                           <div className="w-full text-center mb-4">
//                             <h4 className="text-xl font-semibold text-[var(--text-color)]">
//                               {language === 'en' ? 'Duration' : 'المدة'}: {exercise.duration}
//                             </h4>
//                           </div>

//                           <div className="flex justify-center items-center mb-4">
//                             <div className="flex items-center">
//                               <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
//                               <span>{cardioTimers[exercise.id] || '00:00'}</span>
//                             </div>
//                             {!cardioClickedButtons[exercise.id]?.[0] && (
//                               <button
//                                 className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200 ml-4"
//                                 onClick={() => handleStartCardioTimer(exercise.id, parseInt(exercise.duration))}
//                               >
//                                 <FontAwesomeIcon icon={faClock} className="mr-1" />
//                                 {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
//                               </button>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </Slider>
//                 </div>
//               ) : (
//                 <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
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

//       {showWeightsModal && activeSetIndex !== null && (
//         <Modal onClose={closeWeightsModal}>
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-4">
//               {language === 'en' ? 'Set Weights and Reps' : 'تحديد الأوزان والتكرارات'}
//             </h2>
//             <div className="mb-4 flex justify-between items-center bg-[var(--background-color)]">
//               <select
//                 value={sets[activeSetIndex].weight}
//                 onChange={(e) => handleSetChange(activeSetIndex, 'weight', parseFloat(e.target.value))}
//                 className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//               >
//                 {weights.map(weight => (
//                   <option key={weight} value={weight}>
//                     {weight} kg
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={sets[activeSetIndex].reps}
//                 onChange={(e) => handleSetChange(activeSetIndex, 'reps', parseInt(e.target.value))}
//                 className="p-2 border rounded-md ml-2 w-1/2 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center"
//               >
//                 {Array.from({ length: 25 }, (_, i) => i + 1).map(reps => (
//                   <option key={reps} value={reps}>
//                     {reps} {language === 'en' ? 'reps' : 'تكرارات'}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button
//               className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 w-full"
//               onClick={handleSaveWeights}
//             >
//               {language === 'en' ? 'Save' : 'حفظ'}
//             </button>
//           </div>
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientExercises;















// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faCheck, faRunning } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
// };

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

// interface Cardio {
//   id: string;
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [meals, setMeals] = useState<Meal[]>([]);
//   const [cardio, setCardio] = useState<Cardio[]>([]); // State to hold cardio data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [selectedMeals, setSelectedMeals] = useState<Meal[]>([]); // For selecting meals
//   const [showMeals, setShowMeals] = useState(false); // Toggle between meals and exercises
//   const [showCardio, setShowCardio] = useState(false); // Toggle between cardio and exercises

//   // Fetch Client Data
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

//         // Check if both fetches were successful
//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data.');
//         }

//         // Extract the response data
//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         // Set exercises if available, otherwise handle the missing exercises case
//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
//         } else {
//           setError("No exercises found.");
//           setClientData({ fullName: userEmail, exercises: [], date: new Date().toISOString() });
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error.message);
//         setError('Failed to fetch data. No exercises assigned yet.');
//         setClientData({ fullName: userEmail, exercises: [], date: new Date().toISOString() });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Calculate unlocked days based on exercise cycle
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);
//   };

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
//         throw new Error('Failed to fetch meals');
//       }

//       const data = await response.json();
//       const mealsList = Array.isArray(data.meals) && data.meals.length > 0 ? data.meals.flat() : [];

//       setMeals(mealsList);
//       setShowMeals(true); // Set to true to display the meals section
//     } catch (error: unknown) {
//       console.error('Error fetching meals:', error);
//       setError('An error occurred while fetching meals.');
//     }
//   };

//   // Handle Exercise and Meal Selection
//   const handleMealSelection = (meal: Meal) => {
//     if (selectedMeals.includes(meal)) {
//       setSelectedMeals(selectedMeals.filter(m => m.id !== meal.id));
//     } else if (selectedMeals.length < 6) {
//       setSelectedMeals([...selectedMeals, meal]);
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

//   if (loading) return <LoadingSpinner />;

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto text-center w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4">
//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           {language === 'en' ? 'Your Exercises' : 'تمارينك'}
//         </h1>

//         {/* Toggle between exercises and meals */}
//         <div className="mb-4">
//           <button
//             className={`px-4 py-2 rounded-lg mr-4 ${!showMeals && !showCardio ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={() => {
//               setShowMeals(false);
//             }} // Toggle to show exercises
//           >
//             <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
//             {language === 'en' ? 'Exercises' : 'التمارين'}
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg mr-4 ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={fetchMeals} // Fetch and toggle to show meals
//           >
//             <FontAwesomeIcon icon={faUtensils} className="mr-2" />
//             {language === 'en' ? 'Meals' : 'الوجبات'}
//           </button>
//         </div>

//         {/* Display Meals */}
//         {showMeals ? (
//           <div className="meals-section">
//             {meals.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {meals.map((meal, index) => (
//                   <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
//                     <p>{language === 'en' ? 'Type' : 'نوع'}: {meal.type}</p>
//                     {meal.calories && <p>{language === 'en' ? 'Calories' : 'سعرات حرارية'}: {meal.calories}</p>}
//                     {meal.image && (
//                       <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2" />
//                     )}
//                     <button
//                       onClick={() => handleMealSelection(meal)}
//                       className={`mt-4 px-4 py-2 rounded-lg ${selectedMeals.includes(meal) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}
//                     >
//                       {selectedMeals.includes(meal) ? (
//                         <>
//                           <FontAwesomeIcon icon={faCheck} className="mr-2" /> {language === 'en' ? 'Selected' : 'تم الاختيار'}
//                         </>
//                       ) : (
//                         language === 'en' ? 'Select Meal' : 'اختر الوجبة'
//                       )}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="flex flex-col items-center justify-center py-10">
//                 <p className="text-2xl font-bold text-red-600 mb-4">
//                   {language === 'en'
//                     ? 'No meals assigned yet. Go to the nutrition section to assign food for yourself!'
//                     : 'لم يتم تعيين وجبات بعد. اذهب إلى قسم التغذية لتخصيص الطعام لنفسك!'}
//                 </p>
//               </div>
//             )}
//           </div>
//         ) : (
//           <>
//             {/* Day Selection */}
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

//             {/* Display Exercise */}
//             {selectedDay && currentExercise && (
//               <div className="text-center mb-6">
//                 <h2 className={`text-2xl font-bold mb-4 ${!currentExercise.reps || !currentExercise.weights ? 'blur-md' : ''}`}>
//                   {currentExercise.name}
//                 </h2>

//                 {currentExercise.reps && currentExercise.weights ? (
//                   <div className="flex justify-center items-center mb-4">
//                     <div className="mx-2">
//                       <FontAwesomeIcon icon={faWeightHanging} />
//                       {currentExercise.weights?.join(', ')} kg
//                     </div>
//                     <div className="mx-2">
//                       <FontAwesomeIcon icon={faRedoAlt} />
//                       {currentExercise.reps?.join(', ')} {language === 'en' ? 'reps' : 'عدة'}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="text-red-500 text-lg">
//                     {language === 'en' ? (
//                       <>Head to exercises and start to unlock.</>
//                     ) : (
//                       <>اتجه إلى التمارين وابدأ لتفتحها.</>
//                     )}
//                   </div>
//                 )}

//                 {currentExercise.gif ? (
//                   <img
//                     src={currentExercise.gif}
//                     alt={currentExercise.name}
//                     className={`w-32 h-32 mx-auto ${!currentExercise.reps || !currentExercise.weights ? 'blur-lg' : ''}`}
//                   />
//                 ) : (
//                   language === 'en' ? 'No GIF available' : 'لا توجد صورة GIF متاحة'
//                 )}
//               </div>
//             )}

//             {/* Navigation for exercises */}
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

// export default ClientExercises;





























// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faHeartCircleBolt, faWeightHanging, faRedoAlt, faDumbbell, faClock, faPlay, faStop, faPlus } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
//   sets: number;
//   restTime: number;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   date: string; // Program start date
// }

// interface Timers {
//   [key: string]: string;
// }

// interface ClickedButtons {
//   [key: string]: boolean[];
// }


// interface Cardio {
//   id: string;
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [timers, setTimers] = useState<Timers>({});
//   const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
//   const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [showExercises, setShowExercises] = useState(true);
//   const [showCardio, setShowCardio] = useState(true);

//   // Fetch Client Data
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

//         // Check if both fetches were successful
//         if (!clientResponse.ok || !exercisesResponse.ok) {
//           throw new Error('Failed to fetch client data.');
//         }

//         // Extract the response data
//         const client = await clientResponse.json();
//         const exercisesData = await exercisesResponse.json();

//         // Set exercises if available, otherwise handle the missing exercises case
//         if (exercisesData.exercises && exercisesData.exercises.length > 0) {
//           setExercises(exercisesData.exercises);
//           setClientData({ ...client, exercises: exercisesData.exercises });
//           calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
//         } else {
//           setError("No exercises found.");
//           setClientData({ fullName: userEmail, exercises: [], date: new Date().toISOString() });
//         }

//       } catch (error: any) {
//         console.error('Error fetching client data:', error.message);
//         setError('Failed to fetch data. No exercises assigned yet.');
//         setClientData({ fullName: userEmail, exercises: [], date: new Date().toISOString() });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   // Calculate unlocked days based on exercise cycle
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);
//   };

//   // Handle Day and Exercise Navigation
//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };

  // const handleNextExercise = () => {
  //   if (clientData && selectedDay) {
  //     const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
  //     setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
  //   }
  // };

  // const handlePreviousExercise = () => {
  //   if (clientData && selectedDay) {
  //     const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
  //     setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
  //   }
  // };


//   const containerStyle = {
//     minHeight: 'calc(90vh - 4rem)',
//     backgroundColor: 'var(--background-color)',
//     color: 'var(--text-color)',
//   };

//   // Handle Rest Timer
  // const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //   }
  //   setClickedButtons(prevState => {
  //     const newState = { ...prevState };
  //     if (!newState[exerciseId]) {
  //       newState[exerciseId] = [];
  //     }
  //     newState[exerciseId][setIndex] = true;
  //     return newState;
  //   });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: '00:00' }));
//         setIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = Math.floor((remainingTime % 60000) / 1000);
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds.toString().padStart(2, '0')}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
//   };

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   if (loading) return <LoadingSpinner />;

//   return (
//     <DashboardLayout>
//       {/* <div className="container mx-auto text-center w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4" style={containerStyle}> */}
//       <div className="flex flex-col justify-center w-full max-w-3xl  items-center min-h-screen relative  p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4" style={containerStyle}>
//         <div className="absolute top-4 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//             />
//           <FontAwesomeIcon
//             icon={faHeartCircleBolt}
//             className={`h-8 w-8 cursor-pointer ${showCardio ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowCardio(!showCardio)}
//             />
//         </div>
//         {/* </div> */}
//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           {language === 'en' ? 'Your Exercises' : 'تمارينك'}
//         </h1>

//         {/* Day Selection */}
//         <div className="flex justify-center mb-4">
//           {unlockedDays.map((dayNumber) => {
//             const dayName = `Day ${dayNumber}`;
//             return (
//               <button
//                 key={dayName}
//                 className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                 onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)}
//                 disabled={dayNumber !== currentDayInCycle}
//               >
//                 {dayNumber === currentDayInCycle ? (
//                   <>
//                     {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                   </>
//                 ) : (
//                   <>
//                     {dayName} <FontAwesomeIcon icon={faLock} />
//                   </>
//                 )}
//               </button>
//             );
//           })}
//         </div>

//         {/* Display Exercise Table */}
        // {currentExercise && showExercises ? (
        //   <div className="w-full overflow-x-auto">
        //     <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg mb-4 transition-all duration-300 ease-in-out">
        //       <thead>
        //         <tr className="bg-gray-100">
        //           <th className="py-2 px-4 border-b text-center">#</th>
        //           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise' : 'التمرين'}</th>
        //           <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'GIF' : 'صورة متحركة'}</th>
        //         </tr>
        //       </thead>
        //       <tbody>
        //         <tr>
        //           <td className="py-2 px-4 border-b text-center">
        //             <FontAwesomeIcon icon={dayIcons[`Day ${currentExerciseIndex + 1}`]} className="h-6 w-6" />
        //           </td>
        //           <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'blur-sm' : ''}`}>
        //             {currentExercise.name}
        //           </td>
        //           <td className="py-2 px-4 border-b text-center min-w-32">
        //             {currentExercise.gif ? (
        //               <img
        //                 src={`${currentExercise.gif}`}
        //                 alt={currentExercise.name}
        //                 className={`w-32 h-32 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${!currentExercise.started ? 'blur-sm' : ''}`}
        //                 onClick={() => null /* Handle GIF Click */}
        //               />
        //             ) : (
        //               'No GIF'
        //             )}
        //           </td>
        //         </tr>

        //         {currentExercise.started &&
        //           Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
        //             <React.Fragment key={setIndex}>
        //               <tr>
        //                 <td colSpan={3} className="py-2 px-4 border-b text-center">
        //                   <div className="text-lg font-serif font-semibold italic text-left">
        //                     {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
        //                   </div>
        //                   <div className="flex justify-center items-center space-x-4 mt-2">
        //                     <div className="flex flex-col items-center">
        //                       <FontAwesomeIcon icon={faWeightHanging} className="h-5 w-5 mr-1" />
        //                       {currentExercise.weights?.[setIndex] || 0} kg
        //                     </div>
        //                     <div className="flex flex-col items-center">
        //                       <FontAwesomeIcon icon={faRedoAlt} className="h-5 w-5 mr-1" />
        //                       {currentExercise.reps?.[setIndex] || 0} reps
        //                     </div>
        //                     <button
        //                       onClick={() => null /* Handle Weight Modal */}
        //                       className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-200"
        //                     >
        //                       <FontAwesomeIcon icon={faPlus} className="mr-1" />
        //                       {language === 'en' ? 'Add' : 'إضافة'}
        //                     </button>
        //                   </div>
        //                 </td>
        //               </tr>
        //               <tr>
        //                 <td colSpan={3} className="py-2 px-4 border-b text-center">
        //                   <div className="text-lg font-serif font-semibold italic text-left">
        //                     {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
        //                   </div>
        //                   <div className="flex justify-center items-center space-x-4 mt-2">
        //                     <div>
        //                       <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
        //                       {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
        //                     </div>
        //                     {!clickedButtons[currentExercise.id]?.[setIndex] && (
        //                       <button
        //                         className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
        //                         onClick={() => handleStartRestTimer(currentExercise.id, setIndex, currentExercise.restTime)}
        //                       >
        //                         <FontAwesomeIcon icon={faClock} className="mr-1" />
        //                         {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
        //                       </button>
        //                     )}
        //                   </div>
        //                 </td>
        //               </tr>
        //             </React.Fragment>
        //           ))}
        //         <tr>
        //           <td colSpan={3} className="py-2 px-4 text-center">
        //             <button
        //               className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
        //               onClick={() => null /* Handle Start/Stop Exercise */}
        //             >
        //               <FontAwesomeIcon icon={currentExercise.started ? faStop : faPlay} className="mr-2" />
        //               {currentExercise.started ? (language === 'en' ? 'Stop Exercise' : 'أوقف التمرين') : (language === 'en' ? 'Start Exercise' : 'ابدأ التمرين')}
        //             </button>
        //           </td>
        //         </tr>
        //       </tbody>
        //     </table>

        //     <div className="flex justify-between mt-4">
        //       <button
        //         className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
        //         onClick={handlePreviousExercise}
        //       >
        //         <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
        //         {language === 'en' ? 'Previous' : 'السابق'}
        //       </button>
        //       <button
        //         className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
        //         onClick={handleNextExercise}
        //       >
        //         <FontAwesomeIcon icon={faArrowRight} className="mr-1" />
        //         {language === 'en' ? 'Next' : 'التالي'}
        //       </button>
        //     </div>
        //   </div>
        // ) : (
        //   <p className="text-center text-lg font-semibold">
        //     {language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}
        //   </p>
        // )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ClientExercises;




























// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faHeartCircleBolt, faWeightHanging, faRedoAlt, faDumbbell, faClock, faPlay, faStop, faPlus } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
// };

// interface Exercise {
//   id: string;
//   name: string;
//   day: string;
//   reps?: number[];
//   weights?: number[];
//   gif?: string;
//   started?: boolean;
//   sets: number;
//   restTime: number;
// }

// interface Cardio {
//   id: string;
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   cardio: Cardio[];
//   date: string; // Program start date
// }

// interface Timers {
//   [key: string]: string;
// }

// interface ClickedButtons {
//   [key: string]: boolean[];
// }

// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [timers, setTimers] = useState<Timers>({});
//   const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
//   const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [showExercises, setShowExercises] = useState(true);
//   const [showCardio, setShowCardio] = useState(true);
//   const [cardioTimers, setCardioTimers] = useState<Timers>({});
//   const [cardioClickedButtons, setCardioClickedButtons] = useState<ClickedButtons>({});
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   const [restTimer, setRestTimer] = useState<string | null>(null);

//   const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
//   // const [sets, setSets] = useState<Set[]>([]);
//   const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);
//   const [showWeightsModal, setShowWeightsModal] = useState(false);

//   // Fetch Client Data
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
//         const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         // Process client data
//         const client = clientResponse.ok ? await clientResponse.json() : { email: userEmail };
//         const cardio = cardioResponse.ok ? await cardioResponse.json() : { exercises: [] };
//         const exercisesData = exercisesResponse.ok ? await exercisesResponse.json() : { exercises: [], date: new Date().toISOString() };

//         setClientData({
//           ...client,
//           exercises: exercisesData.exercises || [],
//           cardio: cardio.exercises || [],
//           date: exercisesData.date || new Date().toISOString(),
//         });

//         calculateUnlockedDays(exercisesData.exercises, exercisesData.date);

//       } catch (error: any) {
//         console.error('Error fetching client data:', error.message);
//         setError('Failed to fetch data.');
//         setClientData({ fullName: userEmail, exercises: [], cardio: [], date: new Date().toISOString() });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };


//   // const weights = Array.from({ length: 20 }, (_, i) => 2.5 * (i + 1));

//   // const openWeightsModal = (exercise: Exercise, setIndex: number) => {
//   //   if (setIndex >= sets.length) {
//   //     setSets(prevSets => {
//   //       const newSets = [...prevSets];
//   //       for (let i = prevSets.length; i <= setIndex; i++) {
//   //         newSets.push({ weight: 0, reps: 0, started: false, finished: false });
//   //       }
//   //       return newSets;
//   //     });
//   //   }

//   //   setSelectedExercise(exercise);
//   //   setActiveSetIndex(setIndex);
//   //   setShowWeightsModal(true);
//   // };

//   // const closeWeightsModal = () => {
//   //   setShowWeightsModal(false);
//   //   setActiveSetIndex(null);
//   // };







//   const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }
//     setClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][setIndex] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setRestTimer('00:00');
//         setIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
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


//   // Calculate unlocked days based on exercise cycle
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);
//   };

//   // Handle Start Cardio Timer
//   const handleStartCardioTimer = (cardioId: string, duration: number) => {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;

//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setCardioTimers(prevTimers => ({ ...prevTimers, [cardioId]: '00:00' }));
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = Math.floor((remainingTime % 60000) / 1000);
//         setCardioTimers(prevTimers => ({ ...prevTimers, [cardioId]: `${minutes}:${seconds.toString().padStart(2, '0')}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
//   };

//   // Handle GIF Click for Cardio
//   const handleGifClick = (gif: string | null) => {
//     setSelectedGif(gif);
//   };

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   if (loading) return <LoadingSpinner />;

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col justify-center w-full max-w-3xl items-center min-h-screen relative p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4">
//         <div className="absolute top-4 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faHeartCircleBolt}
//             className={`h-8 w-8 cursor-pointer ${showCardio ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowCardio(!showCardio)}
//           />
//         </div>

//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           {language === 'en' ? 'Your Exercises' : 'تمارينك'}
//         </h1>

//         {/* Day Selection */}
//         <div className="flex justify-center mb-4">
//           {unlockedDays.map((dayNumber) => {
//             const dayName = `Day ${dayNumber}`;
//             return (
//               <button
//                 key={dayName}
//                 className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                 onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)}
//                 disabled={dayNumber !== currentDayInCycle}
//               >
//                 {dayNumber === currentDayInCycle ? (
//                   <>
//                     {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                   </>
//                 ) : (
//                   <>
//                     {dayName} <FontAwesomeIcon icon={faLock} />
//                   </>
//                 )}
//               </button>
//             );
//           })}
//         </div>

//         {/* Cardio Section */}
//         {showCardio && (
//           <div className="mb-4" style={{ overflow: 'hidden', maxWidth: '100%' }}>
//             {clientData?.cardio && clientData.cardio.length > 0 ? (
//               <div className="w-64 max-w-3xl mx-auto">
//                 {clientData.cardio.map((exercise) => (
//                   <div key={exercise.id} className="p-4">
//                     <div className="shadow-md rounded-lg p-6 border-[var(--border-color)] text-[var(--text-color)] flex flex-col items-center">
//                       <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)]">{exercise.name}</h3>

//                       <div className="w-32 h-32 flex justify-center mb-4">
//                         {exercise.gif ? (
//                           <img
//                             src={`/cardio/${exercise.gif}`}
//                             alt={exercise.name}
//                             className="w-full h-full object-cover rounded-lg cursor-pointer"
//                             onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
//                           />
//                         ) : (
//                           <p className="text-[var(--text-color)]">
//                             {language === 'en' ? 'No GIF available' : 'لا توجد صورة متحركة'}
//                           </p>
//                         )}
//                       </div>

//                       <div className="w-full text-center mb-4">
//                         <h4 className="text-xl font-semibold text-[var(--text-color)]">
//                           {language === 'en' ? 'Duration' : 'المدة'}: {exercise.duration}
//                         </h4>
//                       </div>

//                       <div className="flex justify-center items-center mb-4">
//                         <div className="flex items-center">
//                           <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
//                           <span>{cardioTimers[exercise.id] || '00:00'}</span>
//                         </div>
//                         {!cardioClickedButtons[exercise.id]?.[0] && (
//                           <button
//                             className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200 ml-4"
//                             onClick={() => handleStartCardioTimer(exercise.id, parseInt(exercise.duration))}
//                           >
//                             <FontAwesomeIcon icon={faClock} className="mr-1" />
//                             {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
//             )}
//           </div>
//         )}

//         {/* Exercise Section */}
//         {currentExercise && showExercises ? (
//           <div className="w-full overflow-x-auto">
//             <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg mb-4 transition-all duration-300 ease-in-out">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="py-2 px-4 border-b text-center">#</th>
//                   <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise' : 'التمرين'}</th>
//                   <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'GIF' : 'صورة متحركة'}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="py-2 px-4 border-b text-center">
//                     <FontAwesomeIcon icon={dayIcons[`Day ${currentExerciseIndex + 1}`]} className="h-6 w-6" />
//                   </td>
//                   <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'blur-sm' : ''}`}>
//                     {currentExercise.name}
//                   </td>
//                   <td className="py-2 px-4 border-b text-center min-w-32">
//                     {currentExercise.gif ? (
//                       <img
//                         src={`${currentExercise.gif}`}
//                         alt={currentExercise.name}
//                         className={`w-32 h-32 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${!currentExercise.started ? 'blur-sm' : ''}`}
//                         onClick={() => null /* Handle GIF Click */}
//                       />
//                     ) : (
//                       'No GIF'
//                     )}
//                   </td>
//                 </tr>

//                 {currentExercise.started &&
//                   Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
//                     <React.Fragment key={setIndex}>
//                       <tr>
//                         <td colSpan={3} className="py-2 px-4 border-b text-center">
//                           <div className="text-lg font-serif font-semibold italic text-left">
//                             {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
//                           </div>
//                           <div className="flex justify-center items-center space-x-4 mt-2">
//                             <div className="flex flex-col items-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="h-5 w-5 mr-1" />
//                               {currentExercise.weights?.[setIndex] || 0} kg
//                             </div>
//                             <div className="flex flex-col items-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="h-5 w-5 mr-1" />
//                               {currentExercise.reps?.[setIndex] || 0} reps
//                             </div>
//                             <button
//                               onClick={() => null /* Handle Weight Modal */}
//                               className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-200"
//                             >
//                               <FontAwesomeIcon icon={faPlus} className="mr-1" />
//                               {language === 'en' ? 'Add' : 'إضافة'}
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td colSpan={3} className="py-2 px-4 border-b text-center">
//                           <div className="text-lg font-serif font-semibold italic text-left">
//                             {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
//                           </div>
//                           <div className="flex justify-center items-center space-x-4 mt-2">
//                             <div>
//                               <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
//                               {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
//                             </div>
//                             {!clickedButtons[currentExercise.id]?.[setIndex] && (
//                               <button
//                                 className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
//                                 onClick={() => handleStartRestTimer(currentExercise.id, setIndex, currentExercise.restTime)}
//                               >
//                                 <FontAwesomeIcon icon={faClock} className="mr-1" />
//                                 {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
//                               </button>
//                             )}
//                           </div>
//                         </td>
//                       </tr>
//                     </React.Fragment>
//                   ))}
//                 <tr>
//                   <td colSpan={3} className="py-2 px-4 text-center">
//                     <button
//                       className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
//                       onClick={() => null /* Handle Start/Stop Exercise */}
//                     >
//                       <FontAwesomeIcon icon={currentExercise.started ? faStop : faPlay} className="mr-2" />
//                       {currentExercise.started ? (language === 'en' ? 'Stop Exercise' : 'أوقف التمرين') : (language === 'en' ? 'Start Exercise' : 'ابدأ التمرين')}
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             <div className="flex justify-between mt-4">
//               <button
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//                 onClick={handlePreviousExercise}
//               >
//                 <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
//                 {language === 'en' ? 'Previous' : 'السابق'}
//               </button>
//               <button
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//                 onClick={handleNextExercise}
//               >
//                 <FontAwesomeIcon icon={faArrowRight} className="mr-1" />
//                 {language === 'en' ? 'Next' : 'التالي'}
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="text-center text-lg font-semibold">
//             {language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}
//           </p>
//         )}
//       </div>

//       {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientExercises;






























// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import Modal from '@/components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, faPlus, faSave, faTrash, faDumbbell, faHeartCircleBolt, faLock, faPlay, faStop, faWeightHanging, faRedoAlt, faClock, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import Slider from 'react-slick';

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': fa1,
//   'Day 2': fa2,
//   'Day 3': fa3,
//   'Day 4': fa4,
//   'Day 5': fa5,
//   'Day 6': fa6,
// };

// interface Exercise {
//   date: string;
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets: number;
//   restTime: number;
//   weights: number[];
//   reps: number[];
//   started?: boolean;
//   finished?: boolean;
// }


// interface Cardio {
//   id: string;
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }

// interface ClientData {
//   fullName: string;
//   exercises: Exercise[];
//   cardio: Cardio[];
//   date: string; // Program start date
// }

// interface Timers {
//   [key: string]: string;
// }

// interface ClickedButtons {
//   [key: string]: boolean[];
// }


// const sliderSettings = {
//   dots: false,  // Disable dots
//   arrows: false,  // Disable arrows
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,  // Show only one item at a time
//   slidesToScroll: 1,  // Scroll one item at a time
//   adaptiveHeight: true,  // Adjust height to content
// };


// const ClientExercises: React.FC = () => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();
//   const [clientData, setClientData] = useState<ClientData | null>(null);
//   const [exercises, setExercises] = useState<Exercise[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedDay, setSelectedDay] = useState<string | null>(null);
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
//   const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
//   const [timers, setTimers] = useState<Timers>({});
//   const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
//   const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
//   const [showExercises, setShowExercises] = useState(true);
//   const [showCardio, setShowCardio] = useState(true);
//   const [cardioTimers, setCardioTimers] = useState<Timers>({});
//   const [cardioClickedButtons, setCardioClickedButtons] = useState<ClickedButtons>({});
//   const [weights, setWeights] = useState<number[]>(Array.from({ length: 20 }, (_, i) => 2.5 * (i + 1))); // Weights Array
//   const [sets, setSets] = useState<Array<{ weight: number; reps: number; started: boolean; finished: boolean }>>([]);
//   const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);

//   // const [selectedGif, setSelectedGif] = useState<string | null>(null);
//   // const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
//   // const [showWeightsModal, setShowWeightsModal] = useState<boolean>(false);

//   const [showWeightsModal, setShowWeightsModal] = useState(false);
//   const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
//   const [selectedSetIndex, setSelectedSetIndex] = useState<number | null>(null);
//   const [tempWeight, setTempWeight] = useState(0);
//   const [tempReps, setTempReps] = useState(0);
//   const [showGifModal, setShowGifModal] = useState(false);
//   const [selectedGif, setSelectedGif] = useState<string | null>(null);

//   // Fetch Client Data
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
//         const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
//           fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
//           fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
//         ]);

//         // Process client data
//         const client = clientResponse.ok ? await clientResponse.json() : { email: userEmail };
//         const cardio = cardioResponse.ok ? await cardioResponse.json() : { exercises: [] };
//         const exercisesData = exercisesResponse.ok ? await exercisesResponse.json() : { exercises: [], date: new Date().toISOString() };

//         setClientData({
//           ...client,
//           exercises: exercisesData.exercises || [],
//           cardio: cardio.exercises || [],
//           date: exercisesData.date || new Date().toISOString(),
//         });

//         calculateUnlockedDays(exercisesData.exercises, exercisesData.date);

//       } catch (error: any) {
//         console.error('Error fetching client data:', error.message);
//         setError('Failed to fetch data.');
//         setClientData({ fullName: userEmail, exercises: [], cardio: [], date: new Date().toISOString() });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClientData();
//   }, [user, router]);

//   const handleDaySelection = (day: string) => {
//     setSelectedDay(day);
//     setCurrentExerciseIndex(0);
//   };


//   const handleSaveWeights = async () => {
//     if (selectedExercise && activeSetIndex !== null && clientData) {
//       try {
//         const updatedWeights = selectedExercise.weights ? [...selectedExercise.weights] : [];
//         const updatedReps = selectedExercise.reps ? [...selectedExercise.reps] : [];

//         updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
//         updatedReps[activeSetIndex] = sets[activeSetIndex].reps;

//         const response = await fetch('/api/assign-weights', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.fullName, // Assuming fullName is used as email in your case
//             exerciseId: selectedExercise.id,
//             weights: updatedWeights,
//             reps: updatedReps,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to assign weights and reps');
//         }

//         const updatedExercises = clientData.exercises?.map(exercise =>
//           exercise.id === selectedExercise.id ? { ...exercise, weights: updatedWeights, reps: updatedReps } : exercise
//         );

//         setClientData({
//           ...clientData,
//           exercises: updatedExercises,
//         });

//         setShowWeightsModal(false);
//         setSets([]);
//       } catch (error: any) {
//         console.error('Error assigning weights and reps:', error);
//       }
//     } else {
//       if (!selectedExercise) console.error('selectedExercise is null or undefined');
//       if (activeSetIndex === null) console.error('activeSetIndex is null');
//       if (!clientData) console.error('clientData is null or undefined');
//     }
//   };

//   const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }
//     setClickedButtons(prevState => {
//       const newState = { ...prevState };
//       if (!newState[exerciseId]) {
//         newState[exerciseId] = [];
//       }
//       newState[exerciseId][setIndex] = true;
//       return newState;
//     });

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;
//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: '00:00' }));
//         setIntervalId(null);
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
//         setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
//   };

//   // const openWeightsModal = (exercise: Exercise, setIndex: number) => {
//   //   if (setIndex >= sets.length) {
//   //     setSets(prevSets => {
//   //       const newSets = [...prevSets];
//   //       for (let i = prevSets.length; i <= setIndex; i++) {
//   //         newSets.push({ weight: 0, reps: 0, started: false, finished: false });
//   //       }
//   //       return newSets;
//   //     });
//   //   }

//   //   setSelectedExercise(exercise);
//   //   setActiveSetIndex(setIndex);
//   //   setShowWeightsModal(true);
//   // };


//   const handleRemoveSet = (index: number) => {
//     const updatedSets = sets.filter((_, i) => i !== index);
//     setSets(updatedSets);
//   };
  
//   const closeWeightsModal = () => {
//     setShowWeightsModal(false);
//     setActiveSetIndex(null);
//   };

  // const handleNextExercise = () => {
  //   if (clientData && selectedDay) {
  //     const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
  //     setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % exercisesForDay.length);
  //   }
  // };

  // const handlePreviousExercise = () => {
  //   if (clientData && selectedDay) {
  //     const exercisesForDay = clientData.exercises.filter(ex => ex.day === selectedDay);
  //     setCurrentExerciseIndex((prevIndex) => (prevIndex - 1 + exercisesForDay.length) % exercisesForDay.length);
  //   }
  // };

//   // Calculate unlocked days based on exercise cycle
//   const calculateUnlockedDays = (exercises: Exercise[], startDate: string) => {
//     const assignedDate = new Date(startDate);
//     const today = new Date();

//     const diffTime = Math.abs(today.getTime() - assignedDate.getTime());
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     const cycleDays = Array.from(new Set(exercises.map(ex => parseInt(ex.day.split(' ')[1], 10)))).sort((a, b) => a - b);
//     const currentDay = cycleDays[diffDays % cycleDays.length];

//     setUnlockedDays(cycleDays);
//     setCurrentDayInCycle(currentDay);
//   };

//   // Handle Start Cardio Timer
//   const handleStartCardioTimer = (cardioId: string, duration: number) => {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }

//     const startTime = Date.now();
//     const endTime = startTime + duration * 1000;

//     const newIntervalId = setInterval(() => {
//       const remainingTime = endTime - Date.now();
//       if (remainingTime <= 0) {
//         clearInterval(newIntervalId);
//         setCardioTimers(prevTimers => ({ ...prevTimers, [cardioId]: '00:00' }));
//       } else {
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = Math.floor((remainingTime % 60000) / 1000);
//         setCardioTimers(prevTimers => ({ ...prevTimers, [cardioId]: `${minutes}:${seconds.toString().padStart(2, '0')}` }));
//       }
//     }, 1000);

//     setIntervalId(newIntervalId);
//   };

// const handleGifClick = (gif: string) => {
//     setSelectedGif(gif);
//     setShowGifModal(true);
//   };


//   const handleAddWeightsAndReps = () => {
//     if (selectedExercise && selectedSetIndex !== null) {
//       const updatedExercises = clientData?.exercises.map(ex =>
//         ex.id === selectedExercise.id
//           ? {
//               ...ex,
//               weights: [
//                 ...(ex.weights || []).slice(0, selectedSetIndex),
//                 tempWeight,
//                 ...(ex.weights || []).slice(selectedSetIndex + 1),
//               ],
//               reps: [
//                 ...(ex.reps || []).slice(0, selectedSetIndex),
//                 tempReps,
//                 ...(ex.reps || []).slice(selectedSetIndex + 1),
//               ],
//             }
//           : ex
//       );

//       setClientData(prev => prev ? { ...prev, exercises: updatedExercises || [] } : null);
//       setShowWeightsModal(false);
//     }
//   };

//   const openWeightsModal = (exercise: Exercise, setIndex: number) => {
//     setSelectedExercise(exercise);
//     setSelectedSetIndex(setIndex);
//     setTempWeight(exercise.weights?.[setIndex] || 0);
//     setTempReps(exercise.reps?.[setIndex] || 0);
//     setShowWeightsModal(true);
//   };

//   const handleToggleExerciseStart = async (exercise: Exercise) => {
//     if (clientData) {
//       const updatedExercises = clientData.exercises?.map(ex =>
//         ex.id === exercise.id ? { ...ex, started: !ex.started } : { ...ex, started: false }
//       );

//       setClientData({ ...clientData, exercises: updatedExercises });

//       try {
//         const response = await fetch('/api/update-exercise', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: clientData.fullName,
//             exerciseId: exercise.id,
//             exerciseStarted: !exercise.started,
//           }),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Failed to update exercise');
//         }

//         // const newCurrentIndex = unlockedExerciseIndices.indexOf(clientData.exercises?.indexOf(exercise) || 0);
//         // setCurrentUnlockedIndex(newCurrentIndex);

//       } catch (error: any) {
//         console.error('Error updating exercise:', error);
//       }
//     }
//   };

//   const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
//   const currentExercise = exercisesForDay[currentExerciseIndex];

//   if (loading) return <LoadingSpinner />;

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col justify-center w-full max-w-3xl items-center min-h-screen relative p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4">
//         <div className="absolute top-4 right-4 flex space-x-4">
//           <FontAwesomeIcon
//             icon={faDumbbell}
//             className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowExercises(!showExercises)}
//           />
//           <FontAwesomeIcon
//             icon={faHeartCircleBolt}
//             className={`h-8 w-8 cursor-pointer ${showCardio ? 'text-blue-500' : 'text-gray-500'}`}
//             onClick={() => setShowCardio(!showCardio)}
//           />
//         </div>

//         <h1 className="text-4xl font-bold text-blue-500 mb-8">
//           {language === 'en' ? 'Your Exercises' : 'تمارينك'}
//         </h1>

//         {/* Day Selection */}
//         <div className="flex justify-center mb-4">
//           {unlockedDays.map((dayNumber) => {
//             const dayName = `Day ${dayNumber}`;
//             return (
//               <button
//                 key={dayName}
//                 className={`mx-2 py-2 px-4 rounded ${dayNumber === currentDayInCycle ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} ${selectedDay === dayName ? 'border-2 border-blue-500' : ''}`}
//                 onClick={() => dayNumber === currentDayInCycle && handleDaySelection(dayName)}
//                 disabled={dayNumber !== currentDayInCycle}
//               >
//                 {dayNumber === currentDayInCycle ? (
//                   <>
//                     {dayName} <FontAwesomeIcon icon={dayIcons[dayName]} className="h-6 w-6" />
//                   </>
//                 ) : (
//                   <>
//                     {dayName} <FontAwesomeIcon icon={faLock} />
//                   </>
//                 )}
//               </button>
//             );
//           })}
//         </div>

//         {/* Exercise Section */}
//         {currentExercise && showExercises ? (
//           <div className="w-full overflow-x-auto">
//             <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg mb-4 transition-all duration-300 ease-in-out">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="py-2 px-4 border-b text-center">#</th>
//                   <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise' : 'التمرين'}</th>
//                   <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'GIF' : 'صورة متحركة'}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="py-2 px-4 border-b text-center">
//                     <FontAwesomeIcon icon={dayIcons[`Day ${currentExerciseIndex + 1}`]} className="h-6 w-6" />
//                   </td>
//                   <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'blur-sm' : ''}`}>
//                     {currentExercise.name}
//                   </td>
//                   <td className="py-2 px-4 border-b text-center min-w-32">
//                     {currentExercise.gif ? (
//                       <img
//                         src={`${currentExercise.gif}`}
//                         alt={currentExercise.name}
//                         className={`w-32 h-32 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${!currentExercise.started ? 'blur-sm' : ''}`}
//                         onClick={() => null /* Handle GIF Click */}
//                       />
//                     ) : (
//                       'No GIF'
//                     )}
//                   </td>
//                 </tr>

//                 {currentExercise.started &&
//                   Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
//                     <React.Fragment key={setIndex}>
//                       <tr>
//                         <td colSpan={3} className="py-2 px-4 border-b text-center">
//                           <div className="text-lg font-serif font-semibold italic text-left">
//                             {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
//                           </div>
//                           <div className="flex justify-center items-center space-x-4 mt-2">
//                             <div className="flex flex-col items-center">
//                               <FontAwesomeIcon icon={faWeightHanging} className="h-5 w-5 mr-1" />
//                               {currentExercise.weights?.[setIndex] || 0} kg
//                             </div>
//                             <div className="flex flex-col items-center">
//                               <FontAwesomeIcon icon={faRedoAlt} className="h-5 w-5 mr-1" />
//                               {currentExercise.reps?.[setIndex] || 0} reps
//                             </div>
//                             <button
//                               onClick={() => openWeightsModal(currentExercise, setIndex)}
//                               className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-200"
//                             >
//                               <FontAwesomeIcon icon={faPlus} className="mr-1" />
//                               {language === 'en' ? 'Add' : 'إضافة'}
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td colSpan={3} className="py-2 px-4 border-b text-center">
//                           <div className="text-lg font-serif font-semibold italic text-left">
//                             {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
//                           </div>
//                           <div className="flex justify-center items-center space-x-4 mt-2">
//                             <div>
//                               <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
//                               {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
//                             </div>
//                             {!clickedButtons[currentExercise.id]?.[setIndex] && (
//                               <button
//                                 className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
//                                 onClick={() => handleStartRestTimer(currentExercise.id, setIndex, currentExercise.restTime)}
//                               >
//                                 <FontAwesomeIcon icon={faClock} className="mr-1" />
//                                 {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
//                               </button>
//                             )}
//                           </div>
//                         </td>
//                       </tr>
//                     </React.Fragment>
//                   ))}
//                 <tr>
//                   <td colSpan={3} className="py-2 px-4 text-center">
//                     <button
//                       className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
//                       onClick={() => null /* Handle Start/Stop Exercise */}
//                     >
//                       <FontAwesomeIcon icon={currentExercise.started ? faStop : faPlay} className="mr-2" />
//                       {currentExercise.started ? (language === 'en' ? 'Stop Exercise' : 'أوقف التمرين') : (language === 'en' ? 'Start Exercise' : 'ابدأ التمرين')}
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             <div className="flex justify-between mt-4">
//               <button
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//                 onClick={handlePreviousExercise}
//               >
//                 <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
//                 {language === 'en' ? 'Previous' : 'السابق'}
//               </button>
//               <button
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//                 onClick={handleNextExercise}
//               >
//                 <FontAwesomeIcon icon={faArrowRight} className="mr-1" />
//                 {language === 'en' ? 'Next' : 'التالي'}
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="text-center text-lg font-semibold">
//             {language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}
//           </p>
//         )}

//         {/* Cardio Section (Carousel) */}
//         {/* {showCardio && (
//           <div className="mb-4" style={{ overflow: 'hidden', maxWidth: '100%' }}> 
//             {clientData?.cardio && clientData.cardio.length > 0 ? (
//               <div className="w-64 max-w-3xl mx-auto">
//                 <Slider {...sliderSettings}>
//                   {clientData.cardio.map((exercise) => (
//                     <div key={exercise.id} className="p-4">
//                       <div className="shadow-md rounded-lg p-6 border-[var(--border-color)] text-[var(--text-color)] flex flex-col items-center" style={{ maxWidth: '100%', width: '100%' }}>
//                         <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)]">{exercise.name}</h3>

//                         <div className="w-32 h-32 flex justify-center mb-4">
//                           {exercise.gif ? (
//                             <img
//                               src={`/cardio/${exercise.gif}`}
//                               alt={exercise.name}
//                               className="w-full h-full object-cover rounded-lg cursor-pointer"
//                               onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
//                             />
//                           ) : (
//                             <p className="text-[var(--text-color)]">
//                               {language === 'en' ? 'No GIF available' : 'لا توجد صورة متحركة'}
//                             </p>
//                           )}
//                         </div>

//                         <div className="w-full text-center mb-4">
//                           <h4 className="text-xl font-semibold text-[var(--text-color)]">
//                             {language === 'en' ? 'Duration' : 'المدة'}: {exercise.duration}
//                           </h4>
//                         </div>

//                         <div className="flex justify-center items-center mb-4">
//                           <div className="flex items-center">
//                             <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
//                             <span>{cardioTimers[exercise.id] || '00:00'}</span>
//                           </div>
//                           {!cardioClickedButtons[exercise.id]?.[0] && (
//                             <button
//                               className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200 ml-4"
//                               onClick={() => handleStartCardioTimer(exercise.id, parseInt(exercise.duration))}
//                             >
//                               <FontAwesomeIcon icon={faClock} className="mr-1" />
//                               {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             ) : (
//               <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
//             )}
//           </div>
//         )}
//       </div> */}


//  {/* Cardio Section */}
//           {showCardio && (
//             <div className="mb-4 w-full mx-auto"> {/* Set width to full and center */}
//               {clientData?.cardio && clientData.cardio.length > 0 ? (
//                 <Slider {...sliderSettings}>
//                   {clientData.cardio.map((exercise) => (
//                     <div key={exercise.id} className="p-4">
//                       <div className="shadow-md rounded-lg p-6 border-[var(--border-color)] text-[var(--text-color)] flex flex-col items-center">
//                         <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)]">{exercise.name}</h3>

//                         <div className="w-32 h-32 flex justify-center mb-4">
//                           {exercise.gif ? (
//                             <img
//                               src={`/cardio/${exercise.gif}`}
//                               alt={exercise.name}
//                               className="w-full h-full object-cover rounded-lg cursor-pointer"
//                               onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
//                             />
//                           ) : (
//                             <p className="text-[var(--text-color)]">
//                               {language === 'en' ? 'No GIF available' : 'لا توجد صورة متحركة'}
//                             </p>
//                           )}
//                         </div>

//                         <div className="w-full text-center mb-4">
//                           <h4 className="text-xl font-semibold text-[var(--text-color)]">
//                             {language === 'en' ? 'Duration' : 'المدة'}: {exercise.duration}
//                           </h4>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               ) : (
//                 <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
//               )}
//             </div>
//           )}
//       </div>
//       {/* Weights and Reps Modal */}
//       {showWeightsModal && (
//         <Modal onClose={() => setShowWeightsModal(false)}>
//           <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Set Weights and Reps' : 'تعيين الأوزان والتكرارات'}</h2>
//           <div className="mb-4">
//             <label className="block mb-2">{language === 'en' ? 'Weight (kg):' : 'الوزن (كجم):'}</label>
//             <input
//               type="number"
//               value={sets[activeSetIndex || 0]?.weight || 0}
//               onChange={(e) => {
//                 const newSets = [...sets];
//                 newSets[activeSetIndex || 0] = { ...newSets[activeSetIndex || 0], weight: Number(e.target.value) };
//                 setSets(newSets);
//               }}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">{language === 'en' ? 'Reps:' : 'التكرارات:'}</label>
//             <input
//               type="number"
//               value={sets[activeSetIndex || 0]?.reps || 0}
//               onChange={(e) => {
//                 const newSets = [...sets];
//                 newSets[activeSetIndex || 0] = { ...newSets[activeSetIndex || 0], reps: Number(e.target.value) };
//                 setSets(newSets);
//               }}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <button
//             onClick={handleSaveWeights}
//             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//           >
//             {language === 'en' ? 'Save' : 'حفظ'}
//           </button>
//         </Modal>
//       )}

//       {/* {selectedGif && (
//         <Modal onClose={() => handleGifClick(null)}>
//         <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//       </Modal> */}
      
//       {showGifModal && selectedGif && (
//         <Modal onClose={() => setShowGifModal(false)}>
//           <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default ClientExercises;









  // const handleSaveWeights = async () => {
  //   if (selectedExercise && activeSetIndex !== null && clientData) {
  //     try {
  //       const updatedWeights = selectedExercise.weights ? [...selectedExercise.weights] : [];
  //       const updatedReps = selectedExercise.reps ? [...selectedExercise.reps] : [];

  //       updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
  //       updatedReps[activeSetIndex] = sets[activeSetIndex].reps;

  //       const response = await fetch('/api/assign-weights', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           email: clientData.fullName,
  //           exerciseId: selectedExercise.id,
  //           weights: updatedWeights,
  //           reps: updatedReps,
  //         }),
  //       });

  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.message || 'Failed to assign weights and reps');
  //       }

  //       const updatedExercises = clientData.exercises?.map(exercise =>
  //         exercise.id === selectedExercise.id ? { ...exercise, weights: updatedWeights, reps: updatedReps } : exercise
  //       );

  //       setClientData({
  //         ...clientData,
  //         exercises: updatedExercises,
  //       });

  //       setShowWeightsModal(false);
  //       setSets([]);
  //     } catch (error: any) {
  //       console.error('Error assigning weights and reps:', error);
  //     }
  //   }
  // };

//   const handleSaveWeights = async () => {
//     if (selectedExercise && activeSetIndex !== null && clientData) {
//         try {
//             const updatedWeights = selectedExercise.weights ? [...selectedExercise.weights] : [];
//             const updatedReps = selectedExercise.reps ? [...selectedExercise.reps] : [];

//             updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
//             updatedReps[activeSetIndex] = sets[activeSetIndex].reps;

//             const response = await fetch('/api/assign-weights', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     fullname: clientData.fullName,
//                     exerciseId: selectedExercise.id,
//                     weights: updatedWeights,
//                     reps: updatedReps,
//                 }),
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 console.error('Error data:', errorData);
//                 throw new Error(errorData.message || 'Failed to assign weights and reps');
//             }

//             // Update the local state to reflect the changes
//             const updatedExercises = clientData.exercises?.map(exercise =>
//                 exercise.id === selectedExercise.id
//                     ? { ...exercise, weights: updatedWeights, reps: updatedReps }
//                     : exercise
//             );

//             setClientData({
//                 ...clientData,
//                 exercises: updatedExercises,
//             });

//             setShowWeightsModal(false); // Close the modal after saving
//             setSets([]); // Clear the sets array
//         } catch (error: any) {
//             console.error('Error assigning weights and reps:', error);
//         }
//     }
// };








  // const handleSaveWeights = async () => {
  //   if (selectedExercise && activeSetIndex !== null && clientData) {
  //     try {
  //       const updatedExercises = exercises.map((exercise) => {
  //         if (exercise.id === selectedExercise.id) {
  //           const updatedWeights = [...exercise.weights];
  //           const updatedReps = [...exercise.reps];
  //           updatedWeights[activeSetIndex] = sets[activeSetIndex].weight;
  //           updatedReps[activeSetIndex] = sets[activeSetIndex].reps;
  //           return { ...exercise, weights: updatedWeights, reps: updatedReps };
  //         }
  //         return exercise;
  //       });

  //       const response = await fetch('/api/assign-weights', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           fullname: clientData.fullName,
  //           exerciseId: selectedExercise.id,
  //           weights: updatedExercises.find(ex => ex.id === selectedExercise.id)?.weights,
  //           reps: updatedExercises.find(ex => ex.id === selectedExercise.id)?.reps,
  //         }),
  //       });

  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.message || 'Failed to assign weights and reps');
  //       }

  //       setExercises(updatedExercises);
  //       setClientData({
  //         ...clientData,
  //         exercises: updatedExercises,
  //       });

  //       setShowWeightsModal(false);
  //       setSets([]);
  //     } catch (error) {
  //       console.error('Error assigning weights and reps:', error);
  //     }
  //   }
  // };



  // const handleSaveWeights = async () => {
  //   if (selectedExercise && activeSetIndex !== null && clientData) {
  //     try {
  //       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
  
  //       if (!userEmail) {
  //         console.error('User email is undefined before making the API call');
  //         return;
  //       }
  
  //       console.log('Sending weights data to API:', {
  //         email: userEmail,
  //         exerciseId: selectedExercise.id,
  //         weights: sets.map((set) => set.weight),
  //         reps: sets.map((set) => set.reps),
  //       });
  
  //       const response = await fetch('/api/assign-weights', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           email: userEmail,
  //           exerciseId: selectedExercise.id,
  //           weights: sets.map((set) => set.weight),
  //           reps: sets.map((set) => set.reps),
  //         }),
  //       });
  
  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.message || 'Failed to assign weights and reps');
  //       }

  //     handleStartRestTimer(selectedExercise.id, activeSetIndex, selectedExercise.restTime);
  
  //       setShowWeightsModal(false);
  //       setSets([]);
  //     } catch (error) {
  //       console.error('Error assigning weights and reps:', error);
  //     }
  //   }
  // };
  






  // const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //   }
  //   setClickedButtons(prevState => {
  //     const newState = { ...prevState };
  //     if (!newState[exerciseId]) {
  //       newState[exerciseId] = [];
  //     }
  //     newState[exerciseId][setIndex] = true;
  //     return newState;
  //   });

  //   const startTime = Date.now();
  //   const endTime = startTime + duration * 1000;
  //   const newIntervalId = setInterval(() => {
  //     const remainingTime = endTime - Date.now();
  //     if (remainingTime <= 0) {
  //       clearInterval(newIntervalId);
  //       setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: '00:00' }));
  //       setIntervalId(null);
  //     } else {
  //       const minutes = Math.floor(remainingTime / 60000);
  //       const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
  //       setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}` }));
  //     }
  //   }, 1000);

  //   setIntervalId(newIntervalId);
  // };


  // const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //   }
  
  //   const minutes = Math.floor(duration / 60);
  //   const seconds = (duration % 60).toString().padStart(2, '0');
  
  //   // Show the initial rest time before the timer starts
  //   setTimers(prevTimers => ({
  //     ...prevTimers,
  //     [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}`,
  //   }));
  
  //   const startTime = Date.now();
  //   const endTime = startTime + duration * 1000;
  
  //   const newIntervalId = setInterval(() => {
  //     const remainingTime = endTime - Date.now();
  //     if (remainingTime <= 0) {
  //       clearInterval(newIntervalId);
  //       setTimers(prevTimers => ({ ...prevTimers, [`${exerciseId}-${setIndex}`]: '00:00' }));
  //       setIntervalId(null);
  //     } else {
  //       const minutes = Math.floor(remainingTime / 60000);
  //       const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
  //       setTimers(prevTimers => ({
  //         ...prevTimers,
  //         [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}`,
  //       }));
  //     }
  //   }, 1000);
  
  //   setIntervalId(newIntervalId);
  // };
  





                {/* {currentExercise.started &&
                  Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
                    <React.Fragment key={setIndex}>
                      <tr>
                        <td colSpan={3} className="py-2 px-4 border-b text-center">
                          <div className="text-lg font-serif font-semibold italic text-left">
                            {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
                          </div>
                          <div className="flex justify-center items-center space-x-4 mt-2">
                            <div className="flex flex-col items-center">
                              <FontAwesomeIcon icon={faWeightHanging} className="h-5 w-5 mr-1" />
                              {currentExercise.weights?.[setIndex] || 0} kg
                            </div>
                            <div className="flex flex-col items-center">
                              <FontAwesomeIcon icon={faRedoAlt} className="h-5 w-5 mr-1" />
                              {currentExercise.reps?.[setIndex] || 0} reps
                            </div>
                            <button
                              onClick={() => openWeightsModal(currentExercise, setIndex)}
                              className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-200"
                            >
                              <FontAwesomeIcon icon={faPlus} className="mr-1" />
                              {language === 'en' ? 'Add' : 'إضافة'}
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="py-2 px-4 border-b text-center">
                          <div className="text-lg font-serif font-semibold italic text-left">
                            {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
                          </div>
                          <div className="flex justify-center items-center space-x-4 mt-2">
                            <div>
                              <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
                              {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
                            </div>
                            {!clickedButtons[currentExercise.id]?.[setIndex] && (
                              <button
                                className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
                                onClick={() => handleStartRestTimer(currentExercise.id, setIndex, currentExercise.restTime)}
                              >
                                <FontAwesomeIcon icon={faClock} className="mr-1" />
                                {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))} */}











import React, { useEffect, useState, useRef } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import Modal from '@/components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, faPlus, faSave, faTrash, faDumbbell, faHeartCircleBolt, faLock, faPlay, faStop, faWeightHanging, faRedoAlt, faClock, faArrowLeft, faArrowRight, faTrophy } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useLanguage } from '@/contexts/LanguageContext';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Slider from 'react-slick';
import WeightsModal from '@/components/WeightsModal';
import Snackbar from '@mui/material/Snackbar';  // Import Snackbar from Material UI

const dayIcons: Record<string, IconDefinition> = {
  'Day 1': fa1,
  'Day 2': fa2,
  'Day 3': fa3,
  'Day 4': fa4,
  'Day 5': fa5,
  'Day 6': fa6,
};



interface Exercise {
  date: string;
  id: string;
  name: string;
  muscle?: string;
  day: string;
  gif?: string;
  sets: number;
  restTime: number;
  weights: number[];
  reps: number[];
  started?: boolean;
  finished?: boolean;
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
  cardio: Cardio[];
  date: string;
}

interface Timers {
  [key: string]: string;
}

interface CardioIntervals {
  [key: string]: NodeJS.Timeout | null;
}

interface ClickedButtons {
  [key: string]: boolean[];
}

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

const ClientExercises: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { language } = useLanguage();
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
  const [currentDayInCycle, setCurrentDayInCycle] = useState<number | undefined>();
  const [timers, setTimers] = useState<Timers>({});
  const [clickedButtons, setClickedButtons] = useState<ClickedButtons>({});
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [showExercises, setShowExercises] = useState(true);
  const [showCardio, setShowCardio] = useState(true);
  const [cardioTimers, setCardioTimers] = useState<Timers>({});
  const [cardioClickedButtons, setCardioClickedButtons] = useState<ClickedButtons>({});
  const [weights, setWeights] = useState<number[]>(Array.from({ length: 20 }, (_, i) => 2.5 * (i + 1)));
  const [sets, setSets] = useState<Array<{ weight: number; reps: number; started: boolean; finished: boolean }>>([]);
  const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [showWeightsModal, setShowWeightsModal] = useState(false);
  const [selectedGif, setSelectedGif] = useState<string | null>(null);
  const [showGifModal, setShowGifModal] = useState(false);
  const cardioContainerRef = useRef<HTMLDivElement | null>(null);
  const [cardioIntervals, setCardioIntervals] = useState<CardioIntervals>({});
  // State to manage Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);  // Controls when to show the snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Snackbar message content
  const [highlightedExercise, setHighlightedExercise] = useState<string | null>(null);  // Track highlighted exercise

  const [highlightedExercises, setHighlightedExercises] = useState<string[]>([]);
  const [showAchievement, setShowAchievement] = useState(false); // New state to show achievement
  const [totalReps, setTotalReps] = useState(0); // New state to track total reps
  const [totalWeights, setTotalWeights] = useState(0); // New state to track total weights


// Function to open snackbar
const openSnackbar = (message: string) => {
  setSnackbarMessage(message);
  setSnackbarOpen(true);
};

// Function to close snackbar
const handleSnackbarClose = () => {
  setSnackbarOpen(false);
};
  // Function to handle horizontal scroll
  const scrollCardio = (direction: 'left' | 'right') => {
    if (cardioContainerRef.current) {
      const scrollAmount = direction === 'right' ? 300 : -300; // Adjust scroll distance
      cardioContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };



  useEffect(() => {
    if (currentDayInCycle) {
      handleDaySelection(`Day ${currentDayInCycle}`);
    }
  }, [currentDayInCycle]);

  // Calculate total reps and weights for the current day
  const calculateTotals = (exercisesForDay: Exercise[]) => {
    let reps = 0;
    let weights = 0;
    exercisesForDay.forEach((exercise) => {
      exercise.reps.forEach((rep) => (reps += rep));
      exercise.weights.forEach((weight) => (weights += weight));
    });
    setTotalReps(reps);
    setTotalWeights(weights);
  };

  // Check if all exercises are completed and trigger achievement animation
  const checkCompletion = (exercisesForDay: Exercise[]) => {
    if (highlightedExercises.length === exercisesForDay.length) {
      calculateTotals(exercisesForDay);
      setShowAchievement(true); // Show the achievement animation
    }
  };

  // const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //   }
  
  //   const bell = new Audio('/sounds/bell.mp3'); // Ensure you have this file in your public folder
  
  //   const minutes = Math.floor(duration / 60);
  //   const seconds = (duration % 60).toString().padStart(2, '0');
  
  //   setTimers((prevTimers) => ({
  //     ...prevTimers,
  //     [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}`,
  //   }));
  
  //   const startTime = Date.now();
  //   const endTime = startTime + duration * 1000;
  
  //   const newIntervalId = setInterval(() => {
  //     const remainingTime = endTime - Date.now();
  
  //     if (remainingTime <= 0) {
  //       clearInterval(newIntervalId);
  //       bell.play(); // Play the bell sound when the timer ends
  
  //       // Add the exercise set to the highlightedExercises array (to track multiple)
  //       setHighlightedExercises((prevHighlighted) => {
  //         // Only add it if it's not already in the list
  //         const newHighlight = `${exerciseId}-${setIndex}`;
  //         if (!prevHighlighted.includes(newHighlight)) {
  //           return [...prevHighlighted, newHighlight];
  //         }
  //         return prevHighlighted;
  //       });
  
  //       // Show snackbar when the rest time is over
  //       openSnackbar(language === 'en' ? 'Rest finished' : 'انتهى وقت الراحة');
  
  //       setTimers((prevTimers) => ({
  //         ...prevTimers,
  //         [`${exerciseId}-${setIndex}`]: '00:00',
  //       }));
  
  //       setIntervalId(null);
  //     } else {
  //       const minutes = Math.floor(remainingTime / 60000);
  //       const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
  //       setTimers((prevTimers) => ({
  //         ...prevTimers,
  //         [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}`,
  //       }));
  //     }
  //   }, 1000);
  
  //   setIntervalId(newIntervalId);
  // };
  

  const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  
    const bell = new Audio('/sounds/bell.mp3');
  
    const minutes = Math.floor(duration / 60);
    const seconds = (duration % 60).toString().padStart(2, '0');
  
    setTimers((prevTimers) => ({
      ...prevTimers,
      [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}`,
    }));
  
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;
  
    const newIntervalId = setInterval(() => {
      const remainingTime = endTime - Date.now();
  
      if (remainingTime <= 0) {
        clearInterval(newIntervalId);
        bell.play(); // Play the bell sound when the timer ends
  
        // Add the completed set to the highlighted sets array
        setHighlightedExercises((prevHighlighted) => {
          const newHighlight = `${exerciseId}-${setIndex}`;
          if (!prevHighlighted.includes(newHighlight)) {
            return [...prevHighlighted, newHighlight];
          }
          return prevHighlighted;
        });
  
        // Show snackbar when the rest time is over
        openSnackbar(language === 'en' ? 'Rest finished' : 'انتهى وقت الراحة');
  
        setTimers((prevTimers) => ({
          ...prevTimers,
          [`${exerciseId}-${setIndex}`]: '00:00',
        }));
  
        setIntervalId(null);
      } else {
        const minutes = Math.floor(remainingTime / 60000);
        const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
        setTimers((prevTimers) => ({
          ...prevTimers,
          [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}`,
        }));
      }
    }, 1000);
  
    setIntervalId(newIntervalId);
  };
  


  // Check for completion when highlightedExercises array changes
  // useEffect(() => {
  //   if (selectedDay && clientData) {
  //     const exercisesForDay = clientData.exercises.filter((ex) => ex.day === selectedDay);
  //     checkCompletion(exercisesForDay);
  //   }
  // }, [highlightedExercises]);

  useEffect(() => {
    if (clientData && selectedDay) {
      const exercisesForDay = clientData.exercises.filter((ex) => ex.day === selectedDay);
      
      // Calculate the total number of sets for the day
      const totalSetsForDay = calculateTotalSets(exercisesForDay);
  
      // If all sets are highlighted, show the achievement
      if (highlightedExercises.length === totalSetsForDay) {
        setShowAchievement(true);
        calculateTotals(exercisesForDay); // Update the total reps and weight for the achievement display
      }
    }
  }, [highlightedExercises, clientData, selectedDay]);
  
  const calculateTotalSets = (exercisesForDay: Exercise[]) => {
    return exercisesForDay.reduce((total, exercise) => total + exercise.sets, 0);
  };
  
  // Achievement animation UI
  const renderAchievement = () => {
    return (
      <div className="fixed inset-0 bg-opacity-75 bg-black flex flex-col items-center justify-center z-50">
        <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-9xl mb-4 animate-bounce" />
        <h2 className="text-4xl font-bold text-white">{language === 'en' ? 'Congratulations!' : 'تهانينا!'}</h2>
        <p className="text-xl font-semibold text-white mt-4">
          {language === 'en' ? `Total Reps: ${totalReps}, Total Weight: ${totalWeights} kg` : `إجمالي التكرارات: ${totalReps}, إجمالي الوزن: ${totalWeights} كجم`}
        </p>
        <button
          onClick={() => setShowAchievement(false)} // Close the achievement animation
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          {language === 'en' ? 'Continue' : 'استمر'}
        </button>
      </div>
    );
  };


  
  useEffect(() => {
    const checkPaymentStatus = async () => {
      if (!user) {
        router.push('/sign-in');
        return;
      }

      const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
      try {
        const res = await fetch('/api/checkPaymentStatus', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: userEmail }),
        });
        const data = await res.json();

        if (!data.hasPaid) {
          router.push('/dashboard/payments'); // Redirect to payments page if not paid
          return;
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
      }
    };
    checkPaymentStatus();
  }, [user, router]);


  useEffect(() => {
    const fetchClientData = async () => {
      if (!user) {
        router.push('/sign-in');
        return;
      }

      const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
      if (!userEmail) {
        setLoading(false);
        return;
      }

      try {
        const [clientResponse, cardioResponse, exercisesResponse] = await Promise.all([
          fetch(`/api/client?email=${userEmail}`, { method: 'GET' }),
          fetch(`/api/adminAddCardio?email=${userEmail}`, { method: 'GET' }),
          fetch(`/api/fetchExercises?email=${userEmail}`, { method: 'GET' }),
        ]);

        const client = clientResponse.ok ? await clientResponse.json() : { email: userEmail };
        const cardio = cardioResponse.ok ? await cardioResponse.json() : { exercises: [] };
        const exercisesData = exercisesResponse.ok ? await exercisesResponse.json() : { exercises: [], date: new Date().toISOString() };

        const initializedExercises = (exercisesData.exercises || []).map((exercise: Exercise) => ({
          ...exercise,
          weights: Array.isArray(exercise.weights) ? exercise.weights : Array(exercise.sets).fill(0),
          reps: Array.isArray(exercise.reps) ? exercise.reps : Array(exercise.sets).fill(0),
        }));

        const initializedClientData: ClientData = {
          fullName: client.fullName || userEmail,
          exercises: initializedExercises,
          cardio: cardio.exercises || [],
          date: exercisesData.date || new Date().toISOString(),
        };

        setClientData(initializedClientData);
        setExercises(initializedExercises);
        
        // setClientData({
        //   fullName: client.fullName || userEmail,
        //   exercises: exercisesData.exercises || [],
        //   cardio: cardio.exercises || [],
        //   date: exercisesData.date || new Date().toISOString(),
        // });
        


        calculateUnlockedDays(exercisesData.exercises, exercisesData.date);
      } catch (error: any) {
        console.error('Error fetching client data:', error.message);
        setError('Failed to fetch data.');
        setClientData({ fullName: userEmail, exercises: [], cardio: [], date: new Date().toISOString() });
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, [user, router]);


  const handleStartCardioTimer = (cardioId: string, duration: number) => {
    // Clear the existing interval for this specific cardio exercise
    if (cardioIntervals[cardioId]) {
      clearInterval(cardioIntervals[cardioId]!);
    }

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const newIntervalId = setInterval(() => {
      const remainingTime = endTime - Date.now();
      if (remainingTime <= 0) {
        clearInterval(newIntervalId);
        setCardioTimers((prevTimers) => ({
          ...prevTimers,
          [cardioId]: '00:00',
        }));
        setCardioIntervals((prevIntervals) => ({
          ...prevIntervals,
          [cardioId]: null,
        }));
      } else {
        const minutes = Math.floor(remainingTime / 60000);
        const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
        setCardioTimers((prevTimers) => ({
          ...prevTimers,
          [cardioId]: `${minutes}:${seconds}`,
        }));
      }
    }, 1000);

    // Store the new interval ID for this specific cardio exercise
    setCardioIntervals((prevIntervals) => ({
      ...prevIntervals,
      [cardioId]: newIntervalId,
    }));
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

  const handleDaySelection = (day: string) => {
    setSelectedDay(day);
    setCurrentExerciseIndex(0);
  };


  const handleToggleExercise = (exerciseId: string) => {
    if (!clientData) return;
  
    const updatedExercises = clientData.exercises.map((exercise) =>
      exercise.id === exerciseId
        ? { ...exercise, started: !exercise.started } // Toggle the clicked exercise
        : { ...exercise, started: false } // Close all other exercises
    );
  
    setClientData({
      ...clientData,
      exercises: updatedExercises,
    });
  };
  





  // const handleSaveWeights = async () => {
  //   if (selectedExercise && activeSetIndex !== null && clientData) {
  //     try {
  //       const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
  
  //       if (!userEmail) {
  //         console.error('User email is undefined before making the API call');
  //         return;
  //       }
  
  //       const response = await fetch('/api/assign-weights', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           email: userEmail,
  //           exerciseId: selectedExercise.id,
  //           weights: sets.map((set) => set.weight),
  //           reps: sets.map((set) => set.reps),
  //         }),
  //       });
  
  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.message || 'Failed to assign weights and reps');
  //       }
  
  //       handleStartRestTimer(selectedExercise.id, activeSetIndex, selectedExercise.restTime);
  
  //       // Show the snackbar when weights are saved and the rest timer starts
  //       openSnackbar(language === 'en' ? 'Rest timer started' : 'تم تشغيل مؤقت الراحة');
  
  //       setShowWeightsModal(false);
  //       setSets([]);
  //     } catch (error) {
  //       console.error('Error assigning weights and reps:', error);
  //     }
  //   }
  // };
  


  const handleSaveWeights = async () => {
    if (selectedExercise && activeSetIndex !== null && clientData) {
      console.log('Saving sets:', sets); // Log sets before sending
      try {
        const userEmail = user.primaryEmailAddress?.emailAddress || user.email;
  
        if (!userEmail) {
          console.error('User email is undefined before making the API call');
          return;
        }
  
        // Log sets before sending
        console.log('Saving weights and reps:', sets.map((set) => set.weight), sets.map((set) => set.reps));
  
        const response = await fetch('/api/assign-weights', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: userEmail,
            exerciseId: selectedExercise.id,
            weights: sets.map((set) => set.weight),
            reps: sets.map((set) => set.reps),
          }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to assign weights and reps');
        }
  
        handleStartRestTimer(selectedExercise.id, activeSetIndex, selectedExercise.restTime);
  
        // Show snackbar when weights are saved and the rest timer starts
        openSnackbar(language === 'en' ? 'Rest timer started' : 'تم تشغيل مؤقت الراحة');
  
        setShowWeightsModal(false);
        setSets([]);
      } catch (error) {
        console.error('Error assigning weights and reps:', error);
      }
    }
  };
  


  // const handleStartRestTimer = (exerciseId: string, setIndex: number, duration: number) => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //   }
  
  //   const bell = new Audio('/sounds/bell.mp3'); // Ensure you have this file in your public folder
  
  //   const minutes = Math.floor(duration / 60);
  //   const seconds = (duration % 60).toString().padStart(2, '0');
  
  //   setTimers((prevTimers) => ({
  //     ...prevTimers,
  //     [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}`,
  //   }));
  
  //   const startTime = Date.now();
  //   const endTime = startTime + duration * 1000;
  
  //   const newIntervalId = setInterval(() => {
  //     const remainingTime = endTime - Date.now();
  
  //     if (remainingTime <= 0) {
  //       clearInterval(newIntervalId);
  //       bell.play(); // Play the bell sound when the timer ends
  
  //       // Show snackbar when the rest time is over
  //       openSnackbar(language === 'en' ? 'Rest finished' : 'انتهى وقت الراحة');

  //       setHighlightedExercise(`${exerciseId}-${setIndex}`);
        
  //       setTimers((prevTimers) => ({
  //         ...prevTimers,
  //         [`${exerciseId}-${setIndex}`]: '00:00',
  //       }));
  //       setIntervalId(null);
  //     } else {
  //       const minutes = Math.floor(remainingTime / 60000);
  //       const seconds = ((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0');
  //       setTimers((prevTimers) => ({
  //         ...prevTimers,
  //         [`${exerciseId}-${setIndex}`]: `${minutes}:${seconds}`,
  //       }));
  //     }
  //   }, 1000);
  
  //   setIntervalId(newIntervalId);
  // };
  



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

  // const openWeightsModal = (exercise: Exercise, setIndex: number) => {
  //   setSelectedExercise(exercise);
  //   setActiveSetIndex(setIndex);
  //   setShowWeightsModal(true);
  // };

  const openWeightsModal = (exercise: Exercise, setIndex: number) => {
    setSelectedExercise(exercise);
    setActiveSetIndex(setIndex);
  
    const initialSets = Array.from({ length: exercise.sets }).map((_, index) => ({
      weight: exercise.weights[index] || 0, // Initialize weights
      reps: exercise.reps[index] || 0,     // Initialize reps
      started: false,
      finished: false,
    }));
    setSets(initialSets);
  
    setShowWeightsModal(true);
  };

  
  const handleWeightChange = (setIndex: number, newWeight: number) => {
    setSets((prevSets) => {
      const updatedSets = [...prevSets];
      updatedSets[setIndex] = { ...updatedSets[setIndex], weight: newWeight };
      return updatedSets;
    });
  };
  
  const handleRepsChange = (setIndex: number, newReps: number) => {
    setSets((prevSets) => {
      const updatedSets = [...prevSets];
      updatedSets[setIndex] = { ...updatedSets[setIndex], reps: newReps };
      return updatedSets;
    });
  };
  
  
  const handleGifClick = (gif: string) => {
    setSelectedGif(gif);
    setShowGifModal(true);
  };

  const exercisesForDay = clientData?.exercises.filter(ex => ex.day === selectedDay) || [];
  const currentExercise = exercisesForDay[currentExerciseIndex];

  if (loading) return <LoadingSpinner />;

  return (
    <DashboardLayout>
      {/* <div className="flex flex-col justify-center w-full max-w-3xl items-center min-h-screen relative p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4"> */}
      <div className="flex flex-col items-center justify-center p-4 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <div className="absolute top-20 right-6 flex space-x-4">
          <FontAwesomeIcon
            icon={faDumbbell}
            className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setShowExercises(!showExercises)}
          />
          <FontAwesomeIcon
            icon={faHeartCircleBolt}
            className={`h-8 w-8 cursor-pointer ${showCardio ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setShowCardio(!showCardio)}
          />
        </div>

        <h1 className="text-4xl font-bold text-blue-500 mb-8">
          {language === 'en' ? 'Your Exercises' : 'تمارينك'}
        </h1>

      {/* Day Selection */}
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

        {/* Exercise Section */}
        {currentExercise && showExercises ? (
          <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg mb-4 transition-all duration-300 ease-in-out">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-center">#</th>
                  <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'Exercise' : 'التمرين'}</th>
                  <th className="py-2 px-4 border-b text-center">{language === 'en' ? 'GIF' : 'صورة متحركة'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b text-center">
                    <FontAwesomeIcon icon={dayIcons[`Day ${currentExerciseIndex + 1}`]} className="h-6 w-6" />
                  </td>
                  <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'blur-sm' : ''}`}>
                    {currentExercise.name}
                  </td>
                  <td className="py-2 px-4 border-b text-center min-w-32">
                    {currentExercise.gif ? (
                      <img
                        src={`${currentExercise.gif}`}
                        alt={currentExercise.name}
                        className={`w-32 h-32 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${!currentExercise.started ? 'blur-lg' : ''}`}
                        onClick={() => currentExercise.started && handleGifClick(`${currentExercise.gif}`)}
                      />
                    ) : (
                      'No GIF'
                    )}
                  </td>
                </tr>



            {showAchievement && renderAchievement()}
            {/* Add Golden Separator and Stopwatch Start */}
            {currentExercise.started &&
              Array.from({ length: currentExercise.sets }).map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {/* <tr className={highlightedExercise === `${currentExercise.id}-${setIndex}` ? 'highlight-row' : ''}> */}
                    <tr
                      key={setIndex}
                      className={
                        highlightedExercises.includes(`${currentExercise.id}-${setIndex}`)
                          ? 'bg-green-200'  // Highlight the row if the set is completed
                          : ''
                      }
                    >
                    <td colSpan={3} className="py-2 px-4 border-b text-center">
                      <div className="text-lg font-serif font-semibold italic text-left">
                        {language === 'en' ? 'Choose your Weights:' : 'أختار اوزانك:'}
                      </div>
                      <div className="flex justify-center items-center space-x-4 mt-2">
                        <div className="flex flex-col items-center">
                          <FontAwesomeIcon icon={faWeightHanging} className="h-5 w-5 mr-1" />
                          {currentExercise.weights?.[setIndex] || 0} kg
                        </div>
                        <div className="flex flex-col items-center">
                          <FontAwesomeIcon icon={faRedoAlt} className="h-5 w-5 mr-1" />
                          {currentExercise.reps?.[setIndex] || 0} reps
                        </div>
                        <button
                          onClick={() => openWeightsModal(currentExercise, setIndex)}
                          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-200"
                        >
                          <FontAwesomeIcon icon={faPlus} className="" />
                          {/* {language === 'en' ? 'Add' : 'إضافة'} */}
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className={highlightedExercise === `${currentExercise.id}-${setIndex}` ? 'highlight-row' : ''}>
                    <td colSpan={3} className="py-2 px-4 border-b text-center">
                      <div className="text-lg font-serif font-semibold italic text-left">
                        {language === 'en' ? 'Rest Timer:' : 'مؤقت الراحة:'}
                      </div>
                      <div className="flex justify-center items-center space-x-4 mt-2">
                        <div>
                          <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
                          {timers[`${currentExercise.id}-${setIndex}`] || '00:00'}
                        </div>
                        {/* {!clickedButtons[currentExercise.id]?.[setIndex] && (
                          <button
                            className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
                            onClick={() => handleStartRestTimer(currentExercise.id, setIndex, currentExercise.restTime)}
                          >
                            <FontAwesomeIcon icon={faClock} className="mr-1" />
                            {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
                          </button>
                        )} */}
                      </div>
                    </td>
                  </tr>

                  {/* Add Golden Separator */}
                  <tr>
                    <td colSpan={3} className="py-4">
                      <hr style={{ border: '10px solid gold', width: '100%' }} />
                    </td>
                  </tr>
                </React.Fragment>
              ))}


                <tr>
                  <td colSpan={3} className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleToggleExercise(currentExercise.id)}
                    className="w-full bg-blue-500 text-white py-2 mt-4"
                  >
                    <FontAwesomeIcon icon={currentExercise.started ? faStop : faPlay} className="mr-2" />
                    {currentExercise.started ? 'Stop Exercise' : 'Start Exercise'}
                  </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-between mt-4">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                onClick={handlePreviousExercise}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
                {language === 'en' ? 'Previous' : 'السابق'}
              </button>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                onClick={handleNextExercise}
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-1" />
                {language === 'en' ? 'Next' : 'التالي'}
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-lg font-semibold">
            {language === 'en' ? 'No exercises assigned.' : 'لم يتم تعيين تمارين.'}
          </p>
        )}

        {/* Cardio Section */}
        {showCardio && (
        <div className="relative mb-4  p-4 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto"> 
          <h2 className="text-2xl font-bold mb-4 text-center">{language === 'en' ? 'Cardio Exercises' : 'تمارين الكارديو'}</h2>

          <div className="flex justify-between items-center mb-4">
            {/* Left Scroll Button */}
            <button
              onClick={() => scrollCardio('left')}
              className="p-2 rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-600 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            {/* Cardio Exercises Container */}
            <div
              ref={cardioContainerRef}
              className="flex overflow-x-auto space-x-4 p-4 w-64   rounded-lg "
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {clientData?.cardio && clientData.cardio.length > 0 ? (
                clientData.cardio.map((exercise) => (
                  <div
                    key={exercise.id}
                    className="flex-shrink-0 w-64 p-4  rounded-lg shadow-md bg-[var(--background-color)]"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <h3 className="text-xl font-bold mb-2 text-center">{exercise.name}</h3>
                    {exercise.gif ? (
                      <img
                        src={`/cardio/${exercise.gif}`}
                        alt={exercise.name}
                        className="w-full h-40 object-cover rounded-lg cursor-pointer"
                        onClick={() => handleGifClick(`/cardio/${exercise.gif}`)}
                      />
                    ) : (
                      <p className="text-center">{language === 'en' ? 'No GIF available' : 'لا توجد صورة متحركة'}</p>
                    )}
                    <div className="text-center mt-2">
                      <span className="text-lg font-semibold">
                        {language === 'en' ? 'Duration' : 'المدة'}: {exercise.duration}
                      </span>
                    </div>

                    {/* Timer Section */}
                    <div className="text-center mt-4">
                      <div>
                        <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
                        {cardioTimers[exercise.id] || '00:00'}
                      </div>
                      {/* {!cardioClickedButtons[exercise.id] && ( */}
                        <button
                          className="mt-2 bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
                          onClick={() => handleStartCardioTimer(exercise.id, parseInt(exercise.duration) * 60)}
                        >
                          <FontAwesomeIcon icon={faClock} className="mr-1" />
                          {language === 'en' ? 'Start Timer' : 'ابدأ المؤقت'}
                      </button>
                      {/* // )} */}
                    </div>
                  </div>
                ))
              ) : (
                <p>{language === 'en' ? 'No cardio assigned.' : 'لم يتم تعيين كارديو.'}</p>
              )}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={() => scrollCardio('right')}
              className="p-2 rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-600 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      )}

      </div>

      {showWeightsModal && selectedExercise && (
        <WeightsModal
          selectedExercise={selectedExercise}
          activeSetIndex={activeSetIndex}
          clientData={clientData}
          onClose={() => setShowWeightsModal(false)}
          onWeightChange={handleWeightChange}  // Pass weight change handler
          onRepsChange={handleRepsChange}      // Pass reps change handler
          onSave={handleSaveWeights}           // Save button handler
        />

      )}



      {/* GIF Modal */}
      {showGifModal && selectedGif && (
        <Modal onClose={() => setShowGifModal(false)}>
          <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
        </Modal>
      )}

    <Snackbar
      open={snackbarOpen}
      message={snackbarMessage}
      autoHideDuration={3000}  // The snackbar will automatically close after 3 seconds
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  // Position the snackbar
    />
    </DashboardLayout>
  );
};

export default ClientExercises;
