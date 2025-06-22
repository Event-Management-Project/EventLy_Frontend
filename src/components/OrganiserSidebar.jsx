import React from 'react'

function OrganiserSidebar() {
  return (
     <div className="w-64 h-screen bg-gray-100 p-6">
      <h2 className="text-xl font-bold mb-6">Sidebar</h2>
      <ul className="space-y-4 text-gray-700">
        <li>Dashboard</li>
        <li>Events</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default OrganiserSidebar
