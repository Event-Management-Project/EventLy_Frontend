// OrganiserProfile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrganiserProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/organiser/profile")
      .then((res) => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load organiser profile.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-md mx-auto border border-gray-300 rounded shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Organiser Profile</h2>
      <div className="space-y-2 text-gray-700">
        <p><strong>Company:</strong> {profile?.org_company_name || "N/A"}</p>
        <p><strong>Email:</strong> {profile?.email || "N/A"}</p>
        <p><strong>Phone:</strong> {profile?.phone_no || "N/A"}</p>
        <p><strong>Address:</strong> {profile?.address || "N/A"}</p>
      </div>
      <div className="mt-4 flex justify-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default OrganiserProfile;
