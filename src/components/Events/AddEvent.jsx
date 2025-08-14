import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    start_dateTime: null,
    end_dateTime: null,
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

  const handleStartDateChange = (date) => {
    if (form.end_dateTime && date > form.end_dateTime) {
      setForm({ ...form, start_dateTime: date, end_dateTime: null });
    } else {
      setForm({ ...form, start_dateTime: date });
    }
  };
  const handleEndDateChange = (date) => {
    if (form.start_dateTime && date < form.start_dateTime) {
      alert("End date/time cannot be earlier than start date/time.");
      return;
    }

    setForm({ ...form, end_dateTime: date });
  };
  const handleCreateEvent = async () => {
    if (!form.image) {
      alert("Please upload an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("event_title", form.evt_title);
    formData.append("description", form.description);
    formData.append(
      "startDateTime",
      form.start_dateTime.toISOString().slice(0, 19)
    );
    formData.append(
      "endDateTime",
      form.end_dateTime.toISOString().slice(0, 19)
    );
    formData.append("location", form.location);
    formData.append("capacity", form.capacity);
    formData.append("ticketPrice", form.ticket_price);
    formData.append("categoryName", form.category);
    formData.append("file", form.image);

    try {
      const res = await createEvent(formData, organiser.id);
      console.log(res);
      if (onEventCreated) {
        onEventCreated(res.data);
      } else {
        navigate("/organiser/events/add-facilities", {
          state: { eventId: res.eventId },
        });
      }
    } catch (err) {
      console.error(
        "Failed to create event:",
        err.response?.data || err.message
      );
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

          <div className="flex flex-col md:flex-row gap-6 organiser-filters">
            <DateInput
              label="Start Date & Time"
              icon={<FaCalendarAlt />}
              selected={form.start_dateTime}
              onChange={handleStartDateChange}
              selectsStart
              startDate={form.start_dateTime}
              endDate={form.end_dateTime}
              minDate={new Date()}
            />

            <DateInput
              label="End Date & Time"
              icon={<FaClock />}
              selected={form.end_dateTime}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={form.start_dateTime}
              endDate={form.end_dateTime}
              minDate={form.start_dateTime || new Date()}
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
    </div>
  );
}

function DateInput({
  label,
  icon,
  selected,
  onChange,
  selectsStart,
  selectsEnd,
  startDate,
  endDate,
  minDate,
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-[#d99904] font-medium">{label}</label>
      )}
      <div className="relative">
        <div className="absolute left-3 top-3.5 text-gray-400">{icon}</div>
        <DatePicker
          selected={selected}
          onChange={onChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          selectsStart={selectsStart}
          selectsEnd={selectsEnd}
          startDate={startDate}
          endDate={endDate}
          minDate={minDate}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white text-gray-800 shadow-sm"
          placeholderText="Select date and time"
        />
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
  value,
  onChange,
  ...rest
}) {
  return (
    <div className="relative w-full">
      {!isTextarea ? (
        <>
          <div className="absolute left-3 top-3.5 text-gray-400">{icon}</div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white text-gray-800"
            {...rest}
          />
        </>
      ) : (
        <>
          <div className="absolute left-3 top-3.5 text-gray-400">{icon}</div>
          <textarea
            name={name}
            placeholder={placeholder}
            rows="3"
            value={value}
            onChange={onChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white text-gray-800"
            {...rest}
          />
        </>
      )}
    </div>
  );
}

export default AddEvent;