import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      const { user } = useContext(AuthContext);
      if (user.role === 'farmer') navigate('/farmer-dashboard');
      if (user.role === 'admin') navigate('/admin-dashboard');
      if (user.role === 'specialist') navigate('/specialist-dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;