import { Exercise } from "@/types";

// interfaces/ClientData.ts
export interface ClientData {
    exercises: any[];
    // id: string;
    email: string;
    fullName: string;
    data: {
      fullName: string;
      weight: string;
      height: string;
      age: string;
      fatWeight: string;
      muscleWeight: string;
      musclePercentage: string;
      fatPercentage: string;
      waistMeasurement: string;
      rightArmMeasurement: string;
      leftArmMeasurement: string;
      rightLegMeasurement: string;
      leftLegMeasurement: string;
      frontImage: File | null;
      backImage: File | null;
      rightSideImage: File | null;
      leftSideImage: File | null;
      sugarCravings: string;
      previousInjuries: string;
      diabetes: string;
      bloodPressure: string;
      onlineTrainingExperience: string;
      trainingAge: string;
      workoutSets: string;
    };
  }
  