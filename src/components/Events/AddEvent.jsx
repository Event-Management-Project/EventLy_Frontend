import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkedAlt,
  FaUsers,
  FaRupeeSign,
  FaImage,
  FaFolderPlus,
  FaFileAlt,
  FaListAlt,
} from "react-icons/fa";

function AddEvent({ onEventCreated }) {
  const [form, setForm] = useState({
    evt_title: "",
    description: "",
    start_dateTime: "",
    end_dateTime: "",
    location: "",
    capacity: "",
    ticket_price: "",
    category: "",
    image: null,
  });

  const categories = ["Tech", "Business", "Music", "Education"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created:", form);
    if (onEventCreated) {
      onEventCreated(101);
    } else {
      alert("🎉 Event created successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFDF3] to-[#fff9e5] flex items-center justify-center px-6 py-10">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-10 border border-[#fef3c7]">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-[#F2B33D] flex items-center justify-center gap-3">
          <FaFolderPlus className="text-[#F2B33D]" /> Add New Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            icon={<FaFileAlt />}
            placeholder="Event Title"
            name="evt_title"
            required
            onChange={handleChange}
          />
          <InputField
            icon={<FaListAlt />}
            placeholder="Description"
            name="description"
            onChange={handleChange}
            isTextarea
          />

          <div className="flex flex-col md:flex-row gap-6">
            <InputField
              icon={<FaCalendarAlt />}
              name="start_dateTime"
              type="datetime-local"
              label="Start Date & Time"
              required
              onChange={handleChange}
            />
            <InputField
              icon={<FaClock />}
              name="end_dateTime"
              type="datetime-local"
              label="End Date & Time"
              required
              onChange={handleChange}
            />
          </div>

          <InputField
            icon={<FaMapMarkedAlt />}
            placeholder="Location"
            name="location"
            required
            onChange={handleChange}
          />
          <div className="flex flex-col md:flex-row gap-6">
            <InputField
              icon={<FaUsers />}
              placeholder="Capacity"
              name="capacity"
              type="number"
              required
              onChange={handleChange}
            />
            <InputField
              icon={<FaRupeeSign />}
              placeholder="Ticket Price"
              name="ticket_price"
              type="number"
              step="0.01"
              required
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-[#d99904] font-medium">
              Event Category
            </label>
            <div className="relative">
              <div className="absolute left-3 top-3.5 text-gray-400">
                <FaListAlt />
              </div>
              <select
                name="category"
                required
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white shadow-sm"
              >
                <option value="">Select Category</option>
                {categories.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label className="w-full flex items-center gap-3 px-4 py-3 border border-dashed border-[#F2B33D] rounded-xl bg-white text-[#F2B33D] font-medium cursor-pointer hover:bg-yellow-50 transition">
            <FaImage />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
            Upload Event Image
          </label>

          <button
            type="submit"
            className="w-full bg-[#F2B33D] hover:bg-[#d9a024] text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md"
          >
            🚀 Create Event
          </button>
        </form>
      </div>
    </div>
  );
}

function InputField({
  icon,
  placeholder,
  name,
  type = "text",
  isTextarea = false,
  label,
  ...rest
}) {
  return (
    <div className="relative w-full">
      {label && (
        <label className="block mb-1 text-[#d99904] font-medium">{label}</label>
      )}
      <div className="relative">
        <div className="absolute left-3 top-3.5 text-gray-400">{icon}</div>
        {!isTextarea ? (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white shadow-sm"
            {...rest}
          />
        ) : (
          <textarea
            name={name}
            placeholder={placeholder}
            rows="3"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white shadow-sm"
            {...rest}
          />
        )}
      </div>
    </div>
  );
}

export default AddEvent;
