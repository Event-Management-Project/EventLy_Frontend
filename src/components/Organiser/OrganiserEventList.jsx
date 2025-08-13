import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrganiserEventCard from "./OrganiserEventCard";
import OrganiserEventFilters from "./OrganiserEventFilters";
import { useSelector } from "react-redux";
import {
  deleteEventById,
  fetchOrganiserEvents,
} from "../../services/EventService";

function OrganiserEventList() {
  const organiser = useSelector((state) => state.organiser.organiser);
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isPast, setIsPast] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleIsPast = () => setIsPast(!isPast);

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (event) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the event "${event.eventTitle}"?`
    );
    if (!confirmDelete) return;

    try {
      await deleteEventById(event.id);
      toast.success("Event deleted successfully");
      setEvents((prevEvents) => prevEvents.filter((e) => e.id !== event.id));
    } catch (error) {
      console.error(
        "Event deletion failed:",
        error.response?.data || error.message || error
      );
      toast.error(
        "Event deletion failed: " +
          (error.response?.data?.message || error.message || "Unknown error")
      );
    }
  };

  useEffect(() => {
    applyFilters(filters);
  }, [filters, isPast, events]);

  const fetchEvents = async () => {
    try {
      const response = await fetchOrganiserEvents(organiser.orgId);
      const backendEvents = response;
      console.log(response);
      const formattedEvents = backendEvents.map((e) => ({
        id: e.eventId,
        description: e.description,
        eventTitle: e.eventTitle,
        startDateTime: e.startDateTime,
        endDateTime: e.endDateTime,
        location: e.location,
        ticketPrice: e.ticketPrice,
        categoryName: e.categoryName,
        capacity: e.capacity,
        imageUrl: e.imageUrl,
      }));

      setEvents(formattedEvents);

      const uniqueCategories = [
        ...new Set(formattedEvents.map((e) => e.categoryName)),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  const applyFilters = (filters) => {
    const now = new Date();

    const result = events.filter((event) => {
      const eventDate = new Date(event.startDateTime);
      const dateCheck = isPast ? eventDate < now : eventDate >= now;

      const keyword = (filters.search || "").toLowerCase();
      const matchesKeyword =
        (event.eventTitle?.toLowerCase() || "").includes(keyword) ||
        (event.categoryName?.toLowerCase() || "").includes(keyword) ||
        (event.location?.toLowerCase() || "").includes(keyword);

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
        categories={categories}
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
                onDelete={handleDelete}
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
