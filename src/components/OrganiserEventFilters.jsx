import React from 'react';

const OrganiserEventFilters = () => {
  return (
    <div>
      <h2>Filter Events</h2>
      <input placeholder="Search by event name" />
      <select>
        <option value="">All</option>
        <option value="Music">Music</option>
        <option value="Tech">Tech</option>
        <option value="Sports">Sports</option>
      </select>
      <input placeholder="Enter location" />
      <input type="date" />
      <button>Apply</button>
      <button>Clear</button>
    </div>
  );
};

export default OrganiserEventFilters;
