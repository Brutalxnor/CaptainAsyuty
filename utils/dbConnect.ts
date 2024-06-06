// // utils/dbConnect.ts
// import mongoose from 'mongoose';

// const connection: any = {};

// async function dbConnect() {
//   if (connection.isConnected) {
//     return;
//   }

//   try {
//     const db = await mongoose.connect(process.env.MONGODB_URI!, {
//       // useNewUrlParser: true, // No longer needed in the latest Mongoose versions
//       // useUnifiedTopology: true, // No longer needed in the latest Mongoose versions
//     });
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     throw new Error('MongoDB connection error');
//   }
// }

// export default dbConnect;


























// import mongoose from 'mongoose';

// const MONGODB_URI: string | any = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = (global as any).mongoose;

// if (!cached) {
//   cached = (global as any).mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       console.log('Connected to database!');
//       return mongoose;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// }

// export default dbConnect;














// // lib/dbConnect.ts

// import mongoose from 'mongoose';

// // const MONGODB_URI = process.env.MONGODB_URI;

// const MONGODB_URI: string | any = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }


// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = (global as any).mongoose;

// if (!cached) {
//   cached = (global as any).mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//           bufferCommands: false,
//         };
    
//         cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//           console.log('Connected to database!');
//           return mongoose;
//         });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// }

// export default dbConnect;









///////////////////////////////////////////           working









// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// /** 
//  * Global is used here to maintain a cached connection across hot reloads in development. 
//  * This prevents connections growing exponentially during API Route usage.
//  */
// let cached = (global as any).mongoose;

// if (!cached) {
//   cached = (global as any).mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose: any) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;










///////////////////////////////////////////           working



import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads in development.
 * This prevents connections growing exponentially during API Route usage.
 */
interface MongooseCache {
  conn: Connection | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache;
}

let cached: MongooseCache;

if (!global.mongooseCache) {
  global.mongooseCache = { conn: null, promise: null };
}
cached = global.mongooseCache;

async function dbConnect(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose: { connection: any; }) => {
      return mongoose.connection;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
