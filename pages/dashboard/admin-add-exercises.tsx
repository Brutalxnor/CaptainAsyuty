







import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import useExerciseData from '../../components/useExerciseData';
import * as XLSX from 'xlsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faPlus, faTasks, faTrash, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Modal from '@/components/Modal';
import { fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

const dayIcons: Record<string, IconDefinition> = {
  'Day 1': fa1,
  'Day 2': fa2,
  'Day 3': fa3,
  'Day 4': fa4,
  'Day 5': fa5,
  'Day 6': fa6,
};

interface Exercise {
  id: string; // Add id property
  name: string;
  sets: string;
  day: string;
  gif?: string;
  restTime: number; // Add rest time property
}

interface ExerciseOption {
  id: string; // Add id property
  name: string;
  sets?: string;
  day: string;
  gif?: string;
  restTime: number; // Add rest time property
}

const exercisesTypes = {
  'Upper-Lower 3 Days': 3,
  'Upper-Lower 4 Days': 4,
  'Upper-Lower 5 Days': 5,
  'Upper-Lower 6 Days': 6,
  'Power Series 3 Days': 3,
  'Power Series 5 Days': 5,
  'Power Series 6 Days': 6,
  'Pro Split 4 Days': 4,
  'Push-Pull-Leg 3 Days': 3,
  'Push-Pull-Leg 5 Days': 5,
  'Push-Pull-Leg 6 Days': 6,
};

interface ClientData {
  email: string;
  exerciseType: string;
  date: string;
  exercises?: Exercise[];
}

const setsOptions = ['1', '2', '3', '4', '5', '6', '7'];
const restTimeOptions = Array.from({ length: 12 }, (_, i) => (i + 1) * 10); // Generate rest time options in increments of 10 seconds
const exerciseCategories = ['Shoulder', 'Chest', 'Triceps', 'Back', 'Biceps', 'Leg', 'Rest', 'Abdominis Rectus', 'Reverse Wrist Curls'];
const gifFolders = ['Back', 'Biceps', 'Chest', 'Leg', 'Shoulder', 'Triceps', 'All'];

const AdminAddExercises = () => {
  const router = useRouter();
  const user = useAuth()?.user;
  const clientEmail = user?.primaryEmailAddress?.emailAddress || user?.email || '';
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(clientEmail);
  const [selectedType, setSelectedType] = useState('Upper-Lower 3 Days');
  const [exercises, setExercises] = useState<ExerciseOption[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isAutomatic, setIsAutomatic] = useState(true);
  const [gifOptions, setGifOptions] = useState<Record<string, string[]>>({});
  const [currentGifFolder, setCurrentGifFolder] = useState<string>('All');
  const [selectedDay, setSelectedDay] = useState<string>('Day 1');
  const exerciseData = useExerciseData();
  const [selectedGif, setSelectedGif] = useState<string | null>(null);
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [showExercises, setShowExercises] = useState(true);
  const [isGifModalOpen, setIsGifModalOpen] = useState<boolean>(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number | null>(null);

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
                    id: uuidv4(), // Generate unique id
                    name: exerciseName,
                    sets: '10', // Default sets
                    day: `Day ${dayIndex + 1}`,
                    restTime: 30, // Default rest time
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
    const fetchGifOptions = async () => {
      try {
        const response = await fetch('/api/getGifs');
        const data = await response.json();
        setGifOptions(data);
      } catch (error) {
        console.error('Error fetching GIF options:', error);
      }
    };

    fetchGifOptions();
  }, []);

//   const handleAssignExercise = async () => {
//     try {
//       const currentDate = format(new Date(), 'yyyy-MM-dd');
//       const payload = {
//         email: selectedClient,
//         exercises,
//         type: selectedType,
//         date: currentDate,
//       };
//       console.log('Assigning exercises:', payload); // Debug log
//       const response = await fetch('/api/adminAddExercise', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error('Error assigning exercise');
//       const data = await response.json();
//       console.log(data.message);
//       router.push('/dashboard');
//     } catch (error: any) {
//       console.error('Error:', error);
//       setError(error.message);
//     }
//   };

const handleAssignExercise = async () => {
    try {
      const currentDate = format(new Date(), 'yyyy-MM-dd');
      const payload = {
        email: selectedClient,
        exercises: exercises.map(ex => ({ ...ex, date: currentDate })), // Add the date to each exercise
        type: selectedType,
        date: currentDate,
      };
      // console.log('Assigning exercises:', payload); // Debug log
      const response = await fetch('/api/adminAddExercise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) throw new Error('Error assigning exercise');
      const data = await response.json();
      // console.log(data.message);
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Error:', error);
      setError(error.message);
    }
  };
  

  const handleExerciseChange = (index: number, field: string, value: string | number) => {
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
    setExercises([...exercises, { id: uuidv4(), name: '', sets: '', day: selectedDay, restTime: 30 }]);
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

  const handleGifModalOpen = (index: number) => {
    setCurrentExerciseIndex(index);
    setIsGifModalOpen(true);
  };

  const handleGifSelect = (gif: string) => {
    if (currentExerciseIndex !== null) {
      handleExerciseChange(currentExerciseIndex, 'gif', gif);
    }
    setIsGifModalOpen(false);
  };

  const renderGifModal = () => (
    <Modal onClose={() => setIsGifModalOpen(false)}>
      <div className="max-h-screen overflow-y-auto bg-[var(--background-color)] text-[var(--text-color)] p-4 mx-auto max-w-sm md:max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-wrap justify-center space-x-2">
            {gifFolders.map(folder => (
              <button
                key={folder}
                onClick={() => setCurrentGifFolder(folder)}
                className={`py-2 px-4 m-2 rounded-md shadow-md whitespace-nowrap ${currentGifFolder === folder ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                {folder}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsGifModalOpen(false)}
            className="text-white bg-red-500 rounded-full p-2"
          >
            X
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {(currentGifFolder === 'All'
            ? gifFolders.filter(folder => folder !== 'All').flatMap(folder => gifOptions[folder] || [])
            : gifOptions[currentGifFolder] || []
          ).map(gif => (
            <div key={gif} className="text-center cursor-pointer" onClick={() => handleGifSelect(`/gifs/${currentGifFolder}/${gif}`)}>
              <img src={`/gifs/${currentGifFolder}/${gif}`} alt={gif} className="w-24 h-24 mx-auto" />
              <p className="mt-2 font-sans break-words overflow-hidden">{gif}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
  

  const renderExerciseTable = () => (
    <div className="w-full p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
      <h2 className="text-2xl text-center mt-5 font-serif font-lg italic mb-4">Assigned Exercises</h2>
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
            <th className="py-2 px-4 border-b">Sets</th>
            <th className="py-2 px-4 border-b">GIF</th>
            <th className="py-2 px-4 border-b">Rest Time (sec)</th>
          </tr>
        </thead>
        <tbody>
          {exercises.filter(exercise => exercise.day === selectedDay).map((exercise, index) => (
            <tr key={exercise.id}>
              <td className="py-2 px-4 border-b">
                <select
                  value={exercise.name}
                  onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
                  className="block font-serif w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                >
                  <option value="" disabled>Select Exercise</option>
                  {exerciseCategories.map((option: string) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td className="py-2 px-4 border-b">
                <select
                  value={exercise.sets}
                  onChange={(e) => handleExerciseChange(index, 'sets', e.target.value)}
                  className="block font-serif w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                >
                  <option value="" disabled>Select Sets</option>
                  {setsOptions.map((option: string) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td className="py-2 px-4 border-b min-w-32">
                <button
                  onClick={() => handleGifModalOpen(index)}
                  className="bg-blue-500 text-white py-1 px-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
                >
                  Select GIF
                </button>
                {exercise.gif && (
                  <div className="items-center justify-center flex flex-col">
                    <img
                      src={exercise.gif}
                      alt={exercise.name}
                      className="w-24 h-24 self-center mt-2 cursor-pointer"
                    />
                    <p className="mt-2 font-sans">{exercise.gif.split('/').pop()}</p>
                  </div>
                )}
              </td>
              <td className="py-2 px-4 border-b">
                <select
                  value={exercise.restTime}
                  onChange={(e) => handleExerciseChange(index, 'restTime', parseInt(e.target.value))}
                  className="block font-serif w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                >
                  <option value="" disabled>Select Rest Time</option>
                  {restTimeOptions.map((option: number) => (
                    <option key={option} value={option}>
                      {option} sec
                    </option>
                  ))}
                </select>
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
      <div className="mb-4 font-serif ">
        <label>Select Exercise Type:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
        >
          {Object.keys(exercisesTypes).map((type: string) => (
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
        <div key={exercise.id} className="mb-4">
          <div className="flex items-center">
            <select
              value={exercise.name}
              onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
              className="block w-1/3 mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
            >
              <option value="" disabled>Select Exercise</option>
              {exerciseCategories.map((option: string) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={exercise.sets}
              onChange={(e) => handleExerciseChange(index, 'sets', e.target.value)}
              className="block w-1/3 mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
            >
              <option value="" disabled>Select Sets</option>
              {setsOptions.map((option: string) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleGifModalOpen(index)}
              className="bg-blue-500 text-white py-1 px-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
            >
              Select GIF
            </button>
            {exercise.gif && (
              <div className="items-center justify-center flex flex-col">
                <img
                  src={exercise.gif}
                  alt={exercise.name}
                  className="w-24 h-24 self-center mt-2 cursor-pointer"
                />
                <p className="mt-2 font-sans">{exercise.gif.split('/').pop()}</p>
              </div>
            )}
            <select
              value={exercise.restTime}
              onChange={(e) => handleExerciseChange(index, 'restTime', parseInt(e.target.value))}
              className="block w-1/3 mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
            >
              <option value="" disabled>Select Rest Time</option>
              {restTimeOptions.map((option: number) => (
                <option key={option} value={option}>
                  {option} sec
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
      <div className="flex flex-col items-center min-h-screen relative  max-w-sm md:max-w-2xl">
        <div className="absolute top-4 right-4 flex space-x-4">
          <FontAwesomeIcon
            icon={faDumbbell}
            className={`h-8 w-8 cursor-pointer ${showExercises ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setShowExercises(!showExercises)}
          />
        </div>
        <div className="w-full max-w-3xl p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg md:p-6 sm:p-4 overflow-x-auto">
          <h1 className="text-2xl font-lg italic font-serif mt-5 text-center mb-4">Assign Exercise</h1>
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
          {showExercises && renderExerciseTable()}
        </div>
        {isGifModalOpen && renderGifModal()}
      </div>
    </DashboardLayout>
  );
};

export default AdminAddExercises;
