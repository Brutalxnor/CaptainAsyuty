import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db('ClientsDB');

    // Fetch all clients
    const clients = await db.collection('Clients').find({}).toArray();

    res.status(200).json(clients);
  } catch (error: any) {
    console.error('Error fetching client data:', error.message);
    res.status(500).json({ message: 'Error fetching client data', error: error.message });
  }
}
