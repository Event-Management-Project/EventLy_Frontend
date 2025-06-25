import React from 'react';
import { Home, Calendar, User, LogOut } from 'lucide-react';

function OrganiserSidebar() {
  const items = [
    { label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { label: 'Events', icon: <Calendar className="w-5 h-5" /> },
    { label: 'Profile', icon: <User className="w-5 h-5" /> },
    { label: 'Logout', icon: <LogOut className="w-5 h-5" /> },
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-white to-blue-50 p-6 shadow-xl border-r border-blue-100">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-700 tracking-tight">Evently</h2>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 text-gray-700 font-medium px-4 py-3 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all cursor-pointer"
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrganiserSidebar;
