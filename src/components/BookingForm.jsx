import React, { useState } from 'react';

function BookingForm() {
  const [attendees, setAttendees] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", { attendees, specialRequests });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Number of Attendees:</label>
        <input
          type="number"
          min="1"
          value={attendees}
          onChange={(e) => setAttendees(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Special Requests:</label>
        <textarea
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
        />
      </div>
      <button type="submit">Proceed to Payment</button>
    </form>
  );
}

export default BookingForm;
