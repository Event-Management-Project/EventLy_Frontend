import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaMoneyBillWave,
  FaTicketAlt,
} from "react-icons/fa";

const TicketPage = () => {
  const ticketRef = useRef();

  const ticketData = {
    company: "Evently",
    logoUrl: "/fav-icon.png", // from public folder
    eventName: "TechFest 2025",
    userName: "Sourabh Magdum",
    price: 1200,
    date: "12th August 2025",
    venue: "Nehru Auditorium, Mumbai",
  };

  const handleDownload = async () => {
    const canvas = await html2canvas(ticketRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 10, width, height);
    pdf.save("Evently_Ticket.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div ref={ticketRef} className="bg-white rounded-2xl shadow-lg border w-[700px]">
        <div className="flex justify-between items-center px-6 py-4 border-b border-dashed border-gray-300">
          <div>
            <h1 className="text-3xl font-bold text-[#A31621] flex items-center gap-2">
              <FaTicketAlt /> {ticketData.eventName}
            </h1>
            <p className="flex items-center text-gray-700 mt-1 gap-2">
              <FaCalendarAlt /> {ticketData.date}
            </p>
            <p className="flex items-center text-gray-700 gap-2">
              <FaMapMarkerAlt /> {ticketData.venue}
            </p>
            <p className="flex items-center text-gray-700 mt-2 gap-2">
              <FaUser /> Name: <span className="font-medium">{ticketData.userName}</span>
            </p>
            <p className="flex items-center text-gray-700 gap-2">
              <FaMoneyBillWave /> Amount Paid: ₹{ticketData.price}
            </p>
          </div>
          <img src={ticketData.logoUrl} alt="Evently Logo" className="w-16 h-16 object-contain" />
        </div>

        <div className="px-6 py-4 text-sm text-gray-600 space-y-1">
          <p>• Please arrive at the venue at least <strong>1 hour before</strong> the event.</p>
          <p>• Entry is allowed only on presenting this ticket.</p>
          <p>• This ticket is non-transferable and valid for single use only.</p>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="mt-4 bg-[#6A4FB6] text-white px-6 py-2 rounded-lg hover:bg-[#5534a3] transition"
      >
        Download Ticket
      </button>
    </div>
  );
};

export default TicketPage;
