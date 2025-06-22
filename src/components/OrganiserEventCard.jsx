import React from 'react';

const OrganiserEventCard = () => {
  const event = {
    evt_title: 'Event Title',
    location: 'City, Country',
    start_dateTime: '2025-08-01',
    category: 'Tech',
    ticket_price: 200,
  };

  return (
    <div>
      <img src="event.jpg" alt="Event" />
      <h3>{event.evt_title}</h3>
      <p>{event.location}</p>
      <p>{event.start_dateTime}</p>
      <span>{event.category}</span>
      <span>{event.ticket_price}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default OrganiserEventCard;
