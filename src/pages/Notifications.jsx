import React, { useState } from "react";
import { Bell, Check } from "lucide-react"; 
import NotificationModal from "./NotificationModal";

const Notifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Booking Confirmed",
      content: 'Your booking for "Music Fest" has been confirmed.',
      date: "2025-10-11",
      for: "customer",
      read: false,
    },
    {
      id: 2,
      title: "Event Reminder",
      content: '"Photography Bootcamp" starts tomorrow.',
      date: "2025-10-14",
      for: "customer",
      read: false,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div className="relative">
      <button
        onClick={handleOpen}
        className="relative p-1 text-gray-700 hover:scale-[1.2] translate-x-1"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        )}
      </button>

      {modalOpen && (
        <NotificationModal
          notifications={notifications}
          onClose={handleClose}
          onMarkAsRead={markAsRead}
        />
      )}
    </div>
  );
};

export default Notifications;
