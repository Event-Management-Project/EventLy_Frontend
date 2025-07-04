import React, { useState, useEffect } from "react";

function BookingFormPage() {
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

    alert(
      `Booking Confirmed!\n\nEvent: ${eventName}\nAttendees: ${attendees}\nTotal: ₹${total}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#f5f3ff] p-8 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-3xl font-extrabold text-[#4b3a9b] text-center mb-2">
          Book Your Event
        </h2>
        <p className="text-center text-lg text-[#4b5563] mb-8 font-medium">
          <span className="font-semibold text-[#4b3a9b]">Event:</span> {eventName}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="attendees"
              className="block text-sm font-semibold text-[#4b5563] mb-1"
            >
              Number of Attendees:
            </label>
            <input
              id="attendees"
              type="number"
              min="1"
              value={attendees}
              onChange={(e) => setAttendees(parseInt(e.target.value) || 1)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b3a9b]"
              required
            />
          </div>

          <p className="text-lg font-semibold text-[#4b5563]">
            Total: ₹{" "}
            <span className="text-[#4b3a9b] font-bold">
              {attendees * pricePerTicket}
            </span>
          </p>

          <button
            type="submit"
            className="w-full bg-[#4b3a9b] hover:bg-[#372e70] text-white font-semibold py-3 rounded-lg text-lg transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingFormPage;