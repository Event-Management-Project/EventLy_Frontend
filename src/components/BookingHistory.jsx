import React from 'react';

function BookingHistory() {
  const bookings = [
    { eventId: 'EVT123', event: 'Tech Summit 2025', date: '2025-09-01', location: 'Pune', category: 'Technology', seats: 2, ticketPrice: 500, status: 'Confirmed' },
    { eventId: 'EVT456', event: 'Music Fest', date: '2025-10-12', location: 'Mumbai', category: 'Entertainment', seats: 4, ticketPrice: 300, status: 'Pending' },
  ];

  return (
    <div>
      <h2>My Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Event</th><th>Location</th><th>Category</th><th>Date</th><th>Seats</th><th>Price</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.eventId}>
              <td>{b.event}</td><td>{b.location}</td><td>{b.category}</td><td>{b.date}</td><td>{b.seats}</td><td>{b.ticketPrice}</td><td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingHistory;
