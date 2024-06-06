// pages/api/clean-users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import Client from '@/models/Client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      await Client.deleteMany({});
      res.status(200).json({ message: 'All users removed' });
    } catch (error) {
      console.error('Error removing users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
