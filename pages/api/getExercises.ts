// pages/api/getExercises.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { email } = req.query;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Email is required and must be a string' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');

    const userExercises = await db.collection('Exercises').findOne({ email });

    if (!userExercises) {
      return res.status(404).json({ message: 'Exercises not found' });
    }

    res.status(200).json(userExercises);
  } catch (error: any) {
    console.error('Error fetching exercises:', error.message);
    res.status(500).json({ message: 'Error fetching exercises', error: error.message });
  }
}
