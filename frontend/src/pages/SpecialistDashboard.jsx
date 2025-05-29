import React, { useEffect, useState } from 'react';
import api from '../services/api';

const SpecialistDashboard = () => {
  const [ponds, setPonds] = useState([]);

  useEffect(() => {
    fetchPonds();
  }, []);

  const fetchPonds = async () => {
    try {
      const token = localStorage.getItem('token');
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await api.get('/ponds?all=1'); // allow specialist to view all ponds
      setPonds(response.data);
    } catch (error) {
      console.error('Failed to fetch ponds:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Specialist Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ponds.map(pond => (
          <div key={pond.id} className="bg-white shadow p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">{pond.name}</h2>
            <p><strong>Location:</strong> {pond.location}</p>
            <p><strong>Size:</strong> {pond.size}</p>
            <p><strong>Owner:</strong> {pond.user?.name}</p>
            <p className="mt-2 font-semibold">Fish Species:</p>
            <ul className="list-disc ml-6">
              {pond.fish_species?.length > 0 ? (
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

export default SpecialistDashboard;
