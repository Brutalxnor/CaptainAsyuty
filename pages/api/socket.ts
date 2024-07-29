// pages/api/socket.ts
import { Server } from 'socket.io';
import clientPromise from '@/lib/mongodb';

const ioHandler = (req: any, res: any) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('A user connected');

      socket.on('newMessage', async (message) => {
        try {
          const client = await clientPromise;
          const db = client.db('Chat');
          await db.collection('ClientChat').insertOne(message);
          io.emit('message', message); // Broadcast to all connected clients
        } catch (error) {
          console.error('Error saving message:', error);
        }
      });

      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
    });
  }

  res.end();
};

export default ioHandler;





// pages/api/socket.ts
// pages/api/socket.ts
// pages/api/socket.ts
// pages/api/socket.ts
