
// pages/api/assign-exercise.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { clientEmail, exercises } = req.body;

  try {
    console.log('Received:', { clientEmail, exercises });
    const client = await clientPromise;
    const db = client.db('ClientsDB');

    // Fetch all clients for debugging
    const clients = await db.collection('Clients').find().toArray();
    console.log('All clients:', clients);

    const result = await db.collection('Exercises').updateOne(
      { email: clientEmail },
      { $set: { exercises: exercises } }
    );

    if (result.matchedCount === 0) {
      throw new Error('Client not found');
    }

    res.status(200).json({ message: 'Exercises assigned successfully', data: result });
  } catch (error: any) {
    console.error('Error assigning exercises:', error.message);
    res.status(500).json({ message: error.message });
  }
}
