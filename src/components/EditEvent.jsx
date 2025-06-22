import React from 'react';

function EditEvent() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Event</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Event Name</label>
          <input type="text" defaultValue="Tech Conference" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input type="date" defaultValue="2025-08-15" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea defaultValue="Annual tech summit." className="border p-2 w-full rounded" rows="4"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Event Image</label>
          <input type="file" className="border p-2 w-full rounded" />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Update Event
        </button>
      </form>
    </div>
  );
}

export default EditEvent;
