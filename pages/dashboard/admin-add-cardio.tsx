








import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faPlus, faTasks, faTrash, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import Modal from '@/components/Modal';
import { fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ClientData } from '@/types/ClientData';

const dayIcons: Record<string, IconDefinition> = {
  'Day 1': fa1,
  'Day 2': fa2,
  'Day 3': fa3,
  'Day 4': fa4,
  'Day 5': fa5,
  'Day 6': fa6,
};

// Manually define GIFs available in the cardio folder
const cardioGifOptions = [
  'Running.gif',
  'Burpees.gif',
  'TREADMIL.gif',
  'HighKnees.gif',
  'BAT_ROPE.gif',
  'PushUp.gif',
  'jump-rope.gif',
  'RowingMachine.gif',
  'StairClimber.gif',
  'StationaryBike.gif',
];

interface Exercise {
  duration: string;
  day: string;
  gif?: string;
}
interface ExerciseOption {
  duration?: string;
  day: string;
  gif?: string;
}


const durationOptions = ['5 min', '10 min', '15 min', '20 min', '25 min', '30 min', '40 min', '50 min', '60 min', '120 min'];

const AdminAddCardio = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { clientEmail } = router.query;
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(clientEmail || '');
  const [selectedType, setSelectedType] = useState('Cardio 3 Days');
  const [exercises, setExercises] = useState<ExerciseOption[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isAutomatic, setIsAutomatic] = useState(true);
  const [selectedDay, setSelectedDay] = useState<string>('Day 1');
  const [selectedGif, setSelectedGif] = useState<string | null>(null);
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [showExercises, setShowExercises] = useState(true);
  const [isGifModalOpen, setIsGifModalOpen] = useState<boolean>(false); // Track modal state

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('/api/adminAddExercise');
        const data = await response.json();
        setClients(data.clients);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  // Fetch client-specific cardio exercises
  useEffect(() => {
    const fetchClientCardio = async () => {
      if (selectedClient) {
        try {
          const response = await fetch(`/api/adminAddCardio?email=${selectedClient}`);
          const data = await response.json();
          console.log("data.exercises", data.exercises); // Check if exercises exist
          if (data.exercises) {
            setExercises(data.exercises);
          } else {
            setExercises([]); // Default to an empty state if no cardio exercises
          }
        } catch (error) {
          console.error('Error fetching client cardio:', error);
        }
      }
    };

    fetchClientCardio();
  }, [selectedClient]);

  const getGifPath = (gifName: string) => {
    return `/cardio/${gifName.replace(/ /g, '')}`;
  };

  const handleAssignExercise = async () => {
    try {
      const response = await fetch('/api/adminAddCardio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: selectedClient, exercises, type: selectedType }),
      });

      if (!response.ok) throw new Error('Error assigning exercise');
      const data = await response.json();
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  const handleExerciseChange = (index: number, field: string, value: string) => {
    const filteredExercises = exercises.filter(exercise => exercise.day === selectedDay);
    const updatedExercise = { ...filteredExercises[index], [field]: value };

    let updatedIndex = -1;

    const newExercises = exercises.map((exercise, idx) => {
      if (exercise.day === selectedDay) {
        updatedIndex++;
        if (updatedIndex === index) {
          return updatedExercise;
        }
      }
      return exercise;
    });

    setExercises(newExercises);
  };

  const handleAddExercise = () => {
    setExercises([...exercises, { duration: '', day: selectedDay }]);
  };

  const handleRemoveExercise = (index: number) => {
    const filteredExercises = exercises.filter(exercise => exercise.day === selectedDay);

    let updatedIndex = -1;

    const newExercises = exercises.filter((exercise, idx) => {
      if (exercise.day === selectedDay) {
        updatedIndex++;
        return updatedIndex !== index;
      }
      return true;
    });

    setExercises(newExercises);
  };

  const toggleDay = (day: string) => {
    setSelectedDay(day);
  };

  const handleGifClick = (gif: string | null) => {
    setSelectedGif(gif);
  };

  // Render the exercise table and gif selection
  const renderExerciseTable = () => (
    <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
      <h2 className="text-2xl text-center mt-5 font-serif font-lg italic mb-4">Assigned Cardio Exercises</h2>
      <div className="mb-4 flex justify-center flex-wrap">
        {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'].map(day => (
          <button
            key={day}
            className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 justify-center items-center ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setSelectedDay(day)}
          >
            <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
          </button>
        ))}
      </div>
      <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Duration</th>
            <th className="py-2 px-4 border-b">GIF</th>
            <th className="py-2 px-4 border-b">Remove</th>
          </tr>
        </thead>
        <tbody>
          {exercises.filter(exercise => exercise.day === selectedDay).map((exercise, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">
                <select
                  value={exercise.duration}
                  onChange={(e) => handleExerciseChange(index, 'duration', e.target.value)}
                  className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                >
                  <option value="" disabled>Select Duration</option>
                  {durationOptions.map((option: string) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td className="py-2 px-4 border-b min-w-32">
                <button
                  className="bg-blue-500 text-white py-1 px-2 rounded-md"
                  onClick={() => setIsGifModalOpen(true)} // Open GIF modal on click
                >
                  Select GIF
                </button>
                <div className="items-center justify-center flex flex-col">
                  {exercise.gif ? (
                    <img
                      src={getGifPath(exercise.gif)}
                      alt={exercise.duration}
                      className="w-32 h-32 self-center min-w-half cursor-pointer"
                      onClick={() => exercise.gif && handleGifClick(getGifPath(exercise.gif))}
                    />
                  ) : (
                    'No GIF'
                  )}
                </div>
              </td>
              <td className="border-b items-center justify-center relative left-11">
                <button
                  onClick={() => handleRemoveExercise(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Render the GIF selection modal
  const renderGifModal = () => (
    <Modal onClose={() => setIsGifModalOpen(false)}>
      <div className="max-h-screen overflow-y-auto p-4">
        <h3 className="text-xl font-semibold mb-4">Select a GIF</h3>
        <div className="grid grid-cols-4 gap-4">
          {cardioGifOptions.map((gif) => (
            <div key={gif} className="cursor-pointer" onClick={() => handleGifClick(gif)}>
              <img src={getGifPath(gif)} alt={gif} className="w-24 h-24 mx-auto" />
              <p className="text-center">{gif}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );

  const handleToggleMode = () => {
    setIsAutomatic(!isAutomatic);
  };

  const renderAutomaticForm = () => (
    <>
      <div className="mb-4">

      </div>
      <button
        onClick={handleAssignExercise}
        className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200 mt-4 min-w-full flex-col flex items-center"
      >
        <FontAwesomeIcon icon={faTasks} className="h-6 w-6" />
        Assign Exercises
      </button>
    </>
  );

  const renderManualForm = () => (
    <>
      <div className="mb-4 flex justify-center flex-wrap">
        {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'].map(day => (
          <button
            key={day}
            className={`py-2 px-4 m-2 rounded-md shadow-md min-h-16 justify-center items-center ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setSelectedDay(day)}
          >
            <FontAwesomeIcon icon={dayIcons[day]} className="h-6 w-6" />
          </button>
        ))}
      </div>

      <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Duration</th>
            <th className="py-2 px-4 border-b">GIF</th>
            <th className="py-2 px-4 border-b">Remove</th>
          </tr>
        </thead>
        <tbody>
          {exercises.filter(exercise => exercise.day === selectedDay).map((exercise, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">
                <select
                  value={exercise.duration}
                  onChange={(e) => handleExerciseChange(index, 'duration', e.target.value)}
                  className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                >
                  <option value="" disabled>Select Duration</option>
                  {durationOptions.map((option: string) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td className="py-2 px-4 border-b min-w-32">
                <button
                  className="bg-blue-500 text-white py-1 px-2 rounded-md"
                  onClick={() => setIsGifModalOpen(true)} // Open GIF modal on click
                >
                  Select GIF
                </button>
                <div className="items-center justify-center flex flex-col">
                  {exercise.gif ? (
                    <img
                      src={getGifPath(exercise.gif)}
                      alt={exercise.duration}
                      className="w-32 h-32 self-center min-w-half cursor-pointer"
                      onClick={() => exercise.gif && handleGifClick(getGifPath(exercise.gif))}
                    />
                  ) : (
                    'No GIF'
                  )}
                </div>
              </td>
              <td className="border-b items-center justify-center relative left-11">
                <button
                  onClick={() => handleRemoveExercise(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleAddExercise}
        className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 min-w-full flex-col flex items-center"
      >
        <FontAwesomeIcon icon={faPlus} className="h-6 w-6" />
        Add Exercise
      </button>
      <button
        onClick={handleAssignExercise}
        className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200 mt-4 min-w-full flex-col flex items-center"
      >
        <FontAwesomeIcon icon={faTasks} className="h-6 w-6" />
        Assign Exercises
      </button>
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
    </>
  );

  return (
    <DashboardLayout>
      <div className="flex flex-col justify-center items-center min-h-screen relative">
        <div className="absolute top-4 right-4 flex space-x-4">
            <FontAwesomeIcon
              icon={faHeartbeat}
              className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => setShowExercises(!showExercises)}
            />
          </div>
        <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
          <h1 className="text-2xl font-lg italic font-serif mt-5 text-center mb-4">Assign Cardio Exercise</h1>
          <div className="min-w-full font-serif bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
            <label>Select Client:</label>
            <select
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
              className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
            >
              <option value="" disabled>Select a client</option>
              {clients.map((client: any) => (
                <option key={client.email} value={client.email}>
                  {client.fullName} ({client.email})
                </option>
              ))}
            </select>
            {renderManualForm()}
            {showExercises && renderExerciseTable()}

          </div>

          </div>
        {isGifModalOpen && renderGifModal()}
        {selectedGif && (
          <Modal onClose={() => handleGifClick(null)}>
            <img src={selectedGif} alt="Exercise GIF" className="w-full h-auto" />
          </Modal>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AdminAddCardio;











