import React, { useState } from "react";

function AttendeeList() {
  const [attendees] = useState([
    {
      booking_id: 1,
      name: "Rohit Sharma",
      email: "rohit.sharma@example.com",
      attendee_count: 2,
      amount_paid: 1500,
      location: "Pune, Maharashtra",
    },
    {
      booking_id: 2,
      name: "Sneha Mehta",
      email: "sneha.mehta@example.com",
      attendee_count: 1,
      amount_paid: 750,
      location: "Mumbai, Maharashtra",
    },
    {
      booking_id: 3,
      name: "Aman Verma",
      email: "aman.verma@example.com",
      attendee_count: 3,
      amount_paid: 2250,
      location: "Delhi",
    },
    {
      booking_id: 4,
      name: "Sara Khan",
      email: "sara.khan@example.com",
      attendee_count: 2,
      amount_paid: 1800,
      location: "Bengaluru",
    },
  ]);

  const [showDetails, setShowDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openDetails = (user) => {
    setSelectedUser(user);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setSelectedUser(null);
    setShowDetails(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Event Attendees</h2>

      {attendees.length === 0 ? (
        <p className="text-center text-gray-600">No attendees found.</p>
      ) : (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attendees.map((user) => (
            <div
              key={user.booking_id}
              className="bg-white rounded-xl shadow-lg p-6 space-y-2 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Attendees: {user.attendee_count}</p>
              <p className="text-gray-600">Paid: ₹{user.amount_paid}</p>
              <p className="flex items-center justify-between text-gray-600">
                <span>{user.location}</span>
                <button
                  onClick={() => openDetails(user)}
                  className="text-green-600 hover:underline transition"
                >
                  View Details
                </button>
              </p>
            </div>
          ))}
        </div>
      )}

      {showDetails && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full relative">
            <button
              onClick={closeDetails}
              className="absolute top-4 right-4 text-gray-400 hover:text-green-600"
              aria-label="Close Details"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-green-600">Attendee Details</h3>

            <div className="space-y-3 text-gray-700">
              <p>Name: {selectedUser.name}</p>
              <p>Email: {selectedUser.email}</p>
              <p>Attendee Count: {selectedUser.attendee_count}</p>
              <p>Paid: ₹{selectedUser.amount_paid}</p>
              <p>Location: {selectedUser.location}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttendeeList;
