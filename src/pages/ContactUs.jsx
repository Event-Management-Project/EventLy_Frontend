import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:evently@gmail.com?subject=Contact%20from%20${formData.name}&body=${formData.message}%0A%0AFrom:%20${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-[#FCF7F8] text-[#365B73] py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md transition hover:shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 tracking-wide">Get in Touch</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border border-[#98A2A6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#365B73] text-[#365B73]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border border-[#98A2A6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#365B73] text-[#365B73]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border border-[#98A2A6] rounded-xl h-32 focus:outline-none focus:ring-2 focus:ring-[#365B73] text-[#365B73]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#365B73] text-white px-6 py-2 rounded-xl hover:bg-[#2b485c] transition font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold mb-6 tracking-wide">Contact Information</h2>
          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3 text-[#365B73]">
              <FaPhoneAlt className="text-[#A31621]" />
              +91-99999-88888
            </p>
            <p className="flex items-center gap-3 text-[#365B73]">
              <FaEnvelope className="text-[#A31621]" />
              evently@gmail.com
            </p>
            <p className="flex items-center gap-3 text-[#365B73]">
              <FaMapMarkerAlt className="text-[#A31621]" />
              Sunbeam Campus, Pune, India
            </p>
          </div>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.321891308322!2d73.84869481489178!3d18.562788287386665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf93b7fc11d1%3A0x12aa5d7339df685a!2sSunbeam%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1656773182811!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="mt-6 rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;