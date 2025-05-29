import { useState, useEffect } from 'react';
import api from '../services/api';

const FarmerDashboard = () => {
  const [ponds, setPonds] = useState([]);

  useEffect(() => {
    const fetchPonds = async () => {
      try {
        const token = localStorage.getItem('token');
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await api.get('/ponds');
        setPonds(response.data);
      } catch (error) {
        console.error('Failed to load ponds:', error);
      }
    };

    fetchPonds();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h1>

      <div className="mb-6">
        <a
          href="/add-pond"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ Add New Pond
        </a>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ponds.map((pond) => (
          <div key={pond.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{pond.name}</h2>
            <p><strong>Location:</strong> {pond.location}</p>
            <p><strong>Size:</strong> {pond.size}</p>
            <p className="mt-2 font-semibold">Fish Species:</p>
            <ul className="list-disc ml-5">
              {pond.fish_species && pond.fish_species.length > 0 ? (
                pond.fish_species.map(fish => (
                  <li key={fish.id}>{fish.name}</li>
                ))
              ) : (
                <li>No fish assigned</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerDashboard;
