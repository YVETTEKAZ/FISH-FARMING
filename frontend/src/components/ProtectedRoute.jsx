import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../pages/AuthContext';

function ProtectedRoute({ role }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  if (!user || (role && user.role !== role)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;