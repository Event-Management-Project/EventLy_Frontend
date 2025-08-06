import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { config } from "../../services/Config";

function PaymentPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  const total = parseFloat(state?.total || 0);
  const bookingId = state?.bookingId;
  const attendees = parseInt(state?.attendees || 1);
  const eventName = state?.eventName || "Event";

  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    if (!bookingId || total <= 0) {
      alert("Invalid booking or amount. Cannot proceed.");
      return;
    }

    setLoading(true);
    const razorpayLoaded = await loadRazorpayScript();
    if (!razorpayLoaded) {
      alert("Failed to load Razorpay SDK.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${config.transactionServiceUrl}/payment/${bookingId}`,
        {
          amount: total,
          paymentMethod: "UPI",
          attendeeCount: attendees,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // response.data.message might be "Pending order exists" or "Order created"
      let order = {};
      try {
        order = JSON.parse(response.data.data);
      } catch {
        alert("Failed to parse Razorpay order data");
        setLoading(false);
        return;
      }

      const options = {
        key: config.razorpayKey,
        amount: Math.round(total * 100),
        currency: "INR",
        name: "Evently Booking",
        description: `Payment for ${eventName}`,
        order_id: order.id,
        handler: async function (res) {
          try {
            await axios.post(`${config.transactionServiceUrl}/payment/verify`, {
              razorpayPaymentId: res.razorpay_payment_id,
              razorpayOrderId: res.razorpay_order_id,
              razorpaySignature: res.razorpay_signature,
            });

            // alert("Payment Successful! Booking Confirmed.");
            console.log(total)
            sessionStorage.setItem("ticketAmount", total);
           navigate(`/customer/events/${eventId}/tickit/download`, {
  state: { amount: total },
});
          } catch (err) {
            alert("Payment verification failed.", err);
          }
        },
        theme: { color: "#4b3a9b" },
        modal: {
          ondismiss: () =>
            alert("Payment popup closed. You can try again later."),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      alert(
        `Payment initiation failed: ${
          err?.response?.data?.message || "Something went wrong."
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlePayment(); // Auto-initiate on page load
  }, []);

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
          disabled={loading}
          className={`bg-[#4b3a9b] hover:bg-[#3a2f7e] text-white font-semibold px-8 py-4 rounded-xl text-xl transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
