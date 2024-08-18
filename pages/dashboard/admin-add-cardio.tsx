






import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import useExerciseData from '../../components/useExerciseData';
import * as XLSX from 'xlsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faPlus, faTasks, faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from '@/components/Modal';
import { fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);



const dayIcons: Record<string, IconDefinition> = {
  'Day 1': fa1,
  'Day 2': fa2,
  'Day 3': fa3,
  'Day 4': fa4,
  'Day 5': fa5,
  'Day 6': fa6,
};

interface Exercise {
  name: string;
  duration: string;
  day: string;
  gif?: string;
}
interface ExerciseOption {
  name: string;
  duration?: string;
  day: string;
  gif?: string;
}

const cardioTypes = {
  'Cardio 3 Days': 3,
  'Cardio 4 Days': 4,
  'Cardio 5 Days': 5,
  'Cardio 6 Days': 6,
};

interface ClientData {
  email: string;
  exercises?: Exercise[];
  cardio?: Exercise[];
}

const durationOptions = ['5 min', '10 min', '15 min', '20 min', '25 min', '30 min', '40 min', '50 min', '60 min', '120 min'];
const cardioCategories = ['Running', 'Burpees', 'High Knees'];

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
  const [gifOptions, setGifOptions] = useState<string[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>('Day 1');
  const exerciseData = useExerciseData();
  const [selectedGif, setSelectedGif] = useState<string | null>(null);
  const [clientData, setClientData] = useState<ClientData | null>(null);

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

  useEffect(() => {
    if (selectedType) {
      const fetchExerciseData = async () => {
        try {
          const response = await fetch(`/${selectedType}.xlsx`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.arrayBuffer();
          const workbook = XLSX.read(data, { type: 'array' });

          const exercises: ExerciseOption[] = [];

          workbook.SheetNames.forEach(sheetName => {
            const sheet = workbook.Sheets[sheetName];
            const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];

            rows.slice(1).forEach(row => {
              row.forEach((exerciseName, dayIndex) => {
                if (exerciseName) {
                  exercises.push({
                    name: exerciseName,
                    duration: '30 min', // Default duration
                    day: `Day ${dayIndex + 1}`,
                  });
                }
              });
            });
          });

          setExercises(exercises);
          console.log('Exercises fetched and set:', exercises);
        } catch (error) {
          console.error('Error fetching exercise data:', error);
        }
      };

      fetchExerciseData();
    }
  }, [selectedType]);

  useEffect(() => {
    const gifs = [
      'Running.gif',
      'Burpees.gif',
      'HighKnees.gif',
    ];
    setGifOptions(gifs);
  }, []);

  const getGifPath = (gifName: string) => {
    return `/cardio/${gifName.replace(/ /g, '')}`;
  };

  const handleAssignExercise = async () => {
    try {
      console.log('Assigning exercises:', { email: selectedClient, exercises, type: selectedType });
      const response = await fetch('/api/adminAddCardio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: selectedClient, exercises, type: selectedType }),
      });

      if (!response.ok) throw new Error('Error assigning exercise');
      const data = await response.json();
      console.log(data.message);
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
    setExercises([...exercises, { name: '', duration: '', day: selectedDay }]);
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
            <th className="py-2 px-4 border-b">Exercise</th>
            <th className="py-2 px-4 border-b">Duration</th>
            <th className="py-2 px-4 border-b">GIF</th>
          </tr>
        </thead>
        <tbody>
          {exercises.filter(exercise => exercise.day === selectedDay).map((exercise, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">
                <select
                  value={exercise.name}
                  onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
                  className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                >
                  <option value="" disabled>Select Exercise</option>
                  {cardioCategories.map((option: string) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
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
              {/* <td className="py-2 px-4 border-b min-w-32">
                <select
                  value={exercise.gif || ''}
                  onChange={(e) => handleExerciseChange(index, 'gif', e.target.value)}
                  className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                >
                  <option value="" disabled>Select GIF</option>
                  {gifOptions.map((gif) => (
                    <option key={gif} value={gif}>
                      {gif}
                    </option>
                  ))}
                </select>
                <div className="items-center justify-center flex flex-col">
                  {exercise.gif ? (
                    <img
                      src={`/gifs/${exercise.gif}`}
                      alt={exercise.name}
                      className="w-32 h-32 self-center min-w-half cursor-pointer"
                      onClick={() => handleGifClick(`/gifs/${exercise.gif}`)}
                    />
                  ) : (
                    'No GIF'
                  )}
                </div>
              </td> */}
<td className="py-2 px-4 border-b min-w-32">
  <select
    value={exercise.gif || ''}
    onChange={(e) => handleExerciseChange(index, 'gif', e.target.value)}
    className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
  >
    <option value="" disabled>Select GIF</option>
    {gifOptions.map((gif) => (
      <option key={gif} value={gif}>
        {gif.split('/').pop()}
      </option>
    ))}
  </select>
  <div className="items-center justify-center flex flex-col">
    {exercise.gif ? (
      <img
        src={getGifPath(exercise.gif)}
        alt={exercise.name}
        className="w-32 h-32 self-center min-w-half cursor-pointer"
        onClick={() => exercise.gif && handleGifClick(getGifPath(exercise.gif))}
      />
    ) : (
      'No GIF'
    )}
  </div>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const handleToggleMode = () => {
    setIsAutomatic(!isAutomatic);
  };

  const renderAutomaticForm = () => (
    <>
    <div>
      <div className="mb-4">
        <label>Select Cardio Type:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
        >
          {Object.keys(cardioTypes).map((type: string) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleAssignExercise}
        className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200 mt-4 min-w-full flex-col flex items-center"
      >
        <FontAwesomeIcon icon={faTasks} className="h-6 w-6" />
      </button>
    </div>
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
      {exercises.filter(exercise => exercise.day === selectedDay).map((exercise, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center">
            <select
              value={exercise.name}
              onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
              className="block w-1/3 mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
            >
              <option value="" disabled>Select Exercise</option>
              {cardioCategories.map((option: string) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={exercise.duration}
              onChange={(e) => handleExerciseChange(index, 'duration', e.target.value)}
              className="block w-1/3 mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
            >
              <option value="" disabled>Select Duration</option>
              {durationOptions.map((option: string) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={exercise.gif || ''}
              onChange={(e) => handleExerciseChange(index, 'gif', e.target.value)}
              className="block w-1/3 mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
            >
              <option value="" disabled>Select GIF</option>
              {gifOptions.map((gif) => (
                <option key={gif} value={gif}>
                  {gif}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleRemoveExercise(index)}
              className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={handleAddExercise}
        className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 min-w-full flex-col flex items-center"
      >
        <FontAwesomeIcon icon={faPlus} className="h-6 w-6" />
      </button>
      <button
        onClick={handleAssignExercise}
        className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200 mt-4 min-w-full flex-col flex items-center"
      >
        <FontAwesomeIcon icon={faTasks} className="h-6 w-6" />
      </button>
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
    </>
  );

  return (
    <DashboardLayout>
      <div className="flex flex-col justify-center items-center min-h-screen relative">
        <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
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
          </div>
          <div className="mb-4 flex-col flex">
            <button
              onClick={handleToggleMode}
              className="bg-purple-500 text-white mt-4 py-3 px-4 rounded-md shadow-md hover:bg-purple-600 transition duration-200"
            >
              <FontAwesomeIcon icon={faExchangeAlt} />
            </button>
          </div>
          {isAutomatic ? renderAutomaticForm() : renderManualForm()}
          {renderExerciseTable()}
        </div>
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
