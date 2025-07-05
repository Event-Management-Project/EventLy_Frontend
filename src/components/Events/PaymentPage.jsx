import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function PaymentPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const total = state?.total || 0;

  const handlePayment = () => {
    navigate(`/customer/events/${eventId}/success`);
  };

  return (
    <div className="min-h-screen bg-[#f5f3fb] p-8 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 text-center">
        <h2 className="text-3xl font-extrabold text-[#4b3a9b] mb-6">Payment</h2>

        <p className="text-lg mb-8 font-semibold text-[#2e2e2e]">
          Total Amount: ₹{" "}
          <span className="text-[#4b3a9b] font-bold">{total}</span>
        </p>

        <button
          onClick={handlePayment}
          className="bg-[#4b3a9b] hover:bg-[#3a2f7e] text-white font-semibold px-8 py-4 rounded-xl text-xl transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
