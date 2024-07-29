







import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import Modal from '@/components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4, fa5, fa6, faDumbbell, faUtensils, faLock, faArrowLeft, faArrowRight, faRedoAlt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useLanguage } from '@/contexts/LanguageContext';


const dayIcons: Record<string, IconDefinition> = {
  'Day 1': fa1,
  'Day 2': fa2,
  'Day 3': fa3,
  'Day 4': fa4,
  'Day 5': fa5,
  'Day 6': fa6,
};

const mealIcons: Record<number, IconDefinition> = {
  1: fa1,
  2: fa2,
  3: fa3,
  4: fa4,
  5: fa5,
  6: fa6,
};

interface Exercise {
  id: string;
  name: string;
  muscle?: string;
  day: string;
  gif?: string;
  sets?: { weight: number; reps: number }[];
  reps?: number[];
  weights?: number[];
  started?: boolean;
  finished?: boolean;
  timer?: string;
  duration?: string; // Add duration for cardio exercises
}

interface Meal {
  name: string;
  calories: number;
  fats: number;
  carbs: number;
  image?: string;
}

interface ClientData {
  email: string;
  fullName: string;
  hasPaid: boolean;
  exerciseType?: string;
  exercises?: Exercise[];
  date?: string;
}

const translations: Record<string, string> = {
  'Day 1': 'اليوم 1',
  'Day 2': 'اليوم 2',
  'Day 3': 'اليوم 3',
  'Day 4': 'اليوم 4',
  'Day 5': 'اليوم 5',
  'Day 6': 'اليوم 6',
  'Assigned Exercises and Meals:': 'التمارين والوجبات المخصصة:',
  'Assigned Exercises:': 'التمارين المخصصة:',
  'Assigned Meals:': 'الوجبات المخصصة:',
  Exercise: 'تمرين',
  Weights: 'الأوزان',
  Reps: 'التكرارات',
  GIF: 'GIF',
  'No days available.': 'لا توجد أيام متاحة.',
  'No exercises assigned.': 'لم يتم تعيين أي تمارين.',
  'No meals assigned.': 'لم يتم تعيين أي وجبات.',
  Calories: 'سعرات حرارية',
  Fats: 'الدهون',
  Carbs: 'الكربوهيدرات',
};

const translate = (text: string, language: string) => {
  return language === 'ar' && translations[text] ? translations[text] : text;
};

const ClientDashboard: React.FC = () => {
  const { user, isSignedIn } = useUser();
  const { language } = useLanguage();
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [meals, setMeals] = useState<Meal[][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGif, setSelectedGif] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
  const [showExercises, setShowExercises] = useState<boolean>(true);
  const [showMeals, setShowMeals] = useState<boolean>(true);
  const [currentUnlockedIndex, setCurrentUnlockedIndex] = useState(0);
  const [unlockedExerciseIndices, setUnlockedExerciseIndices] = useState<number[]>([]);
  const [scaledImages, setScaledImages] = useState<Record<string, boolean>>({});
  const router = useRouter();

  useEffect(() => {
    const checkAndAddEmail = async (email: string): Promise<boolean> => {
      try {
        const response = await fetch('/api/addEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error('Error checking/adding email');
        }

        const data = await response.json();
        console.log(data.message);
        return !data.exists;
      } catch (error) {
        console.error('Error checking/adding email:', error);
        return false;
      }
    };

    const fetchClientData = async () => {
      if (!user) {
        router.push('/sign-in');
        return;
      }

      const userEmail = user.primaryEmailAddress?.emailAddress;
      if (!userEmail) {
        setLoading(false);
        return;
      }

      try {
        const isNew = await checkAndAddEmail(userEmail);

        const response = await fetch(`/api/client?email=${userEmail}`, {
          method: 'GET',
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch client data');
        }

        const client = await response.json();
        console.log('Fetched client data:', client);

        if ((isNew && !client.hasPaid) || !client.hasPaid) {
          router.push('/dashboard/payments');
          return;
        }

        setClientData(client);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching client data:', error.message);
          setError(error.message);
        } else {
          console.error('Unknown error fetching client data');
          setError('Unknown error fetching client data');
        }
      } finally {
        setLoading(false);
      }
    };

    const fetchMeals = async () => {
      if (!user) return;

      const userEmail = user.primaryEmailAddress?.emailAddress;
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
        setMeals(data.meals || []);
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

    if (isSignedIn) {
      fetchClientData();
      fetchMeals();
    } else {
      router.push('/sign-in');
    }
  }, [user, isSignedIn, router]);

  useEffect(() => {
    if (clientData?.exercises) {
      const unlockedIndices = clientData.exercises.map((exercise, index) =>
        isCurrentDay(exercise.day, clientData.date || '') ? index : -1
      ).filter(index => index !== -1);
      setUnlockedExerciseIndices(unlockedIndices);
      setCurrentUnlockedIndex(0); // Reset to the first unlocked exercise
    }
  }, [clientData, clientData?.date]);

  const days = clientData?.exercises?.reduce((acc, exercise) => {
    if (!acc.includes(exercise.day)) acc.push(exercise.day);
    return acc;
  }, [] as string[]) || [];

  const isCurrentDay = (day: string, assignedDate: string): boolean => {
    const assigned = new Date(assignedDate);
    const today = new Date();
    const dayNumber = parseInt(day.split(' ')[1], 10);

    // Calculate the date for the current exercise day
    const exerciseDate = new Date(assigned);
    exerciseDate.setDate(exerciseDate.getDate() + dayNumber - 1);

    // Convert today and exercise date to 'YYYY-MM-DD' for comparison
    const todayString = today.toISOString().split('T')[0];
    const exerciseDateString = exerciseDate.toISOString().split('T')[0];

    return todayString === exerciseDateString;
  };

  const handleGifClick = (gif: string | null) => {
    setSelectedGif(gif);
  };

  const handleImageClick = (foodName: string) => {
    setScaledImages((prev) => ({
      ...prev,
      [foodName]: !prev[foodName],
    }));
  };

  const handleNextExercise = () => {
    if (unlockedExerciseIndices.length) {
      setCurrentUnlockedIndex((prevIndex) => (prevIndex + 1) % unlockedExerciseIndices.length);
    }
  };

  const handlePreviousExercise = () => {
    if (unlockedExerciseIndices.length) {
      setCurrentUnlockedIndex((prevIndex) => (prevIndex - 1 + unlockedExerciseIndices.length) % unlockedExerciseIndices.length);
    }
  };

  const currentExercise = clientData?.exercises?.[unlockedExerciseIndices[currentUnlockedIndex]];


  return (
    <DashboardLayout>
      <div className="flex flex-col justify-center items-center relative pb-20 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-5xl">
        <div className="absolute top-1 right-4 flex space-x-4">
          <FontAwesomeIcon
            icon={faDumbbell}
            className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setShowExercises(!showExercises)}
          />
          <FontAwesomeIcon
            icon={faUtensils}
            className={`h-8 w-8 cursor-pointer ${showMeals ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setShowMeals(!showMeals)}
          />
        </div>
        <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
          <h1 className="text-2xl justify-center font-lg italic font-serif mb-2 text-center">
            <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
            {translate('Assigned Exercises and Meals:', language)}
          </h1>
          {clientData?.exerciseType && (
            <h1 className="text-2xl mb-4 font-serif font-bold text-center">{clientData.exerciseType}</h1>
          )}
          {showExercises && clientData ? (
            <div className="mt-24 mb-4">

              {days.length > 0 ? (
                <div className="mb-4 flex justify-center flex-wrap">
                  {days.sort().map(day => (
                    <button
                      key={day}
                      className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} ${
                        isCurrentDay(day, clientData.date || '') ? '' : 'locked'
                      }`}
                      onClick={() => isCurrentDay(day, clientData.date || '') && setSelectedDay(day)}
                    >
                      <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
                      {!isCurrentDay(day, clientData.date || '') && (
                        <div className="locked-overlay">
                          <FontAwesomeIcon icon={faLock} className="h-6 w-6 text-yellow-500" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <p>{translate('No days available.', language)}</p>
              )}
              {currentExercise ? (
                <div className="w-full md:overflow-hidden max-w-sm md:max-w-2xl">
                  <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-center">{translate('Exercise', language)}</th>
                        <th className="py-2 px-4 border-b text-center">{translate('Weights', language)}</th>
                        <th className="py-2 px-4 border-b text-center">{translate('Reps', language)}</th>
                        <th className="py-2 px-4 border-b text-center">{translate('GIF', language)}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={!currentExercise.started ? 'censored' : ''}>
                        <td className={`py-2 px-4 border-b text-left text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
                          {translate(currentExercise.name, language)}
                        </td>
                        <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
                          {currentExercise.weights?.map((weight, setIndex) => (
                            <div key={setIndex} className="flex items-center justify-center">
                              <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {weight}
                            </div>
                          ))}
                        </td>
                        <td className={`py-2 px-4 border-b text-center text-xl font-bold font-serif ${!currentExercise.started ? 'censored-text' : ''}`}>
                          {currentExercise.reps?.map((rep, setIndex) => (
                            <div key={setIndex} className="flex items-center justify-center">
                              <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep}
                            </div>
                          ))}
                        </td>
                        <td className="py-2 px-4 border-b min-w-32 mr-3">
                          {currentExercise.gif ? (
                            <img
                              src={`${currentExercise.gif}`}
                              alt={currentExercise.name}
                              className={`w-32 h-32 cursor-pointer ${!currentExercise.started ? 'censored-gif' : ''}`}
                              onClick={() => handleGifClick(currentExercise.started ? `${currentExercise.gif}` : null)}
                            />
                          ) : (
                            translate('No GIF', language)
                          )}
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
                <p>{translate('No exercises assigned.', language)}</p>
              )}
            </div>
          ) : null}
          {showMeals && (
            <div className="mb-4">
              <h2 className="text-2xl justify-center font-lg italic font-serif mb-4 mt-8">
                <FontAwesomeIcon icon={faUtensils} className="mr-2" />
                {translate('Assigned Meals:', language)}
              </h2>
              {meals.length > 0 ? (
                <div className="mb-4 flex justify-center flex-wrap">
                  {meals.map((mealDay, index) => (
                    <div key={index} className="mb-4">
                      <button
                        className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 ${selectedMeal === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => setSelectedMeal(selectedMeal === index ? null : index)}
                      >
                        <FontAwesomeIcon icon={mealIcons[index + 1]} className="h-6 w-6" />
                      </button>
                      {selectedMeal === index && (
                        <ul>
                          {mealDay.map((food, foodIndex) => (
                            <li key={foodIndex} className="mb-2 p-2 border border-gray-300 rounded-md flex justify-between items-center bg-[var(--select-background-color)] text-[var(--text-color)]">
                              <div>
                                <div>{translate(food.name, language)}</div>
                                <div className="text-sm text-[var(--input-text-color)]">
                                  {food.calories} {translate('Calories', language)}, {food.fats} {translate('Fats', language)}, {food.carbs} {translate('Carbs', language)}
                                </div>
                              </div>
                              {food.image && (
                                <img
                                  src={food.image}
                                  alt={food.name}
                                  className={`w-16 h-16 ml-4 rounded-md object-cover transition-transform duration-200 ${
                                    scaledImages[food.name] ? 'scale-8' : 'scale-1'
                                  }`}
                                  onClick={() => handleImageClick(food.name)}
                                />
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>{translate('No meals assigned.', language)}</p>
              )}
            </div>
          )}
        </div>
      </div>
      {selectedGif && (
        <Modal onClose={() => handleGifClick(null)}>
          <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
        </Modal>
      )}
    </DashboardLayout>
  );
};

export default ClientDashboard;
