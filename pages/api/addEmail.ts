




// pages/api/addEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('ClientsDB');
      const { email } = req.body;

      if (!email) {
        throw new Error('Email is required');
      }

      const existingClient = await db.collection('Clients').findOne({ email });

      if (existingClient) {
        res.status(200).json({ message: 'Email already exists' });
      } else {
        await db.collection('Clients').insertOne({ email });
        res.status(201).json({ message: 'Email added successfully' });

        // Send notification email using Resend
        const { data, error } = await resend.emails.send({
          from: 'Your Name <your-email@example.com>',
          to: [email],
          subject: 'Welcome to the Best Fitness Program',
          html: `
            <p>Thank you for signing up! You can pay through this number: 011. After payment, please send confirmation.</p>
            <b>Thank you for signing up!</b>
          `,
        });

        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ message: 'Error sending email', error });
        }

        console.log('Email sent:', data);
      }
    } catch (error) {
      console.error('Error saving email:', error);
      if (error instanceof Error) {
        res.status(500).json({ message: 'Error saving email', error: error.message });
      } else {
        res.status(500).json({ message: 'Error saving email', error: 'Unknown error' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
