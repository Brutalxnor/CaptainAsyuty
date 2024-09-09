// import React, { useEffect, useState } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'next/router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faCheck, faRunning } from '@fortawesome/free-solid-svg-icons';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Correct missing import

// const dayIcons: Record<string, IconDefinition> = {
//   'Day 1': faDumbbell,
//   'Day 2': faDumbbell,
//   'Day 3': faDumbbell,
//   'Day 4': faDumbbell,
//   'Day 5': faDumbbell,
//   'Day 6': faDumbbell,
// };

// const mealIcons: Record<number, IconDefinition> = {
//   1: faDumbbell,
//   2: faDumbbell,
//   3: faDumbbell,
//   4: faDumbbell,
//   5: faDumbbell,
//   6: faDumbbell,
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

// interface LanguageContextProps {
//     language: string;
//     toggleLanguage: () => void;
//     t: (key: string) => string;
//   }
  

// const ClientDashboard: React.FC = () => {
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
//           {language === 'en' ? (
//             <>Welcome Champ!</>
//           ) : (
//             <>مرحباً بطل!</>
//           )}
//         </h1>
  
//         <div className="mb-4">
//           <button
//             className={`px-4 py-2 rounded-lg mr-4 ${!showMeals && !showCardio ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//             onClick={() => {
//               setShowMeals(false);
//               setShowCardio(false);
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
//               <p>{language === 'en' ? 'No meals assigned yet.' : 'لم يتم تخصيص وجبات بعد.'}</p>
//             )}
//           </div>
//         ) : showCardio ? (
//           <div className="cardio-section">
//             {cardio.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {cardio.map((exercise, index) => (
//                   <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
//                     <p>{language === 'en' ? 'Duration' : 'المدة'}: {exercise.duration}</p>
//                     {exercise.gif && (
//                       <img src={exercise.gif} alt={exercise.name} className="w-full h-32 object-cover mt-2" />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>{language === 'en' ? 'No cardio assigned yet.' : 'لم يتم تخصيص تمارين الكارديو بعد.'}</p>
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







import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faArrowLeft, faArrowRight, faWeightHanging, faRedoAlt, faDumbbell, faUtensils, faCheck, faRunning } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useLanguage } from '@/contexts/LanguageContext';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Correct missing import

const dayIcons: Record<string, IconDefinition> = {
  'Day 1': faDumbbell,
  'Day 2': faDumbbell,
  'Day 3': faDumbbell,
  'Day 4': faDumbbell,
  'Day 5': faDumbbell,
  'Day 6': faDumbbell,
};

const translations = {
  en: {
    welcomeChamp: 'Welcome Champ!',
    exercises: 'Exercises',
    meals: 'Meals',
    calories: 'Calories',
    selectMeal: 'Select Meal',
    selected: 'Selected',
    noMealsAssigned: 'No meals assigned yet.',
    noGifAvailable: 'No GIF available',
    headToExercises: 'Head to exercises and start to unlock.',
    noExercisesFound: 'No exercises found in the database. Go to the nutrition section to assign food for yourself.',
  },
  ar: {
    welcomeChamp: 'مرحباً بك يا بطل!',
    exercises: 'التمارين',
    meals: 'الوجبات',
    calories: 'السعرات الحرارية',
    selectMeal: 'اختر الوجبة',
    selected: 'محدد',
    noMealsAssigned: 'لم يتم تعيين وجبات بعد.',
    noGifAvailable: 'لا يوجد GIF متاح',
    headToExercises: 'اتجه إلى التمارين وابدأ لتفتحها.',
    noExercisesFound: 'لم يتم العثور على تمارين في قاعدة البيانات. اذهب إلى قسم التغذية لتخصيص الطعام لنفسك.',
  },
};

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
          setError("noExercisesFound"); // Show the no exercises found error message
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
          {language === 'en' ? (
            <>Welcome Champ!</>
          ) : (
            <>اهلا يا بطل!</>
          )}
        </h1>

        <div className="mb-4">
          <button
            className={`px-4 py-2 rounded-lg mr-4 ${!showMeals && !showCardio ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            onClick={() => {
              setShowMeals(false);
              setShowCardio(false);
            }} // Toggle to show exercises
          >
            <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
            {language === 'en' ? 'Exercises' : 'التمارين'}
          </button>
          <button
            className={`px-4 py-2 rounded-lg mr-4 ${showMeals ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            onClick={fetchMeals} // Fetch and toggle to show meals
          >
            <FontAwesomeIcon icon={faUtensils} className="mr-2" />
            {language === 'en' ? 'Meals' : 'الوجبات'}
          </button>
        </div>

        {showMeals ? (
          <div className="meals-section">
            {meals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {meals.map((meal, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
                    <p>{language === 'en' ? 'Type' : 'نوع'}: {meal.type}</p>
                    {meal.calories && <p>{language === 'en' ? 'Calories' : 'سعرات حرارية'}: {meal.calories}</p>}
                    {meal.image && (
                      <img src={meal.image} alt={meal.name} className="w-full h-32 object-cover mt-2" />
                    )}
                    <button
                      onClick={() => handleMealSelection(meal)}
                      className={`mt-4 px-4 py-2 rounded-lg ${selectedMeals.includes(meal) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}
                    >
                      {selectedMeals.includes(meal) ? (
                        <>
                          <FontAwesomeIcon icon={faCheck} className="mr-2" /> {language === 'en' ? 'Selected' : 'تم الاختيار'}
                        </>
                      ) : (
                        language === 'en' ? 'Select Meal' : 'اختر الوجبة'
                      )}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-10">
                <p className="text-2xl font-bold text-red-600 mb-4">
                  {language === 'en'
                    ? 'No meals assigned yet. Go to the nutrition section to assign food for yourself!'
                    : 'لم يتم تعيين وجبات بعد. اذهب إلى قسم التغذية لتخصيص الطعام لنفسك!'}
                </p>
              </div>
            )}
          </div>
        ) : showCardio ? (
          <div className="cardio-section">
            {cardio.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cardio.map((exercise, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
                    <p>{language === 'en' ? 'Duration' : 'المدة'}: {exercise.duration}</p>
                    {exercise.gif && (
                      <img src={exercise.gif} alt={exercise.name} className="w-full h-32 object-cover mt-2" />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>{language === 'en' ? 'No cardio assigned yet.' : 'لم يتم تخصيص تمارين الكارديو بعد.'}</p>
            )}
          </div>
        ) : (
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

                {currentExercise.reps && currentExercise.weights ? (
                  <div className="flex justify-center items-center mb-4">
                    <div className="mx-2">
                      <FontAwesomeIcon icon={faWeightHanging} />
                      {currentExercise.weights?.join(', ')} kg
                    </div>
                    <div className="mx-2">
                      <FontAwesomeIcon icon={faRedoAlt} />
                      {currentExercise.reps?.join(', ')} {language === 'en' ? 'reps' : 'عدة'}
                    </div>
                  </div>
                ) : (
                  <div className="text-red-500 text-lg">
                    {language === 'en' ? (
                      <>Head to exercises and start to unlock.</>
                    ) : (
                      <>اتجه إلى التمارين وابدأ لتفتحها.</>
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
                  language === 'en' ? 'No GIF available' : 'لا توجد صورة GIF متاحة'
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
