import React, { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact details:', { name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
        >
          Send Message
        </button>

        {submitted && (
          <p className="mt-4 text-center text-green-600 font-semibold">
            Thank you for contacting us! We will get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactUs;
