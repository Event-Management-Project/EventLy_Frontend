import React, { useState, useEffect, useRef } from "react";
import { FiBell, FiMenu } from "react-icons/fi";
import { BookOpen, LogOut } from "lucide-react";
import NotificationBell from "../../pages/Notifications";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CustomerNavbar({ onMenuClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const customer = useSelector((state) => state.customer.customer);
  console.log();
  const getInitials = (fullName) => {
    if (!fullName) return "G";
    const names = fullName.trim().split(" ");
    const initials = names.map((n) => n.charAt(0).toUpperCase()).join("");
    return initials;
  };

  const initials = getInitials(customer?.customerName);

  const user1 = {
    name: customer?.customerName || "Guest",
    avatarUrl: `https://ui-avatars.com/api/?name=${initials}&background=6A4FB6&color=fff&rounded=true`,
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const goToBookingHistory = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-[#EFEAFF] shadow-sm h-16 flex items-center justify-between px-4 md:px-10 sticky top-0 z-50 border-b border-[#D6CFF6]">
      <h1 className="text-2xl font-extrabold text-[#6A4FB6] tracking-wide">
        EVENTLY
      </h1>

      <div className="flex items-center gap-4 md:gap-6" ref={menuRef}>
        <span className="font-medium text-gray-800">{user1.name}</span>

        <NotificationBell />

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            onClick={toggleMenu}
            src={user1.avatarUrl}
            alt="User Avatar"
            className="w-9 h-9 rounded-full border-2 border-[#6A4FB6]"
          />
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={onMenuClick}
          >
            <FiMenu />
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 border border-[#E5E0FA]">
            <button
              onClick={goToBookingHistory}
              className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F2EDFF] text-sm"
            >
              <BookOpen className="w-4 h-4 text-[#6A4FB6]" />
              <Link to={"/customer/bookings/1"}>Booking History</Link>
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F2EDFF] text-sm">
              <LogOut className="w-4 h-4 text-gray-500" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default CustomerNavbar;
