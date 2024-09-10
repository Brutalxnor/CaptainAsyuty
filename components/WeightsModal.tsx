// import React, { useState } from 'react';
// import Modal from '@/components/Modal';
// import { useLanguage } from '@/contexts/LanguageContext';

// interface Set {
//   weight: number;
//   reps: number;
// }

// interface Exercise {
//   id: string;
//   name: string;
//   weights: number[];
//   reps: number[];
// }

// interface ClientData {
//   fullName: string;
// }

// interface WeightsModalProps {
//   selectedExercise: Exercise | null;
//   activeSetIndex: number | null;
//   clientData: ClientData | null;
//   onClose: () => void;
//   onSave: (updatedExercise: Exercise) => void;
// }

// const WeightsModal: React.FC<WeightsModalProps> = ({
//   selectedExercise,
//   activeSetIndex,
//   clientData,
//   onClose,
//   onSave,
// }) => {
//   const { language } = useLanguage();
//   const [selectedWeight, setSelectedWeight] = useState<number | null>(null);
//   const [selectedReps, setSelectedReps] = useState<number | null>(null);

//   // Options for weights and reps (can be modified as needed)
//   const weightOptions = Array.from({ length: 20 }, (_, i) => (i + 1) * 2.5); // 2.5, 5, 7.5, ... 50
//   const repOptions = Array.from({ length: 20 }, (_, i) => i + 1); // 1 to 20 reps


//   const handleSaveWeights = async () => {
//     if (!selectedExercise || activeSetIndex === null || !clientData?.fullName) {
//       console.error('Invalid data for saving weights and reps:', {
//         fullName: clientData?.fullName || 'Missing',
//         exerciseId: selectedExercise?.id || 'Missing exercise',
//       });
//       return;
//     }
  
//     try {
//       const updatedExercise = { ...selectedExercise };
//       updatedExercise.weights[activeSetIndex] = selectedWeight || 0;
//       updatedExercise.reps[activeSetIndex] = selectedReps || 0;
  
//       const response = await fetch('/api/assign-weights', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           exerciseId: selectedExercise.id,
//           weights: updatedExercise.weights,
//           reps: updatedExercise.reps,
//         }),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Error data:', errorData);
//         throw new Error(errorData.message || 'Failed to save weights and reps');
//       }
  
//       onSave(updatedExercise);
//       onClose();
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
  
//   return (
//     <Modal onClose={onClose}>
//       <h2 className="text-2xl font-bold mb-4">
//         {language === 'en' ? 'Set Weights and Reps' : 'تعيين الأوزان والتكرارات'}
//       </h2>
      
//       {/* Weight Selection */}
//       <div className="mb-4">
//         <label className="block mb-2">{language === 'en' ? 'Weight (kg):' : 'الوزن (كجم):'}</label>
//         <select
//           value={selectedWeight || ''}
//           onChange={(e) => setSelectedWeight(Number(e.target.value))}
//           className="w-full p-2 border rounded bg-[var(--background-color)]"
//         >
//           <option value="">{language === 'en' ? 'Select weight' : 'أختر الوزن'}</option>
//           {weightOptions.map((weight) => (
//             <option key={weight} value={weight}>
//               {weight} kg
//             </option>
//           ))}
//         </select>
//       </div>
      
//       {/* Reps Selection */}
//       <div className="mb-4">
//         <label className="block mb-2">{language === 'en' ? 'Reps:' : 'التكرارات:'}</label>
//         <select
//           value={selectedReps || ''}
//           onChange={(e) => setSelectedReps(Number(e.target.value))}
//           className="w-full p-2 border rounded bg-[var(--background-color)]"
//         >
//           <option value="">{language === 'en' ? 'Select reps' : 'أختر التكرارات'}</option>
//           {repOptions.map((rep) => (
//             <option key={rep} value={rep}>
//               {rep} {language === 'en' ? 'reps' : 'تكرارات'}
//             </option>
//           ))}
//         </select>
//       </div>

//       <button
//         onClick={handleSaveWeights}
//         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//       >
//         {language === 'en' ? 'Save' : 'حفظ'}
//       </button>
//     </Modal>
//   );
// };

// export default WeightsModal;



import React, { useState } from 'react';
import Modal from '@/components/Modal';
import { useLanguage } from '@/contexts/LanguageContext';

interface Set {
  weight: number;
  reps: number;
}

interface Exercise {
  id: string;
  name: string;
  weights: number[];
  reps: number[];
}

interface ClientData {
  fullName: string;
}

interface WeightsModalProps {
  selectedExercise: Exercise | null;
  activeSetIndex: number | null;
  clientData: ClientData | null;
  onClose: () => void;
  onSave: (updatedExercise: Exercise) => void;
}

const WeightsModal: React.FC<WeightsModalProps> = ({
  selectedExercise,
  activeSetIndex,
  clientData,
  onClose,
  onSave,
}) => {
  const { language } = useLanguage();
  const [selectedWeight, setSelectedWeight] = useState<number | null>(null);
  const [selectedReps, setSelectedReps] = useState<number | null>(null);

  // Options for weights and reps (can be modified as needed)
  const weightOptions = Array.from({ length: 20 }, (_, i) => (i + 1) * 2.5); // 2.5, 5, 7.5, ... 50
  const repOptions = Array.from({ length: 20 }, (_, i) => i + 1); // 1 to 20 reps

  const handleSaveWeights = async () => {
    if (!selectedExercise || activeSetIndex === null || !clientData?.fullName) {
      console.error('Invalid data for saving weights and reps:', {
        fullName: clientData?.fullName || 'Missing',
        exerciseId: selectedExercise?.id || 'Missing exercise',
      });
      return;
    }

    try {
      const updatedExercise = { ...selectedExercise };
      updatedExercise.weights[activeSetIndex] = selectedWeight || 0;
      updatedExercise.reps[activeSetIndex] = selectedReps || 0;

      const response = await fetch('/api/assign-weights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: clientData.fullName,  // Ensure email is passed here
          exerciseId: selectedExercise.id,
          weights: updatedExercise.weights,
          reps: updatedExercise.reps,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error data:', errorData);
        throw new Error(errorData.message || 'Failed to save weights and reps');
      }

      onSave(updatedExercise);
      onClose();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4">
        {language === 'en' ? 'Set Weights and Reps' : 'تعيين الأوزان والتكرارات'}
      </h2>
      
      {/* Weight Selection */}
      <div className="mb-4">
        <label className="block mb-2">{language === 'en' ? 'Weight (kg):' : 'الوزن (كجم):'}</label>
        <select
          value={selectedWeight || ''}
          onChange={(e) => setSelectedWeight(Number(e.target.value))}
          className="w-full p-2 border rounded bg-[var(--background-color)]"
        >
          <option value="">{language === 'en' ? 'Select weight' : 'أختر الوزن'}</option>
          {weightOptions.map((weight) => (
            <option key={weight} value={weight}>
              {weight} kg
            </option>
          ))}
        </select>
      </div>
      
      {/* Reps Selection */}
      <div className="mb-4">
        <label className="block mb-2">{language === 'en' ? 'Reps:' : 'التكرارات:'}</label>
        <select
          value={selectedReps || ''}
          onChange={(e) => setSelectedReps(Number(e.target.value))}
          className="w-full p-2 border rounded bg-[var(--background-color)]"
        >
          <option value="">{language === 'en' ? 'Select reps' : 'أختر التكرارات'}</option>
          {repOptions.map((rep) => (
            <option key={rep} value={rep}>
              {rep} {language === 'en' ? 'reps' : 'تكرارات'}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleSaveWeights}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {language === 'en' ? 'Save' : 'حفظ'}
      </button>
    </Modal>
  );
};

export default WeightsModal;
