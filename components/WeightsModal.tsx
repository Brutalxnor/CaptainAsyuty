


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
//           email: clientData.fullName,  // Ensure email is passed here
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

//   const weightOptions = Array.from({ length: 20 }, (_, i) => (i + 1) * 2.5);
//   const repOptions = Array.from({ length: 20 }, (_, i) => i + 1);

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
//           email: clientData.fullName,
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
//       <div className="flex flex-col items-center text-center">
//         <h2 className="text-3xl font-semibold mb-6 text-[var(--primary-color)]">
//           {language === 'en' ? 'Set Weights and Reps' : 'تعيين الأوزان والتكرارات'}
//         </h2>

//         <div className="w-full mb-6">
//           <label className="block mb-2 text-lg text-[var(--text-color)]">
//             {language === 'en' ? 'Weight (kg):' : 'الوزن (كجم):'}
//           </label>
//           <select
//             value={selectedWeight || ''}
//             onChange={(e) => setSelectedWeight(Number(e.target.value))}
//             className="w-full p-3 border border-[var(--border-color)] rounded-lg bg-[var(--background-color)] text-[var(--text-color)] focus:ring focus:ring-[var(--primary-color)]"
//           >
//             <option value="">{language === 'en' ? 'Select weight' : 'أختر الوزن'}</option>
//             {weightOptions.map((weight) => (
//               <option key={weight} value={weight}>
//                 {weight} kg
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="w-full mb-6">
//           <label className="block mb-2 text-lg text-[var(--text-color)]">
//             {language === 'en' ? 'Reps:' : 'التكرارات:'}
//           </label>
//           <select
//             value={selectedReps || ''}
//             onChange={(e) => setSelectedReps(Number(e.target.value))}
//             className="w-full p-3 border border-[var(--border-color)] rounded-lg bg-[var(--background-color)] text-[var(--text-color)] focus:ring focus:ring-[var(--primary-color)]"
//           >
//             <option value="">{language === 'en' ? 'Select reps' : 'أختر التكرارات'}</option>
//             {repOptions.map((rep) => (
//               <option key={rep} value={rep}>
//                 {rep} {language === 'en' ? 'reps' : 'تكرارات'}
//               </option>
//             ))}
//           </select>
//         </div>

//                 <button
//           onClick={handleSaveWeights}
//           className="bg-blue-500 text-black dark:text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300"
//         >
//           {language === 'en' ? 'Save' : 'حفظ'}
//         </button>

//       </div>
//     </Modal>
//   );
// };

// export default WeightsModal;








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
//           email: clientData.fullName,
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
//       <div className="flex flex-col items-center text-center">
//         <h2 className="text-3xl font-semibold mb-6 text-[var(--primary-color)]">
//           {language === 'en' ? 'Set Weights and Reps' : 'تعيين الأوزان والتكرارات'}
//         </h2>

//         {/* Weight Input with Stepper */}
//         <div className="w-full mb-6">
//           <label className="block mb-2 text-lg text-[var(--text-color)]">
//             {language === 'en' ? 'Weight (kg):' : 'الوزن (كجم):'}
//           </label>
//           <input
//             type="number"
//             min="0"
//             max="500"
//             step="2.5"
//             value={selectedWeight || ''}
//             onChange={(e) => setSelectedWeight(Number(e.target.value))}
//             className="w-full p-3 border border-[var(--border-color)] rounded-lg bg-[var(--background-color)] text-[var(--text-color)] focus:ring focus:ring-[var(--primary-color)]"
//             placeholder={language === 'en' ? 'Enter weight (0 - 500kg)' : 'أدخل الوزن (0 - 500كجم)'}
//           />
//         </div>

//         {/* Reps Input with Stepper */}
//         <div className="w-full mb-6">
//           <label className="block mb-2 text-lg text-[var(--text-color)]">
//             {language === 'en' ? 'Reps:' : 'التكرارات:'}
//           </label>
//           <input
//             type="number"
//             min="1"
//             max="50"
//             value={selectedReps || ''}
//             onChange={(e) => setSelectedReps(Number(e.target.value))}
//             className="w-full p-3 border border-[var(--border-color)] rounded-lg bg-[var(--background-color)] text-[var(--text-color)] focus:ring focus:ring-[var(--primary-color)]"
//             placeholder={language === 'en' ? 'Enter reps (1 - 50)' : 'أدخل التكرارات (1 - 50)'}
//           />
//         </div>

//         {/* Save Button */}
//         <button
//           onClick={handleSaveWeights}
//           className="bg-blue-500 text-black dark:text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300"
//         >
//           {language === 'en' ? 'Save' : 'حفظ'}
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default WeightsModal;






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

// // interface WeightsModalProps {
// //   selectedExercise: Exercise | null;
// //   activeSetIndex: number | null;
// //   clientData: ClientData | null;
// //   onClose: () => void;
// //   onSave: (updatedExercise: Exercise) => void;
// // }


// // Update the WeightsModalProps interface to include the new handlers
// interface WeightsModalProps {
//   selectedExercise: Exercise;
//   activeSetIndex: number | null;
//   clientData: ClientData | null;
//   onClose: () => void;
//   // onSave: () => Promise<void>;
//   onSave: (updatedExercise: Exercise) => void;

//   onWeightChange: (setIndex: number, newWeight: number) => void;  // New prop
//   onRepsChange: (setIndex: number, newReps: number) => void;      // New prop
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
//           email: clientData.fullName,
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
//       <div className="flex flex-col items-center text-center">
//         <h2 className="text-3xl font-semibold mb-6 text-[var(--primary-color)]">
//           {language === 'en' ? 'Set Weights and Reps' : 'تعيين الأوزان والتكرارات'}
//         </h2>

//         {/* Weight Input with Stepper */}
//         <div className="w-full mb-6">
//           <label className="block mb-2 text-lg text-[var(--text-color)]">
//             {language === 'en' ? 'Weight (kg):' : 'الوزن (كجم):'}
//           </label>
//           <input
//             type="number"
//             min="0"
//             max="500"
//             step="2.5"
//             value={selectedWeight || ''}
//             onChange={(e) => setSelectedWeight(Number(e.target.value))}
//             className="w-full p-3 border border-[var(--border-color)] rounded-lg bg-[var(--background-color)] text-[var(--text-color)] focus:ring focus:ring-[var(--primary-color)]"
//             placeholder={language === 'en' ? 'Enter weight (0 - 500kg)' : 'أدخل الوزن (0 - 500كجم)'}
//           />
//         </div>

//         {/* Reps Input with Stepper */}
//         <div className="w-full mb-6">
//           <label className="block mb-2 text-lg text-[var(--text-color)]">
//             {language === 'en' ? 'Reps:' : 'التكرارات:'}
//           </label>
//           <input
//             type="number"
//             min="1"
//             max="50"
//             value={selectedReps || ''}
//             onChange={(e) => setSelectedReps(Number(e.target.value))}
//             className="w-full p-3 border border-[var(--border-color)] rounded-lg bg-[var(--background-color)] text-[var(--text-color)] focus:ring focus:ring-[var(--primary-color)]"
//             placeholder={language === 'en' ? 'Enter reps (1 - 50)' : 'أدخل التكرارات (1 - 50)'}
//           />
//         </div>

//         {/* Save Button */}
//         <button
//           onClick={handleSaveWeights}
//           className="bg-blue-500 text-black dark:text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300"
//         >
//           {language === 'en' ? 'Save' : 'حفظ'}
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default WeightsModal;








// import React, { useState, useEffect } from 'react';
// import Modal from '@/components/Modal';
// import { useLanguage } from '@/contexts/LanguageContext';

// interface Exercise {
//   id: string;
//   name: string;
//   weights: number[];
//   reps: number[];
// }

// interface ClientData {
//   fullName: string;
// }

// // interface WeightsModalProps {
// //   selectedExercise: Exercise;
// //   activeSetIndex: number | null;
// //   clientData: ClientData | null;
// //   onClose: () => void;
// //   onSave: (updatedExercise: Exercise) => void;
// // }

// interface WeightsModalProps {
//   selectedExercise: Exercise;
//   activeSetIndex: number | null;
//   clientData: ClientData | null;
//   onClose: () => void;
//   onSave: (updatedExercise: Exercise) => void;

//   onWeightChange: (setIndex: number, newWeight: number) => void;  // Include onWeightChange prop
//   onRepsChange: (setIndex: number, newReps: number) => void;      // Include onRepsChange prop
// }



// const WeightsModal: React.FC<WeightsModalProps> = ({
//   selectedExercise,
//   activeSetIndex,
//   clientData,
//   onClose,
//   onSave,
//   onWeightChange,  // Accept the handler as a prop
//   onRepsChange  
// }) => {
//   const { language } = useLanguage();
  
//   // Initialize weight and reps from selected exercise's current set values
//   const [selectedWeight, setSelectedWeight] = useState<number>(selectedExercise.weights[activeSetIndex!] || 0);
//   const [selectedReps, setSelectedReps] = useState<number>(selectedExercise.reps[activeSetIndex!] || 0);

//   // Make sure weight and reps are updated when the modal opens
//   useEffect(() => {
//     if (activeSetIndex !== null) {
//       setSelectedWeight(selectedExercise.weights[activeSetIndex] || 0);
//       setSelectedReps(selectedExercise.reps[activeSetIndex] || 0);
//     }
//   }, [activeSetIndex, selectedExercise]);

//   const handleSaveWeights = async () => {
//     if (!selectedExercise || activeSetIndex === null || !clientData?.fullName) {
//       console.error('Invalid data for saving weights and reps:', {
//         fullName: clientData?.fullName || 'Missing',
//         exerciseId: selectedExercise?.id || 'Missing exercise',
//       });
//       return;
//     }

//     try {
//       // Update the selected exercise with new weights and reps
//       const updatedExercise = { ...selectedExercise };
//       updatedExercise.weights[activeSetIndex] = selectedWeight;
//       updatedExercise.reps[activeSetIndex] = selectedReps;

//       // Send the updated values to the API
//       const response = await fetch('/api/assign-weights', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: clientData.fullName,
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

//       onSave(updatedExercise); // Call the parent component to update the exercise
//       onClose(); // Close the modal
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <Modal onClose={onClose}>
//       <div className="flex flex-col items-center text-center">
//         <h2 className="text-3xl font-semibold mb-6 text-[var(--primary-color)]">
//           {language === 'en' ? 'Set Weights and Reps' : 'تعيين الأوزان والتكرارات'}
//         </h2>

//         {/* Weight Input */}
//         <div className="w-full mb-6">
//           <label className="block mb-2 text-lg text-[var(--text-color)]">
//             {language === 'en' ? 'Weight (kg):' : 'الوزن (كجم):'}
//           </label>
//           <input
//             type="number"
//             min="0"
//             max="500"
//             step="2.5"
//             value={selectedWeight}
//             onChange={(e) => {
//               const newWeight = Number(e.target.value);
//               setSelectedWeight(newWeight);
//               onWeightChange(activeSetIndex!, newWeight);  // Call the handler when the value changes
//             }}
//             className="w-full p-3 border border-[var(--border-color)] rounded-lg bg-[var(--background-color)] text-[var(--text-color)] focus:ring focus:ring-[var(--primary-color)]"
//             placeholder={language === 'en' ? 'Enter weight (0 - 500kg)' : 'أدخل الوزن (0 - 500كجم)'}
//           />
//         </div>

//         {/* Reps Input */}
//         <div className="w-full mb-6">
//           <label className="block mb-2 text-lg text-[var(--text-color)]">
//             {language === 'en' ? 'Reps:' : 'التكرارات:'}
//           </label>
//           <input
//             type="number"
//             min="1"
//             max="50"
//             value={selectedReps}
//             onChange={(e) => {
//               const newReps = Number(e.target.value);
//               setSelectedReps(newReps);
//               onRepsChange(activeSetIndex!, newReps);  // Call the handler when the value changes
//             }}
//             className="w-full p-3 border border-[var(--border-color)] rounded-lg bg-[var(--background-color)] text-[var(--text-color)] focus:ring focus:ring-[var(--primary-color)]"
//             placeholder={language === 'en' ? 'Enter reps (1 - 50)' : 'أدخل التكرارات (1 - 50)'}
//           />
//         </div>

//         {/* Save Button */}
//         <button
//           onClick={handleSaveWeights}
//           className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300"
//         >
//           {language === 'en' ? 'Save' : 'حفظ'}
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default WeightsModal;




import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { useLanguage } from '@/contexts/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Slider from '@mui/material/Slider'; // Use Material-UI slider for modern input control

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
  selectedExercise: Exercise;
  activeSetIndex: number | null;
  clientData: ClientData | null;
  onClose: () => void;
  onSave: (updatedExercise: Exercise) => void;
  onWeightChange: (setIndex: number, newWeight: number) => void;
  onRepsChange: (setIndex: number, newReps: number) => void;
}

const WeightsModal: React.FC<WeightsModalProps> = ({
  selectedExercise,
  activeSetIndex,
  clientData,
  onClose,
  onSave,
  onWeightChange,
  onRepsChange
}) => {
  const { language } = useLanguage();
  const [selectedWeight, setSelectedWeight] = useState<number>(selectedExercise.weights[activeSetIndex!] || 0);
  const [selectedReps, setSelectedReps] = useState<number>(selectedExercise.reps[activeSetIndex!] || 0);

  // Initialize values when the modal opens
  useEffect(() => {
    if (activeSetIndex !== null) {
      setSelectedWeight(selectedExercise.weights[activeSetIndex] || 0);
      setSelectedReps(selectedExercise.reps[activeSetIndex] || 0);
    }
  }, [activeSetIndex, selectedExercise]);

  const handleSaveWeights = async () => {
    if (!selectedExercise || activeSetIndex === null || !clientData?.fullName) {
      console.error('Invalid data for saving weights and reps:', {
        fullName: clientData?.fullName || 'Missing',
        exerciseId: selectedExercise?.id || 'Missing exercise',
      });
      return;
    }

    try {
      // Update the selected exercise with new weights and reps
      const updatedExercise = { ...selectedExercise };
      updatedExercise.weights[activeSetIndex] = selectedWeight;
      updatedExercise.reps[activeSetIndex] = selectedReps;

      // Send the updated values to the API
      const response = await fetch('/api/assign-weights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: clientData.fullName,
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

      onSave(updatedExercise); // Call the parent component to update the exercise
      onClose(); // Close the modal
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col items-center text-center space-y-6 p-6">
        <h2 className="text-4xl font-semibold text-[var(--primary-color)]">
          {language === 'en' ? 'Set Weights and Reps' : 'تعيين الأوزان والتكرارات'}
        </h2>

        {/* Weight Section with Slider */}
        <div className="w-full mb-4">
          <label className="block mb-2 text-lg text-[var(--text-color)]">
            {language === 'en' ? 'Weight (kg)' : 'الوزن (كجم)'}
          </label>
          <div className="flex items-center justify-between space-x-4">
            {/* Decrease Weight */}
            <button
              onClick={() => {
                const newWeight = Math.max(0, selectedWeight - 2.5);
                setSelectedWeight(newWeight);
                onWeightChange(activeSetIndex!, newWeight);
              }}
              className="bg-red-500 text-white p-2 rounded-full"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>

            {/* Weight Slider */}
            <Slider
              value={selectedWeight}
              onChange={(e, newValue) => {
                const weight = newValue as number;
                setSelectedWeight(weight);
                onWeightChange(activeSetIndex!, weight);
              }}
              step={2.5}
              min={0}
              max={500}
              valueLabelDisplay="on"
              className="w-2/3"
            />

            {/* Increase Weight */}
            <button
              onClick={() => {
                const newWeight = Math.min(500, selectedWeight + 2.5);
                setSelectedWeight(newWeight);
                onWeightChange(activeSetIndex!, newWeight);
              }}
              className="bg-green-500 text-white p-2 rounded-full"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        {/* Reps Section with Slider */}
        <div className="w-full mb-4">
          <label className="block mb-2 text-lg text-[var(--text-color)]">
            {language === 'en' ? 'Reps' : 'التكرارات'}
          </label>
          <div className="flex items-center justify-between space-x-4">
            {/* Decrease Reps */}
            <button
              onClick={() => {
                const newReps = Math.max(1, selectedReps - 1);
                setSelectedReps(newReps);
                onRepsChange(activeSetIndex!, newReps);
              }}
              className="bg-red-500 text-white p-2 rounded-full"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>

            {/* Reps Slider */}
            <Slider
              value={selectedReps}
              onChange={(e, newValue) => {
                const reps = newValue as number;
                setSelectedReps(reps);
                onRepsChange(activeSetIndex!, reps);
              }}
              step={1}
              min={1}
              max={50}
              valueLabelDisplay="on"
              className="w-2/3"
            />

            {/* Increase Reps */}
            <button
              onClick={() => {
                const newReps = Math.min(50, selectedReps + 1);
                setSelectedReps(newReps);
                onRepsChange(activeSetIndex!, newReps);
              }}
              className="bg-green-500 text-white p-2 rounded-full"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSaveWeights}
          className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 w-full"
        >
          {language === 'en' ? 'Save' : 'حفظ'}
        </button>
      </div>
    </Modal>
  );
};

export default WeightsModal;
