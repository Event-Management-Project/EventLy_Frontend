import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
  LineChart, Line, CartesianGrid
} from 'recharts';
import { CalendarCheck2, Clock, History, IndianRupee } from 'lucide-react';

const analytics = [
  { label: 'Total Events', value: 38, icon: <CalendarCheck2 className="text-[#A31621] w-6 h-6" /> },
  { label: 'Active Events', value: 12, icon: <Clock className="text-[#A31621] w-6 h-6" /> },
  { label: 'Past Events', value: 26, icon: <History className="text-[#A31621] w-6 h-6" /> },
  { label: 'Total Revenue', value: '₹1,20,000', icon: <IndianRupee className="text-[#A31621] w-6 h-6" /> },
];

const eventsData = [
  { month: 'Jan', events: 4 },
  { month: 'Feb', events: 6 },
  { month: 'Mar', events: 7 },
  { month: 'Apr', events: 5 },
  { month: 'May', events: 3 },
  { month: 'Jun', events: 8 },
  { month: 'Jul', events: 5 },
];

const paymentData = [
  { month: 'Jan', revenue: 12000 },
  { month: 'Feb', revenue: 16000 },
  { month: 'Mar', revenue: 21000 },
  { month: 'Apr', revenue: 19000 },
  { month: 'May', revenue: 14000 },
  { month: 'Jun', revenue: 28000 },
  { month: 'Jul', revenue: 25000 },
];

function OrganiserDashboard() {
  const showAlert = (label) => {
    alert(`Clicked on: ${label}`);
  };

  return (
    <div className="min-h-screen bg-[#FCF7F8] px-6 py-10">
      <h2 className="text-4xl font-bold text-[#A31621] mb-10 text-center drop-shadow">
        Organiser Dashboard
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {analytics.map((item, idx) => (
          <div
            key={idx}
            onClick={() => showAlert(item.label)}
            className="bg-white shadow-xl rounded-3xl p-6 flex items-center gap-4 hover:shadow-2xl transition cursor-pointer border-t-4 border-[#A31621]"
          >
            <div className="bg-[#FFF0F1] p-3 rounded-full">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Events Bar Chart */}
        <div className="bg-white border border-[#EAD4D8] shadow-md p-6 rounded-2xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#A31621] mb-4 text-center">
            Monthly Events Organised
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={eventsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#A31621" />
              <YAxis stroke="#A31621" />
              <Tooltip />
              <Legend />
              <Bar dataKey="events" fill="#FFB6B9" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Line Chart */}
        <div className="bg-white border border-[#EAD4D8] shadow-md p-6 rounded-2xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-[#A31621] mb-4 text-center">
            Monthly Payments Received
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={paymentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#A31621" />
              <YAxis stroke="#A31621" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#6C3483"
                strokeWidth={3}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default OrganiserDashboard;
