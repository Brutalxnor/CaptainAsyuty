// pages/api/notify.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'username',
        pass: 'password',
      },
    });

    // Send mail
    await transporter.sendMail({
      from: '"Your Company" <no-reply@example.com>',
      to: email,
      subject: 'Welcome to Fitness Website',
      text: 'Thank you for signing up!',
      html: '<b>Thank you for signing up!</b>',
    });

    res.status(200).json({ message: 'Email sent' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
