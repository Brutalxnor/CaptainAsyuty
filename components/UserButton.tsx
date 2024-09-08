// components/UserButton.tsx

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

const UserButton: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="flex items-center space-x-4">
      {user && <span>{user.email}</span>}
      <button onClick={signOut} className="bg-red-500 text-white px-4 py-2 rounded">
        Sign Out
      </button>
    </div>
  );
};

export default UserButton;
