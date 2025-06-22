import React from 'react'

function OrganiserDashboard() {
     const dummyData = {
    totalEvents: 24,
    upcomingEvents: 3,
    totalParticipants: 543,
  };
  return (
   <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white border p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-600">Total Events</h2>
          <p className="text-3xl font-bold text-blue-700 mt-2">{dummyData.totalEvents}</p>
        </div>
        <div className="bg-white border p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-600">Upcoming Events</h2>
          <p className="text-3xl font-bold text-green-700 mt-2">{dummyData.upcomingEvents}</p>
        </div>
        <div className="bg-white border p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-600">Participants</h2>
          <p className="text-3xl font-bold text-purple-700 mt-2">{dummyData.totalParticipants}</p>
        </div>
      </div>
    </div>
  )
}

export default OrganiserDashboard
