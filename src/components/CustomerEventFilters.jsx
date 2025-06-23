import React from 'react';

const CustomerEventFilters = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="flex flex-col col-span-1 md:col-span-2">
          <label className="text-[#1f2937] font-semibold text-sm mb-1">
            Search (Event, Location, Organiser)
          </label>
          <input
            type="text"
            placeholder="🔍 Search..."
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#4b3a9b]"
            value="Tech Conference"
            readOnly
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#1f2937] font-semibold text-sm mb-1">Category</label>
          <select
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#4b3a9b]"
            value="Tech"
            disabled
          >
            <option value="Music">Music</option>
            <option value="Tech">Tech</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-[#1f2937] font-semibold text-sm mb-1">
            Event Date <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#4b3a9b]"
            value="2025-08-10"
            readOnly
          />
        </div>

        <div className="flex gap-2 col-span-1 md:col-span-4 justify-end mt-4 md:mt-0">
          <button
            className="bg-[#4b3a9b] text-white px-4 py-2 rounded-lg text-sm opacity-50 cursor-not-allowed"
            disabled
          >
            Apply
          </button>
          <button
            className="bg-gray-200 text-[#4b5563] px-4 py-2 rounded-lg text-sm opacity-50 cursor-not-allowed"
            disabled
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerEventFilters;
