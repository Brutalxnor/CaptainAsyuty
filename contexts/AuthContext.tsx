import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface AuthContextProps {
  user: any;
  signIn: (identifier: string, password: string) => Promise<void>; // identifier can be email or username
  // signUp: (username: string, email: string, password: string) => Promise<void>;
  signUp: (username: string, email: string, password: string, referralCode?: string) => Promise<void>;

  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/me');
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const signIn = async (identifier: string, password: string) => {
    try {
      const response = await axios.post('/api/signin', { identifier, password });
      setUser(response.data.user);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error signing in:', error);
      throw new Error('Failed to sign in');
    }
  };

  // const signUp = async (username: string, email: string, password: string) => {
  //   try {
  //     const response = await axios.post('/api/signup', { username, email, password });
  //     setUser(response.data.user);
  //     router.push('/dashboard');
  //   } catch (error) {
  //     console.error('Error signing up:', error);
  //     throw new Error('Failed to sign up');
  //   }
  // };

  const signUp = async (username: string, email: string, password: string, referralCode?: string) => {
    try {
      const response = await axios.post('/api/signup', { username, email, password, referralCode });
      setUser(response.data.user);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error signing up:', error);
      throw new Error('Failed to sign up');
    }
  };
  


  const signOut = () => {
    setUser(null);
    router.push('/sign-in');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
