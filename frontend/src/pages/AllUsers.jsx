import React, { useEffect, useState } from "react";

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://your-backend-api.com/api/users");
        setUsers(res.data.users);
        setMsg(res.data.message);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setMsg("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        All Registered Users
      </h1>

      {loading ? (
        <div className="text-center text-gray-500">Loading users...</div>
      ) : users.length === 0 ? (
        <div className="text-center text-gray-500">{msg}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-md transition duration-300"
            >
              <h2 className="text-xl font-bold text-gray-700">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-400">Role: {user.role}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
