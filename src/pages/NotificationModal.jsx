import React from "react";
import { CheckCircle } from "lucide-react";

function NotificationModal({ notifications = [], onClose, onMarkAsRead }) {
  const unreadNotifications = notifications.filter((n) => !n.isRead);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start pt-20 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>
        <h2 className="text-lg font-bold text-[#d6062c] mb-4">Notifications</h2>

        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications.</p>
        ) : unreadNotifications.length === 0 ? (
          <p className="text-gray-500">All notifications are read.</p>
        ) : (
          <ul className="space-y-3 max-h-80 overflow-y-auto">
            {unreadNotifications.map((n) => (
              <li
                key={n._id}
                className="bg-gray-100 p-3 rounded-md text-sm flex justify-between items-center"
              >
                <div>
                  <strong className="text-indigo-700">{n.subject}</strong>
                  <p className="text-gray-700">{n.description}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    📅 {new Date(n.createdAt).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => onMarkAsRead(n._id)}
                  title="Mark as read"
                  className="ml-4 text-green-600 hover:text-green-800"
                >
                  <CheckCircle size={20} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default NotificationModal;
