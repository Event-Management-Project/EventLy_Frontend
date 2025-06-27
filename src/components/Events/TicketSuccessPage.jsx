import React from "react";
import { CheckCircle } from "lucide-react";

function TicketSuccessPage() {
  return (
    <div className="min-h-screen bg-[#f5f3fb] flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 text-center">
        <CheckCircle className="w-20 h-20 text-[#4b3a9b] mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-[#4b3a9b] mb-3">
          Booking Successful!
        </h2>
        <p className="text-[#2e2e2e] text-base mb-8">
          Your ticket has been booked successfully. You can now download it as a
          PDF.
        </p>
        <button className="bg-[#4b3a9b] hover:bg-[#3a2f7e] text-white font-semibold px-6 py-3 rounded-lg text-base transition">
          Download Ticket (PDF)
        </button>
        Back to Home
      </div>
    </div>
  );
}

export default TicketSuccessPage;
