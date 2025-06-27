import React from 'react';
import {
  FiHome,
  FiCalendar,
  FiInfo,
  FiMail,
  FiUser,
  FiLogOut,
} from 'react-icons/fi';

function CustomerSidebar({ onLinkClick, isMobile = false, isBottom = false }) {
  const topNavItems = [
    { label: 'Home', icon: <FiHome /> },
    { label: 'Events', icon: <FiCalendar /> },
    { label: 'About Us', icon: <FiInfo /> },
    { label: 'Contact Us', icon: <FiMail /> },
  ];

  const bottomNavItems = [
    { label: 'Profile', icon: <FiUser /> },
    { label: 'Logout', icon: <FiLogOut />, className: 'text-red-500' },
  ];

  const renderButton = (item) => {
    return (
      <button
        key={item.label}
        onClick={() => onLinkClick?.(item.label)}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl 
          font-medium text-gray-700 hover:bg-[#ccbbf2]/30 hover:text-[#4b3a9b] transition
          ${item.className || ''}
        `}
      >
        {item.icon}
        <span>{item.label}</span>
      </button>
    );
  };

  if (isBottom) {
    return (
      <div className="flex flex-col gap-2">
        {bottomNavItems.map(renderButton)}
        <div className="text-sm text-center text-gray-400 pt-4">© 2025 Evently</div>
      </div>
    );
  }

  return (
    <aside
      className={`${
        isMobile ? 'w-full' : 'w-64 h-[calc(100vh-4rem)] hidden md:flex'
      } flex flex-col justify-between ${
        !isMobile
          ? 'rounded-tr-3xl bg-gradient-to-b from-white to-[#ccbbf2]/20 shadow-xl p-6'
          : ''
      }`}
    >
      <div className="flex flex-col gap-2">
        {topNavItems.map(renderButton)}
      </div>

      {!isMobile && (
        <div className="mt-auto flex flex-col gap-2 pt-6">
          {bottomNavItems.map(renderButton)}
          <div className="text-sm text-center text-gray-400 pt-4">© 2025 Evently</div>
        </div>
      )}
    </aside>
  );
}

export default CustomerSidebar;
