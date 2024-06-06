// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import DashboardLayout from '@/components/DashboardLayout';

// interface ClientData {
//   email: string;
//   data: {
//     weight: string;
//     height: string;
//     age: string;
//     fatWeight: string;
//     muscleWeight: string;
//     musclePercentage: string;
//     fatPercentage: string;
//     waistMeasurement: string;
//     rightArmMeasurement: string;
//     leftArmMeasurement: string;
//     rightLegMeasurement: string;
//     leftLegMeasurement: string;
//     frontImage: File | null;
//     backImage: File | null;
//     rightSideImage: File | null;
//     leftSideImage: File | null;
//     sugarCravings: string;
//     previousInjuries: string;
//     diabetes: string;
//     bloodPressure: string;
//     onlineTrainingExperience: string;
//     trainingAge: string;
//     workoutSets: string;
//   };
// }

// const AdminClientDetailPage = () => {
//   const router = useRouter();
//   const [client, setClient] = useState<ClientData | null>(null);

//   useEffect(() => {
//     const { email } = router.query;
//     if (email) {
//       // Fetch client data from the API using email
//       fetch(`/api/clients`)
//         .then(response => response.json())
//         .then(data => {
//           const clientData = data.find((client: ClientData) => client.email === email);
//           setClient(clientData);
//         })
//         .catch(error => console.error('Error fetching client data:', error));
//     }
//   }, [router.query]);

//   return (
//     <DashboardLayout className="no-rounded">
//       <h1 className="text-2xl font-bold">Client Details</h1>
//       {client ? (
//         <div>
//           <h2>{client.email}</h2>
//           <div>
//             <p><strong>Weight:</strong> {client.data.weight} kg</p>
//             <p><strong>Height:</strong> {client.data.height} cm</p>
//             <p><strong>Age:</strong> {client.data.age}</p>
//             <p><strong>Fat Weight:</strong> {client.data.fatWeight} kg</p>
//             <p><strong>Muscle Weight:</strong> {client.data.muscleWeight} kg</p>
//             <p><strong>Muscle Percentage:</strong> {client.data.musclePercentage} %</p>
//             <p><strong>Fat Percentage:</strong> {client.data.fatPercentage} %</p>
//             <p><strong>Waist Measurement:</strong> {client.data.waistMeasurement} cm</p>
//             <p><strong>Right Arm Measurement:</strong> {client.data.rightArmMeasurement} cm</p>
//             <p><strong>Left Arm Measurement:</strong> {client.data.leftArmMeasurement} cm</p>
//             <p><strong>Right Leg Measurement:</strong> {client.data.rightLegMeasurement} cm</p>
//             <p><strong>Left Leg Measurement:</strong> {client.data.leftLegMeasurement} cm</p>
//             <p><strong>Sugar Cravings:</strong> {client.data.sugarCravings}</p>
//             <p><strong>Previous Injuries:</strong> {client.data.previousInjuries}</p>
//             <p><strong>Diabetes:</strong> {client.data.diabetes}</p>
//             <p><strong>Blood Pressure:</strong> {client.data.bloodPressure}</p>
//             <p><strong>Online Training Experience:</strong> {client.data.onlineTrainingExperience}</p>
//             <p><strong>Training Age:</strong> {client.data.trainingAge}</p>
//             <p><strong>Workout Sets:</strong> {client.data.workoutSets}</p>
//             {/* Display image previews if available */}
//             {client.data.frontImage && <img src={URL.createObjectURL(client.data.frontImage)} alt="Front View" />}
//             {client.data.backImage && <img src={URL.createObjectURL(client.data.backImage)} alt="Back View" />}
//             {client.data.rightSideImage && <img src={URL.createObjectURL(client.data.rightSideImage)} alt="Right Side View" />}
//             {client.data.leftSideImage && <img src={URL.createObjectURL(client.data.leftSideImage)} alt="Left Side View" />}
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </DashboardLayout>
//   );
// };

// export default AdminClientDetailPage;




import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '@/components/DashboardLayout';

interface ClientData {
  email: string;
  data: {
    weight: string;
    height: string;
    age: string;
    fatWeight: string;
    muscleWeight: string;
    musclePercentage: string;
    fatPercentage: string;
    waistMeasurement: string;
    rightArmMeasurement: string;
    leftArmMeasurement: string;
    rightLegMeasurement: string;
    leftLegMeasurement: string;
    frontImage: File | null;
    backImage: File | null;
    rightSideImage: File | null;
    leftSideImage: File | null;
    sugarCravings: string;
    previousInjuries: string;
    diabetes: string;
    bloodPressure: string;
    onlineTrainingExperience: string;
    trainingAge: string;
    workoutSets: string;
  };
}

const AdminClientDetailPage = () => {
  const router = useRouter();
  const [client, setClient] = useState<ClientData | null>(null);

  useEffect(() => {
    const { email } = router.query;
    if (email) {
      fetch(`/api/clients`)
        .then(response => response.json())
        .then(data => {
          const clientData = data.find((client: ClientData) => client.email === email);
          setClient(clientData);
        })
        .catch(error => console.error('Error fetching client data:', error));
    }
  }, [router.query]);

  return (
    <DashboardLayout className="no-rounded">
      <h1 className="text-2xl font-bold">Client Details</h1>
      {client ? (
        <div>
          <h2>{client.email}</h2>
          <div>
            <p><strong>Weight:</strong> {client.data.weight} kg</p>
            <p><strong>Height:</strong> {client.data.height} cm</p>
            <p><strong>Age:</strong> {client.data.age}</p>
            <p><strong>Fat Weight:</strong> {client.data.fatWeight} kg</p>
            <p><strong>Muscle Weight:</strong> {client.data.muscleWeight} kg</p>
            <p><strong>Muscle Percentage:</strong> {client.data.musclePercentage} %</p>
            <p><strong>Fat Percentage:</strong> {client.data.fatPercentage} %</p>
            <p><strong>Waist Measurement:</strong> {client.data.waistMeasurement} cm</p>
            <p><strong>Right Arm Measurement:</strong> {client.data.rightArmMeasurement} cm</p>
            <p><strong>Left Arm Measurement:</strong> {client.data.leftArmMeasurement} cm</p>
            <p><strong>Right Leg Measurement:</strong> {client.data.rightLegMeasurement} cm</p>
            <p><strong>Left Leg Measurement:</strong> {client.data.leftLegMeasurement} cm</p>
            <p><strong>Sugar Cravings:</strong> {client.data.sugarCravings}</p>
            <p><strong>Previous Injuries:</strong> {client.data.previousInjuries}</p>
            <p><strong>Diabetes:</strong> {client.data.diabetes}</p>
            <p><strong>Blood Pressure:</strong> {client.data.bloodPressure}</p>
            <p><strong>Online Training Experience:</strong> {client.data.onlineTrainingExperience}</p>
            <p><strong>Training Age:</strong> {client.data.trainingAge}</p>
            <p><strong>Workout Sets:</strong> {client.data.workoutSets}</p>
            {/* Add more fields as needed */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </DashboardLayout>
  );
};

export default AdminClientDetailPage;



