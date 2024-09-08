


// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import DashboardLayout from '@/components/DashboardLayout';
// import { useAuth } from '@/contexts/AuthContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faTasks, faTrash } from '@fortawesome/free-solid-svg-icons';

// interface Nutrition {
//   type: string;
//   quantity: string;
// }

// interface NutritionOption {
//   type: string;
//   quantity?: string;
// }

// const nutritionTypes = ['Calories', 'Fats', 'Carbs'];

// const AdminAddNutrition = () => {
//   const router = useRouter();
//   const { user } = useAuth();
//   const { clientEmail } = router.query;
//   const [clients, setClients] = useState([]);
//   const [selectedClient, setSelectedClient] = useState(clientEmail || '');
//   const [nutritions, setNutritions] = useState<NutritionOption[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await fetch('/api/adminAddExercise');
//         const data = await response.json();
//         setClients(data.clients);
//       } catch (error) {
//         console.error('Error fetching clients:', error);
//       }
//     };

//     fetchClients();
//   }, []);

//   useEffect(() => {
//     if (selectedClient) {
//       const fetchNutritionData = async () => {
//         try {
//           const response = await fetch(`/api/nutrition?email=${selectedClient}`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch nutrition data');
//           }
//           const data = await response.json();
//           setNutritions(data.nutritions || []);
//         } catch (error) {
//           console.error('Error fetching nutrition data:', error);
//         }
//       };

//       fetchNutritionData();
//     }
//   }, [selectedClient]);

//   const handleAssignNutrition = async () => {
//     try {
//       const response = await fetch('/api/adminAddNutrition', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: selectedClient, nutritions }),
//       });

//       if (!response.ok) throw new Error('Error assigning nutrition');
//       const data = await response.json();
//       console.log(data.message);
//       router.push('/dashboard');
//     } catch (error: any) {
//       console.error('Error:', error);
//       setError(error.message);
//     }
//   };

//   const handleNutritionChange = (index: number, field: string, value: string) => {
//     const updatedNutritions = nutritions.map((nutrition, idx) => {
//       if (idx === index) {
//         return { ...nutrition, [field]: value };
//       }
//       return nutrition;
//     });

//     setNutritions(updatedNutritions);
//   };

//   const handleAddNutrition = () => {
//     setNutritions([...nutritions, { type: '', quantity: '' }]);
//   };

//   const handleRemoveNutrition = (index: number) => {
//     const updatedNutritions = nutritions.filter((_, idx) => idx !== index);
//     setNutritions(updatedNutritions);
//   };

//   const renderNutritionTable = () => (
//     <div className="mb-4">
//       <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center ">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Nutrition Type</th>
//             <th className="py-2 px-4 border-b">Quantity</th>
//             <th className="py-2 px-4 border-b">Remove</th>
//           </tr>
//         </thead>
//         <tbody>
//           {nutritions.map((nutrition, index) => (
//             <tr key={index}>
//               <td className="py-2 px-4 border-b">
//                 <select
//                   value={nutrition.type}
//                   onChange={(e) => handleNutritionChange(index, 'type', e.target.value)}
//                   className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
//                 >
//                   <option value="" disabled>Select Nutrition</option>
//                   {nutritionTypes.map(type => (
//                     <option key={type} value={type}>
//                       {type}
//                     </option>
//                   ))}
//                 </select>
//               </td>
//               <td className="py-2 px-4 border-b">
//                 <input
//                   type="text"
//                   value={nutrition.quantity}
//                   onChange={(e) => handleNutritionChange(index, 'quantity', e.target.value)}
//                   className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
//                 />
//               </td>
//               <td className="py-2 px-4 border-b">
//                 <button
//                   onClick={() => handleRemoveNutrition(index)}
//                   className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md flex items-center justify-center"
//                 >
//                   <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button
//         onClick={handleAddNutrition}
//         className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 w-full mt-4"
//       >
//         <FontAwesomeIcon icon={faPlus} className="h-6 w-6" />
//       </button>
//       <button
//         onClick={handleAssignNutrition}
//         className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200 w-full mt-4"
//       >
//         <FontAwesomeIcon icon={faTasks} className="h-6 w-6" />
//       </button>
//       {error && <p className="text-red-500 mt-2">Error: {error}</p>}
//     </div>
//   );

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col min-h-screen ">
//         <div className=" max-w-lg p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg overflow-y-auto max-w-sm md:max-w-2xl lg:max-w-5xl" >
//           <h1 className="text-2xl font-bold mb-4 text-center">Assign Nutrition</h1>
//           <div className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
//             <label className="block text-center">Select Client:</label>
//             <select
//               value={selectedClient}
//               onChange={(e) => setSelectedClient(e.target.value)}
//               className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
//             >
//               <option value="" disabled>Select a client</option>
//               {clients.map((client: any) => (
//                 <option key={client.email} value={client.email}>
//                   {client.fullName} ({client.email})
//                 </option>
//               ))}
//             </select>
//           </div>
//           {renderNutritionTable()}
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AdminAddNutrition;





import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTasks, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Nutrition {
  type: string;
  quantity: string;
}

interface NutritionOption {
  type: string;
  quantity?: string;
}

const nutritionTypes = ['Fats', 'Carbs', 'Protein'];

const AdminAddNutrition = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { clientEmail } = router.query;
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(clientEmail || '');
  const [nutritions, setNutritions] = useState<NutritionOption[]>([]);
  const [error, setError] = useState<string | null>(null);

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
    if (selectedClient) {
      const fetchNutritionData = async () => {
        try {
          const response = await fetch(`/api/nutrition?email=${selectedClient}`);
          if (!response.ok) {
            throw new Error('Failed to fetch nutrition data');
          }
          const data = await response.json();
          setNutritions(data.nutritions || []);
        } catch (error) {
          console.error('Error fetching nutrition data:', error);
        }
      };

      fetchNutritionData();
    }
  }, [selectedClient]);

  const handleAssignNutrition = async () => {
    try {
      const response = await fetch('/api/adminAddNutrition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: selectedClient, nutritions }),
      });

      if (!response.ok) throw new Error('Error assigning nutrition');
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  const handleNutritionChange = (index: number, field: string, value: string) => {
    const updatedNutritions = nutritions.map((nutrition, idx) => {
      if (idx === index) {
        return { ...nutrition, [field]: value };
      }
      return nutrition;
    });

    setNutritions(updatedNutritions);
  };

  const handleAddNutrition = () => {
    setNutritions([...nutritions, { type: '', quantity: '' }]);
  };

  const handleRemoveNutrition = (index: number) => {
    const updatedNutritions = nutritions.filter((_, idx) => idx !== index);
    setNutritions(updatedNutritions);
  };

  const calculateFinalCalories = (): number => {
    return nutritions.reduce((total, nutrition) => {
      const quantity = nutrition.quantity || "0"; // Provide a default value if undefined
  
      if (nutrition.type === 'Fats') {
        return total + parseFloat(quantity) * 9;
      } else if (nutrition.type === 'Carbs' || nutrition.type === 'Protein') {
        return total + parseFloat(quantity) * 4;
      }
      return total;
    }, 0);
  };
  

  return (
    <DashboardLayout>
      <div className="flex flex-col min-h-screen ">
        <div className=" max-w-lg p-6 bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] rounded-lg shadow-lg overflow-y-auto w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto" >
          <h1 className="text-2xl font-bold mb-4 text-center">Assign Nutrition</h1>
          <div className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] mb-4">
            <label className="block text-center">Select Client:</label>
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
          <div className="mb-4">
            <table className="min-w-full bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] text-center ">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Nutrition Type</th>
                  <th className="py-2 px-4 border-b">Quantity (g)</th>
                  <th className="py-2 px-4 border-b">Remove</th>
                </tr>
              </thead>
              <tbody>
                {nutritions.map((nutrition, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">
                      <select
                        value={nutrition.type}
                        onChange={(e) => handleNutritionChange(index, 'type', e.target.value)}
                        className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                      >
                        <option value="" disabled>Select Nutrition</option>
                        {nutritionTypes.map(type => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <input
                        type="text"
                        value={nutrition.quantity}
                        onChange={(e) => handleNutritionChange(index, 'quantity', e.target.value)}
                        className="block w-full mt-1 p-2 border-[var(--select-border-color)] bg-[var(--select-background-color)] text-[var(--select-text-color)] rounded-md"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleRemoveNutrition(index)}
                        className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md flex items-center justify-center"
                      >
                        <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleAddNutrition}
              className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200 w-full mt-4"
            >
              <FontAwesomeIcon icon={faPlus} className="h-6 w-6" />
            </button>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Final Calories: {calculateFinalCalories()}</h3>
            </div>
            <button
              onClick={handleAssignNutrition}
              className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200 w-full mt-4"
            >
              <FontAwesomeIcon icon={faTasks} className="h-6 w-6" />
            </button>
            {error && <p className="text-red-500 mt-2">Error: {error}</p>}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminAddNutrition;
