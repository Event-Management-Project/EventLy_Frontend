import React from 'react';
import { ArrowRight } from 'lucide-react';

const mockEvents = [
  {
    id: 1,
    title: "Summer Fest 2025",
    date: "August 12, 2025",
    location: "Pune, Maharashtra",
    image: "https://source.unsplash.com/random/300x200?event",
  },
  {
    id: 2,
    title: "Food Carnival",
    date: "August 15, 2025",
    location: "Mumbai, Maharashtra",
    image: "https://source.unsplash.com/random/300x200?food",
  },
  {
    id: 3,
    title: "Music Bash",
    date: "August 20, 2025",
    location: "Bangalore, Karnataka",
    image: "https://source.unsplash.com/random/300x200?concert",
  },
];

function UpcomingEvents() {
  return (
    <section className="py-12 px-4 bg-[#F5F3FD] rounded-lg shadow-inner">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {mockEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#6A4FB6] mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600">{event.date}</p>
              <p className="text-sm text-gray-600">{event.location}</p>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-lg flex flex-col justify-center items-center hover:shadow-xl transition-shadow duration-300 cursor-pointer">
          <div className="p-6 text-center">
            <p className="text-[#6A4FB6] font-semibold text-lg mb-2">View More</p>
            <ArrowRight className="text-[#6A4FB6] w-6 h-6 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
