import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import TermsModal from "../../pages/TermsModal";
import PrivacyPolicyModal from "../../pages/PrivacyPolicyModal";
import RefundPolicyModal from "./../../pages/RefundPolicyModal";
function OrganiserFooter() {
  const [modalType, setModalType] = useState(null);

  const closeModal = () => setModalType(null);

  return (
    <>
      <footer className="bg-white text-[#333333] px-6 py-12 mt-10 border-t-4 border-[#F2B33D] shadow-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#F2B33D] mb-4">Evently</h3>
            <p className="text-sm">
              Evently empowers organisers to host, manage, and scale
              unforgettable events with ease.
            </p>
            <p className="text-xs mt-4 text-gray-500">
              Powering experiences, one event at a time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Manage</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/organiser" className="hover:text-[#F2B33D]">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/organiser/events" className="hover:text-[#F2B33D]">
                  My Events
                </a>
              </li>
              <li>
                <a
                  href="/organiser/events/add"
                  className="hover:text-[#F2B33D]"
                >
                  Add New Event
                </a>
              </li>
              <li>
                <a href="/organiser/bookings" className="hover:text-[#F2B33D]">
                  Attendee List
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#F2B33D]">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Need Help?</h4>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:organiser@evently.com"
                  className="hover:text-[#F2B33D]"
                >
                  admin@evently.com
                </a>
              </li>
              <li>Phone: +91-88888-77777</li>
              <li>Location: Sunbeam HQ, Pune, India</li>
              <li>Support Hours: 9:00 AM - 8:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Connect</h4>

            <ul className="space-y-2 text-sm mb-6">
              <li>
                <button
                  onClick={() => setModalType("terms")}
                  className="hover:text-[#F2B33D] transition-colors duration-200"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalType("privacy")}
                  className="hover:text-[#F2B33D] transition-colors duration-200"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalType("refund")}
                  className="hover:text-[#F2B33D] transition-colors duration-200"
                >
                  Refund & Cancellation
                </button>
              </li>
            </ul>

            <div className="flex items-center space-x-4 text-xl text-[#2e2e2e]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2B33D] transition-colors duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2B33D] transition-colors duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2B33D] transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2B33D] transition-colors duration-200"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2B33D] transition-colors duration-200"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Evently for Organisers. All rights
          reserved.
        </div>
      </footer>
      {modalType === "terms" && (
        <TermsModal isOpen={true} onClose={closeModal} />
      )}
      {modalType === "privacy" && (
        <PrivacyPolicyModal isOpen={true} onClose={closeModal} />
      )}
      {modalType === "refund" && (
        <RefundPolicyModal isOpen={true} onClose={closeModal} />
      )}
    </>
  );
}

export default OrganiserFooter;
