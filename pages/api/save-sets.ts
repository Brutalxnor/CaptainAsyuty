// pages/api/save-sets.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { email, exerciseName, sets } = req.body;

  if (!email || !exerciseName || !sets) {
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');

    const exercisesData = await db.collection('Exercises').findOne({ email });

    if (!exercisesData) {
      res.status(404).json({ message: 'Exercises not found for this client' });
      return;
    }

    const updatedExercises = exercisesData.exercises.map((exercise: any) =>
      exercise.name === exerciseName ? { ...exercise, sets } : exercise
    );

    await db.collection('Exercises').updateOne({ email }, { $set: { exercises: updatedExercises } });

    res.status(200).json({ message: 'Sets saved successfully' });
  } catch (error: any) {
    console.error('Error saving sets:', error.message);
    res.status(500).json({ message: 'Error saving sets', error: error.message });
  }
}
