import React, { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import NotificationModal from "./NotificationModal";
import {
  getCustomerNotifications,
  getOrganiserNotifications,
  markNotificationAsRead,
} from "../services/Notification";
import { useSelector } from "react-redux";

const Notifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const customer = useSelector((state) => state.customer?.customer)
  const cstId = customer?.cstId;

  const organiser = useSelector((state) => state.organiser?.organiser)
  const orgId = organiser?.orgId;

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {

        if (cstId) {
          const data = await getCustomerNotifications(cstId);
          setNotifications(data.filter((n) => !n.read));
        } 

        else if (orgId) {
          const data = await getOrganiserNotifications(orgId);
          setNotifications(data.filter((n) => !n.read));
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  const unreadCount = notifications.length;

  const markAsRead = async (notificationId) => {
  try {
    await markNotificationAsRead(notificationId);
    setNotifications((prev) =>
      prev.map((n) =>
        n._id === notificationId ? { ...n, isRead: true } : n
      )
    );
  } catch (error) {
    console.error("Failed to mark notification as read:", error);
  }
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
