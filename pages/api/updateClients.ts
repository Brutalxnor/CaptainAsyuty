import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import Client from '@/models/Client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const clients = await Client.find({ fullName: { $exists: false } });

    for (const client of clients) {
      client.fullName = 'Unknown'; // Provide a default value or fetch the correct value
      await client.save();
    }

    res.status(200).json({ message: 'Clients updated successfully' });
  } catch (error) {
    console.error('Error updating clients:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
