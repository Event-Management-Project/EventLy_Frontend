import React from 'react';

function CustomerSidebar() {
  return (
    <div className="w-64 min-h-screen bg-white shadow-md p-6 space-y-4 text-gray-800">
      <div className="text-lg font-semibold text-green-600">Menu</div>

      <nav className="space-y-3">
        <div className="hover:text-green-600 cursor-pointer">Home</div>
        <div className="hover:text-green-600 cursor-pointer">Events</div>
        <div className="hover:text-green-600 cursor-pointer">Booking History</div>
        <div className="hover:text-green-600 cursor-pointer">About Us</div>
        <div className="hover:text-green-600 cursor-pointer">Contact Us</div>
      </nav>

      <hr className="my-4 border-gray-300" />

      <div className="space-y-3">
        <div className="hover:text-green-600 cursor-pointer">Profile</div>
        <div className="hover:text-red-500 cursor-pointer">Logout</div>
      </div>
    </div>
  );
}

export default CustomerSidebar;
