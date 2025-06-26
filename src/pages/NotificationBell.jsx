import React from "react";
import { Bell } from "lucide-react";

const NotificationBell = () => {
  return (
    <button className="relative p-1 text-gray-700 hover:scale-110 transition">
      <Bell className="w-6 h-6" />
    </button>
  );
};

export default NotificationBell;
