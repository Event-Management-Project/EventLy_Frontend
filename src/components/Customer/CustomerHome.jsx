import React from 'react';
import HeroSection from '../Sections/HeroSection';
import UpcomingEvents from '../Sections/UpcomingEvents';
import CategoryCarousel from '../Sections/CategoryCarousel';
import FAQSection from '../Sections/FAQSection';
import { CalendarDays, Shapes, HelpCircle } from 'lucide-react';

function CustomerHome() {
  return (
    <div className="bg-white text-[#2e2e2e] px-4 sm:px-6 md:px-10 lg:px-20 py-10 space-y-16">
      <HeroSection />

     
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 text-center sm:text-left">
          <div className="bg-[#ccbbf2] p-3 sm:p-4 rounded-lg shadow-sm flex justify-center sm:justify-start">
            <CalendarDays className="text-[#4b3a9b] w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4b3a9b]">
            Upcoming Events
          </h2>
        </div>
        <UpcomingEvents />
      </section>

      <section>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 text-center sm:text-left">
          <div className="bg-[#ccbbf2] p-3 sm:p-4 rounded-lg shadow-sm flex justify-center sm:justify-start">
            <Shapes className="text-[#4b3a9b] w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4b3a9b]">
            Categories
          </h2>
        </div>
        <CategoryCarousel />
      </section>

      <section className="pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 text-center sm:text-left">
          <div className="bg-[#ccbbf2] p-3 sm:p-4 rounded-lg shadow-sm flex justify-center sm:justify-start">
            <HelpCircle className="text-[#4b3a9b] w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4b3a9b]">
            FAQs
          </h2>
        </div>
        <FAQSection />
      </section>
    </div>
  );
}

export default CustomerHome;
