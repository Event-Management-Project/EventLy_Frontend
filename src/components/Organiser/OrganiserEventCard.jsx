import React from 'react';
import { MapPin, CalendarDays, Users, Pencil, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrganiserEventCard = ({ event, onEdit, onDelete }) => {
  if (!event) return null;

  const navigate=useNavigate()

  const handleEdit=()=>{
    navigate("/organiser/events/:eventId/edit")
  }

  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col justify-between">
      <div className="absolute top-3 right-3 z-10 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
        {event.category}
      </div>

      <div className="w-full h-52 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.evt_title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 flex flex-col justify-between gap-2">
        <h3 className="text-xl font-bold text-gray-800 truncate">
          {event.evt_title}
        </h3>

        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          {event.location}
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <CalendarDays className="w-4 h-4 mr-1" />
          {event.start_dateTime}
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Users className="w-4 h-4 mr-1" />
          Capacity: {event.capacity}
        </div>

        <div className="text-lg font-semibold text-gray-800">
          ₹{event.ticket_price}
        </div>

        <div className="mt-4 flex justify-end gap-3">
          <button
            onClick={handleEdit}
            className="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 font-medium text-sm"
          >
            <Pencil size={16} />
            Edit
          </button>
          <button
            onClick={() => onDelete?.(event)}
            className="flex items-center gap-1 text-red-500 hover:text-red-600 font-medium text-sm"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganiserEventCard;
