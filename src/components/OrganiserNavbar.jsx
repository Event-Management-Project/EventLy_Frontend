// Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="text-xl font-bold">Evently</h1>
      <ul className="flex space-x-6">
        <li>Home</li>
        <li>Events</li>
        <li>Organisers</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
