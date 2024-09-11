// // pages/api/checkPaymentStatus.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from '@/lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     res.status(405).json({ message: 'Method not allowed' });
//     return;
//   }

//   try {
//     const { email } = req.body;

//     const client = await clientPromise;
//     const db = client.db('ClientsDB');

//     const clientRecord = await db.collection('Clients').findOne({ email });
//     if (!clientRecord) {
//       res.status(404).json({ message: 'Client not found' });
//       return;
//     }

//     res.status(200).json({ hasPaid: clientRecord.hasPaid });
//   } catch (error: any) {
//     console.error('Error checking payment status:', error.message);
//     res.status(500).json({ message: 'Error checking payment status', error: error.message });
//   }
// }





import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { differenceInDays } from 'date-fns'; // To calculate days left

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const { email } = req.body;

    const client = await clientPromise;
    const db = client.db('ClientsDB');

    // Fetch client record by email
    const clientRecord = await db.collection('Clients').findOne({ email });
    if (!clientRecord) {
      res.status(404).json({ message: 'Client not found' });
      return;
    }

    // Calculate registration end date and days left
    const paymentDate = new Date(clientRecord.paymentDate); // Ensure paymentDate is a valid date
    const registrationEndDate = new Date(clientRecord.registrationEndDate);
    const monthsRegistered = clientRecord.monthsRegistered;

    // Calculate how many days are left
    const today = new Date();
    const daysLeft = differenceInDays(registrationEndDate, today);

    // Return the updated response
    res.status(200).json({
      hasPaid: clientRecord.hasPaid,
      paymentDate: paymentDate.toISOString().split('T')[0], // Format as 'YYYY-MM-DD'
      registrationEndDate: registrationEndDate.toISOString().split('T')[0],
      monthsRegistered,
    });
  } catch (error: any) {
    console.error('Error checking payment status:', error.message);
    res.status(500).json({ message: 'Error checking payment status', error: error.message });
  }
}
