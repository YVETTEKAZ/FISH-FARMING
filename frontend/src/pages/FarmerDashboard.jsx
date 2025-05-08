import { useState, useEffect } from 'react';
import api from '../services/api';

function FarmerDashboard() {
  const [ponds, setPonds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/ponds')
      .then((response) => {
        setPonds(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching ponds:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Farmer Dashboard</h2>
      <h3 className="text-2xl font-semibold mb-2">Your Ponds</h3>
      {ponds.length === 0 ? (
        <p>No ponds registered.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ponds.map((pond) => (
            <div key={pond.id} className="border rounded p-4">
              <h4 className="text-xl font-semibold">{pond.name}</h4>
              <p><strong>Water Quality:</strong> {pond.water_quality || 'N/A'}</p>
              <p><strong>Fish Health:</strong> {pond.fish_health || 'N/A'}</p>
              <p><strong>Growth Stage:</strong> {pond.growth_stage || 'N/A'}</p>
              {pond.ready_for_harvest && (
                <p className="text-green-600 font-bold">Ready for Harvest!</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FarmerDashboard;