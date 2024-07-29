



import React, { useState } from 'react';
import Layout from '@/components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black-100 flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 rounded bg-gray-200 text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded bg-gray-200 text-black"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 rounded bg-gray-200 text-black"
              rows={5}
              required
            />
            <button type="submit" className="p-2 rounded bg-blue-500 text-white font-bold">
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
