// types/ClientData.ts

export interface Exercise {
  id: string;
  name: string;
  muscle?: string;
  day: string;
  gif?: string;
  sets: number; // Number of sets
  restTime: number; // Rest time in seconds
  weights: number[]; // Array of weights
  reps: number[]; // Array of reps
  started?: boolean;
  finished?: boolean;
}

export interface Cardio {
  name: string;
  duration: string;
  day: string;
  gif?: string;
}

export interface ClientData {
  email: string;
  fullName?: string;
  hasPaid: boolean;
  paymentDate?: string; // Add paymentDate field
  admin: boolean;
  client: boolean;
  weight?: string;
  height?: string;
  age?: string;
  fatWeight?: string;
  muscleWeight?: string;
  musclePercentage?: string;
  fatPercentage?: string;
  waistMeasurement?: string;
  rightArmMeasurement?: string;
  leftArmMeasurement?: string;
  rightLegMeasurement?: string;
  leftLegMeasurement?: string;
  sugarCravings?: string;
  previousInjuries?: string;
  diabetes?: string;
  bloodPressure?: string;
  onlineTrainingExperience?: string;
  trainingAge?: string;

  previousWeight?: string;
  previousHeight?: string;
  previousAge?: string;
  previousFatWeight?: string;
  previousMuscleWeight?: string;
  previousMusclePercentage?: string;
  previousFatPercentage?: string;
  previousWaistMeasurement?: string;
  previousRightArmMeasurement?: string;
  previousLeftArmMeasurement?: string;
  previousRightLegMeasurement?: string;
  previousLeftLegMeasurement?: string;
  previousSugarCravings?: string;
  previousPreviousInjuries?: string;
  previousDiabetes?: string;
  previousBloodPressure?: string;
  previousOnlineTrainingExperience?: string;

  exercises?: Exercise[];
  date?:string;
  exerciseType?: string;
  cardio?: Cardio[];

  images?: {
    front: {
      url: string;
      public_id: string;
    };
    back: {
      url: string;
      public_id: string;
    };
  };

}
