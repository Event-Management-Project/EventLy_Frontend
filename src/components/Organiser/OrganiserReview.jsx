import React, { useState, useEffect } from "react";
import { Star, StarOff, Info } from "lucide-react";
import { fetchCustomerReviews } from "../../services/EventService";
import { useSelector } from "react-redux";

const renderStars = (rating) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <Star key={i} className="w-4 h-4 text-yellow-500" fill="yellow" />
        ) : (
          <StarOff key={i} className="w-4 h-4 text-gray-300" />
        )
      )}
    </div>
  );
};

function OrganiserReviews() {
  const organiser = useSelector((state) => state.organiser.organiser);
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getReviews = async () => {
    try {
      console.log(organiser)
      const result = await fetchCustomerReviews(organiser.orgId);
      console.log(result);

      const normalized = result.map((r, i) => ({
        id: i + 1,
        customerName: r.customerName,
        email: r.email || "N/A",
        event: r.eventTitle || "N/A",
        review: r.description || "",
        rating: r.star || 0,
        submittedAt: r.submittedAt || "—",
      }));

      setReviews(normalized);
    } catch (err) {
      console.error("Error loading reviews:", err);
    }
  };

  useEffect(() => {
    if (organiser?.orgId) {
      getReviews();
    }
  }, [organiser]);

  const filtered = reviews.filter(
    (r) =>
      r.event?.toLowerCase().includes(search.toLowerCase()) ||
      r.customerName?.toLowerCase().includes(search.toLowerCase())
  );

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: filtered.filter((r) => r.rating === star).length,
  }));

  const totalRatings = filtered.length;
  const averageRating =
    totalRatings > 0
      ? (filtered.reduce((sum, r) => sum + r.rating, 0) / totalRatings).toFixed(
          1
        )
      : "0.0";

  return (
    <div className="min-h-screen bg-white p-6 pt-10 font-inter text-[#333333]">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl p-8 mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-[#F2B33D]">
          Customer Reviews
        </h2>

        <div className="max-w-lg mx-auto mb-6">
          <input
            type="text"
            placeholder="Search by event or organiser"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F2B33D] shadow-sm"
          />
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="text-center text-4xl font-bold text-[#c9912a] mb-2">
            {averageRating}
            <Star
              className="w-8 h-8 mb-2 text-yellow-500 inline ml-1"
              fill="yellow"
            />
          </div>
          <div className="text-center text-xl text-gray-800 mb-4">
            {totalRatings} Ratings &{" "}
            {filtered.filter((r) => r.review?.trim() !== "").length} Reviews
          </div>

          <div className="space-y-2">
            {ratingCounts.map(({ star, count }) => {
              const percentage = totalRatings
                ? (count / totalRatings) * 100
                : 0;
              const barColor = {
                5: "bg-green-600",
                4: "bg-green-400",
                3: "bg-yellow-400",
                2: "bg-orange-400",
                1: "bg-red-500",
              }[star];

              return (
                <div
                  key={star}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <span className="w-20 flex">
                    {Array.from({ length: star }, (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500"
                        fill="yellow"
                      />
                    ))}
                  </span>
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`${barColor} h-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-gray-800">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden text-sm text-gray-800">
            <thead className="bg-[#FDF4DF] text-[#333333] font-semibold uppercase tracking-wide">
              <tr>
                <th className="py-3 px-6 text-left">Customer</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Event</th>
                <th className="py-3 px-6 text-left">Rating</th>
                <th className="py-3 px-6 text-left">Review</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-center">Info</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((review) => (
                <tr
                  key={review.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-6">{review.customerName}</td>
                  <td className="py-3 px-6">{review.email}</td>
                  <td className="py-3 px-6">{review.event}</td>
                  <td className="py-3 px-6">{renderStars(review.rating)}</td>
                  <td className="py-3 px-6 italic text-gray-700">
                    {review.review}
                  </td>
                  <td className="py-3 px-6">{review.submittedAt}</td>
                  <td className="py-3 px-6 text-center">
                    <button
                      onClick={() => setSelectedEvent(review)}
                      className="text-[#F2B33D] hover:underline"
                    >
                      <Info className="w-5 h-5 inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-[#333333]">
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
              <h3 className="text-xl font-bold text-[#F2B33D] mb-4">
                Review Details
              </h3>
              <div className="space-y-2 text-sm text-gray-800">
                <p>
                  <strong>Event:</strong> {selectedEvent.event}
                </p>
                <p>
                  <strong>Customer:</strong> {selectedEvent.customerName}
                </p>
                <p>
                  <strong>Email:</strong> {selectedEvent.email}
                </p>
                <p>
                  <strong>Submitted At:</strong> {selectedEvent.submittedAt}
                </p>
                <p>
                  <strong>Rating:</strong> {renderStars(selectedEvent.rating)}
                </p>
                <p>
                  <strong>Review:</strong> {selectedEvent.review}
                </p>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-6 bg-[#F2B33D] text-white px-4 py-2 rounded-xl hover:bg-yellow-600 w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrganiserReviews;
