

import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '@clerk/nextjs';
import io from 'socket.io-client';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/avatar'; // Ensure these components are imported correctly

interface ChatModalProps {
  onClose: () => void;
}

interface Message {
  userId: string;
  username: string;
  text: string;
  timestamp: number;
}

const colors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-teal-500',
];

const getRandomColor = (userId: string) => {
  let sum = 0;
  for (let i = 0; i < userId.length; i++) {
    sum += userId.charCodeAt(i);
  }
  return colors[sum % colors.length];
};

const ChatModal: React.FC<ChatModalProps> = ({ onClose }) => {
  const { user } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [unreadMessages, setUnreadMessages] = useState(0);
  const socketRef = useRef<any>(null);

  useEffect(() => {
    socketRef.current = io();

    socketRef.current.on('message', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      setUnreadMessages((prev) => prev + 1);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/chat');
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        } else {
          console.error('Failed to fetch messages');
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const message = {
      userId: user?.id,
      username: user?.username || 'Anonymous',
      text: newMessage,
      timestamp: Date.now(),
    };

    socketRef.current.emit('newMessage', message);
    setNewMessage('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-full max-w-lg p-6 bg-[var(--background-color)] text-[var(--text-color)] rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Chat</h2>
          <button onClick={onClose} className="text-xl font-bold">×</button>
        </div>
        <div className="overflow-y-auto h-64 mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 rounded-lg mb-2 ${msg.userId === user?.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              <div className="flex items-center">
                <Avatar className={`w-8 h-8 mr-2 ${getRandomColor(msg.userId)}`}>
                  <AvatarImage
                    alt={msg.username || 'U'}
                    onError={(e) => { e.currentTarget.src = '/avatar-placeholder.png'; }}
                  />
                  <AvatarFallback>{msg.username?.[0] || 'U'}</AvatarFallback>
                </Avatar>
                <span>{msg.username || 'Unknown'}</span>
              </div>
              <div className="flex justify-between">
                <div>{msg.text}</div>
                <div>{new Date(msg.timestamp).toLocaleTimeString()}</div>
              </div>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full p-2 border rounded-lg mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-white text-black"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatModal;
