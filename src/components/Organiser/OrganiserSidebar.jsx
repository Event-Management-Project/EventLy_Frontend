import React from 'react';
import {
  FiHome,
  FiCalendar,
  FiBookOpen,
  FiMessageCircle,
  FiUser,
  FiLogOut,
} from 'react-icons/fi';

function OrganiserSidebar({ onLinkClick, isMobile = false, isBottom = false }) {
  const topNavItems = [
    { label: 'Home', icon: <FiHome /> },
    { label: 'Events', icon: <FiCalendar /> },
    { label: 'Bookings', icon: <FiBookOpen /> },
    { label: 'Reviews', icon: <FiMessageCircle /> },
  ];

  const bottomNavItems = [
    { label: 'Profile', icon: <FiUser /> },
    { label: 'Logout', icon: <FiLogOut />, className: 'text-red-500' },
  ];

  const handleClick = (label) => {
    onLinkClick?.(label) || alert(`${label} clicked! (routing disabled)`);
  };

  const renderButton = (item) => (
    <button
      key={item.label}
      onClick={() => handleClick(item.label)}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl 
        font-medium text-gray-700 hover:bg-[#A31621]/10 hover:text-[#A31621] transition
        ${item.className || ''}
      `}
    >
      {item.icon}
      <span>{item.label}</span>
    </button>
  );

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
          ? 'rounded-tr-3xl bg-gradient-to-b from-white to-[#fce3e6]/40 shadow-xl p-6'
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

export default OrganiserSidebar;
