import React from 'react'

function OrganiserNotifications() {
 const notifications = [
    "Event 'Hackathon 2025' starts tomorrow.",
    "Your profile has been updated.",
    "New event 'Tech Expo' is now live!",
  ];

  return (
    <div className="p-6 max-w-md mx-auto border border-gray-300 rounded shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Notifications</h2>
      <ul className="space-y-2">
        {notifications.map((note, index) => (
          <li
            key={index}
            className="p-3 bg-gray-100 rounded hover:bg-blue-100 transition-all"
          >
            🔔 {note}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrganiserNotifications
