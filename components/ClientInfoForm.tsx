// // components/ClientInfoForm.tsx
// import React, { useState } from 'react';

// const ClientInfoForm = ({ onSave }: { onSave: (data: any) => void }) => {
//   const [formData, setFormData] = useState({
//     weight: '',
//     height: '',
//     age: '',
//     fatWeight: '',
//     muscleWeight: '',
//     musclePercentage: '',
//     fatPercentage: '',
//     waistMeasurement: '',
//     rightArmMeasurement: '',
//     leftArmMeasurement: '',
//     rightLegMeasurement: '',
//     leftLegMeasurement: '',
//     frontImage: null,
//     backImage: null,
//     rightSideImage: null,
//     leftSideImage: null,
//     sugarCravings: '',
//     previousInjuries: '',
//     diabetes: '',
//     bloodPressure: '',
//     onlineTrainingExperience: '',
//     trainingAge: '',
//     workoutSets: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, files } = e.target;
//     if (files) {
//       setFormData({ ...formData, [name]: files[0] });
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label>الوزن (kg)</label>
//           <input type="text" name="weight" value={formData.weight} onChange={handleChange} />
//         </div>
//         <div>
//           <label>الطول (cm)</label>
//           <input type="text" name="height" value={formData.height} onChange={handleChange} />
//         </div>
//         {/* Add more fields as shown in the image */}
//         <div>
//           <label>العمر</label>
//           <input type="text" name="age" value={formData.age} onChange={handleChange} />
//         </div>
//         <div>
//           <label>وزن الدهون (kg)</label>
//           <input type="text" name="fatWeight" value={formData.fatWeight} onChange={handleChange} />
//         </div>
//         {/* Continue adding fields for all form data */}
//         <div>
//           <label>صورة للوجه الأمامي</label>
//           <input type="file" name="frontImage" onChange={handleFileChange} />
//         </div>
//         <div>
//           <label>صورة للوجه الخلفي</label>
//           <input type="file" name="backImage" onChange={handleFileChange} />
//         </div>
//         {/* Add file inputs for side images */}
//       </div>
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default ClientInfoForm;




// const ClientInfoForm = ({ onSave }: { onSave: (data: any) => void }) => {
//   const [fullName, setFullName] = useState('');
//   const [weight, setWeight] = useState('');
//   const [height, setHeight] = useState('');
//   const [age, setAge] = useState('');
//   const [fatWeight, setFatWeight] = useState('');
//   const [muscleWeight, setMuscleWeight] = useState('');
//   const [musclePercentage, setMusclePercentage] = useState('');
//   const [fatPercentage, setFatPercentage] = useState('');
//   const [waistMeasurement, setWaistMeasurement] = useState('');
//   const [rightArmMeasurement, setRightArmMeasurement] = useState('');
//   const [leftArmMeasurement, setLeftArmMeasurement] = useState('');
//   const [rightLegMeasurement, setRightLegMeasurement] = useState('');
//   const [leftLegMeasurement, setLeftLegMeasurement] = useState('');
//   const [frontImage, setFrontImage] = useState<File | null>(null);
//   const [backImage, setBackImage] = useState<File | null>(null);
//   const [rightSideImage, setRightSideImage] = useState<File | null>(null);
//   const [leftSideImage, setLeftSideImage] = useState<File | null>(null);

//   const [sugarCravings, setSugarCravings] = useState('');
//   const [previousInjuries, setPreviousInjuries] = useState('');
//   const [diabetes, setDiabetes] = useState('');
//   const [bloodPressure, setBloodPressure] = useState('');
//   const [onlineTrainingExperience, setOnlineTrainingExperience] = useState('');
//   const [trainingAge, setTrainingAge] = useState('');
//   const [workoutSets, setWorkoutSets] = useState('');

//   const handleSubmit = async (event: React.FormEvent) => {
  //     event.preventDefault();
  //     const data = {
    //       fullName,
//       weight,
//       height,
//       age,
//       fatWeight,
//       muscleWeight,
//       musclePercentage,
//       fatPercentage,
//       waistMeasurement,
//       rightArmMeasurement,
//       leftArmMeasurement,
//       rightLegMeasurement,
//       leftLegMeasurement,
//       frontImage,
//       backImage,
//       rightSideImage,
//       leftSideImage,
//       sugarCravings,
//       previousInjuries,
//       diabetes,
//       bloodPressure,
//       onlineTrainingExperience,
//       trainingAge,
//       workoutSets,
//     };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import router from 'next/router';
// import React, { useState } from 'react';

// const ClientInfoForm = ({ onSave }: { onSave: (data: any) => void }) => {
//   const [email, setEmail] = useState('');
//   const [data, setData] = useState({
//     fullName: '',
//     weight: '',
//     height: '',
//     age: '',
//     fatWeight: '',
//     muscleWeight: '',
//     musclePercentage: '',
//     fatPercentage: '',
//     waistMeasurement: '',
//     rightArmMeasurement: '',
//     leftArmMeasurement: '',
//     rightLegMeasurement: '',
//     leftLegMeasurement: '',
//     frontImage: null,
//     backImage: null,
//     rightSideImage: null,
//     leftSideImage: null,
//     sugarCravings: '',
//     previousInjuries: '',
//     diabetes: '',
//     bloodPressure: '',
//     onlineTrainingExperience: '',
//     trainingAge: '',
//     workoutSets: ''
//   });



// const response = await fetch('/api/clients', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       onSave(data);
//       router.push('/dashboard/client');
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name } = e.target;
//     const file = e.target.files ? e.target.files[0] : null;
//     setData((prevData) => ({ ...prevData, [name]: file }));
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     onSave({ email, ...data });
//   };



//   return (
//     <div className="flex justify-center bg-white">
//       <div className="h-full w-full max-w-lg p-6 bg-white rounded-lg shadow-sm overflow-y-auto" style={{ maxHeight: '50vh' }}>
//         <form onSubmit={handleSubmit} >

//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>الاسم </label>
//             <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}
//                     className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                     focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>الوزن (kg)</label>
//             <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)}
//                     className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                     focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>الطول (cm)</label>
//             <input type="text" value={height} onChange={(e) => setHeight(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>العمر</label>
//             <input type="text" value={age} onChange={(e) => setAge(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>وزن الدهون (kg)</label>
//             <input type="text" value={fatWeight} onChange={(e) => setFatWeight(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>وزن العضلات (kg)</label>
//             <input type="text" value={muscleWeight} onChange={(e) => setMuscleWeight(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>نسبة العضلات (%)</label>
//             <input type="text" value={musclePercentage} onChange={(e) => setMusclePercentage(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>نسبة الدهون (%)</label>
//             <input type="text" value={fatPercentage} onChange={(e) => setFatPercentage(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>محيط الخصر (cm)</label>
//             <input type="text" value={waistMeasurement} onChange={(e) => setWaistMeasurement(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>محيط الذراع الأيمن (cm)</label>
//             <input type="text" value={rightArmMeasurement} onChange={(e) => setRightArmMeasurement(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>محيط الذراع الأيسر (cm)</label>
//             <input type="text" value={leftArmMeasurement} onChange={(e) => setLeftArmMeasurement(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>محيط الساق الأيمن (cm)</label>
//             <input type="text" value={rightLegMeasurement} onChange={(e) => setRightLegMeasurement(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>محيط الساق الأيسر (cm)</label>
//             <input type="text" value={leftLegMeasurement} onChange={(e) => setLeftLegMeasurement(e.target.value)}
//                 className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2">
//             <label className='mt-5 mb-5'>صورة للوجه الأمامي</label>
//             <input type="file" onChange={(e) => setFrontImage(e.target.files ? e.target.files[0] : null)}
//                   className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4
//                   file:rounded-full file:border-0
//                   file:text-sm file:font-semibold
//                   file:bg-black-50 file:text-white-700
//                   hover:file:bg-blue-100 mt-5 mb-5"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2">
//             <label className='mt-5 mb-5'>صورة للوجه الخلفي</label>
//             <input type="file" onChange={(e) => setBackImage(e.target.files ? e.target.files[0] : null)}
//                   className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4
//                   file:rounded-full file:border-0
//                   file:text-sm file:font-semibold
//                   file:bg-black-50 file:text-white-700
//                   hover:file:bg-blue-100 mt-5 mb-5"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2">
//             <label className='mt-5 mb-5'>صورة للجانب الأيمن</label>
//             <input type="file" onChange={(e) => setRightSideImage(e.target.files ? e.target.files[0] : null)}
//                   className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4
//                   file:rounded-full file:border-0
//                   file:text-sm file:font-semibold
//                   file:bg-black-50 file:text-white-700
//                   hover:file:bg-blue-100 mt-5 mb-5"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2">
//             <label className='mt-5 mb-5'>صورة للجانب الأيسر</label>
//             <input type="file" onChange={(e) => setLeftSideImage(e.target.files ? e.target.files[0] : null)}
//                   className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4
//                   file:rounded-full file:border-0
//                   file:text-sm file:font-semibold
//                   file:bg-black-50 file:text-white-700
//                   hover:file:bg-blue-100 mt-5 mb-5"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>اشتهاء السكر</label>
//             <input type="text" value={sugarCravings} onChange={(e) => setSugarCravings(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>إصابات سابقة</label>
//             <input type="text" value={previousInjuries} onChange={(e) => setPreviousInjuries(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>مرض السكري</label>
//             <input type="text" value={diabetes} onChange={(e) => setDiabetes(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>ضغط الدم</label>
//             <input type="text" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
//             <label>مجموعات التمرين</label>
//             <input type="text" value={workoutSets} onChange={(e) => setWorkoutSets(e.target.value)}
//                   className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
//                   focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
//             />
//           </div>
//           <button type="submit">Save</button>
//         </form>
//       </div>
//     </div>   
//   );
// };

// export default ClientInfoForm;





// import router from 'next/router';
// import React, { useState } from 'react';

// const ClientInfoForm = ({ onSave }: { onSave: (data: any) => void }) => {
//   const [email, setEmail] = useState('');
//   const [data, setData] = useState({
//     fullName: '',
//     weight: '',
//     height: '',
//     age: '',
//     fatWeight: '',
//     muscleWeight: '',
//     musclePercentage: '',
//     fatPercentage: '',
//     waistMeasurement: '',
//     rightArmMeasurement: '',
//     leftArmMeasurement: '',
//     rightLegMeasurement: '',
//     leftLegMeasurement: '',
//     frontImage: null,
//     backImage: null,
//     rightSideImage: null,
//     leftSideImage: null,
//     sugarCravings: '',
//     previousInjuries: '',
//     diabetes: '',
//     bloodPressure: '',
//     onlineTrainingExperience: '',
//     trainingAge: '',
//     workoutSets: ''
//   });

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     const response = await fetch('/api/clients', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, ...data }),
//     });

//     if (response.ok) {
//       onSave({ email, ...data });
//       router.push('/dashboard/client');
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name } = e.target;
//     const file = e.target.files ? e.target.files[0] : null;
//     setData((prevData) => ({ ...prevData, [name]: file }));
//   };



import router from 'next/router';
import React, { useState } from 'react';

const ClientInfoForm = ({ onSave }: { onSave: (data: any) => void }) => {
  const [email, setEmail] = useState('');
  const [data, setData] = useState({
    fullName: '',
    weight: '',
    height: '',
    age: '',
    fatWeight: '',
    muscleWeight: '',
    musclePercentage: '',
    fatPercentage: '',
    waistMeasurement: '',
    rightArmMeasurement: '',
    leftArmMeasurement: '',
    rightLegMeasurement: '',
    leftLegMeasurement: '',
    frontImage: null,
    backImage: null,
    rightSideImage: null,
    leftSideImage: null,
    sugarCravings: '',
    previousInjuries: '',
    diabetes: '',
    bloodPressure: '',
    onlineTrainingExperience: '',
    trainingAge: '',
    workoutSets: ''
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const clientData = { email, ...data };

    const response = await fetch('/api/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });

    if (response.ok) {
      onSave(clientData);
      router.push('/dashboard/client');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files ? e.target.files[0] : null;
    setData((prevData) => ({ ...prevData, [name]: file }));
  };


  return (
    <div className="flex justify-center bg-white">
      <div className="h-full w-full max-w-lg p-6 bg-white rounded-lg shadow-sm overflow-y-auto" style={{ maxHeight: '50vh' }}>
        <form onSubmit={handleSubmit} >
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>الاسم </label>
            <input
              type="text"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>الوزن (kg)</label>
            <input
              type="text"
              name="weight"
              value={data.weight}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>الطول (cm)</label>
            <input
              type="text"
              name="height"
              value={data.height}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>العمر</label>
            <input
              type="text"
              name="age"
              value={data.age}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>وزن الدهون (kg)</label>
            <input
              type="text"
              name="fatWeight"
              value={data.fatWeight}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>وزن العضلات (kg)</label>
            <input
              type="text"
              name="muscleWeight"
              value={data.muscleWeight}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>نسبة العضلات (%)</label>
            <input
              type="text"
              name="musclePercentage"
              value={data.musclePercentage}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>نسبة الدهون (%)</label>
            <input
              type="text"
              name="fatPercentage"
              value={data.fatPercentage}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>محيط الخصر (cm)</label>
            <input
              type="text"
              name="waistMeasurement"
              value={data.waistMeasurement}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>محيط الذراع الأيمن (cm)</label>
            <input
              type="text"
              name="rightArmMeasurement"
              value={data.rightArmMeasurement}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>محيط الذراع الأيسر (cm)</label>
            <input
              type="text"
              name="leftArmMeasurement"
              value={data.leftArmMeasurement}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>محيط الساق الأيمن (cm)</label>
            <input
              type="text"
              name="rightLegMeasurement"
              value={data.rightLegMeasurement}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>محيط الساق الأيسر (cm)</label>
            <input
              type="text"
              name="leftLegMeasurement"
              value={data.leftLegMeasurement}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <label className='mt-5 mb-5'>صورة للوجه الأمامي</label>
            <input
              type="file"
              name="frontImage"
              onChange={handleFileChange}
              className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-black-50 file:text-white-700
              hover:file:bg-blue-100 mt-5 mb-5"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <label className='mt-5 mb-5'>صورة للوجه الخلفي</label>
            <input
              type="file"
              name="backImage"
              onChange={handleFileChange}
              className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-black-50 file:text-white-700
              hover:file:bg-blue-100 mt-5 mb-5"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <label className='mt-5 mb-5'>صورة للجانب الأيمن</label>
            <input
              type="file"
              name="rightSideImage"
              onChange={handleFileChange}
              className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-black-50 file:text-white-700
              hover:file:bg-blue-100 mt-5 mb-5"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <label className='mt-5 mb-5'>صورة للجانب الأيسر</label>
            <input
              type="file"
              name="leftSideImage"
              onChange={handleFileChange}
              className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent overflow-x-auto file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-black-50 file:text-white-700
              hover:file:bg-blue-100 mt-5 mb-5"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>اشتهاء السكر</label>
            <input
              type="text"
              name="sugarCravings"
              value={data.sugarCravings}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>إصابات سابقة</label>
            <input
              type="text"
              name="previousInjuries"
              value={data.previousInjuries}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>مرض السكري</label>
            <input
              type="text"
              name="diabetes"
              value={data.diabetes}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>ضغط الدم</label>
            <input
              type="text"
              name="bloodPressure"
              value={data.bloodPressure}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>الخبرة في التدريب عبر الإنترنت</label>
            <input
              type="text"
              name="onlineTrainingExperience"
              value={data.onlineTrainingExperience}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>سن التدريب</label>
            <input
              type="text"
              name="trainingAge"
              value={data.trainingAge}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 mb-5">
            <label>مجموعات التمرين</label>
            <input
              type="text"
              name="workoutSets"
              value={data.workoutSets}
              onChange={handleChange}
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-0.5 focus:ring-sky-500 overflow-x-auto"
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>   
  );
};

export default ClientInfoForm;
