import React, { useEffect, useState } from "react";
import OrganiserEventCard from "./OrganiserEventCard";
import OrganiserEventFilters from "./OrganiserEventFilters";
import { fetchOrganiserEvents } from "../../services/EventService";
import { useSelector } from "react-redux";

function OrganiserEventList() {
  const organiser = useSelector((state) => state.organiser.organiser);
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isPast, setIsPast] = useState(false);

  const handleOrganiserEventFetch = async () => {
    try {
      const result = await fetchOrganiserEvents(organiser.orgId);
      setEvents(result);
    } catch (error) {
      console.error("Failed to fetch organiser events", error);
    }
  };

  const toggleIsPast = () => setIsPast(!isPast);

  useEffect(() => {
    handleOrganiserEventFetch();
  }, []);

  useEffect(() => {
    applyFilters(filters);
  }, [filters, isPast, events]);

  const applyFilters = (filters) => {
    const now = new Date();

    const result = events.filter((event) => {
      const eventDate = new Date(event.startDateTime);
      const dateCheck = isPast ? eventDate < now : eventDate >= now;

      const keyword = (filters.search || "").toLowerCase();
      const matchesKeyword =
        event.eventTitle.toLowerCase().includes(keyword) ||
        event.categoryName.toLowerCase().includes(keyword) ||
        event.location.toLowerCase().includes(keyword);

      const matchesCategory =
        !filters.category || filters.category === event.categoryName;

      const matchesDate =
        !filters.date || event.startDateTime.startsWith(filters.date);

      return dateCheck && matchesKeyword && matchesCategory && matchesDate;
    });

    setFilteredEvents(result);
  };

  const handleClear = () => {
    setFilters({});
    setIsPast(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fef8ec] px-6 py-10">
      <OrganiserEventFilters
        filters={filters}
        onChange={setFilters}
        onClear={handleClear}
        isPast={isPast}
        toggleIsPast={toggleIsPast}
      />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#F2B33D] mb-8">
          {isPast ? "Past Events" : "Upcoming Events"}
        </h2>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <OrganiserEventCard
                key={event.id}
                event={event}
                isPast={isPast}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No events found for selected filters.</p>
        )}
      </div>
    </div>
  );
}

export default OrganiserEventList;
