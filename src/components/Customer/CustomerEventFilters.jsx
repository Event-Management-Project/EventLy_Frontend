import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch, FaCalendar, FaCalendarAlt } from "react-icons/fa";

const CustomerEventFilters = ({ filters, onApply, onClear }) => {
  const handleInputChange = (field, value) => {
    const updatedFilters = { ...filters, [field]: value };
    onApply(updatedFilters);
  };

  return (
    <div className="customer-filters bg-gradient-to-br from-white to-[#f9f7ff] rounded-3xl shadow-xl p-6 mb-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="flex flex-col col-span-1 md:col-span-2">
          <label className="text-[#4b3a9b] font-semibold text-sm mb-1">
            Search (Event, Location, Organiser)
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-10 border border-[#ccbbf2] rounded-lg focus:ring-2 focus:ring-[#4b3a9b] bg-white text-gray-800"
              value={filters.search}
              onChange={(e) => handleInputChange("search", e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-[#4b3a9b]" />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[#4b3a9b] font-semibold text-sm mb-1">
            Category
          </label>
          <select
            className="w-full p-2 border border-[#ccbbf2] rounded-lg focus:ring-2 focus:ring-[#4b3a9b] bg-[#f4f1fc] text-gray-800"
            value={filters.category}
            onChange={(e) => handleInputChange("category", e.target.value)}
          >
            <option value="">All</option>
            <option value="Music">Music</option>
            <option value="Tech">Tech</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div className="flex flex-col relative">
          <label className="text-[#4b3a9b] font-semibold text-sm mb-1">
            Event Date
          </label>
          <div className="relative">
            <FaCalendar className="absolute left-3 top-3 text-[#4b3a9b]" />
            <DatePicker
              selected={filters.date ? new Date(filters.date) : null}
              onChange={(date) =>
                handleInputChange(
                  "date",
                  date ? date.toLocaleDateString("en-CA") : ""
                )
              }
              placeholderText="Select date"
              dateFormat="yyyy-MM-dd"
              className="w-full p-2 pl-10 border border-[#ccbbf2] rounded-lg focus:ring-2 focus:ring-[#4b3a9b] bg-white text-gray-800"
              isClearable
            />
            <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={onClear}
          className="bg-[#ccbbf2]/40 hover:bg-[#ccbbf2]/60 text-[#4b3a9b] px-5 py-2 rounded-lg text-sm font-medium transition"
        >
          Clear
        </button>
      </div>

      <style jsx global>{`
        .customer-filters .react-datepicker {
          border-radius: 0.75rem;
          border: 1px solid #4b3a9b;
          box-shadow: 0 4px 6px rgba(75, 58, 155, 0.2);
        }

        .customer-filters .react-datepicker__header {
          background-color: #4b3a9b !important;
          border-bottom: none;
          border-top-left-radius: 0.75rem;
          border-top-right-radius: 0.75rem;
        }

        .customer-filters .react-datepicker__current-month,
        .customer-filters .react-datepicker-time__header {
          color: white !important;
          font-weight: 600 !important;
        }

        .customer-filters .react-datepicker__day {
          color: #333 !important;
        }

        .customer-filters .react-datepicker__day--selected,
        .customer-filters .react-datepicker__day--keyboard-selected {
          background-color: #4b3a9b !important;
          color: white !important;
          border-radius: 0.5rem !important;
        }

        .customer-filters .react-datepicker__day:hover {
          background-color: #372e70 !important;
          color: white !important;
        }

        .customer-filters .react-datepicker__day--today {
          border: 1px solid #4b3a9b !important;
        }
      `}</style>
    </div>
  );
};

export default CustomerEventFilters;