import React from 'react';

const EventFilters = () => {
  return (
    <div>
      <input placeholder="Search..." />
      <select>
        <option value="">All</option>
        <option value="Music">Music</option>
        <option value="Tech">Tech</option>
        <option value="Sports">Sports</option>
      </select>
      <input type="date" />
      <button>Apply</button>
      <button>Clear</button>
    </div>
  );
};

export default EventFilters;
