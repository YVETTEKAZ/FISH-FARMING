import { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.get('/user', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem('token');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const response = await api.post('/login', { email, password });
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    setUser(user);
  };

  const register = async (name, email, password, role) => {
    const response = await api.post('/register', { name, email, password, role });
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    setUser(user);
  };

  const logout = async () => {
    await api.post('/logout', {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};