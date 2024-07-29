

// pages/api/nutrition.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const client = await clientPromise;
    const db = client.db('ClientsDB');
    const nutrition = await db.collection('Nutrition').findOne({ email });

    if (!nutrition) {
      return res.status(200).json({ nutritions: [] });
    }

    res.status(200).json(nutrition);
  } catch (error: any) {
    console.error('Error fetching nutrition data:', error.message);
    res.status(500).json({ message: 'Error fetching nutrition data', error: error.message });
  }
}
