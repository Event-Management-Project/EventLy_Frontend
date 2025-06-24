import React from 'react'

function AddEvent() {
  return (
    <div>
      <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Event</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Event Name</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input type="date" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea className="border p-2 w-full rounded" rows="4"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Event Image</label>
          <input type="file" className="border p-2 w-full rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Event
        </button>
      </form>
    </div>
    </div>
  )
}

export default AddEvent
