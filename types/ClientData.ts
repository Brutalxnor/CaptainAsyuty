// // types/ClientData.ts

// export interface Exercise {
//   id: string;
//   name: string;
//   muscle?: string;
//   day: string;
//   gif?: string;
//   sets: number; // Number of sets
//   restTime: number; // Rest time in seconds
//   weights: number[]; // Array of weights
//   reps: number[]; // Array of reps
//   started?: boolean;
//   finished?: boolean;
//   date: string;
// }

// export interface Referral {
//   referrerEmail: string;
//   referredEmail: string;
//   date: string;
// }

// export interface Cardio {
//   name: string;
//   duration: string;
//   day: string;
//   gif?: string;
// }



// export interface ClientData {
//   referrals: Referral[];
//   email: string;
//   fullName?: string;
//   hasPaid: boolean;
//   paymentDate?: string; // Add paymentDate field
//   registrationEndDate?:string;
//   monthsRegistered?:number;
//   admin: boolean;
//   client: boolean;
//   weight?: string;
//   height?: string;
//   age?: string;
//   fatWeight?: string;
//   muscleWeight?: string;
//   musclePercentage?: string;
//   fatPercentage?: string;
//   waistMeasurement?: string;
//   rightArmMeasurement?: string;
//   leftArmMeasurement?: string;
//   rightLegMeasurement?: string;
//   leftLegMeasurement?: string;
//   sugarCravings?: string;
//   previousInjuries?: string;
//   diabetes?: string;
//   bloodPressure?: string;
//   onlineTrainingExperience?: string;
//   trainingAge?: string;

//   previousWeight?: string;
//   previousHeight?: string;
//   previousAge?: string;
//   previousFatWeight?: string;
//   previousMuscleWeight?: string;
//   previousMusclePercentage?: string;
//   previousFatPercentage?: string;
//   previousWaistMeasurement?: string;
//   previousRightArmMeasurement?: string;
//   previousLeftArmMeasurement?: string;
//   previousRightLegMeasurement?: string;
//   previousLeftLegMeasurement?: string;
//   previousSugarCravings?: string;
//   previousPreviousInjuries?: string;
//   previousDiabetes?: string;
//   previousBloodPressure?: string;
//   previousOnlineTrainingExperience?: string;

//   exercises?: Exercise[];
//   exerciseType?: string;
//   cardio?: Cardio[];

//   images?: {
//     front: {
//       url: string;
//       public_id: string;
//     };
//     back: {
//       url: string;
//       public_id: string;
//     };
//   };

// }









export interface Exercise {
  id: string;
  name: string;
  muscle?: string; // Optional field for muscle group
  day: string; // Day assigned for the exercise
  gif?: string; // URL of the exercise GIF
  sets: number; // Number of sets for the exercise
  restTime: number; // Rest time between sets in seconds
  weights: number[]; // Array representing the weights used for each set
  reps: number[]; // Array representing the reps performed for each set
  started?: boolean; // Optional: has the exercise been started
  finished?: boolean; // Optional: has the exercise been finished
  date: string; // Date the exercise was performed
}

export interface Referral {
  referrerEmail: string; // Email of the user who referred the client
  referredEmail: string; // Email of the user being referred
  date: string; // Date of the referral
}

export interface Cardio {
  name: string; // Name of the cardio exercise
  duration: string; // Duration of the cardio session
  day: string; // Day assigned for the cardio session
  gif?: string; // Optional URL for a GIF representing the cardio exercise
}

export interface Image {
  url: string; // URL of the image stored in Cloudinary or elsewhere
  public_id: string; // Cloudinary public ID for the image
}

export interface ClientData {
  referrals: Referral[]; // List of referrals made by the client
  email: string; // Client's email address
  fullName?: string; // Client's full name (optional)
  hasPaid: boolean; // Whether the client has made their payment
  paymentDate?: string; // Date of the client's last payment (optional)
  registrationEndDate?: string; // Date when the client's registration ends (optional)
  monthsRegistered?: number; // Number of months the client is registered for (optional)

  admin: boolean; // Whether the client is an admin
  client: boolean; // Whether the client is a regular user (non-admin)

  weight?: string; // Client's current weight (optional)
  height?: string; // Client's height (optional)
  age?: string; // Client's age (optional)
  fatWeight?: string; // Client's fat weight (optional)
  muscleWeight?: string; // Client's muscle weight (optional)
  musclePercentage?: string; // Muscle percentage in the body (optional)
  fatPercentage?: string; // Fat percentage in the body (optional)
  waistMeasurement?: string; // Waist measurement (optional)
  rightArmMeasurement?: string; // Right arm measurement (optional)
  leftArmMeasurement?: string; // Left arm measurement (optional)
  rightLegMeasurement?: string; // Right leg measurement (optional)
  leftLegMeasurement?: string; // Left leg measurement (optional)
  sugarCravings?: string; // Sugar cravings data (optional)
  previousPreviousInjuries?: boolean; // Any previous injuries (optional)
  diabetes?: string; // Diabetes condition (optional)
  bloodPressure?: string; // Blood pressure status (optional)
  onlineTrainingExperience?: string; // Experience with online training (optional)
  trainingAge?: string; // How long the client has been training (optional)

  // Fields for tracking previous measurements, injuries, and conditions
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
  previousInjuries?: string;
  previousDiabetes?: string;
  previousBloodPressure?: string;
  previousOnlineTrainingExperience?: string;

  exercises?: Exercise[]; // Array of exercises assigned to the client
  exerciseType?: string; // Optional field for exercise type (e.g., strength training)
  cardio?: Cardio[]; // Array of cardio exercises assigned to the client

  images?: { // Images for the client
    front: Image; // Front image with URL and public ID
    back: Image; // Back image with URL and public ID
  };
}
