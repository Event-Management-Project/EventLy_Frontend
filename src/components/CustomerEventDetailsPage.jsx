import React from 'react';

function EventDetailsPage({ eventId }) {
  const event = {
    evt_title: 'Tech Conference 2025',
    description: 'Join the biggest tech conference of the year!',
    location: 'Mumbai, India',
    start_dateTime: '2025-09-01T10:00:00',
    end_dateTime: '2025-09-03T18:00:00',
    ticket_price: 250.0,
    capacity: 1000,
    remaining_capacity: 120,
    organiser: {
      org_company_name: 'TechWorld Pvt Ltd',
      email: 'organizer@techworld.com',
      phone_no: '9876543210',
      address: 'Pune, Maharashtra',
    },
    facilities: ['Free Wi-Fi', 'Food Court'],
    images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
  };

  const handleBooking = () => {
    // Redirect to booking page manually
    window.location.href = `/customer/events/${eventId}/book`;
  };

  return (
    <div>
      <img src={event.images[0]} alt="Main" />
      <h2>{event.evt_title}</h2>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{event.start_dateTime} - {event.end_dateTime}</p>
      <p>₹{event.ticket_price}</p>
      <p>Capacity: {event.capacity}, Remaining: {event.remaining_capacity}</p>
      <p>Organizer: {event.organiser.org_company_name}</p>
      <ul>
        {event.facilities.map((fac, idx) => <li key={idx}>{fac}</li>)}
      </ul>
      <button onClick={handleBooking}>Book</button>
    </div>
  );
}

export default EventDetailsPage;
