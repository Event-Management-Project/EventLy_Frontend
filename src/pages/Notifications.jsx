import React from "react";
import { Bell } from "lucide-react";

const Notifications = () => {
  const handleClick = () => {
    alert("Notifications clicked");
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="relative p-1 text-gray-700 hover:scale-[1.2] translate-x-1"
      >
        <Bell className="w-6 h-6" />
        <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </button>
    </div>
  );
};

export default Notifications;
