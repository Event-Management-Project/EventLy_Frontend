import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkedAlt,
  FaUsers,
  FaRupeeSign,
  FaImage,
  FaFolderOpen,
  FaFileAlt,
  FaListAlt,
} from "react-icons/fa";

function EditEvent() {
  const [eventData, setEventData] = useState({
    evt_title: "",
    description: "",
    location: "",
    ticket_price: "",
    capacity: "",
    category: "",
    start_dateTime: "",
    end_dateTime: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const categories = ["Tech", "Business", "Music", "Education"];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      const filesArr = Array.from(files);
      setSelectedImages(filesArr);
      setPreviewUrls(filesArr.map((file) => URL.createObjectURL(file)));
    } else {
      setEventData({ ...eventData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Event Updated Successfully (Mock)!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fce4ec] via-[#f8bbd0] to-[#fce4ec] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-pink-100 p-8">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-pink-700 flex items-center justify-center gap-2">
          <FaFolderOpen /> Edit Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            icon={<FaFileAlt />}
            placeholder="Event Title"
            name="evt_title"
            value={eventData.evt_title}
            onChange={handleInputChange}
            required
          />
          <InputField
            icon={<FaListAlt />}
            placeholder="Description"
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
            isTextarea
          />

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-pink-700 font-medium">
                Start Date & Time
              </label>
              <InputField
                icon={<FaCalendarAlt />}
                name="start_dateTime"
                type="datetime-local"
                value={eventData.start_dateTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-pink-700 font-medium">
                End Date & Time
              </label>
              <InputField
                icon={<FaClock />}
                name="end_dateTime"
                type="datetime-local"
                value={eventData.end_dateTime}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <InputField
            icon={<FaMapMarkedAlt />}
            placeholder="Location"
            name="location"
            value={eventData.location}
            onChange={handleInputChange}
            required
          />
          <InputField
            icon={<FaUsers />}
            placeholder="Capacity"
            name="capacity"
            type="number"
            value={eventData.capacity}
            onChange={handleInputChange}
            required
          />
          <InputField
            icon={<FaRupeeSign />}
            placeholder="Ticket Price"
            name="ticket_price"
            type="number"
            step="0.01"
            value={eventData.ticket_price}
            onChange={handleInputChange}
            required
          />

          {/* Category Dropdown */}
          <div className="relative">
            <label className="block mb-1 text-pink-700 font-medium">Category</label>
            <div className="relative">
              <div className="absolute left-3 top-3.5 text-gray-400">
                <FaListAlt />
              </div>
              <select
                name="category"
                value={eventData.category}
                required
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 outline-none bg-white"
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

          {/* Upload Images */}
          <label className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-pink-50 text-gray-600 cursor-pointer hover:bg-pink-100 transition">
            <FaImage />
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleInputChange}
              className="hidden"
            />
            Upload New Images
          </label>

          {previewUrls.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {previewUrls.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Preview ${idx}`}
                  className="w-full h-32 object-cover rounded-xl border-2 border-pink-300"
                />
              ))}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 duration-300 shadow-md"
          >
            Update Event
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
  value,
  ...rest
}) {
  return (
    <div className="relative">
      {!isTextarea ? (
        <>
          <div className="absolute left-3 top-3.5 text-gray-400">{icon}</div>
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 outline-none bg-white"
            {...rest}
          />
        </>
      ) : (
        <>
          <div className="absolute left-3 top-3.5 text-gray-400">{icon}</div>
          <textarea
            name={name}
            value={value}
            placeholder={placeholder}
            rows="3"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 outline-none bg-white"
            {...rest}
          />
        </>
      )}
    </div>
  );
}

export default EditEvent;
