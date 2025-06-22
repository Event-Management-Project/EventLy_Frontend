import React from 'react';

function BookingHistory() {
  const bookings = [
    { event: "Music Fest 2025", date: "July 15", status: "Confirmed" },
    { event: "Art Expo", date: "August 1", status: "Pending" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md m-6">
      <h2 className="text-xl font-semibold text-green-600 mb-4">Booking History</h2>
      <table className="w-full text-left border border-gray-200">
        <thead className="bg-green-100">
          <tr>
            <th className="p-2">Event</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{booking.event}</td>
              <td className="p-2">{booking.date}</td>
              <td className="p-2">{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingHistory;
