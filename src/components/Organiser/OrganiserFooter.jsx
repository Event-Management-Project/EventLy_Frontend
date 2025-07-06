import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function OrganiserFooter() {
  return (
    <footer className="bg-white text-[#333333] px-6 py-12 mt-10 border-t-4 border-[#F2B33D] shadow-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-[#F2B33D] mb-4">Evently</h3>
          <p className="text-sm">
            Evently empowers organisers to host, manage, and scale unforgettable events with ease.
          </p>
          <p className="text-xs mt-4 text-gray-500">
            Powering experiences, one event at a time.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Manage</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to={"/organiser"}> Dashboard</Link></li>
            <li><Link to={"/organiser/events"}> My Events</Link></li>
            <li><Link to={"/organiser/events/add"}> Add New Event</Link></li>
            <li><Link to={"/organiser/events/reviews"}> Attendee List</Link></li>
            <li><Link to={"/organiser/contact"}> Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Need Help?</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: organiser@evently.com</li>
            <li>Phone: +91-88888-77777</li>
            <li>Location: Sunbeam HQ, Pune, India</li>
            <li>Support Hours: 9:00 AM - 8:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4 mb-4 text-lg text-[#333333]">
            <span className="hover:text-[#F2B33D] transition"><FaFacebookF /></span>
            <span className="hover:text-[#F2B33D] transition"><FaTwitter /></span>
            <span className="hover:text-[#F2B33D] transition"><FaInstagram /></span>
            <span className="hover:text-[#F2B33D] transition"><FaLinkedinIn /></span>
            <span className="hover:text-[#F2B33D] transition"><FaYoutube /></span>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Refund & Cancellation</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Evently for Organisers. All rights reserved.
      </div>
    </footer>
  );
}

export default OrganiserFooter;
