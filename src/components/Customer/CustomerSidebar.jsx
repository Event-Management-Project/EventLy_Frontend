import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiCalendar,
  FiInfo,
  FiMail,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

function CustomerSidebar({ onLinkClick, isMobile = false, isBottom = false }) {
  const location = useLocation();

  const topNavItems = [
    { to: "/customer", label: "Home", icon: <FiHome /> },
    { to: "/customer/events", label: "Events", icon: <FiCalendar /> },
    { to: "/customer/about", label: "About Us", icon: <FiInfo /> },
    { to: "/customer/contact", label: "Contact Us", icon: <FiMail /> },
  ];

  const bottomNavItems = [
    { to: "/customer/profile", label: "Profile", icon: <FiUser /> },
    { to: "/login", label: "Logout", icon: <FiLogOut />, className: "text-red-500" },
  ];

  const renderLink = (item) => {
    const isActive = location.pathname === item.to;
    return (
      <Link
        key={item.label}
        to={item.to}
        onClick={onLinkClick}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl 
          font-medium text-gray-700 hover:bg-[#ccbbf2]/30 hover:text-[#4b3a9b] transition
          ${isActive ? "bg-[#ccbbf2]/40 text-[#4b3a9b] font-semibold" : ""} 
          ${item.className || ""}
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
        <div className="text-sm text-center text-gray-400 pt-4">
          © 2025 Evently
        </div>
      </div>
    );
  }

  return (
    <aside
      className={`${
        isMobile ? "w-full" : "w-64 h-[calc(100vh-4rem)] hidden md:flex"
      } flex flex-col justify-between ${
        !isMobile
          ? "rounded-tr-3xl bg-gradient-to-b from-white to-[#ccbbf2]/20 shadow-xl p-6"
          : ""
      }`}
    >
      <div className="flex flex-col gap-2">{topNavItems.map(renderLink)}</div>

      {!isMobile && (
        <div className="mt-auto flex flex-col gap-2 pt-6">
          {bottomNavItems.map(renderLink)}
          <div className="text-sm text-center text-gray-400 pt-4">
            © 2025 Evently
          </div>
        </div>
      )}
    </aside>
  );
}

export default CustomerSidebar;
