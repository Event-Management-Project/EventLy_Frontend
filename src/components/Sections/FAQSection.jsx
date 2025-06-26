import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How can I book an event?",
    answer: "You can book events by clicking on the 'Book' button on the event details page.",
  },
  {
    question: "Can I cancel my ticket?",
    answer: "Yes, cancellation is allowed before 24 hours of the event.",
  },
  {
    question: "Are there any discounts?",
    answer: "Discounts are available on selected events and for early bird bookings.",
  },
  {
    question: "Do I need to create an account to book?",
    answer: "Yes, signing up ensures a secure and personalized booking experience.",
  },
  {
    question: "Can I view events happening in other cities?",
    answer: "Absolutely! You can filter events by city using the filter options.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We accept UPI, credit/debit cards, and major payment gateways.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F5F3FD] py-12 px-4 rounded-lg shadow-inner">
      <h2 className="text-3xl font-bold text-[#6A4FB6] mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-5">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="text-lg font-semibold text-[#6A4FB6] hover:underline">
                {faq.question}
              </span>
              <span className="text-[#6A4FB6]">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
              }`}
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
