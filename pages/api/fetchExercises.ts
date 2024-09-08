import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');

    const clientData = await db.collection('Exercises').findOne({ email });

    if (!clientData) {
      return res.status(404).json({ message: 'No exercises found for this client' });
    }

    res.status(200).json(clientData);
  } catch (error: any) {
    console.error('Error fetching exercises:', error.message);
    res.status(500).json({ message: 'Error fetching exercises', error: error.message });
  }
}
