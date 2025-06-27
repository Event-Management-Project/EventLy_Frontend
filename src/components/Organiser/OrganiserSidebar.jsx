import React from 'react';
import {
  FiHome, FiCalendar, FiBookOpen, FiUser, FiMessageCircle
} from 'react-icons/fi';

function OrganiserSidebar() {
  const navItems = [
    { label: "Home", icon: <FiHome /> },
    { label: "Events", icon: <FiCalendar /> },
    { label: "Bookings", icon: <FiBookOpen /> },
    { label: "Reviews", icon: <FiMessageCircle /> },
    { label: "Profile", icon: <FiUser /> },
  ];

  const handleClick = (label) => {
    alert(`${label} clicked! (routing disabled)`);
  };

  return (
    <aside className="w-64 bg-[#FCF7F8] shadow-xl p-6 h-[calc(100vh-4rem)] hidden md:flex flex-col rounded-tr-3xl">
      <nav className="flex flex-col gap-3 mt-4">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item.label)}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-xl 
              font-medium text-gray-700 hover:bg-[#A31621]/10 hover:text-[#A31621] transition text-left
            `}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto text-sm text-center text-gray-400 pt-6 border-t">
        © 2025 Evently
      </div>
    </aside>
  );
}

export default OrganiserSidebar;
