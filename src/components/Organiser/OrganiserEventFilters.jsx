import React from 'react';

const OrganiserEventFilters = () => {
  return (
    <div className="bg-[#FEF8EC] rounded-3xl shadow-md p-4 mb-6">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#F2B33D]">Filter Events</h2>
        <button
          className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 cursor-not-allowed"
          disabled
        >
          Show Past Events
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Search</label>
          <input
            type="text"
            placeholder="🔍 Search by event name"
            className="w-full p-2 border rounded-lg"
            defaultValue=""
            readOnly
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Category</label>
          <select
            className="w-full p-2 border rounded-lg"
            defaultValue=""
            disabled
          >
            <option value="">All</option>
            <option value="Music">Music</option>
            <option value="Tech">Tech</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            placeholder="📍 Enter location"
            className="w-full p-2 border rounded-lg"
            defaultValue=""
            readOnly
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Event Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded-lg"
            defaultValue=""
            readOnly
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          className="bg-[#F2B33D] text-white px-5 py-2 rounded-lg text-sm cursor-not-allowed"
          disabled
        >
          Apply Filters
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm cursor-not-allowed"
          disabled
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default OrganiserEventFilters;
