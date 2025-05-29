import React, { useEffect, useState } from 'react';
import api from '../services/api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [ponds, setPonds] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const userRes = await api.get('/users');
      const pondRes = await api.get('/ponds?all=1');
      setUsers(userRes.data);
      setPonds(pondRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // User Update
  const handleUpdateUser = async (user) => {
    const newEmail = prompt('Enter new email:', user.email);
    const newRole = prompt('Enter new role (admin, farmer, specialist):', user.role);
    if (!newEmail || !newRole) return;

    try {
      await api.put(`/users/${user.id}`, {
        email: newEmail,
        role: newRole,
      });
      fetchData();
    } catch (err) {
      alert('Failed to update user');
    }
  };

  // User Delete
  const handleDeleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await api.delete(`/users/${id}`);
      fetchData();
    } catch (err) {
      alert('Failed to delete user');
    }
  };

  // Pond Update
  const handleUpdatePond = async (pond) => {
    const newName = prompt('Enter pond name:', pond.name);
    const newLocation = prompt('Enter location:', pond.location);
    const newSize = prompt('Enter size:', pond.size);
    if (!newName || !newLocation || !newSize) return;

    try {
      await api.put(`/ponds/${pond.id}`, {
        name: newName,
        location: newLocation,
        size: newSize,
      });
      fetchData();
    } catch (err) {
      alert('Failed to update pond');
    }
  };

  // Pond Delete
  const handleDeletePond = async (id) => {
    if (!window.confirm('Are you sure you want to delete this pond?')) return;
    try {
      await api.delete(`/ponds/${id}`);
      fetchData();
    } catch (err) {
      alert('Failed to delete pond');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* USERS TABLE */}
      <div className="bg-white rounded shadow p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleUpdateUser(user)} className="bg-blue-500 text-white px-2 py-1 mr-2 rounded">
                    Update
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PONDS TABLE */}
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-2xl font-semibold mb-4">Ponds & Fish Species</h2>
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Size</th>
              <th className="border px-4 py-2">Owner</th>
              <th className="border px-4 py-2">Fish</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ponds.map(pond => (
              <tr key={pond.id}>
                <td className="border px-4 py-2">{pond.name}</td>
                <td className="border px-4 py-2">{pond.location}</td>
                <td className="border px-4 py-2">{pond.size}</td>
                <td className="border px-4 py-2">{pond.user?.name}</td>
                <td className="border px-4 py-2">
                  <ul className="list-disc ml-4">
                    {pond.fish_species?.length > 0 ? (
                      pond.fish_species.map(fish => (
                        <li key={fish.id}>{fish.name}</li>
                      ))
                    ) : (
                      <li>No fish assigned</li>
                    )}
                  </ul>
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleUpdatePond(pond)}
                    className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeletePond(pond.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
