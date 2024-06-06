// pages/api/exercises/[clientId].ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { clientId } = req.query;

//   await dbConnect();

//   if (!clientId) {
//     return res.status(400).json({ error: 'Client ID is required' });
//   }

//   try {
//     const client = await Client.findOne({ _id: clientId });
//     if (!client) {
//       return res.status(404).json({ error: 'Client not found' });
//     }
//     res.status(200).json({ exercises: client.exercises });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }













import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import Client from '@/models/Client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const { clientId } = req.query;

  if (!clientId) {
    return res.status(400).json({ error: 'Client ID is required' });
  }

  try {
    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.status(200).json({ exercises: client.exercises });
  } catch (error: any) {
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}
