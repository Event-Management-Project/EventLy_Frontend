import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import TermsModal from "../../pages/TermsModal";
import PrivacyPolicyModal from "../../pages/PrivacyPolicyModal";
import RefundPolicyModal from "../../pages/RefundPolicyModal";

function CustomerFooter() {
  const [modalType, setModalType] = useState(null);

  const closeModal = () => setModalType(null);

  return (
    <>
      <footer className="bg-white text-[#2e2e2e] px-6 py-12 mt-10 border-t-4 border-[#6A4FB6] shadow-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#6A4FB6] mb-4">Evently</h3>
            <p className="text-sm">
              Discover and book your next unforgettable experience through
              Evently’s curated platform.
            </p>
            <p className="text-xs mt-4 text-[#6b6b6b]">
              Bringing people together, one event at a time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={"/customer"} className="hover:text-[#6A4FB6]">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/customer/events"} className="hover:text-[#6A4FB6]">
                  Browse Events
                </Link>
              </li>
              <li>
                <Link
                  to={"/customer/bookings/1"}
                  className="hover:text-[#6A4FB6]"
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  to={"/customer/contact"}
                  className="hover:text-[#6A4FB6]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <span className="hover:text-[#6A4FB6] cursor-pointer">
                  support@evently.com
                </span>
              </li>
              <li>Phone: +91-99999-88888</li>
              <li>Location: Sunbeam Campus, Pune, India</li>
              <li>Support Hours: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4 mb-4 text-lg text-[#2e2e2e]">
              <span className="hover:text-[#6A4FB6] cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="hover:text-[#6A4FB6] cursor-pointer">
                <FaTwitter />
              </span>
              <span className="hover:text-[#6A4FB6] cursor-pointer">
                <FaInstagram />
              </span>
              <span className="hover:text-[#6A4FB6] cursor-pointer">
                <FaLinkedinIn />
              </span>
              <span className="hover:text-[#6A4FB6] cursor-pointer">
                <FaYoutube />
              </span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setModalType("terms")}
                  className="hover:text-[#6A4FB6]"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalType("privacy")}
                  className="hover:text-[#6A4FB6]"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalType("refund")}
                  className="hover:text-[#6A4FB6]"
                >
                  Refund & Cancellation
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-[#6b6b6b]">
          © {new Date().getFullYear()} Evently. All rights reserved.
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

export default CustomerFooter;
