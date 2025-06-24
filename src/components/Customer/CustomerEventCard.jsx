import React from 'react';

function CustomerEventCard() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-4 hover:shadow-xl transition-all relative">
      <img
        src="/placeholder-event.jpg"
        alt="Sample Event"
        className="w-full h-40 object-cover rounded-2xl mb-3"
      />
      <h3 className="text-lg font-bold text-[#4b3a9b]">Tech Fest 2025</h3>
      <p className="text-sm text-[#4b5563] mb-1">Technology</p>

      <div className="flex items-center gap-2 text-sm text-[#4b5563]">
        <span className="text-[#ccbbf2]">📍</span>
        <span>Bangalore, India</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-[#4b5563] mt-1">
        <span className="text-[#ccbbf2]">📅</span>
        <span>2025-08-10</span>
      </div>

      <div className="mt-4 w-full bg-gray-100 text-gray-600 font-semibold py-2 px-4 rounded-xl text-center cursor-not-allowed">
        View Details
      </div>
    </div>
  );
}

export default CustomerEventCard;
