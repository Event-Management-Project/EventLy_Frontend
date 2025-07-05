import React from 'react';
import CountUp from 'react-countup';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const team = [
  {
    name: 'Sourabh Magdum',
    photo: '/images/sourabh.jpg',
    linkedin: 'https://linkedin.com/in/sourabh',
    email: 'sourabh@example.com',
  },
  {
    name: 'Farhan Tamboli',
    photo: '/images/farhan.jpg',
    linkedin: 'https://linkedin.com/in/farhan',
    email: 'farhan@example.com',
  },
  {
    name: 'Shubham Karoshi',
    photo: '/images/shubham.jpg',
    linkedin: 'https://linkedin.com/in/shubham',
    email: 'shubham@example.com',
  },
  {
    name: 'Rushikesh Patil',
    photo: '/images/rushi.jpg',
    linkedin: 'https://linkedin.com/in/rushi',
    email: 'rushi@example.com',
  },
];

function AboutUs() {
  return (
    <div className="bg-[#FCF7F8] text-[#365B73] px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-16">
        <h1 className="text-4xl font-bold text-center">About Us</h1>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-3">Welcome to Evently</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Evently is your one-stop solution for seamless event management. Our mission is to empower organisers and customers by providing a reliable, user-friendly platform for managing, booking, and analysing events efficiently.
          </p>
        </section>

        <section className="flex justify-center items-center gap-10">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-medium mb-2">Happy Customers</h3>
            <p className="text-4xl font-bold text-[#A31621]">
              <CountUp end={4500} duration={3} />
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-medium mb-2">Events Managed</h3>
            <p className="text-4xl font-bold text-[#A31621]">
              <CountUp end={1200} duration={3} />
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center mb-10">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-4 rounded-xl text-center shadow-md">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#A31621]"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.email}</p>
                <div className="flex justify-center gap-4 mt-2">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#073B4C] hover:text-[#A31621]">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-[#073B4C] hover:text-[#A31621]">
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
