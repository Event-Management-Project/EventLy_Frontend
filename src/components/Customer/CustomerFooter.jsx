import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

function CustomerFooter() {
  return (
    <footer className="bg-white text-[#2e2e2e] px-6 py-12 mt-10 border-t-4 border-[#6A4FB6] shadow-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-[#6A4FB6] mb-4">Evently</h3>
          <p className="text-sm">
            Discover and book your next unforgettable experience through Evently’s curated platform.
          </p>
          <p className="text-xs mt-4 text-[#6b6b6b]">
            Bringing people together, one event at a time.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><span className="hover:text-[#6A4FB6] cursor-pointer">Home</span></li>
            <li><span className="hover:text-[#6A4FB6] cursor-pointer">Browse Events</span></li>
            <li><span className="hover:text-[#6A4FB6] cursor-pointer">Favourites</span></li>
            <li><span className="hover:text-[#6A4FB6] cursor-pointer">My Bookings</span></li>
            <li><span className="hover:text-[#6A4FB6] cursor-pointer">Contact Us</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <span className="hover:text-[#6A4FB6] cursor-pointer">support@evently.com</span></li>
            <li>Phone: +91-99999-88888</li>
            <li>Location: Sunbeam Campus, Pune, India</li>
            <li>Support Hours: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4 mb-4 text-lg text-[#2e2e2e]">
            <span className="hover:text-[#6A4FB6] cursor-pointer"><FaFacebookF /></span>
            <span className="hover:text-[#6A4FB6] cursor-pointer"><FaTwitter /></span>
            <span className="hover:text-[#6A4FB6] cursor-pointer"><FaInstagram /></span>
            <span className="hover:text-[#6A4FB6] cursor-pointer"><FaLinkedinIn /></span>
            <span className="hover:text-[#6A4FB6] cursor-pointer"><FaYoutube /></span>
          </div>
          <ul className="space-y-2 text-sm">
            <li><span className="hover:text-[#6A4FB6] cursor-pointer">Terms & Conditions</span></li>
            <li><span className="hover:text-[#6A4FB6] cursor-pointer">Privacy Policy</span></li>
            <li><span className="hover:text-[#6A4FB6] cursor-pointer">Refund & Cancellation</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-center text-sm text-[#6b6b6b]">
        © {new Date().getFullYear()} Evently. All rights reserved.
      </div>
    </footer>
  );
}

export default CustomerFooter;
