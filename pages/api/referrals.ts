import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { email } = req.query;

    try {
      const client = await clientPromise;
      const db = client.db('ClientsDB');

      const referrals = await db.collection('Referrals').find({ referrerEmail: email }).toArray();

      res.status(200).json(referrals);
    } catch (error) {
      console.error('Error fetching referrals:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
