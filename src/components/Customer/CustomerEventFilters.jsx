import React from 'react';
import DatePicker from 'react-datepicker'; 

import 'react-datepicker/dist/react-datepicker.css';
import { FaSearch, FaCalendar } from 'react-icons/fa';

const CustomerEventFilters = ({ filters = { search: '', category: '', date: '' }, onApply, onClear }) => {
  const handleInputChange = (field, value) => {
    const updatedFilters = { ...filters, [field]: value };
    if (field === 'date' && value) {
      onApply(updatedFilters);
    } else {
      onApply(updatedFilters);
    }
  };

  const handleApply = () => {
    if (!filters.date) {
      return;
    }
    onApply(filters);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="flex flex-col col-span-1 md:col-span-2">
          <label className="text-[#1f2937] font-semibold text-sm mb-1">Search (Event, Location, Organiser)</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-[#4b3a9b]"
              value={filters.search || ''}
              onChange={(e) => handleInputChange('search', e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[#1f2937] font-semibold text-sm mb-1">Category</label>
          <select
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#4b3a9b]"
            value={filters.category || ''}
            onChange={(e) => handleInputChange('category', e.target.value)}
          >
            <option value="">All</option>
            <option value="Music">Music</option>
            <option value="Tech">Tech</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div className="flex flex-col relative">
          <label className="text-[#1f2937] font-semibold text-sm mb-1">
            Event Date <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <FaCalendar className="absolute left-3 top-3 text-gray-500 pointer-events-none" />
            <DatePicker
              selected={filters.date ? new Date(filters.date) : null}
              onChange={(date) => handleInputChange('date', date ? date.toISOString().split('T')[0] : '')}
              placeholderText="Select date"
              dateFormat="yyyy-MM-dd"
              className={`w-full p-2 pl-10 border rounded-lg focus:outline-none ${
                !filters.date ? 'border-red-500 focus:ring-red-500' : 'focus:ring-2 focus:ring-[#4b3a9b]'
              }`}
              isClearable
            />
            {!filters.date && <span className="text-red-600 text-xs mt-1">Event date is required.</span>}
          </div>
        </div>

        <div className="flex gap-2 col-span-1 md:col-span-4 justify-end mt-4 md:mt-0">
          <button
            onClick={handleApply}
            className="bg-[#4b3a9b] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#372e70] transition"
          >
            Apply
          </button>
          <button
            onClick={() => {
              onClear();
            }}
            className="bg-gray-200 hover:bg-gray-300 text-[#4b5563] px-4 py-2 rounded-lg text-sm"
          >
            Clear
          </button>
        </div>
      </div>

      <style jsx global>{`
        .react-datepicker {
          border-radius: 0.75rem;
          border: 1px solid #4b3a9b;
          box-shadow: 0 4px 6px rgba(75, 58, 155, 0.2);
        }
        .react-datepicker__header {
          background-color: #4b3a9b;
          border-bottom: none;
          border-top-left-radius: 0.75rem;
          border-top-right-radius: 0.75rem;
        }
        .react-datepicker__current-month,
        .react-datepicker-time__header {
          color: white;
          font-weight: 600;
        }
        .react-datepicker__day {
          color: #333;
        }
        .react-datepicker__day--selected,
        .react-datepicker__day--keyboard-selected {
          background-color: #4b3a9b !important;
          color: white !important;
          border-radius: 0.5rem;
        }
        .react-datepicker__day:hover {
          background-color: #372e70;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default CustomerEventFilters;