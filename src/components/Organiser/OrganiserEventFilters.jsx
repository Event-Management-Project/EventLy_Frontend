import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FaSearch,
  FaCalendarAlt,
  FaPlus,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../services/EventService';

const OrganiserEventFilters = ({
  filters = {},
  onChange,
  onClear,
  isPast,
  toggleIsPast,
}) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategories();
        setCategory(response);
      } catch (error) {
        console.log('Error while fetching categories:', error);
      }
    };
    fetchCategory();
  }, []);

  const handleFilterChange = (updatedFilters) => {
    onChange(updatedFilters);
  };

  return (
    <div className="organiser-filters bg-[#FEF8EC] rounded-3xl shadow-md p-4 mb-6">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
        <h2 className="text-lg font-semibold text-[#F2B33D]">Filter Events</h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={toggleIsPast}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              isPast
                ? 'bg-[#F2B33D] text-white hover:bg-[#e3a82a]'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-[#f2f2f2]'
            }`}
          >
            {isPast ? 'Show Upcoming Events' : 'Show Past Events'}
          </button>
          <button
            onClick={() => navigate('/organiser/events/add')}
            className="px-4 py-2 rounded-full text-sm font-medium bg-[#F2B33D] text-white hover:bg-[#e3a82a] transition-all"
          >
            Add Event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col col-span-2">
          <label className="text-gray-700 text-sm font-medium mb-1">
            Search Category & Location
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search events by name, category or location"
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2B33D]"
              value={filters.search || ''}
              onChange={(e) =>
                handleFilterChange({ ...filters, search: e.target.value })
              }
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1 flex justify-between items-center">
            <span>Category</span>
            <button
              onClick={() => navigate('/organiser/events/add-category')}
              className="text-[#F2B33D] hover:underline text-xs flex items-center gap-1"
            >
              <FaPlus className="text-xs" /> Add
            </button>
          </label>
          <select
            className="w-full p-2 border border-[#ccbbf2] rounded-lg bg-[#f4f1fc] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F2B33D] hover:border-[#a084dc] transition-all"
            value={filters.category || ''}
            onChange={(e) =>
              handleFilterChange({ ...filters, category: e.target.value })
            }
          >
            <option value="">All</option>
            {category.map((cat, index) => (
              <option key={index}>{cat.categoryName}</option>
            ))}
          </select>
        </div>

        {/* Date Picker */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">
            Event Date
          </label>
          <div className="relative">
            <DatePicker
              selected={filters.date ? new Date(filters.date) : null}
              onChange={(date) =>
                handleFilterChange({
                  ...filters,
                  date: date?.toISOString().split('T')[0] || '',
                })
              }
              placeholderText="Select date"
              dateFormat="yyyy-MM-dd"
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2B33D]"
              isClearable
            />
            <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Clear Button */}
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={() => {
            onClear();
            console.log('❌ Filters cleared');
          }}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg text-sm"
        >
          Clear
        </button>
      </div>

      {/* Custom Styles for Datepicker */}
      <style>{`
        .organiser-filters .react-datepicker {
          border-radius: 0.75rem;
          border: 1px solid #f2b33d;
          box-shadow: 0 4px 6px rgba(242, 179, 61, 0.2);
        }

        .organiser-filters .react-datepicker__header {
          background-color: #f2b33d;
          border-bottom: none;
          border-top-left-radius: 0.75rem;
          border-top-right-radius: 0.75rem;
        }

        .organiser-filters .react-datepicker__current-month,
        .organiser-filters .react-datepicker-time__header {
          color: white;
          font-weight: 600;
        }

        .organiser-filters .react-datepicker__day {
          color: #333;
        }

        .organiser-filters .react-datepicker__day--selected,
        .organiser-filters .react-datepicker__day--keyboard-selected {
          background-color: #f2b33d !important;
          color: white !important;
          border-radius: 0.5rem;
        }

        .organiser-filters .react-datepicker__day:hover {
          background-color: #e0a52b;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default OrganiserEventFilters;
