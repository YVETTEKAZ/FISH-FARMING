import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function FishSpecies() {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/fish-species')
      .then((response) => {
        setSpecies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching species:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Fish Species in Rwanda</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {species.map((species) => (
          <Link key={species.id} to={`/species/${species.id}`} className="border rounded p-4 hover:shadow-lg">
            <img src={species.image || 'https://via.placeholder.com/300x200'} alt={species.name} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="text-xl font-semibold">{species.name}</h3>
            <p className="text-gray-600">{species.description.slice(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FishSpecies;