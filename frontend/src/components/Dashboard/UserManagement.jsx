import React, { useState, useEffect } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", access: "Admin" });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/admins");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();

        const formattedUsers = data.admins.map((admin) => ({
          id: admin.id,
          name: admin.name || "Unknown",
          email: admin.email || "N/A",
          access: admin.access ? admin.access.split(", ") : ["No Access"],
          lastActive: admin.last_active || "Not Active",
          dateAdded: admin.created_at || "N/A",
        }));

        setUsers(formattedUsers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      const addedUser = await response.json();

      setUsers([
        ...users,
        {
          id: addedUser.admin.id,
          name: newUser.name,
          email: newUser.email,
          access: [newUser.access],
          lastActive: "Not Active",
          dateAdded: new Date().toISOString().split("T")[0],
        },
      ]);

      setShowPopup(false);
      setNewUser({ name: "", email: "", password: "", access: "Admin" });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <div className="p-6 bg-gray-20 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">User Management</h1>
          <p className="text-sm text-gray-600">
            Manage your team members and their account permissions here.
          </p>
        </div>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
          onClick={() => setShowPopup(true)}
        >
          + Add User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="p-4 text-left text-gray-600 text-sm font-semibold border-b">User Name</th>
              <th className="p-4 text-left text-gray-600 text-sm font-semibold border-b">Access</th>
              <th className="p-4 text-left text-gray-600 text-sm font-semibold border-b">Last Active</th>
              <th className="p-4 text-left text-gray-600 text-sm font-semibold border-b">Date Added</th>
              <th className="p-4 text-gray-600 text-sm font-semibold border-b"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-4 text-sm text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-medium">{user.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {user.access.map((role, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-sm text-gray-500">{user.lastActive}</td>
                <td className="p-4 text-sm text-gray-500">{user.dateAdded}</td>
                <td className="p-4 text-right">
                  <button className="text-gray-600 hover:text-gray-800">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New User</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
              onClick={handleAddUser}
            >
              Save
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow ml-2 hover:bg-gray-400"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;