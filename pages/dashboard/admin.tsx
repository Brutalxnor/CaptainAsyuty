







///////////////////////////////////////////////////////////////////////////////////////////////////////////

                        

///////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////







import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Modal from '@/components/Modal';
import { faChevronDown, faChevronUp, faDollarSign, faEye, faEyeSlash, faUser, faUserShield, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4, fa5, fa6, faWeightHanging, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import LoadingSpinner from '@/components/LoadingSpinner'; // Import the new component
import { useTranslation } from 'react-i18next';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dayIcons: Record<string, IconDefinition> = {
  'Day 1': fa1,
  'Day 2': fa2,
  'Day 3': fa3,
  'Day 4': fa4,
  'Day 5': fa5,
  'Day 6': fa6,
};

interface Set {
  weight: number;
  reps: number;
}

interface Exercise {
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
  name: string;
  duration: string;
  day: string;
  gif?: string;
}

interface ClientData {
  email: string;
  fullName?: string;
  weight?: string;
  height?: string;
  age?: string;
  fatWeight?: string;
  muscleWeight?: string;
  musclePercentage?: string;
  fatPercentage?: string;
  waistMeasurement?: string;
  rightArmMeasurement?: string;
  leftArmMeasurement?: string;
  rightLegMeasurement?: string;
  leftLegMeasurement?: string;
  sugarCravings?: string;
  previousInjuries?: string;
  diabetes?: string;
  bloodPressure?: string;
  onlineTrainingExperience?: string;
  trainingAge?: string;
  workoutSets?: string;
  exercises?: Exercise[];
  cardio?: Cardio[];
  hasPaid: boolean;
  paymentDate?: string; 
  admin: boolean;
  client: boolean;
}

const AdminDashboard: React.FC = () => {
  const { user } = useUser();
  const { t, i18n } = useTranslation();
  const [clientData, setClientData] = useState<ClientData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGif, setSelectedGif] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const router = useRouter();
  const [showEmails, setShowEmails] = useState(true);

  const toggleEmails = () => {
    setShowEmails(!showEmails);
  };

  useEffect(() => {
    const fetchClientData = async () => {
      if (!user) {
        router.push('/sign-in');
        return;
      }

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

        setClientData(data);
      } catch (error: any) {
        console.error('Error fetching client data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, [user, router]);

  const fetchCardioData = async (email: string) => {
    try {
      const response = await fetch(`/api/adminAddCardio?email=${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!data || !Array.isArray(data.exercises)) {
        throw new Error('Cardio data is not an array');
      }

      setClientData(prevData =>
        prevData.map(client =>
          client.email === email ? { ...client, cardio: data.exercises } : client
        )
      );
    } catch (error: any) {
      console.error('Error fetching cardio data:', error);
      setError(error.message);
    }
  };

  const toggleRow = (index: number) => {
    const client = clientData[index];

    if (!expandedRows.includes(index)) {
      fetchCardioData(client.email);
    }

    setExpandedRows(expandedRows.includes(index)
      ? expandedRows.filter(row => row !== index)
      : [...expandedRows, index]);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleGifClick = (gif: string | null) => {
    setSelectedGif(gif);
  };

  const filteredClients = clientData.filter(client =>
    client.fullName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;

  const dates = clientData.map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    return date.toISOString().split('T')[0];
  }).reverse();

  const data = {
    labels: ['Total Clients', 'Paid Clients', 'Admin Clients', 'Client Users'],
    datasets: [
      {
        label: 'Number of Clients',
        data: [
          filteredClients.length,
          filteredClients.filter(client => client.hasPaid).length,
          filteredClients.filter(client => client.admin).length,
          filteredClients.filter(client => client.client).length,
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: t('Client Statistics'),
      },
    },
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const isCardio = (exercise: Exercise | Cardio): exercise is Cardio => {
    return (exercise as Cardio).duration !== undefined;
  };

  const renderExercisesByDay = (exercises: Exercise[] | undefined, cardio: Cardio[] | undefined) => {
    if ((!exercises || exercises.length === 0) && (!cardio || cardio.length === 0)) {
      return <p>{t('No exercises assigned.')}</p>;
    }

    const combinedExercises = [...(exercises || []), ...(cardio || [])];

    const exercisesByDay = combinedExercises.reduce((acc: { [key: string]: (Exercise | Cardio)[] }, exercise) => {
      const { day } = exercise;
      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(exercise);
      return acc;
    }, {});

    return (
      <>
        <div className='justify-center items-center flex flex-col'>
          <div className="mb-4">
            {Object.keys(exercisesByDay).sort().map(day => (
              <button
                key={day}
                className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 justify-center items-center ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setSelectedDay(day)}
              >
                <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
              </button>
            ))}
          </div>
        </div>
        {Object.entries(exercisesByDay).map(([day, exercises], index) => (
          selectedDay === day && (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{day}</h3>
              <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b font-sans">{t('Exercise')}</th>
                    <th className="py-2 px-4 border-b font-sans">{t('Reps/Duration')}</th>
                    <th className="py-2 px-4 border-b font-sans">GIF</th>
                  </tr>
                </thead>
                <tbody>
                  {exercises.map((exercise, i) => (
                    <React.Fragment key={i}>
                      <tr>
                        <td className="py-2 px-4 border-b text-center justify-center font-serif font-bold text-xl">{t(exercise.name)}</td>
                        <td className="py-2 px-4 border-b text-center justify-center">
                          {isCardio(exercise) ? (
                            exercise.duration
                          ) : (
                            exercise.reps && exercise.weights ? (
                              <table>
                                <tbody>
                                  {exercise.reps.map((rep, index) => (
                                    <tr key={index}>
                                      <td className="py-2 px-4 text-center">
                                        <FontAwesomeIcon icon={faRedoAlt} className="mr-2" /> {rep} {t('reps')}
                                      </td>
                                      <td className="py-2 px-4 text-center">
                                        <FontAwesomeIcon icon={faWeightHanging} className="mr-2" /> {exercise.weights[index]} {t('kg')}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            ) : (
                              t('No sets')
                            )
                          )}
                        </td>
                        <td className="py-2 px-4 border-b text-center justify-center">
                          {exercise.gif ? (
                            <img
                              src={`${exercise.gif}`}
                              alt={exercise.name}
                              className="w-32 h-32 min-w-half cursor-pointer max-w-full h-auto"
                              onClick={() => handleGifClick(`${exercise.gif}`)}
                            />
                          ) : (
                            t('No GIF')
                          )}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ))}
      </>
    );
  };

  return (
    <DashboardLayout>
      <div className="max-w-screen "> 
        <h1 className="text-2xl font-bold mb-4 text-center font-serif italic font-xl">{t('Admin Dashboard')}</h1>
        <div className="flex flex-col items-center justify-center ">
          <div className="bg-[var(--background-color)] text-[var(--text-color)] rounded-lg shadow-md p-4 mt-4 w-full max-w-4xl font-serif">
            <h2 className="text-xl font-semibold mb-4 font-serif italic font-xl">{t('Client Data')}</h2>
            <input
              type="text"
              placeholder={t('Search by name')}
              value={searchTerm}
              onChange={handleSearch}
              className="mb-4 p-2 border rounded"
            />
            <div className="overflow-x-auto">
              <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)]">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left font-serif italic font-xl">{t('Name')}:</th>
                    <th className="py-2 px-4 text-left text-center font-serif italic font-xl">{t('Actions')}:</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((client, index) => (
                    <React.Fragment key={index}>
                      <tr className="border-b border-[var(--border-color)]">
                        <td className="py-2 px-4 text-xl font-bold min-w-full">{client.fullName}</td>
                        <td className="py-2 px-4">
                          <button
                            onClick={() => toggleRow(index)}
                            className="text-blue-500 hover:text-green-500 transition duration-300 min-w-full"
                          >
                            {expandedRows.includes(index) ? (
                              <FontAwesomeIcon icon={faChevronUp} className="h-6 w-6" />
                            ) : (
                              <FontAwesomeIcon icon={faChevronDown} className="h-6 w-6" />
                            )}
                          </button>
                        </td>
                      </tr>
                      {expandedRows.includes(index) && (
                        <tr>
                          <td colSpan={2} className="py-2 px-4">
                            <div>
                              <strong>{t('Exercises')}:</strong>
                              {renderExercisesByDay(client.exercises, client.cardio)}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col items-center mb-10 mt-10 w-full">
            <div className="w-full max-w-6xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-lg p-6 overflow-y-auto max-w-sm md:max-w-2xl" >
              <h1 className="text-3xl font-bold text-center mb-6">{t('Client Dashboard')}</h1>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-700 p-4 rounded-lg shadow-md text-center hover:bg-blue-800 transition-transform transform hover:scale-105">
                  <FontAwesomeIcon icon={faUsers} className="h-6 w-6 mb-2" />
                  <h2 className="text-xl font-bold">{t('Total Clients')}</h2>
                  <p className="text-3xl">{filteredClients.length}</p>
                </div>
                <div className="bg-green-700 p-4 rounded-lg shadow-md text-center hover:bg-green-800 transition-transform transform hover:scale-105">
                  <FontAwesomeIcon icon={faDollarSign} className="h-6 w-6 mb-2" />
                  <h2 className="text-xl font-bold">{t('Paid Clients')}</h2>
                  <p className="text-3xl">{filteredClients.filter(client => client.hasPaid).length}</p>
                </div>
                <div className="bg-red-700 p-4 rounded-lg shadow-md text-center hover:bg-red-800 transition-transform transform hover:scale-105">
                  <FontAwesomeIcon icon={faUserShield} className="h-6 w-6 mb-2" />
                  <h2 className="text-xl font-bold">{t('Admin Clients')}</h2>
                  <p className="text-3xl">{filteredClients.filter(client => client.admin).length}</p>
                </div>
                <div className="bg-yellow-700 p-4 rounded-lg shadow-md text-center hover:bg-yellow-800 transition-transform transform hover:scale-105">
                  <FontAwesomeIcon icon={faUser} className="h-6 w-6 mb-2" />
                  <h2 className="text-xl font-bold">{t('Client Users')}</h2>
                  <p className="text-3xl">{filteredClients.filter(client => client.client).length}</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="py-3 px-4 font-semibold">{t('Name')}</th>
                      {showEmails && <th className="py-3 px-4 font-semibold text-center">{t('Email')}</th>}
                      <th className="py-3 px-4 font-semibold text-center">{t('Has Paid')}</th>
                      <th className="py-3 px-4 font-semibold text-center">{t('Is Admin')}</th>
                      <th className="py-3 px-4 font-semibold text-center">{t('Is Client')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClients.map((client, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-lg font-semibold flex items-center">
                          <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full mr-3">
                            {client.fullName ? client.fullName.charAt(0).toUpperCase() : client.email.charAt(0).toUpperCase()}
                          </div>
                          {client.fullName ? client.fullName : client.email}
                        </td>
                        {showEmails && <td className="py-3 px-4 text-center">{client.email}</td>}
                        <td className="py-3 px-4 text-center">
                          <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium ${client.hasPaid ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                            {client.hasPaid ? t('Yes') : t('No')}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium ${client.admin ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                            {client.admin ? t('Yes') : t('No')}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium ${client.client ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                            {client.client ? t('Yes') : t('No')}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">{t('Client Statistics')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  
                </div>

                <div className="bg-white rounded-lg shadow-md p-4 min-h-64">
                  <Bar data={data} options={options} />
                </div>
              </div>

              <div className="text-center mb-4">
                <button
                  onClick={toggleEmails}
                  className="bg-white text-blue-500 p-3 rounded-full shadow-md hover:bg-gray-200 transition duration-200"
                >
                  <FontAwesomeIcon icon={showEmails ? faEyeSlash : faEye} className="h-6 w-6" />
                </button>
              </div>
            </div>
      </div>
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

export default AdminDashboard;









