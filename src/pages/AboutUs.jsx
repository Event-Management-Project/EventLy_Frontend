import React from "react";
import { Info } from "lucide-react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-[#9FBFC6] px-4 py-8 sm:px-8 flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-[#0D4D66] mb-8 flex items-center gap-2">
        <Info size={28} color="#0D4D66" />
        About Us
      </h2>

      <div className="max-w-4xl bg-white rounded-2xl shadow-2xl p-8 text-gray-700 border border-gray-300 space-y-6">
        <section className="space-y-4">
          <p>
            Welcome to Evently! We are your one-stop solution for seamless event
            management. Our mission is to empower organisers and customers by
            providing a reliable, user-friendly platform for managing, booking,
            and analysing events efficiently.
          </p>
          <p>
            Founded in 2025, we have grown to serve thousands of customers
            worldwide, offering a wide variety of events from conferences,
            workshops, concerts, and more.
          </p>
          <p>
            Our team is passionate about innovation and customer satisfaction.
            We strive to make every event booking simple, secure, and enjoyable.
          </p>
          <p>Thank you for choosing us as your trusted event partner!</p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
