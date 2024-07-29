// pages/api/togglePaymentStatus.ts

import { NextApiRequest, NextApiResponse } from 'next';
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

    const newPaymentStatus = !clientRecord.hasPaid;
    const paymentDate = newPaymentStatus ? new Date().toISOString() : null;

    const updatedClient = await db.collection('Clients').updateOne(
      { email },
      { $set: { hasPaid: newPaymentStatus, paymentDate } }
    );

    res.status(200).json({ message: 'Payment status toggled', hasPaid: newPaymentStatus, paymentDate });
  } catch (error: any) {
    console.error('Error toggling payment status:', error.message);
    res.status(500).json({ message: 'Error toggling payment status', error: error.message });
  }
}
