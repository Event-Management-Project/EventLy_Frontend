import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { countCustomer } from '../services/CustomerService';
import { countEvent } from '../services/EventService';



const team = [
  {
    name: 'Sourabh Magdum',
    photo: 'https://res.cloudinary.com/di5aefoge/image/upload/v1755177386/sm_o6rmet.jpg',
    linkedin: 'https://www.linkedin.com/in/sourabh-magadum/',
    email: 'magdumsourabh37@gmail.com',
  },
  {
    name: 'Farhan Tamboli',
    photo: 'https://res.cloudinary.com/di5aefoge/image/upload/v1755177552/WhatsApp_Image_2025-08-14_at_18.46.05_xh3miy.jpg',
    linkedin: 'https://www.linkedin.com/in/farhan-tamboli-458b10270',
    email: 'farhantamboli22@gmail.com',
  },
  {
    name: 'Shubham Karoshi',
    photo: 'https://res.cloudinary.com/di5aefoge/image/upload/v1755177715/WhatsApp_Image_2025-08-11_at_11.16.08_nqe0et.jpg',
    linkedin: 'https://www.linkedin.com/in/shubham-karoshi-077813211/',
    email: 'karoshishubham@gmail.com',
  },
  {
    name: 'Rushikesh Patil',
    photo: 'https://res.cloudinary.com/di5aefoge/image/upload/v1755177552/WhatsApp_Image_2025-08-14_at_18.42.33_ct1lkn.jpg',
    linkedin: 'https://www.linkedin.com/in/rushikesh-patil-7a72b11b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'rushikeshpatil23052002@gmail.com',
  },
];

function AboutUs() {
  const [customerCount, setCustomerCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const customers = await countCustomer();
        const events = await countEvent();
        setCustomerCount(
          typeof customers === 'number' ? customers : customers?.count || 0
        );
        setEventCount(
          typeof events === 'number' ? events : events?.count || 0
        );

      } catch (error) {
        console.error('Failed to fetch counts', error);
      }
    };

    fetchCounts();
  }, []);

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
              <CountUp end={customerCount} duration={3} />
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-medium mb-2">Events Managed</h3>
            <p className="text-4xl font-bold text-[#A31621]">
              <CountUp end={eventCount} duration={3} />
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
