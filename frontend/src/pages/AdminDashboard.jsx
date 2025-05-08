import { useState, useEffect } from 'react';
import api from '../services/api';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/users')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  const handleApprove = async (userId) => {
    try {
      await api.patch(`/users/${userId}`, { status: 'approved' });
      setUsers(users.map((user) =>
        user.id === userId ? { ...user, status: 'approved' } : user
      ));
    } catch (error) {
      console.error('Error approving user:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <h3 className="text-2xl font-semibold mb-2">User Management</h3>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.status}</td>
              <td className="border p-2">
                {user.status === 'pending' && (
                  <button
                    onClick={() => handleApprove(user.id)}
                    className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;