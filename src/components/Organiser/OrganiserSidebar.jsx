import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  FiHome,
  FiCalendar,
  FiBookOpen,
  FiMessageCircle,
  FiUser,
  FiLogOut,
  FiMail,
  FiInfo,
} from 'react-icons/fi';

function OrganiserSidebar({ onLinkClick, isMobile = false, isBottom = false }) {

  const location = useLocation();
  const topNavItems = [
    { to: '/organiser', label: 'Home', icon: <FiHome /> },
    { to: '/organiser/events', label: 'Events', icon: <FiCalendar /> },
    { to: '/organiser/bookings', label: 'Bookings', icon: <FiBookOpen /> },
    { to: '/organiser/reviews', label: 'Reviews', icon: <FiMessageCircle /> },
    { to: '/organiser/about', label: 'About Us', icon: < FiInfo /> },
    { to: '/organiser/contact', label: 'Contact Us', icon: <FiMail /> },
  ];


  const bottomNavItems = [
    { to: '/organiser/profile', label: 'Profile', icon: <FiUser /> },
    { to: '/', label: 'Logout', icon: <FiLogOut />, className: 'text-red-500' },
  ];

  const renderLink = (item) => {
    const isActive = location.pathname === item.to;

    return (
      <Link
        key={item.label}
        to={item.to}
        onClick={onLinkClick}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl 
          font-medium text-gray-700 hover:bg-[#A31621]/10 hover:text-[#A31621] transition
          ${isActive ? 'bg-[#fcd8dc]/40 text-[#A31621] font-semibold' : ''} 
          ${item.className || ''}
        `}
      >
        {item.icon}
        <span>{item.label}</span>
      </Link>
    );
  };

  if (isBottom) {
    return (
      <div className="flex flex-col gap-2">
        {bottomNavItems.map(renderLink)}
        <div className="text-sm text-center text-gray-400 pt-4">© 2025 Evently</div>
      </div>
    );
  }



  if (isBottom) {
    return (
      <div className="flex flex-col gap-2">
        {bottomNavItems.map(renderLink)}
        <div className="text-sm text-center text-gray-400 pt-4">© 2025 Evently</div>
      </div>
    );
  }

  return (
    <aside
      className={`${isMobile ? 'w-full' : 'w-64 h-[calc(100vh-4rem)] hidden md:flex'
        } flex flex-col justify-between ${!isMobile
          ? 'rounded-tr-3xl bg-gradient-to-b from-white to-[#fce3e6]/40 shadow-xl p-6'
          : ''
        }`}
    >
      <div className="flex flex-col gap-2">
        {topNavItems.map(renderLink)}
      </div>

      {!isMobile && (
        <div className="mt-auto flex flex-col gap-2 pt-6">
          {bottomNavItems.map(renderLink)}
          <div className="text-sm text-center text-gray-400 pt-4">© 2025 Evently</div>
        </div>
      )}
    </aside>
  );
}

export default OrganiserSidebar;
