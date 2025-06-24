import React from 'react';

function OrganiserProfile() {
  return (
     <div className="p-6 max-w-md mx-auto border border-gray-300 rounded shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Organiser Profile</h2>
      <div className="space-y-2 text-gray-700">
        <p><strong>Company:</strong> EventLy Pvt Ltd</p>
        <p><strong>Email:</strong> organiser@example.com</p>
        <p><strong>Phone:</strong> 9876543210</p>
        <p><strong>Address:</strong> Pune, Maharashtra</p>
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
