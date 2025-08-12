import React, { useEffect, useState } from "react";
import axios from "axios";

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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCategories, createEvent } from "../../services/EventService";

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

  const navigate = useNavigate();
  
  const organiser = useSelector((state) => state.organiser.organiser);
  
  const [category, setCategory] = useState([]);
  
  useEffect(() => {
  const fetchCategory = async () => {
    try {
      const response = await getCategories();
      setCategory(response);
    } catch (error) {
      console.log("Error while fetching categories:", error);
    }
  };
  fetchCategory();
}, []);


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleCreateEvent = async () => {
    console.log("Event Created:", form);

    if (!form.image) {
  alert("Please upload an image file.");
  return;
}

    const formData = new FormData();
    formData.append("event_title", form.evt_title);
    formData.append("description", form.description);
    formData.append("startDateTime", form.start_dateTime);
    formData.append("endDateTime", form.end_dateTime);
    formData.append("location", form.location);
    formData.append("capacity", form.capacity);
    formData.append("ticketPrice", form.ticket_price);
    formData.append("categoryName", form.category);
    formData.append("file", form.image);


    try {
      const res = await createEvent(formData, organiser.orgId);

      console.log("Event created successfully:", res.data);
      const newEventId = res.eventId;

      if (onEventCreated) {
        onEventCreated(res.data);
      } else {
        navigate("/organiser/events/add-facilities", {state: { eventId: newEventId },});
      }
    } catch (err) {
      console.error("Failed to create event:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFDF3] to-[#fff9e5] flex items-center justify-center px-6 py-10">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-10 border border-[#fef3c7]">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-[#F2B33D] flex items-center justify-center gap-3">
          <FaFolderPlus className="text-[#F2B33D]" /> Add New Event
        </h2>

        <div className="space-y-6">
          <InputField
            icon={<FaFileAlt />}
            placeholder="Event Title"
            name="evt_title"
            required
            onChange={handleChange}
            value={form.evt_title}
          />
          <InputField
            icon={<FaListAlt />}
            placeholder="Description"
            name="description"
            onChange={handleChange}
            isTextarea
            value={form.description}
          />

          <div className="flex flex-col md:flex-row gap-6">
            <InputField
              icon={<FaCalendarAlt />}
              name="start_dateTime"
              type="datetime-local"
              label="Start Date & Time"
              required
              onChange={handleChange}
              value={form.start_dateTime}
            />
            <InputField
              icon={<FaClock />}
              name="end_dateTime"
              type="datetime-local"
              label="End Date & Time"
              required
              onChange={handleChange}
              value={form.end_dateTime}
            />
          </div>

          <InputField
            icon={<FaMapMarkedAlt />}
            placeholder="Location"
            name="location"
            required
            onChange={handleChange}
            value={form.location}
          />
          <div className="flex flex-col md:flex-row gap-6">
            <InputField
              icon={<FaUsers />}
              placeholder="Capacity"
              name="capacity"
              type="number"
              required
              onChange={handleChange}
              value={form.capacity}
            />
            <InputField
              icon={<FaRupeeSign />}
              placeholder="Ticket Price"
              name="ticket_price"
              type="number"
              step="0.01"
              required
              onChange={handleChange}
              value={form.ticket_price}
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
                value={form.category}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white shadow-sm"
              >
                <option value="">Select Category</option>
                {category.map((cat, i) => (
                  <option key={i} value={cat.categoryName}>
                    {cat.categoryName}
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

          <div
            onClick={handleCreateEvent}
            className="w-full bg-[#F2B33D] hover:bg-[#d9a024] text-white text-center font-semibold py-3 rounded-xl transition duration-200 shadow-md cursor-pointer"
          >
            Create Event
          </div>
        </div>
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
  value,
  ...rest
}) {
  const isDateTime =
    type === "datetime-local" && (name === "start_dateTime" || name === "end_dateTime");

  const hasValue = value && value !== "";

  return (
    <div className="relative w-full">
      {label && (
        <label className="block mb-1 text-[#d99904] font-medium">{label}</label>
      )}
      <div className="relative">
        <div
          className={`absolute left-3 top-3.5 ${
            hasValue ? "text-white" : "text-gray-400"
          }`}
        >
          {icon}
        </div>
        {!isTextarea ? (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            className={`w-full pl-10 pr-4 py-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-[#F2B33D] ${
              isDateTime && hasValue
                ? "bg-[#F2B33D] text-white placeholder-white focus:ring-white"
                : "bg-white text-gray-800 border-gray-300"
            }`}
            {...rest}
          />
        ) : (
          <textarea
            name={name}
            placeholder={placeholder}
            rows="3"
            value={value}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white shadow-sm"
            {...rest}
          />
        )}
      </div>
    </div>
  );
}

export default AddEvent;