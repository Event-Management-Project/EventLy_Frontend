import React, { useEffect, useState } from "react";
import OrganiserEventCard from "./OrganiserEventCard";
import OrganiserEventFilters from "./OrganiserEventFilters";
import AddCategory from "../Events/AddCategory";

const allEvents = [
  {
    evt_id: 1,
    evt_title: "Music Festival",
    category: "Music",
    start_dateTime: "2025-09-01",
    location: "Mumbai",
    ticket_price: 150,
    org_company_name: "ABC Events",
    imageUrl: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
  },
  {
    evt_id: 2,
    evt_title: "Tech Expo",
    category: "Tech",
    start_dateTime: "2025-11-15",
    location: "Pune",
    ticket_price: 300,
    org_company_name: "TechWorld",
    imageUrl: "https://via.placeholder.com/800x400",
  },
  {
    evt_id: 3,
    evt_title: "Old Conference",
    category: "Business",
    start_dateTime: "2024-07-20",
    location: "Delhi",
    ticket_price: 250,
    org_company_name: "OldOrg",
    imageUrl: "https://via.placeholder.com/800x400",
  },
];

function OrganiserEventList() {
  const [filters, setFilters] = useState({});
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isPast, setIsPast] = useState(false);
  const [categories, setCategories] = useState(["Music", "Tech", "Sports", "Business"]);

  const toggleIsPast = () => setIsPast(!isPast);

  useEffect(() => {
    applyFilters(filters);
  }, [filters, isPast]);

  const applyFilters = (filters) => {
    const now = new Date();

    let result = allEvents.filter((event) => {
      const eventDate = new Date(event.start_dateTime);
      const dateCheck = isPast ? eventDate < now : eventDate >= now;

      const keyword = (filters.search || "").toLowerCase();
      const matchesKeyword =
        event.evt_title.toLowerCase().includes(keyword) ||
        event.category.toLowerCase().includes(keyword) ||
        event.location.toLowerCase().includes(keyword);

      const matchesCategory =
        !filters.category || filters.category === event.category;

      const matchesDate =
        !filters.date || event.start_dateTime === filters.date;

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
        categories={categories} 
      />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#F2B33D] mb-8">
          {isPast ? "Past Events" : "Upcoming Events"}
        </h2>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <OrganiserEventCard key={event.evt_id} event={event} />
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
