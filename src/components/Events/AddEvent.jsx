import React from 'react';

function AddEvent() {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Add New Event</h1>
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            placeholder="Enter event name"
            className="mt-1 block w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            className="mt-1 block w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            rows="4"
            placeholder="Event details..."
            className="mt-1 block w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Event Image</label>
          <input
            type="file"
            className="mt-1 block w-full border border-gray-300 p-2 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}

export default AddEvent;
