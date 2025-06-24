import React from 'react';

function CustomerNavbar() {
  return (
    <nav className="bg-green-500 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">Evently</div>
      <div className="space-x-6">
        <span className="hover:underline cursor-pointer">Home</span>
        <span className="hover:underline cursor-pointer">Events</span>
        <span className="hover:underline cursor-pointer">Profile</span>
      </div>
    </nav>
  );
}

export default CustomerNavbar;
