// api/clientData.ts

import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const client = await clientPromise;
        const db = client.db('ClientsDB');

        const clientData = await db.collection('Clients').findOne({ email: email.toString() });
        const exercisesData = await db.collection('Exercises').findOne({ email: email.toString() });

        if (!clientData) {
            return res.status(404).json({ message: 'Client not found' });
        }

        const result = {
            clientData,
            exercises: exercisesData ? exercisesData.exercises : [],
            date: exercisesData ? exercisesData.date : ''
        };

        res.status(200).json(result);
    } catch (error: any) {
        res.status(500).json({ message: 'Error fetching client data', error: error.message });
    }
}
