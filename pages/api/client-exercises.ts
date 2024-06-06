// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   const { email } = req.query;

//   if (req.method === 'POST') {
//     try {
//       const { email, exercise } = req.body;
//       const client = await Client.findOne({ email });

//       if (client) {
//         client.exercises.push(exercise);
//         await client.save();
//         res.status(200).json({ message: 'Exercise assigned successfully' });
//       } else {
//         const newClient = new Client({ email, exercises: [exercise], data: {} });
//         await newClient.save();
//         res.status(200).json({ message: 'Exercise assigned successfully', newClient });
//       }
//     } catch (err) {
//       res.status(400).json({ error: 'Error assigning exercise' });
//     }
//   } else if (req.method === 'GET') {
//     try {
//       const client = await Client.findOne({ email });
//       if (client) {
//         res.status(200).json(client);
//       } else {
//         res.status(404).json({ message: 'Client not found' });
//       }
//     } catch (err) {
//       res.status(400).json({ error: 'Error fetching client exercises' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }




// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/utils/dbConnect';
// import Client from '@/models/Client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   const { email } = req.query;

//   if (req.method === 'GET') {
//     try {
//       const client = await Client.findOne({ email });
//       if (client) {
//         res.status(200).json(client.exercises);
//       } else {
//         res.status(404).json({ message: 'Client not found' });
//       }
//     } catch (error) {
//       res.status(400).json({ success: false, message: (error as Error).message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }








import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import Client from '@/models/Client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    const { clientEmail, exercise } = req.body;

    try {
      const client = await Client.findOneAndUpdate(
        { email: clientEmail },
        { $push: { exercises: exercise } },
        { new: true }
      );

      if (!client) {
        return res.status(404).json({ message: 'Client not found' });
      }

      res.status(200).json({ message: 'Exercise assigned successfully', client });
    } catch (error: any) {
      res.status(500).json({ message: 'Error assigning exercise', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
