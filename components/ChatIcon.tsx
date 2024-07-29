
import React from 'react';

interface ChatIconProps {
  unreadCount: number;
  onClick: () => void;
}

const ChatIcon: React.FC<ChatIconProps> = ({ unreadCount, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-md flex items-center justify-center"
    >
      <div className="relative">
        <span className="material-icons">chat</span>
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {unreadCount}
          </span>
        )}
      </div>
    </button>
  );
};

export default ChatIcon;
