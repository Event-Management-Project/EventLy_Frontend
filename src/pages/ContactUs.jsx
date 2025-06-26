import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    console.log("Contact details:", data);
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#9FBFC5] py-12 px-6 sm:px-12 flex justify-center items-start">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
       
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-300 space-y-6"
        >
          <h2 className="text-3xl font-extrabold text-[#0D4D66] mb-6 flex items-center gap-2">
            <FaEnvelope className="w-7 h-7" /> Contact Us
          </h2>

          <InputField placeholder="Your Name" ref={nameRef} required />
          <InputField placeholder="Your Email" type="email" ref={emailRef} required />
          <TextareaField placeholder="Your Message" ref={messageRef} required />

          <button
            type="submit"
            className="w-full bg-[#0D4D66] hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 text-center text-[#0D4D66] font-semibold">
              ✅ Thank you for contacting us! We will get back to you soon.
            </p>
          )}
        </form>

      
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-300 flex flex-col">
          <h2 className="text-3xl font-extrabold text-[#0D4D66] mb-6">Contact Information</h2>

          <div className="space-y-6 text-gray-700 text-lg">
            <p className="flex items-center gap-3">
              <FaPhone className="text-[#0D4D66] w-5 h-5" />
              +91-99999-88888
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#0D4D66] w-5 h-5" />
              evently@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkedAlt className="text-[#0D4D66] w-5 h-5" />
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
          />
        </div>
      </div>
    </div>
  );
}

const InputField = React.forwardRef(({ placeholder, type = "text", ...rest }, ref) => (
  <input
    type={type}
    placeholder={placeholder}
    ref={ref}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D4D66] text-gray-700"
    {...rest}
  />
));

const TextareaField = React.forwardRef(({ placeholder, ...rest }, ref) => (
  <textarea
    placeholder={placeholder}
    ref={ref}
    rows={5}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D4D66] text-gray-700 resize-none"
    {...rest}
  />
));

export default ContactUs;
