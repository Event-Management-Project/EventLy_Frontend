import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { getUpcomingEvents } from '../../services/EventService'; // adjust path if needed
import { Link } from 'react-router-dom';

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getUpcomingEvents();
        setEvents(data || []);
      } catch (err) {
        setError('Failed to load upcoming events.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading events...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <section className="py-12 px-4 bg-[#F5F3FD] rounded-lg shadow-inner">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {events.slice(0, 3).map((event) => (
          <div
            key={event.eventId}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {event.imageUrl ? (
              <img
                src={event.imageUrl}
                alt={event.eventTitle}
                className="w-full h-48 object-cover rounded-t-xl"
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-t-xl">
                <span className="text-gray-600">{event.eventTitle}</span>
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#6A4FB6] mb-1">
                {event.eventTitle}
              </h3>
              <p className="text-sm text-gray-600">
                {new Date(event.startDateTime).toLocaleDateString('en-GB')}
              </p>
              <p className="text-sm text-gray-600">{event.location}</p>
            </div>
          </div>
        ))}

        <Link
          to="/customer/events"
          className="bg-white rounded-xl shadow-lg flex flex-col justify-center items-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="p-6 text-center">
            <p className="text-[#6A4FB6] font-semibold text-lg mb-2">
              View More
            </p>
            <ArrowRight className="text-[#6A4FB6] w-6 h-6 mx-auto" />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default UpcomingEvents;