import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../pages/AuthContext';

function PublicRoute({ restricted }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  if (restricted && user) {
    if (user.role === 'farmer') return <Navigate to="/farmer-dashboard" />;
    if (user.role === 'admin') return <Navigate to="/admin-dashboard" />;
    if (user.role === 'specialist') return <Navigate to="/specialist-dashboard" />;
  }

  return <Outlet />;
}

export default PublicRoute;