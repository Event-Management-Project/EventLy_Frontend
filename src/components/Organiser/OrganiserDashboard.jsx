import React from 'react';
import { CalendarCheck, Users, Star, PlusCircle } from 'lucide-react';

function OrganiserDashboard() {
  const stats = [
    {
      label: 'Total Events',
      value: 12,
      icon: <CalendarCheck className="w-6 h-6 text-blue-600" />,
    },
    {
      label: 'Attendees',
      value: 523,
      icon: <Users className="w-6 h-6 text-green-600" />,
    },
    {
      label: 'Rating',
      value: '4.5',
      icon: <Star className="w-6 h-6 text-yellow-500" />,
    },
    {
      label: 'Upcoming',
      value: 3,
      icon: <PlusCircle className="w-6 h-6 text-purple-600" />,
    },
  ];

  return (
    <div className="p-8 flex flex-col gap-8 w-full">
      <h1 className="text-3xl font-bold text-gray-800">Welcome, Organiser 👋</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-blue-100 p-3 rounded-full">
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <h3 className="text-2xl font-semibold text-gray-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrganiserDashboard;
