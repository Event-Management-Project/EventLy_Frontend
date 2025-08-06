import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
  LineChart, Line, CartesianGrid
} from 'recharts';
import { CalendarCheck2, Clock, History, IndianRupee, Ticket } from 'lucide-react';
import axios from 'axios';

const analytics = [
  { label: 'Total Events', value: 38, icon: <CalendarCheck2 className="text-[#F29F05] w-6 h-6" /> },
  { label: 'Active Events', value: 12, icon: <Clock className="text-[#F29F05] w-6 h-6" /> },
  { label: 'Past Events', value: 26, icon: <History className="text-[#F29F05] w-6 h-6" /> },
  { label: 'Total Revenue', value: '₹1,20,000', icon: <IndianRupee className="text-[#F29F05] w-6 h-6" /> },
];

const eventsData = [
  { month: 'Jan', events: 4 }, { month: 'Feb', events: 6 },
  { month: 'Mar', events: 7 }, { month: 'Apr', events: 5 },
  { month: 'May', events: 3 }, { month: 'Jun', events: 8 },
  { month: 'Jul', events: 5 },
];

const paymentData = [
  { month: 'Jan', revenue: 12000 }, { month: 'Feb', revenue: 16000 },
  { month: 'Mar', revenue: 21000 }, { month: 'Apr', revenue: 19000 },
  { month: 'May', revenue: 14000 }, { month: 'Jun', revenue: 28000 },
  { month: 'Jul', revenue: 25000 },
];

function OrganiserDashboard() {
  const [ticketsSold, setTicketsSold] = useState(0);

  useEffect(() => {
    // Replace with your backend API endpoint
    axios.get('/api/organiser/tickets-sold')
      .then(res => setTicketsSold(res.data.totalTickets))
      .catch(err => console.error("Error fetching tickets sold:", err));
  }, []);

  return (
    <div className="bg-white min-h-screen p-6 text-gray-800">
      <h2 className="text-3xl font-bold text-[#F29F05] mb-8">Organiser Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        {analytics.map((item, idx) => (
          <div key={idx} className="bg-[#FDF9F0] border border-[#F2B705] rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition">
            <div className="bg-[#FFF4D6] p-3 rounded-full">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-600">{item.label}</p>
              <p className="text-2xl font-bold text-gray-900">{item.value}</p>
            </div>
          </div>
        ))}

        {/* ✅ New Total Tickets Sold Card */}
        <div className="bg-[#FDF9F0] border border-[#F2B705] rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition">
          <div className="bg-[#FFF4D6] p-3 rounded-full">
            <Ticket className="text-[#F29F05] w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Tickets Sold</p>
            <p className="text-2xl font-bold text-gray-900">{ticketsSold}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#F2B705] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#F29F05] mb-4">Monthly Events</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={eventsData}>
              <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#F29F05" />
              <YAxis stroke="#F29F05" />
              <Tooltip />
              <Legend />
              <Bar dataKey="events" fill="#F2B705" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border border-[#F2B705] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#F29F05] mb-4">Monthly Payments</h3>
          <ResponsiveContainer width="100%" height={250}>
  <LineChart data={paymentData}>
    <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
    <XAxis dataKey="month" stroke="#822BD9" />
    <YAxis stroke="#822BD9" />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey="revenue"
      stroke="#D92588"
      strokeWidth={3}
      dot={{ r: 5, stroke: '#D92588', fill: '#F22771' }}
    />
  </LineChart>
</ResponsiveContainer>

        </div>
      </div>
    </div>
  );
}

export default OrganiserDashboard;

