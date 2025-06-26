import React from 'react';
import { BadgeCheck } from 'lucide-react';

function WhyEvently() {
  return (
    <section className="bg-indigo-100 py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Why Choose Evently?</h2>
      <p className="mb-6">Get the best platform to manage and attend exciting events near you.</p>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 flex items-center gap-2 mx-auto">
        <BadgeCheck className="w-5 h-5" /> View Services
      </button>
    </section>
  );
}

export default WhyEvently;