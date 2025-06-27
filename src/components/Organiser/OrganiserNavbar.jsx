import React, { useState, useEffect, useRef } from 'react';
import { FiBell, FiMenu } from 'react-icons/fi';
import { LayoutDashboard, BookOpen, LogOut } from 'lucide-react';
import Notifications from '../../pages/Notifications';

function OrganiserNavbar({ onMenuClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const user = {
    name: 'Event Organiser',
    avatarUrl:
      'https://ui-avatars.com/api/?name=Organiser&background=F29F05&color=fff&rounded=true',
  };

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const goToMyEvents = () => {
    setMenuOpen(false);
  };
  const goToBookings = () => {
    setMenuOpen(false);
  };
  const logout = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm h-16 flex items-center justify-between px-4 md:px-10 sticky top-0 z-50 border-b border-yellow-100">
      <h1 className="text-2xl font-extrabold text-[#F29F05] tracking-wide">EVENTLY</h1>

      <div className="flex items-center gap-4 md:gap-6 relative" ref={menuRef}>
        <span className="text-gray-800 text-xl hidden sm:block">{user.name}</span>

       <Notifications/>

        <div className="flex items-center gap-2 cursor-pointer">

          <button className="md:hidden text-2xl text-[#F29F05]" onClick={onMenuClick}>
            <FiMenu />
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 w-56 bg-white rounded-xl shadow-xl z-50 border border-yellow-100 py-2">
            <button onClick={goToMyEvents} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50">
              <LayoutDashboard className="w-4 h-4 text-[#F29F05]" />
              My Events
            </button>
            <button onClick={goToBookings} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50">
              <BookOpen className="w-4 h-4 text-[#F29F05]" />
              Bookings
            </button>
            <button onClick={logout} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50">
              <LogOut className="w-4 h-4 text-gray-500" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default OrganiserNavbar;