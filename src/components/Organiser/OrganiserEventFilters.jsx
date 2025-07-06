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
import { useNavigate } from 'react-router-dom';

const OrganiserEventFilters = ({
  filters = {},
  onChange,
  onClear,
  isPast,
  toggleIsPast,
}) => {

  const navigate = useNavigate()
  const handleFilterChange = (updatedFilters) => {
    onChange(updatedFilters);
  };

  const handleAddCategory = () => {
    navigate("/organiser/events/add-category")
  };

 const handleAddEvent = () => {
    navigate("/organiser/events/add")
  };



  return (
    <div className="organiser-filters bg-[#FEF8EC] rounded-3xl shadow-md p-4 mb-6">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#F2B33D]">Filter Events</h2>
        <div className='flex justify-content'>

          <button
            onClick={toggleIsPast}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isPast
              ? 'bg-[#F2B33D] text-white hover:bg-yellow-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {isPast ? 'Show Upcoming Events' : 'Show Past Events'}
          </button>
          <button
          onClick={handleAddEvent}
          className='px-4 py-2 rounded-full text-sm font-medium bg-[#F2B33D]'>
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
              className="w-full p-2 pl-10 border rounded-lg"
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
              onClick={handleAddCategory}
              className="text-[#F2B33D] hover:underline text-xs flex items-center gap-1"
            >
              <FaPlus className="text-xs" /> Add
            </button>
          </label>
          <div className="relative">
            <select
              className="w-full p-2 border border-[#ccbbf2] rounded-lg focus:ring-2 focus:ring-[#F2B33D] bg-[#f4f1fc] text-gray-800"
              value={filters.category || ''}
              onChange={(e) =>
                handleFilterChange({ ...filters, category: e.target.value })
              }
            >
              <option value="">All</option>
              <option value="Music">Music</option>
              <option value="Tech">Tech</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
        </div>

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
              className="w-full p-2 pl-10 border rounded-lg"
              isClearable
            />
            <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>

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
      <style jsx global>{`
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