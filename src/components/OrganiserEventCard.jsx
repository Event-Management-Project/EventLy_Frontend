import React from 'react';

const OrganiserEventCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <img
        src="/placeholder-event.jpg"
        alt="Event Banner"
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl font-bold text-[#333333] mb-1 truncate">
            AI & Robotics Expo
          </h3>

          <div className="flex items-center text-sm text-gray-600 mb-1">
            <span className="mr-1 font-medium">📍</span>
            Delhi, India
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-2">
            <span className="mr-1 font-medium">📅</span>
            2025-09-15T10:00
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className="bg-[#F2B33D]/10 text-[#F2B33D] text-xs font-medium px-3 py-1 rounded-full">
              Tech
            </span>
            <span className="text-[#333333] font-semibold text-sm">
              ₹499
            </span>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <div
            className="flex items-center gap-2 px-3 py-2 text-sm bg-[#F2B33D] text-[#333333] rounded-lg opacity-60 cursor-not-allowed"
            title="Edit disabled"
          >
            ✏️ Edit
          </div>
          <button
            className="flex items-center gap-2 px-3 py-2 text-sm bg-red-100 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition cursor-not-allowed"
            disabled
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganiserEventCard;
