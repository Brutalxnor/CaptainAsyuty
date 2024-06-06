import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Exercise = mongoose.models.Exercise || mongoose.model('Exercise', ExerciseSchema);
export default Exercise;
