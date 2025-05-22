import React from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await api.post('/logout'); // Laravel logout route
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear token and redirect
      localStorage.removeItem('token');
      delete api.defaults.headers.common['Authorization'];
      navigate('/login');
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  );
};

export default Logout;
