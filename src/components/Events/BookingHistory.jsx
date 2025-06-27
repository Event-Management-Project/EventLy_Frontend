import React, { useState } from "react";
import { MessageSquare, Star } from "lucide-react";
import { HiCheckCircle, HiClock } from "react-icons/hi"; // <-- imported icons

function BookingHistory() {
  const bookings = [
    {
      eventId: "EVT123",
      event: "Tech Summit 2025",
      date: "2025-09-01",
      location: "Pune",
      category: "Technology",
      seats: 2,
      ticketPrice: 500,
      status: "Confirmed",
    },
    {
      eventId: "EVT456",
      event: "Music Fest",
      date: "2025-10-12",
      location: "Mumbai",
      category: "Entertainment",
      seats: 4,
      ticketPrice: 300,
      status: "Pending",
    },
  ];

  const [selectedReview, setSelectedReview] = useState(null);
  const [rating, setRating] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h2 className="text-3xl font-extrabold  text-center text-purple-700 mb-8">
        My Bookings
      </h2>

      <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-purple-100 text-gray-700">
            <tr>
              {["Event", "Location", "Category", "Date", "Seats", "Price", "Status", "Review"].map(
                (head) => (
                  <th key={head} className="px-4 py-3 font-medium">
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {bookings.map((booking, idx) => (
              <tr
                key={idx}
                className="hover:bg-purple-50 transition-colors duration-150"
              >
                <td className="px-4 py-3 font-medium text-purple-700">
                  {booking.event}
                </td>
                <td className="px-4 py-3">{booking.location}</td>
                <td className="px-4 py-3">{booking.category}</td>
                <td className="px-4 py-3">{booking.date}</td>
                <td className="px-4 py-3">{booking.seats}</td>
                <td className="px-4 py-3">₹{booking.ticketPrice}</td>
                <td className="px-4 py-3">
                  {booking.status === "Confirmed" ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      <HiCheckCircle className="w-4 h-4" />
                      Confirmed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full animate-pulse">
                      <HiClock className="w-4 h-4" />
                      Pending
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => {
                      setSelectedReview(booking);
                      setRating(0);
                    }}
                    className="flex items-center text-purple-600 hover:underline"
                  >
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Review Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-purple-700 mb-4 text-center">
              Review: {selectedReview.event}
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Review Subject"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />

              <textarea
                placeholder="Share your experience..."
                rows={3}
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />

              <div>
                <label className="text-sm font-medium text-gray-700">Rating</label>
                <div className="flex mt-1 space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      onClick={() => setRating(star)}
                      className={`w-6 h-6 cursor-pointer ${
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                      } hover:scale-110 transition-transform`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedReview(null)}
                  className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingHistory;
