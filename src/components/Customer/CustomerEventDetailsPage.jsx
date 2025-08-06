import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { eventDetails } from "../../services/EventService";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaRupeeSign } from "react-icons/fa";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await eventDetails(eventId);
        console.log(data);
        setEvent(data);
      } catch (error) {
        console.error("Failed to fetch event details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!event) return <div className="text-center mt-10">Event not found</div>;

  const images = event.images || (event.imageUrl ? [event.imageUrl] : []);
  const facilities = event.facilities || [];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto mb-10">
        {images.length ? (
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            {images.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt={`Event Image ${idx + 1}`}
                  className="h-[450px] w-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="h-[450px] flex items-center justify-center bg-gray-300 text-3xl font-bold text-[#4b3a9b] rounded-xl shadow">
            {event.eventTitle}
          </div>
        )}
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-md">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#4b3a9b]">
            {event.eventTitle}
          </h2>

          <p className="text-gray-600">
            <strong>Date:</strong>{" "}
            {new Date(event.startDateTime).toLocaleDateString()} -{" "}
            {new Date(event.endDateTime).toLocaleDateString()}
          </p>
          <p className="text-gray-600">
            <strong>Time:</strong>{" "}
            {new Date(event.startDateTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {new Date(event.endDateTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

          <p className="text-gray-600">
            <strong>Location:</strong> {event.location}
          </p>

          <p className="text-gray-600">
            <strong>Capacity:</strong> {event.capacity} ( Remaining:{" "}
            {event.remainingCapacity})
          </p>

          <div>
            <strong className="text-gray-700">Description:</strong>
            <p className="text-gray-700 text-justify mt-1 leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#4b3a9b] mb-2">
              Organiser Information
            </h3>
            <p className="text-gray-600">
              <strong>Company:</strong> {event.organiserCompany}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {event.organiserEmail}
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> {event.organiserPhone}
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> {event.organiserAddress}
            </p>
          </div>

          {facilities.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-[#4b3a9b] mb-2">
                Facilities
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {facilities.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-xl shadow text-center">
        <div className="text-2xl font-semibold text-gray-700 mb-4 flex items-center justify-center gap-2">
          <FaRupeeSign className="text-[#4b3a9b]" />{" "}
          <span>{event.ticketPrice}</span>
        </div>
        <Link
          to={`/customer/events/${eventId}/book`}
          state={{ eventName: event.eventTitle , eventPrice: event.ticketPrice}}
          className="inline-block bg-[#4b3a9b] text-white text-lg font-medium px-8 py-3 rounded-lg hover:bg-[#372e70] transition"
        >
          Book Event
        </Link>
      </div>
    </div>
  );
};

export default EventDetailsPage;
