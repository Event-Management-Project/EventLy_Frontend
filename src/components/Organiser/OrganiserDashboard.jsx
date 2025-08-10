import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
  LineChart, Line, CartesianGrid
} from 'recharts';
import { useSelector } from 'react-redux';
import { CalendarCheck2, Clock, History, IndianRupee, Ticket } from 'lucide-react';
import { fetchDashboardData, fetchMonthlyEvents, fetchMonthlyRevenue } from '../../services/OrganiserService';

function OrganiserDashboard() {
  const organiser = useSelector((state) => state.organiser.organiser);
  const [dashboardData, setDashboardData] = useState({
    totalEvents: 0,
    activeEvents: 0,
    pastEvents: 0,
    totalRevenue: 0,
    totalTicketsSold: 0
  });
  const [eventsData, setEventsData] = useState([]);
  const [monthlyRevenueData, setMonthlyRevenueData] = useState([]);



  useEffect(() => {
    if (organiser?.orgId) {
      fetchDashboardData(organiser.orgId)
        .then(data => setDashboardData(data))
        .catch(err => console.error(err));

      fetchMonthlyEvents(organiser.orgId)
        .then(data => {
          const monthOrder = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          const chartData = monthOrder
            .filter(month => data[month] !== undefined)
            .map(month => ({
              month: month.slice(0, 3),
              events: data[month]
            }));
          setEventsData(chartData);
        })
        .catch(err => console.error(err));

      fetchMonthlyRevenue(organiser.orgId)
        .then(data => {
          console.log('Monthly Revenue API response:', data);
          const chartData = Object.entries(data).map(([month, revenue]) => ({
            month: month.substring(0, 3),
            revenue,
          }));
          console.log('Transformed Monthly Revenue chart data:', chartData);
          setMonthlyRevenueData(chartData);
        })
        .catch(err => console.error(err));
    }
  }, [organiser?.orgId]);

  const analytics = [
    { label: 'Total Events', value: dashboardData.totalEvents, icon: <CalendarCheck2 className="text-[#F29F05] w-6 h-6" /> },
    { label: 'Active Events', value: dashboardData.activeEvents, icon: <Clock className="text-[#F29F05] w-6 h-6" /> },
    { label: 'Past Events', value: dashboardData.pastEvents, icon: <History className="text-[#F29F05] w-6 h-6" /> },
    { label: 'Total Revenue', value: `₹${dashboardData.totalRevenue.toLocaleString()}`, icon: <IndianRupee className="text-[#F29F05] w-6 h-6" /> },
    { label: 'Total Tickets Sold', value: dashboardData.totalTicketsSold, icon: <Ticket className="text-[#F29F05] w-6 h-6" /> },
  ];

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

        {/* Monthly Payments Chart */}
        <div className="bg-white border border-[#F2B705] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#F29F05] mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyRevenueData}>
              <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#822BD9" />
              <YAxis stroke="#822BD9" domain={[0, 'dataMax + 100']} />
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