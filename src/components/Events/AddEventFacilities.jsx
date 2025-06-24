import React from 'react';

function AddEventFacilities() {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add Facilities to Event</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Facility Name</label>
          <input type="text" className="border p-2 w-full rounded" placeholder="Enter facility name" />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea rows="3" className="border p-2 w-full rounded" placeholder="Short description"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Facility</button>
      </form>
    </div>
  );
}

export default AddEventFacilities;
