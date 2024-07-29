//pages/api/checkPaymentStatus.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const { email } = req.body;

    const client = await clientPromise;
    const db = client.db('ClientsDB');

    const clientRecord = await db.collection('Clients').findOne({ email });
    if (!clientRecord) {
      res.status(404).json({ message: 'Client not found' });
      return;
    }

    res.status(200).json({ hasPaid: clientRecord.hasPaid });
  } catch (error: any) {
    console.error('Error checking payment status:', error.message);
    res.status(500).json({ message: 'Error checking payment status', error: error.message });
  }
}
