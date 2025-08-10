import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { QRCodeCanvas } from "qrcode.react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaMoneyBillWave,
  FaDownload,
} from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { getEventInfo } from "../../services/EventService";
import { useSelector } from "react-redux";

const TicketPage = () => {
  const ticketRef = useRef();
  const [loading, setLoading] = useState(false);
  const [scanMessage, setScanMessage] = useState("");
  const customer = useSelector((state) => state.customer.customer);
  const [event, setEvent] = useState({});

  const location = useLocation();
  const { amount } = location.state || {};

  const { eventId } = useParams();

  const eventDetails = async () => {
    try {
      const result = await getEventInfo(eventId);
      console.log(result);
      setEvent(result);
    } catch (error) {
      console.log("error while getting event data");
    }
  };

  useEffect(() => {
    eventDetails();
  }, []);

  const handleDownload = async () => {
    setLoading(true);

    // Simulate loading delay (2 seconds)
    setTimeout(async () => {
      try {
        const canvas = await html2canvas(ticketRef.current, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("landscape", "mm", "a4");
        const width = pdf.internal.pageSize.getWidth() - 20;
        const height = (canvas.height * width) / canvas.width;
        pdf.addImage(imgData, "PNG", 10, 10, width, height);
        pdf.save("Evently_Ticket.pdf");
      } catch (error) {
        console.error("Error generating PDF:", error);
      }
      setLoading(false);
    }, 2000);
  };

  const handleScan = () => {
    setScanMessage(
      " Thank you for using Evently! Have a great time at the event 🎉"
    );
    setTimeout(() => setScanMessage(""), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 flex flex-col items-center justify-center p-6 font-sans">
      <div
        ref={ticketRef}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex border border-gray-300"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(140,15,84,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div
          className="flex-1 p-8 flex flex-col justify-between text-white"
          style={{ backgroundColor: "#8C0F54" }}
        >
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold">{event.eventTitle}</h1>
            <p className="flex items-center gap-2 text-lg">
              <FaCalendarAlt /> {event.startDateTime}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaMapMarkerAlt /> {event.location}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaUser /> {customer?.customerName}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaMoneyBillWave /> ₹{amount}
            </p>
          </div>
          <p className="text-sm opacity-90 mt-6 leading-relaxed">
            * Please arrive 1 hour before the event. <br />
            * Entry valid for single use only. <br />* Keep this ticket safe for
            verification.
          </p>
        </div>

        <div className="w-1 border-l-2 border-dashed border-black bg-white"></div>

        <div
          className="flex flex-col items-center justify-between p-6 w-52"
          style={{ backgroundColor: "#FDE8F2" }}
        >
          <img src="/fav-icon.png" alt="Logo" className="w-16 h-16 mb-4" />
          <QRCodeCanvas value={eventId} size={110} />
          <p className="mt-3 text-xs text-gray-700 font-medium">
            {event.id}
          </p>
          <button
            onClick={handleScan}
            className="mt-4 text-xs px-4 py-2 bg-black text-white rounded-lg hover:scale-105 transition-all"
          >
            Simulate Scan
          </button>
          <span className="text-xs text-gray-500 mt-3 text-center">
            Issued by {event.eventTitle}
          </span>
        </div>

        <div className="absolute top-6 -left-3 w-6 h-6 bg-gray-100 rounded-full"></div>
        <div className="absolute bottom-6 -left-3 w-6 h-6 bg-gray-100 rounded-full"></div>
        <div className="absolute top-6 -right-3 w-6 h-6 bg-gray-100 rounded-full"></div>
        <div className="absolute bottom-6 -right-3 w-6 h-6 bg-gray-100 rounded-full"></div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`mt-8 px-10 py-4 rounded-full text-lg font-semibold shadow-lg flex justify-center items-center transition-all ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#8C0F54] text-white hover:bg-[#a51768] hover:scale-105"
        }`}
      >
        {loading ? (
          <svg
            className="animate-spin h-6 w-6 mr-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        ) : (
          <FaDownload className="mr-3" />
        )}
        {loading ? "Preparing..." : "Download Ticket"}
      </button>

      {scanMessage && (
        <div className="mt-4 bg-green-100 text-green-700 px-6 py-3 rounded-lg shadow-md text-base font-medium animate-fadeIn">
          {scanMessage}
        </div>
      )}
    </div>
  );
};

export default TicketPage;
