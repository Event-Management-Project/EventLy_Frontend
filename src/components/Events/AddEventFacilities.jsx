import React from 'react';

function AddEventFacilities() {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Add Event Facility</h2>
      <form className="space-y-6">
        <div className="bg-gray-50 p-4 rounded space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Facility Name</label>
            <input
              type="text"
              placeholder="Enter facility name"
              className="mt-1 block w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              rows="3"
              placeholder="Short description"
              className="mt-1 block w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 transition text-white px-5 py-2 rounded"
        >
          Add Facility
        </button>
      </form>
    </div>
  );
}

export default AddEventFacilities;
