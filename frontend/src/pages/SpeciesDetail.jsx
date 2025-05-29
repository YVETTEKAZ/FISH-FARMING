import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function SpeciesDetail() {
  const { speciesId } = useParams();
  const [species, setSpecies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await api.get(`/fish-species/${speciesId}`);
        setSpecies(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load species information');
        setLoading(false);
      }
    };
    fetchSpecies();
  }, [speciesId]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  if (!species) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-lg">Species not found</p>
      </div>
    );
  }

  return (
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {species.map((fish) => (
    <Link key={fish.id} to={`/species/${fish.id}`} className="border rounded p-4 hover:shadow-lg bg-white">
      <img
        src={fish.image || 'https://via.placeholder.com/300x200'}
        alt={fish.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-semibold mb-1">{fish.name}</h3>
      <p className="text-sm text-gray-700 mb-1">{fish.description.slice(0, 80)}...</p>
      {fish.growth_time && <p className="text-sm text-blue-600">⏱ Growth: {fish.growth_time}</p>}
      {fish.environment && <p className="text-sm text-green-600">🌡️ Env: {fish.environment}</p>}
      {fish.feed_type && <p className="text-sm text-orange-600">🍽️ Feed: {fish.feed_type}</p>}
    </Link>
  ))}
</div>

  );
}

export default SpeciesDetail;