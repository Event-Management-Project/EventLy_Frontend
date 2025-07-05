import React, { useState, useEffect } from "react";
import CustomerEventFilters from "./CustomerEventFilters";
import CustomerEventCard from "./CustomerEventCard";

const CustomerEventList = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    date: "",
  });

  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 12;

  useEffect(() => {
    const mockEvents = [...Array(30)].map((_, i) => ({
      id: i + 1,
      title: `Event ${i + 1}`,
      category: ["Music", "Tech", "Sports"][i % 3],
      location: `City ${i % 5}`,
      organiser: `Organiser ${i % 4}`,
      startDate: "2025-07-20",
      imageUrl: `https://source.unsplash.com/400x250/?event,${i + 1}`,
    }));
    setEvents(mockEvents);
  }, []);

  useEffect(() => {
    let result = [...events];

    const lowerSearch = filters.search.toLowerCase();

    if (filters.search) {
      result = result.filter(
        (e) =>
          e.title.toLowerCase().includes(lowerSearch) ||
          e.location.toLowerCase().includes(lowerSearch) ||
          e.organiser.toLowerCase().includes(lowerSearch)
      );
    }

    if (filters.category) {
      result = result.filter((e) => e.category === filters.category);
    }

    if (filters.date) {
      result = result.filter((e) => e.startDate === filters.date);
    }

    setFilteredEvents(result);
    setCurrentPage(1);
  }, [filters, events]);

  const handleApply = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClear = () => {
    const cleared = { search: "", category: "", date: "" };
    setFilters(cleared);
  };

  const currentEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white min-h-screen">
      <CustomerEventFilters filters={filters} onApply={handleApply} onClear={handleClear} />

      <h2 className="text-2xl font-bold text-[#4b3a9b] mb-4">Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentEvents.length ? (
          currentEvents.map((event) => (
            <CustomerEventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No events found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg border transition ${
                currentPage === i + 1
                  ? "bg-[#6A4FB6] text-white"
                  : "bg-white text-[#6A4FB6] border-[#6A4FB6]"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerEventList;