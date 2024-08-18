// pages/api/points.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { email } = req.query;

    try {
      const client = await clientPromise;
      const db = client.db('ClientsDB');

      // Fetch the user's points
      const user = await db.collection('Users').findOne({ email });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ points: user.points || 0 });
    } catch (error) {
      console.error('Error fetching points:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
