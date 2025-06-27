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
    <div className="min-h-screen bg-gradient-to-br from-[#FCF7F8] to-[#fcecef] flex items-center justify-center px-6 py-10">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-10 border border-[#f7d8db]">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-[#A31621] flex items-center justify-center gap-3">
          <FaFolderPlus className="text-[#A31621]" /> Add New Event
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

          {/* Category Select */}
          <div className="relative">
            <label className="block mb-1 text-[#A31621] font-medium">
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#A31621] outline-none bg-white shadow-sm"
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

          {/* Image Upload */}
          <label className="w-full flex items-center gap-3 px-4 py-3 border border-dashed border-[#A31621] rounded-xl bg-white text-[#A31621] font-medium cursor-pointer hover:bg-[#fdf2f3] transition">
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
            className="w-full bg-[#A31621] hover:bg-[#7e101c] text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md"
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
        <label className="block mb-1 text-[#A31621] font-medium">{label}</label>
      )}
      <div className="relative">
        <div className="absolute left-3 top-3.5 text-gray-400">{icon}</div>
        {!isTextarea ? (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#A31621] outline-none bg-white shadow-sm"
            {...rest}
          />
        ) : (
          <textarea
            name={name}
            placeholder={placeholder}
            rows="3"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#A31621] outline-none bg-white shadow-sm"
            {...rest}
          />
        )}
      </div>
    </div>
  );
}


export default AddEvent;



// import React from 'react';

// function AddEvent() {
//   return (
//     <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
//       <h1 className="text-2xl font-bold mb-6 text-blue-700">Add New Event</h1>
//       <form className="space-y-5">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Event Name</label>
//           <input
//             type="text"
//             placeholder="Enter event name"
//             className="mt-1 block w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Date</label>
//           <input
//             type="date"
//             className="mt-1 block w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea
//             rows="4"
//             placeholder="Event details..."
//             className="mt-1 block w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Event Image</label>
//           <input
//             type="file"
//             className="mt-1 block w-full border border-gray-300 p-2 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
//         >
//           Create Event
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddEvent;
