import React, { useState } from 'react';
import api from '../services/api';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await api.post('/contact', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  } catch (err) {
    // ✅ Print actual error response
    console.error('Submission failed:', err.response?.data || err.message);

    if (err.response?.data?.errors) {
      alert(
        Object.values(err.response.data.errors)
          .flat()
          .join('\n')
      );
    } else {
      alert(err.response?.data?.message || 'Submission failed');
    }
  }
};

  return (
    <div className="min-h-screen bg-blue-100 py-10 px-4 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl w-120 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Contact Us</h1>

        {submitted && (
          <div className="mb-6 text-green-600 text-center">
            ✅ Your message has been sent. Thank you!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-blue-400"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-blue-400"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 p-2 rounded focus:outline-blue-400"
              placeholder="Type your message..."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 w-full"
          >
            Send Message
          </button>
        </form>

        {/* Optional Contact Info */}
        <div className="mt-8 text-sm text-gray-600 text-center">
          <p>📞 Phone: +250 785933044</p>
          <p>📧 Email: info@fishfarming.rw</p>
          <p>📍 Address: Kigali, Rwanda</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
