import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-green-600 mb-8">About Us</h2>

      <div className="max-w-3xl bg-white rounded-xl shadow-lg p-8 space-y-6 text-gray-700">
        <p>
          Welcome to our platform! We are dedicated to providing the best event booking experience. Our mission is to connect people and create memorable experiences through seamless event management.
        </p>

        <p>
          Founded in 2025, we have grown to serve thousands of customers worldwide, offering a wide variety of events from conferences, workshops, concerts, and more.
        </p>

        <p>
          Our team is passionate about innovation and customer satisfaction. We strive to make every event booking simple, secure, and enjoyable.
        </p>

        <p>
          Thank you for choosing us as your trusted event partner!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
