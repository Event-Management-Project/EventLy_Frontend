import React, { useEffect, useState } from 'react';
import OrganiserEventCard from './OrganiserEventCard';

const allEvents = [
  {
    evt_id: 1,
    evt_title: 'Music Festival',
    category: 'Music',
    start_dateTime: '2025-09-01',
    location: 'Mumbai',
    ticket_price: 150,
    org_company_name: 'ABC Events',
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
  },
  {
    evt_id: 2,
    evt_title: 'Tech Expo',
    category: 'Tech',
    start_dateTime: '2025-11-15',
    location: 'Pune',
    ticket_price: 300,
    org_company_name: 'TechWorld',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    evt_id: 3,
    evt_title: 'Old Conference',
    category: 'Business',
    start_dateTime: '2024-07-20',
    location: 'Delhi',
    ticket_price: 250,
    org_company_name: 'OldOrg',
    imageUrl: 'https://via.placeholder.com/800x400',
  }
];

function OrganiserEventList() {
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const now = new Date();
    const upcomingEvents = allEvents.filter(
      (event) => new Date(event.start_dateTime) >= now
    );
    setFilteredEvents(upcomingEvents);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fef8ec] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#F2B33D] mb-8">Upcoming Events</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {allEvents.map((event)=>{
          return <OrganiserEventCard key={event.evt_id} event={event} />
         })

         }
            
          
        </div>
      </div>
    </div>
  );
}

export default OrganiserEventList;
