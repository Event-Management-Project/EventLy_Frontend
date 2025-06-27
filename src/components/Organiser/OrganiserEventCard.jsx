import React from 'react';
import { MapPin, CalendarDays } from 'lucide-react';

const OrganiserEventCard = ({ event }) => {
   if (!event) return null; 

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <img
        src={event.imageUrl}
        alt={event.evt_title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-[#333333] mb-1 truncate">
            {event.evt_title}
          </h3>

          <div className="flex items-center text-sm text-gray-600 mb-1">
            <MapPin className="w-4 h-4 mr-1" />
            {event.location}
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-2">
            <CalendarDays className="w-4 h-4 mr-1" />
            {event.start_dateTime}
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className="bg-[#F2B33D]/10 text-[#F2B33D] text-xs font-medium px-3 py-1 rounded-full">
              {event.category}
            </span>
            <span className="text-[#333333] font-semibold text-sm">
              ₹{event.ticket_price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganiserEventCard;
