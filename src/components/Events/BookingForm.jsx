import React, { useState } from 'react';

function BookingFormPage() {
  const eventName = 'React Conference 2025';
  const pricePerTicket = 250;

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    attendees: 1,
    specialRequests: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.attendees} attendee(s). Total: ₹${formData.attendees * pricePerTicket}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Book Your Event</h2>

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-4">
        <div className="text-lg space-y-2">
          <p><strong>Event:</strong> {eventName}</p>
          <p><strong>Price per Ticket:</strong> ₹{pricePerTicket}</p>
          <p><strong>Total:</strong> ₹{formData.attendees * pricePerTicket}</p>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            {showForm ? "Cancel" : "Book Tickets"}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 border-t pt-4">
            <input
              type="number"
              min="1"
              value={formData.attendees}
              onChange={(e) => setFormData({ ...formData, attendees: parseInt(e.target.value) })}
              placeholder="Number of Attendees"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <textarea
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              placeholder="Any special requests..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              rows="3"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default BookingFormPage;
