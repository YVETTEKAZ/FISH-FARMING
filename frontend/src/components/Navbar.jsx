import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../pages/AuthContext';

function Navbar() {
  const [isSpeciesOpen, setIsSpeciesOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const species = [
    { id: 1, name: 'Tilapia' },
    { id: 2, name: 'Catfish' },
    { id: 3, name: 'Nile perch' },
    { id: 1, name: 'Tnganyika sardine' },
    { id: 2, name: 'cichlids' },
    { id: 3, name: 'haplochromis' },
  
  ];

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-300 p-4 sticky top-0 z-10 h-30">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-2xl font-bold h-30" >
          <Link to="/">AQUAFARM Rwanda</Link>
        </h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-black hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-black hover:text-gray-200">About</Link>
          <div className="relative">
            <button
              onClick={() => setIsSpeciesOpen(!isSpeciesOpen)}
              className="text-black hover:text-gray-200"
            >
              Fish Species
            </button>
            {isSpeciesOpen && (
              <div className="absolute bg-white shadow-lg mt-2 rounded">
                {species.map((species) => (
                  <Link
                    key={species.id}
                    to={`/species/${species.id}`}
                    onClick={() => setIsSpeciesOpen(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                  >
                    {species.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/contact" className="text-black hover:text-gray-200">Contact</Link>
          {user ? (
            <>
              {user.role === 'farmer' && (
                <Link to="/farmer-dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
              )}
              {user.role === 'admin' && (
                <Link to="/admin-dashboard" className="text-white hover:text-gray-200">Admin</Link>
              )}
              {user.role === 'specialist' && (
                <Link to="/specialist-dashboard" className="text-white hover:text-gray-200">Specialist</Link>
              )}
              <button onClick={handleLogout} className="text-white hover:text-gray-200">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-black hover:text-gray-200">Login</Link>
              <Link to="/register" className="text-black hover:text-gray-200">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;