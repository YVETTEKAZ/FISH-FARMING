import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';
import About from './pages/About';
import FishSpecies from './pages/FishSpecies';
import SpeciesDetail from './pages/SpeciesDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import FarmerDashboard from './pages/FarmerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import SpecialistDashboard from './pages/SpecialistDashboard';
import Contact from './pages/Contact';
import AddPond from './pages/AddPond';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/species" element={<FishSpecies />} />
            <Route path="/species/:speciesId" element={<SpeciesDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/add-pond" element={<AddPond />} />
          </Route>
          {/* Auth Routes */}
          <Route element={<PublicRoute restricted />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          {/* Protected Routes */}
          <Route element={<ProtectedRoute role="farmer" />}>
            <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
          </Route>
          <Route element={<ProtectedRoute role="admin" />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
          <Route element={<ProtectedRoute role="specialist" />}>
          <Route path="/specialist-dashboard" element={<SpecialistDashboard />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;