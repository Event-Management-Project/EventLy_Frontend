import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookingFormPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [eventName, setEventName] = useState("Loading...");
  const pricePerTicket = 250;

  const [attendees, setAttendees] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setEventName("React Conference 2025");
    }, 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = attendees * pricePerTicket;
    navigate(`/customer/events/${eventId}/payment`, {
      state: { attendees, total },
    });
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

        <form onSubmit={handleSubmit} className="space-y-6">
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
            type="submit"
            className="w-full bg-[#4b3a9b] hover:bg-[#3a2f7e] text-white font-semibold py-3 rounded-lg text-lg transition"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingFormPage;
