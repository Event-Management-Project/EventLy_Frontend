import React from 'react';

function CustomerNotifications() {
  const notifications = [
    "Your ticket has been confirmed!",
    "Event starts in 2 days!",
    "New event added in your city!",
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md m-6">
      <h2 className="text-xl font-semibold mb-4 text-green-600">Notifications</h2>
      <ul className="space-y-2 text-gray-700">
        {notifications.map((note, index) => (
          <li key={index} className="border-b pb-2">{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerNotifications;
