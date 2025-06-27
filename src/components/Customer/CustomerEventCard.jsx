import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function CustomerEventCard({ event }) {
  const safeEvent = event || { title: 'No Title', category: 'Unknown', location: 'N/A', startDate: 'N/A', id: 'default-id' };

  return (
    <div className="bg-white rounded-3xl shadow-md p-4 hover:shadow-xl transition-all relative">
      {safeEvent.imageUrl && (
        <img
          src={safeEvent.imageUrl}
          alt={safeEvent.title}
          className="w-full h-40 object-cover rounded-2xl mb-3"
        />
      )}

      <h3 className="text-lg font-bold text-[#4b3a9b]">{safeEvent.title}</h3>
      <p className="text-sm text-[#4b5563] mb-2">{safeEvent.category}</p>

      <div className="flex items-center gap-2 text-sm text-[#4b5563]">
        <FaMapMarkerAlt className="text-[#ccbbf2]" />
        <span>{safeEvent.location}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-[#4b5563] my-1">
        <FaCalendarAlt className="text-[#ccbbf2]" />
        <span>{safeEvent.startDate}</span>
      </div>

      <button
        className="mt-4 w-full bg-[#4b3a9b] text-white font-semibold py-2 px-4 rounded-xl hover:bg-[#372e70] transition-all"
      >
        View Details
      </button>
    </div>
  );
}

export default CustomerEventCard;