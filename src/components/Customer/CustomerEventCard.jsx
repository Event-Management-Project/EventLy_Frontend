import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

function CustomerEventCard({ event }) {
  const safeEvent = event || {
    eventTitle: "No Title",
    categoryName: "Unknown",
    location: "N/A",
    startDateTime: "N/A",
    ticketPrice: 0,
    eventId: "default-id",
  };

  return (
    <div className="bg-[#f4f1fc] rounded-3xl shadow-md p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-[#e2dff3]">
      {safeEvent.eventImage ? (
        <img
          src={safeEvent.eventImage}
          alt={safeEvent.eventTitle}
          className="w-full h-44 object-cover rounded-2xl mb-4"
        />
      ) : (
        <div className="w-full h-44 flex items-center justify-center bg-[#e9e4fa] text-[#372e70] text-xl font-bold rounded-2xl mb-4">
          {safeEvent.eventTitle}
        </div>
      )}

      <span className="inline-block text-xs uppercase bg-[#ccbbf2] text-[#4b3a9b] font-semibold px-3 py-1 rounded-full mb-2">
        {safeEvent.categoryName}
      </span>

      <h3 className="text-xl font-bold text-[#2e2c49] leading-tight mb-2">
        {safeEvent.eventTitle}
      </h3>

      <div className="flex items-center gap-2 text-sm text-[#333] mb-1">
        <FaMapMarkerAlt className="text-[#a084dc]" />
        <span>{safeEvent.location}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-[#333] mb-1">
        <FaCalendarAlt className="text-[#a084dc]" />
        <span>{new Date(safeEvent.startDateTime).toLocaleString("en-GB")}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-[#333] mb-4">
        <FaTag className="text-[#a084dc]" />
        <span className="font-medium">₹{safeEvent.ticketPrice}</span>
      </div>

      <Link to={`/customer/events/${safeEvent.eventId}/description`}>
        <button className="w-full bg-[#4b3a9b] text-white font-semibold py-2 px-4 rounded-xl hover:bg-[#372e70] transition-all duration-200">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default CustomerEventCard;
