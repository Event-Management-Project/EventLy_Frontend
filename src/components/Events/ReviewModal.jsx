// ReviewModal.jsx
import React from "react";
import { Star } from "lucide-react";

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

export default ReviewModal;
