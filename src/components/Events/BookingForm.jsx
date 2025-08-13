import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createBooking, hasCapacity } from "../../services/BookingService";

function BookingFormPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [attendees, setAttendees] = useState(1);
  const eventNameFromLocation = location.state?.eventName;
  const [eventName] = useState(eventNameFromLocation || "Loading...");
  const pricePerTicket = location.state?.eventPrice;

  console.log(eventName, pricePerTicket);

  const customerId = useSelector((state) => state.customer.customer.cstId);
  console.log(customerId)

  const handleBook = async () => {
    const total = attendees * pricePerTicket;

    try {

      const capacityAvailable = await hasCapacity(eventId, attendees);
      if (!capacityAvailable) {
        toast.error("Not enough capacity for this event!"); 
        return;
      }

      const response = await createBooking(customerId, eventId, attendees);
      console.log(response.data);
      const booking = response.data;

      navigate(`/customer/events/${eventId}/payment`, {
        state: {
          bookingId: booking.id,
          attendees: booking.totalAttendee,
          total,
          eventName,
        },
      });
    } catch (error) {
      alert("Failed to create booking. Please try again." + error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f3fb] p-8 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-3xl font-extrabold text-[#4b3a9b] text-center mb-2">
          Book Your Event
        </h2>
        <p className="text-center text-lg text-[#2e2e2e] mb-8 font-medium">
          <span className="font-semibold text-[#4b3a9b]">Event:</span>{" "}
          {eventName}
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#2e2e2e] mb-1">
              Number of Attendees:
            </label>
            <input
              type="number"
              min="1"
              value={attendees}
              onChange={(e) => setAttendees(parseInt(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b3a9b]"
              required
            />
          </div>

          <p className="text-lg font-semibold text-[#2e2e2e]">
            Total: ₹{" "}
            <span className="text-[#4b3a9b] font-bold">
              {attendees * pricePerTicket}
            </span>
          </p>

          <button
            onClick={handleBook}
            type="submit"
            className="w-full bg-[#4b3a9b] hover:bg-[#3a2f7e] text-white font-semibold py-3 rounded-lg text-lg transition"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingFormPage;
