// components/Modal.tsx
import React from 'react';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed min-w-32 flex inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-[var(--background-color)] text-[var(--text-color)] border-[var(--border-color)] p-4 rounded-lg shadow-lg max-w-3xl w-full">
        <button
          className="absolute w-12 h-12 top-2 right-2 text-2xl font-bold text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
