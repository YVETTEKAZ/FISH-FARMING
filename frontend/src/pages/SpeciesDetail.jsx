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
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">{species.name}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={species.image || 'https://via.placeholder.com/600x400?text=Fish+Image'}
          alt={species.name}
          className="w-full md:w-1/2 h-96 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Description</h3>
          <p className="text-lg mb-4">{species.description}</p>
          <h3 className="text-2xl font-semibold mb-4">Optimal Growth Locations</h3>
          <p className="text-lg">
            {species.location || 'Suitable for various regions in Rwanda'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpeciesDetail;