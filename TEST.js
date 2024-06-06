const mongoose = require('mongoose');

const uri = 'mongodb+srv://ahmadhema2015:uPWpeECsvBhQ7WI8@fitnesscluster.ggtwzm4.mongodb.net/?retryWrites=true&w=majority&appName=FitnessCluster'; // Replace with your actual MongoDB URI

async function testConnection() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB successfully');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

testConnection();
