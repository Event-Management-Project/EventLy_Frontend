
import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { QRCodeCanvas } from "qrcode.react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaMoneyBillWave,
} from "react-icons/fa";

const TicketPage = () => {
  const ticketRef = useRef();
  const [loading, setLoading] = useState(false);
  const [scanMessage, setScanMessage] = useState("");

  const ticketData = {
    company: "Evently",
    logoUrl: "/fav-icon.png",
    eventName: "TechFest 2025",
    userName: "Sourabh Magdum",
    price: 1200,
    date: "12th August 2025",
    venue: "Nehru Auditorium, Mumbai",
    ticketId: "EVT-2025-1456",
  };

  //  Download Ticket as PDF
  const handleDownload = async () => {
    setLoading(true);
    const canvas = await html2canvas(ticketRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth() - 20;
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 10, 10, width, height);
    pdf.save("Evently_Ticket.pdf");
    setLoading(false);
  };

  //  Simulate QR Scan Action
  const handleScan = () => {
    setScanMessage(" Thank you for using Evently! Have a great time at the event 🎉");
    setTimeout(() => setScanMessage(""), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 flex flex-col items-center justify-center p-6 font-sans">
      {/* Ticket */}
      <div
        ref={ticketRef}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex border border-gray-300"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(140,15,84,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        {/* Left Section */}
        <div
          className="flex-1 p-8 flex flex-col justify-between text-white"
          style={{ backgroundColor: "#8C0F54" }}
        >
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold">{ticketData.eventName}</h1>
            <p className="flex items-center gap-2 text-lg">
              <FaCalendarAlt /> {ticketData.date}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaMapMarkerAlt /> {ticketData.venue}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaUser /> {ticketData.userName}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaMoneyBillWave /> ₹{ticketData.price}
            </p>
          </div>
          <p className="text-sm opacity-90 mt-6 leading-relaxed">
            * Please arrive 1 hour before the event. <br />
            * Entry valid for single use only. <br />
            * Keep this ticket safe for verification.
          </p>
        </div>

        {/* Tear Line (Black) */}
        <div className="w-1 border-l-2 border-dashed border-black bg-white"></div>

        {/* Right Section (QR Code Stub) */}
        <div
          className="flex flex-col items-center justify-between p-6 w-52"
          style={{ backgroundColor: "#FDE8F2" }}
        >
          <img src={ticketData.logoUrl} alt="Logo" className="w-16 h-16 mb-4" />
          <QRCodeCanvas value={ticketData.ticketId} size={110} />
          <p className="mt-3 text-xs text-gray-700 font-medium">
            {ticketData.ticketId}
          </p>
          <button
            onClick={handleScan}
            className="mt-4 text-xs px-4 py-2 bg-black text-white rounded-lg hover:scale-105 transition-all"
          >
            Simulate Scan
          </button>
          <span className="text-xs text-gray-500 mt-3 text-center">
            Issued by {ticketData.company}
          </span>
        </div>

        {/* Notches */}
        <div className="absolute top-6 -left-3 w-6 h-6 bg-gray-100 rounded-full"></div>
        <div className="absolute bottom-6 -left-3 w-6 h-6 bg-gray-100 rounded-full"></div>
        <div className="absolute top-6 -right-3 w-6 h-6 bg-gray-100 rounded-full"></div>
        <div className="absolute bottom-6 -right-3 w-6 h-6 bg-gray-100 rounded-full"></div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`mt-8 px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[#8C0F54] ${
          loading
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-[#8C0F54] text-white hover:bg-[#a51768] hover:scale-105"
        }`}
      >
        {loading ? "Generating Ticket..." : "🎟️ Download Ticket"}
      </button>

      {/* Scan Message Display */}
      {scanMessage && (
        <div className="mt-4 bg-green-100 text-green-700 px-6 py-3 rounded-lg shadow-md text-base font-medium animate-fadeIn">
          {scanMessage}
        </div>
      )}
    </div>
  );
};

export default TicketPage;
