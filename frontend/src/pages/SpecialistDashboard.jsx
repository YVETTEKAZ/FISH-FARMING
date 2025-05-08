
import { useState, useEffect } from 'react';
import api from '../services/api';

function SpecialistDashboard() {
  const [farmers, setFarmers] = useState([]);
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [ponds, setPonds] = useState([]);
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/farmers')
      .then((response) => {
        setFarmers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching farmers:', error);
        setLoading(false);
      });
  }, []);

  const handleFarmerSelect = async (farmerId) => {
    setSelectedFarmer(farmerId);
    try {
      const response = await api.get(`/farmers/${farmerId}/ponds`);
      setPonds(response.data);
    } catch (error) {
      console.error('Error fetching ponds:', error);
    }
  };

  const handleSubmitRecommendation = async () => {
    try {
      await api.post('/recommendations', {
        farmer_id: selectedFarmer,
        recommendation,
      });
      setRecommendation('');
      alert('Recommendation submitted!');
    } catch (error) {
      console.error('Error submitting recommendation:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Specialist Dashboard</h2>
      <h3 className="text-2xl font-semibold mb-2">Select Farmer</h3>
      <select
        onChange={(e) => handleFarmerSelect(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="">Select a farmer</option>
        {farmers.map((farmer) => (
          <option key={farmer.id} value={farmer.id}>
            {farmer.name}
          </option>
        ))}
      </select>
      {selectedFarmer && (
        <>
          <h3 className="text-2xl font-semibold mb-2">Ponds</h3>
          {ponds.length === 0 ? (
            <p>No ponds for this farmer.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {ponds.map((pond) => (
                <div key={pond.id} className="border rounded p-4">
                  <h4 className="text-xl font-semibold">{pond.name}</h4>
                  <p><strong>Water Quality:</strong> {pond.water_quality || 'N/A'}</p>
                  <p><strong>Fish Health:</strong> {pond.fish_health || 'N/A'}</p>
                  <p><strong>Growth Stage:</strong> {pond.growth_stage || 'N/A'}</p>
                </div>
              ))}
            </div>
          )}
          <h3 className="text-2xl font-semibold mb-2">Submit Recommendation</h3>
          <textarea
            value={recommendation}
            onChange={(e) => setRecommendation(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter your recommendation"
            rows="5"
          ></textarea>
          <button
            onClick={handleSubmitRecommendation}
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Submit Recommendation
          </button>
        </>
      )}
    </div>
  );
}

export default SpecialistDashboard;