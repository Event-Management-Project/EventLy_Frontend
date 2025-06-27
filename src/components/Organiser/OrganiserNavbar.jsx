import React from 'react';

function OrganiserNavbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">Evently</h1>
      <ul className="flex space-x-6 text-gray-700">
        {['Home', 'Events', 'Organisers', 'Contact'].map((item) => (
          <li
            key={item}
            className="hover:text-blue-600 cursor-pointer transition-all"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default OrganiserNavbar;
