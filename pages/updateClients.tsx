import { useState } from 'react';

const UpdateClientsPage = () => {
  const [message, setMessage] = useState<string | null>(null);

  const updateClients = async () => {
    try {
      const response = await fetch('/api/updateClients', {
        method: 'POST',
      });

      if (!response.ok) throw new Error('Failed to update clients');

      const data = await response.json();
      setMessage(data.message);
    } catch (error: any) {
      console.error('Error:', error);
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Update Clients</h1>
      <button onClick={updateClients} className="btn btn-primary">
        Update Clients
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateClientsPage;
