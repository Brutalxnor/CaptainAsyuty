







import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const email = req.method === 'POST' ? req.body.email : req.query.email;

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');

    if (req.method === 'GET') {
      const clientData = await db.collection('Clients').findOne({ email });
      const exercisesData = await db.collection('Exercises').findOne({ email });

      if (!clientData) {
        res.status(404).json({ message: 'Client not found' });
        return;
      }

      const combinedData = {
        ...clientData,
        exerciseType: exercisesData?.exerciseType || '',
        exercises: exercisesData?.exercises || [],
        date: exercisesData?.date || '', // Include the assigned date
      };

      res.status(200).json(combinedData);
    } else if (req.method === 'POST') {
      const clientData = await db.collection('Clients').findOne({ email });

      if (!clientData) {
        res.status(404).json({ message: 'Client not found' });
        return;
      }

      const previousValues = {
        previousFullName: clientData.previousFullName || clientData.fullName,
        previousWeight: clientData.previousWeight || clientData.weight,
        previousHeight: clientData.previousHeight || clientData.height,
        previousAge: clientData.previousAge || clientData.age,
        previousFatWeight: clientData.previousFatWeight || clientData.fatWeight,
        previousMuscleWeight: clientData.previousMuscleWeight || clientData.muscleWeight,
        previousMusclePercentage: clientData.previousMusclePercentage || clientData.musclePercentage,
        previousFatPercentage: clientData.previousFatPercentage || clientData.fatPercentage,
        previousWaistMeasurement: clientData.previousWaistMeasurement || clientData.waistMeasurement,
        previousRightArmMeasurement: clientData.previousRightArmMeasurement || clientData.rightArmMeasurement,
        previousLeftArmMeasurement: clientData.previousLeftArmMeasurement || clientData.leftArmMeasurement,
        previousRightLegMeasurement: clientData.previousRightLegMeasurement || clientData.rightLegMeasurement,
        previousLeftLegMeasurement: clientData.previousLeftLegMeasurement || clientData.leftLegMeasurement,
        previousSugarCravings: clientData.previousSugarCravings || clientData.sugarCravings,
        previousInjuries: clientData.previousInjuries || clientData.injuries,
        previousDiabetes: clientData.previousDiabetes || clientData.diabetes,
        previousBloodPressure: clientData.previousBloodPressure || clientData.bloodPressure,
        previousOnlineTrainingExperience: clientData.previousOnlineTrainingExperience || clientData.onlineTrainingExperience,
        previousTrainingAge: clientData.previousTrainingAge || clientData.trainingAge,
      };

      const updatedClientData = {
        ...clientData,
        ...previousValues,
        ...req.body, // New data from the request body
      };

      await db.collection('Clients').updateOne({ email }, { $set: updatedClientData });

      res.status(200).json({ message: 'Client data updated successfully' });
    }
  } catch (error: any) {
    console.error('Error fetching client data:', error.message);
    res.status(500).json({ message: 'Error fetching client data', error: error.message });
  }
}
