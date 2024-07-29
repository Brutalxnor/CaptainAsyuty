// copyEmails.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

async function copyEmails() {
  const uri = process.env.MONGODB_URI; // Load connection string from environment variables
  if (!uri) {
    throw new Error('Please add your MongoDB connection string to .env');
  }

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db('ClientsDB');
    const clientsCollection = db.collection('Clients');
    const exercisesCollection = db.collection('Cardio');

    // Fetch all clients
    const clients = await clientsCollection.find({}).toArray();

    // Copy emails to the Exercises collection
    for (const client of clients) {
      const email = client.email;

      // Check if an exercise document for this email already exists
      const existingExercise = await exercisesCollection.findOne({ clientEmail: email });
      if (!existingExercise) {
        // If it doesn't exist, create a new document
        await exercisesCollection.insertOne({ clientEmail: email, exercises: [] });
      }
    }

    console.log('Emails copied successfully.');
  } catch (error) {
    console.error('Error copying emails:', error);
  } finally {
    await client.close();
  }
}

copyEmails();
