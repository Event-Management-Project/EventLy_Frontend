import React from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaTag,
  FaPen,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const formatDateTime = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

const OrganiserEventCard = ({ event, isPast = false, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/organiser/events/${event.id}/edit`);
  };

  return (
    <div className="bg-[#FFFDF3] rounded-3xl shadow-md p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#fef3c7] flex flex-col justify-between">
      <div className="relative w-full h-44 mb-4">
        {event.eventImage ? (
          <img
            src={event.eventImage}
            alt={event.eventTitle}
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#fef7d4] text-[#d99904] text-xl font-bold rounded-2xl text-center px-2">
            {event.eventTitle}
          </div>
        )}

        {/* Category badge */}
        <span className="absolute top-2 right-2 bg-[#fef3c7] text-[#b88700] text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-[#f2d680]">
          {event.categoryName}
        </span>
      </div>

      <h3 className="text-xl font-bold text-[#403300] leading-tight mb-2">
        {event.eventTitle}
      </h3>

      <div className="flex items-center gap-2 text-sm text-[#4a3b00] mb-1">
        <FaMapMarkerAlt className="text-[#F2B33D]" />
        <span>{event.location}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-[#4a3b00] mb-1">
        <FaCalendarAlt className="text-[#F2B33D]" />
        <span>{formatDateTime(event.startDateTime)}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-[#4a3b00] mb-1">
        <FaUsers className="text-[#F2B33D]" />
        <span>Capacity: {event.capacity}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-[#4a3b00] mb-4">
        <FaTag className="text-[#F2B33D]" />
        <span className="font-medium">₹{event.ticketPrice}</span>
      </div>

      {!isPast && (
        <div className="mt-2 flex justify-end gap-3">
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 text-sm text-[#d99904] hover:text-[#b88700] font-semibold"
          >
            <FaPen size={14} />
            Edit
          </button>
          <button
            onClick={() => onDelete?.(event)}
            className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 font-semibold"
          >
            <FaTrash size={14} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default OrganiserEventCard;
