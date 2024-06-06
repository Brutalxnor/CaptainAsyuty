// @/types/index.ts
import { IconType } from "react-icons";
import NextAuth from 'next-auth';

export type Route = {
  label: string;
  icon: IconType;
  href: string;
  color: string;
};
export interface Exercise {
  name: string;
}
export interface ClientData {
  email: string;
  fullName: string;
  exercises: Exercise[];
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface JWT {
    id: string;
  }
}