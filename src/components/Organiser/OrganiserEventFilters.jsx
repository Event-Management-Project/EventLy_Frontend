import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaListUl,
  FaPlus,
} from 'react-icons/fa';

const OrganiserEventFilters = ({ filters = {}, onChange, onApply, onClear, isPast, toggleIsPast }) => {
  const handleAddCategory = () => {
    alert('Add category functionality to be implemented');
  };

  return (
    <div className="bg-[#FEF8EC] rounded-3xl shadow-md p-4 mb-6">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#F2B33D]">Filter Events</h2>
        <button
          onClick={toggleIsPast}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            isPast
              ? 'bg-[#F2B33D] text-white hover:bg-yellow-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {isPast ? 'Show Upcoming Events' : 'Show Past Events'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col col-span-2">
          <label className="text-gray-700 text-sm font-medium mb-1">Search Category & Location</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by category or location"
              className="w-full p-2 pl-10 border rounded-lg"
              value={filters.search || ''}
              onChange={(e) => onChange({ ...filters, search: e.target.value })}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1 flex justify-between items-center">
            <span>Category</span>
            <button
              onClick={handleAddCategory}
              className="text-[#F2B33D] hover:underline text-xs flex items-center gap-1"
            >
              <FaPlus className="text-xs" /> Add
            </button>
          </label>
          <div className="relative">
            <select
              className="w-full p-2 pl-10 border rounded-lg"
              value={filters.category || ''}
              onChange={(e) => onChange({ ...filters, category: e.target.value })}
            >
              <option value="">All</option>
              <option value="Music">Music</option>
              <option value="Tech">Tech</option>
              <option value="Sports">Sports</option>
            </select>
            <FaListUl className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Event Date</label>
          <div className="relative">
            <DatePicker
              selected={filters.date ? new Date(filters.date) : null}
              onChange={(date) =>
                onChange({ ...filters, date: date?.toISOString().split('T')[0] || '' })
              }
              placeholderText="Select date"
              dateFormat="yyyy-MM-dd"
              className="w-full p-2 pl-10 border rounded-lg"
              isClearable
            />
            <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={onApply}
          className="bg-[#F2B33D] text-white px-5 py-2 rounded-lg text-sm hover:bg-yellow-500"
        >
          Apply Filters
        </button>
        <button
          onClick={onClear}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg text-sm"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default OrganiserEventFilters;