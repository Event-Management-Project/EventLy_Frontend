import React, { useEffect, useState } from "react";
import { MessageSquare, Star } from "lucide-react";
import { HiCheckCircle, HiClock } from "react-icons/hi";
import { useSelector } from "react-redux";
import { fetchBookingHistory } from "../../services/BookingService";
import { useNavigate, useParams } from "react-router-dom";
import { addReviews } from "../../services/Reviews";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [review, setReview] = useState({ subject: "", description: "" });
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const customer = useSelector((state) => state.customer.customer);
  const navigate = useNavigate();
  // const { eventId } = useParams();

  useEffect(() => {
    if (customer?.id) {
      getBookingHistory();
    }
  }, [customer]);

  const getBookingHistory = async () => {
    try {
      const result = await fetchBookingHistory(customer.id);
      console.log(result);
      setBookings(result);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };

  const handlePaymentRedirect = (booking) => {
    navigate(`/customer/events/${booking.evtId}/payment`, {
      state: {
        total: booking.price,
        bookingId: booking.bkgId,
        attendees: booking.attendee,
        eventName: booking.eventTitle,
      },
    });
  };

  const addReview = async () => {
    if (!review.subject.trim() || !review.description.trim() || rating === 0) {
      alert("Please fill in all fields and select a rating.");
      return;
    }

    try {
      setLoading(true);
      const data = {
        customerId: customer.id,
        evtId: selectedReview.evtId,
        subject: review.subject,
        description: review.description,
        star: rating,
      };

      const result = await addReviews(data);
      console.log("Review submitted:", result);
      setSelectedReview(null);
      setReview({ subject: "", description: "" });
      setRating(0);
      getBookingHistory();
    } catch (error) {
      console.error("Error in adding review:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderStatus = (status, booking) => {
    if (status?.toLowerCase() === "confirmed") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
          <HiCheckCircle className="w-4 h-4" />
          Confirmed
        </span>
      );
    }

    return (
      <div className="flex flex-col gap-1">
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full animate-pulse">
          <HiClock className="w-4 h-4" />
          Pending
        </span>
        <button
          className="text-xs text-blue-600 hover:underline"
          onClick={() => handlePaymentRedirect(booking)}
        >
          Complete Payment
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-8">
        My Bookings
      </h2>

      <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-purple-100 text-gray-700">
            <tr>
              {["Event", "Location", "Category", "Date", "Seats", "Price", "Status", "Review"].map((head) => (
                <th key={head} className="px-4 py-3 font-medium">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {bookings.map((booking, idx) => (
              <tr
                key={idx}
                className={`transition-colors duration-150 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-purple-50`}
              >
                <td className="px-4 py-3 font-medium text-purple-700">
                  {booking.eventTitle}
                </td>
                <td className="px-4 py-3">{booking.location}</td>
                <td className="px-4 py-3">{booking.category}</td>
                <td className="px-4 py-3">
                  {new Date(booking.bookingDate.split(".")[0]).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td className="px-4 py-3">{booking.attendee}</td>
                <td className="px-4 py-3">₹{booking.price}</td>
                <td className="px-4 py-3">{renderStatus(booking.status, booking)}</td>
                <td className="px-4 py-3">
                  {booking.status.toLowerCase() === "confirmed" ? (
                    <button
                      onClick={() => {
                        setSelectedReview(booking);
                        setReview({ subject: "", description: "" });
                        setRating(0);
                      }}
                      className="flex items-center text-purple-600 hover:underline"
                    >
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Review
                    </button>
                  ) : (
                    <span className="text-gray-400 text-sm">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedReview && (
        <ReviewModal
          booking={selectedReview}
          rating={rating}
          setRating={setRating}
          review={review}
          setReview={setReview}
          onClose={() => setSelectedReview(null)}
          onSubmit={addReview}
          loading={loading}
        />
      )}
    </div>
  );
}

function ReviewModal({
  booking,
  rating,
  setRating,
  review,
  setReview,
  onClose,
  onSubmit,
  loading,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold text-purple-700 mb-4 text-center">
          Review: {booking.eventTitle}
        </h3>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Review Subject"
              value={review.subject}
              onChange={(e) => setReview({ ...review, subject: e.target.value })}
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          <div>
            <textarea
              placeholder="Share your experience..."
              rows={3}
              value={review.description}
              onChange={(e) => setReview({ ...review, description: e.target.value })}
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

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

          <div className="flex justify-end gap-3 mt-4">
            <div
              onClick={onClose}
              className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              Cancel
            </div>
            <div
              onClick={!loading ? onSubmit : null}
              className={`px-4 py-2 rounded-md ${
                loading
                  ? "bg-purple-300 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700"
              } text-white cursor-pointer`}
            >
              {loading ? "Submitting..." : "Submit"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingHistory;
