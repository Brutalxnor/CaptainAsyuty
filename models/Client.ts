// // models/Client.ts
// import mongoose, { Schema, Document } from 'mongoose';

// export interface IClient extends Document {
//   id: string;
//   email: string;
//   data: {
//     fullName: string;
//     weight: string;
//     height: string;
//     age: string;
//     fatWeight: string;
//     muscleWeight: string;
//     musclePercentage: string;
//     fatPercentage: string;
//     waistMeasurement: string;
//     rightArmMeasurement: string;
//     leftArmMeasurement: string;
//     rightLegMeasurement: string;
//     leftLegMeasurement: string;
//     frontImage: string; // Adjust type as necessary
//     backImage: string;
//     rightSideImage: string;
//     leftSideImage: string;
//     sugarCravings: string;
//     previousInjuries: string;
//     diabetes: string;
//     bloodPressure: string;
//     onlineTrainingExperience: string;
//     trainingAge: string;
//     workoutSets: string;
//   };
// }

// const ClientSchema: Schema = new Schema({
//   id: { type: String, required: true },
//   email: { type: String, required: true },
//   data: {
//     fullName: { type: String, required: true },
//     weight: { type: String, required: true },
//     height: { type: String, required: true },
//     age: { type: String, required: true },
//     fatWeight: { type: String, required: true },
//     muscleWeight: { type: String, required: true },
//     musclePercentage: { type: String, required: true },
//     fatPercentage: { type: String, required: true },
//     waistMeasurement: { type: String, required: true },
//     rightArmMeasurement: { type: String, required: true },
//     leftArmMeasurement: { type: String, required: true },
//     rightLegMeasurement: { type: String, required: true },
//     leftLegMeasurement: { type: String, required: true },
//     frontImage: { type: String },
//     backImage: { type: String },
//     rightSideImage: { type: String },
//     leftSideImage: { type: String },
//     sugarCravings: { type: String, required: true },
//     previousInjuries: { type: String, required: true },
//     diabetes: { type: String, required: true },
//     bloodPressure: { type: String, required: true },
//     onlineTrainingExperience: { type: String, required: true },
//     trainingAge: { type: String, required: true },
//     workoutSets: { type: String, required: true },
//   },
// });

// export default mongoose.models.Client || mongoose.model<IClient>('Client', ClientSchema);

// import mongoose from 'mongoose';

// const ClientSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   exercises: [{ name: { type: String, required: true } }],
//   fullName: { type: String, required: true },
//   data: {
//     fullName: String,
//     weight: String,
//     height: String,
//     age: String,
//     fatWeight: String,
//     muscleWeight: String,
//     musclePercentage: String,
//     fatPercentage: String,
//     waistMeasurement: String,
//     rightArmMeasurement: String,
//     leftArmMeasurement: String,
//     rightLegMeasurement: String,
//     leftLegMeasurement: String,
//     frontImage: String,
//     backImage: String,
//     rightSideImage: String,
//     leftSideImage: String,
//     sugarCravings: String,
//     previousInjuries: String,
//     diabetes: String,
//     bloodPressure: String,
//     onlineTrainingExperience: String,
//     trainingAge: String,
//     workoutSets: String,
//   }
// });

// export default mongoose.models.Client || mongoose.model('Client', ClientSchema);




// @models/Client.ts
// models/Client.ts

// models/Client.ts
// models/Client.ts

// import mongoose, { Document, Model, Schema } from 'mongoose';

// interface IClient extends Document {
//   email: string;
//   fullName: string;
//   exercises: string[];
//   // Add other fields as necessary
// }

// const ClientSchema: Schema = new Schema({
//   email: { type: String, required: true, unique: true },
//   fullName: { type: String, required: true },
//   exercises: { type: [String], default: [] },
//   // Add other fields as necessary
// });

// const Client: Model<IClient> = mongoose.models.Client || mongoose.model<IClient>('Client', ClientSchema);

// export default Client;


import mongoose, { Document, Model, model, models, Schema } from 'mongoose';


interface IClient extends Document {
  email: string;
  fullName?: string;
  exercises: string[];
}

const ClientSchema: Schema<IClient> = new Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String },
  exercises: { type: [String], default: [] }
});

const Client: Model<IClient> = models.Client || model<IClient>('Client', ClientSchema);

export default Client;