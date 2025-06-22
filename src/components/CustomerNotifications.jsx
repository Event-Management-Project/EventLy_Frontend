import React from 'react';

function CustomerNotifications() {
  const notifications = [
    { id: 1, title: "Event Reminder", content: "Your event starts tomorrow!", read: false, date: "2025-08-01" },
    { id: 2, title: "Booking Confirmed", content: "Your ticket has been booked.", read: true, date: "2025-07-20" },
  ];

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(n => (
          <li key={n.id}>
            <strong>{n.title}</strong> - {n.content} ({n.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerNotifications;
