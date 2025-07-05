import React from "react";
import { Link, useParams } from "react-router-dom";

function EventDetailsPage() {
  const event = {
    evt_title: "Tech Conference 2025",
    description:
      "Join the biggest tech conference of the year with industry leaders!",
    location: "Mumbai, India",
    start_dateTime: "2025-09-01T10:00:00",
    end_dateTime: "2025-09-03T18:00:00",
    ticket_price: 250.0,
    capacity: 1000,
    remaining_capacity: 120,
    organiser: {
      org_company_name: "TechWorld Pvt Ltd",
      email: "organizer@techworld.com",
      phone_no: "9876543210",
      address: "Pune, Maharashtra",
    },
    facilities: ["Free Wi‑Fi", "Food Court", "Parking", "Workshops"],
    images: [
      "https://via.placeholder.com/800x500?text=Main+Image",
      "https://via.placeholder.com/400x240?text=Side+1",
      "https://via.placeholder.com/400x240?text=Side+2",
    ],
  };

  const {eventId}=useParams()
  console.log(eventId)
  const handleBooking = () => {
    window.location.href = `/customer/events/${eventId}/book`;
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="md:col-span-3">
            <img
              src={event.images[0]}
              alt="Main Event"
              className="rounded-2xl w-full h-96 object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <img
              src={event.images[1]}
              alt="Thumb 1"
              className="rounded-2xl h-44 object-cover w-full shadow-md"
            />
            <img
              src={event.images[2]}
              alt="Thumb 2"
              className="rounded-2xl h-44 object-cover w-full shadow-md"
            />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center text-[#4b3a9b] mb-6">
          {event.evt_title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#4b5563] text-lg">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Date:</span>
              <span>
                {new Date(event.start_dateTime).toLocaleDateString()} -{" "}
                {new Date(event.end_dateTime).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Location:</span>
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Capacity:</span>
              <span>
                {event.capacity} | Remaining: {event.remaining_capacity}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Price:</span>
              <span>₹{event.ticket_price}</span>
            </div>
            <p className="text-justify leading-relaxed">{event.description}</p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="font-semibold mb-1">
                Organizer: {event.organiser.org_company_name}
              </p>
              <p className="text-sm">Email: {event.organiser.email}</p>
              <p className="text-sm">Phone: {event.organiser.phone_no}</p>
              <p className="text-sm">Address: {event.organiser.address}</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Facilities:</p>
              <ul className="list-disc list-inside text-sm">
                {event.facilities.map((fac, idx) => (
                  <li key={idx}>{fac}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={handleBooking}
            className="inline-flex items-center justify-center bg-[#4b3a9b] hover:bg-[#372e70] text-white px-8 py-4 rounded-xl text-xl font-medium transition duration-300"
          >
            <Link to={`/customer/events/${eventId}/book`}>Book Event</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsPage;
