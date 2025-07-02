import React, { useEffect, useState } from "react";
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

  const [existingImages, setExistingImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const categories = ["Tech", "Business", "Music", "Education"];

  useEffect(() => {
    const mockData = {
      evt_title: "Demo Event",
      description: "Sample description for the event.",
      location: "Mumbai",
      ticket_price: "500",
      capacity: "100",
      category: "Music",
      start_dateTime: "2025-10-01T18:00",
      end_dateTime: "2025-10-01T21:00",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150/FFB6C1",
      ],
    };
    setEventData(mockData);
    setExistingImages(mockData.images);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      const newFiles = Array.from(files);
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
      setSelectedImages((prev) => [...prev, ...newFiles]);
      setPreviewUrls((prev) => [...prev, ...newPreviews]);
    } else {
      setEventData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    setSelectedImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
    setPreviewUrls((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(eventData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    selectedImages.forEach((file) => {
      formData.append("images", file);
    });

    console.log("Submitted Event Data:", Object.fromEntries(formData.entries()));
    alert("Event updated (simulated)!");
    setSuccessMessage("Event updated successfully!");

    setTimeout(() => setSuccessMessage(""), 4000);
  };

  return (
    <div className="min-h-screen bg-[#fef8ec] flex items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-[#F2B33D] flex items-center justify-center gap-2">
          <FaFolderOpen /> Edit Event
        </h2>

        {successMessage && (
          <div className="mb-4 text-green-600 font-medium text-center">
            {successMessage}
          </div>
        )}

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

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 min-w-0">
              <label className="block mb-1 text-[#333333] font-medium">
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
            <div className="flex-1 min-w-0">
              <label className="block mb-1 text-[#333333] font-medium">
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

          <div className="relative">
            <label className="block mb-1 text-[#333333] font-medium">
              Category
            </label>
            <div className="relative">
              <div className="absolute left-3 top-3.5 text-gray-400">
                <FaListAlt />
              </div>
              <select
                name="category"
                value={eventData.category}
                required
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white"
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

          <label className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-pointer hover:bg-gray-100">
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
                <div key={idx} className="relative group">
                  <img
                    src={src}
                    alt={`Preview ${idx}`}
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(idx)}
                    className="absolute top-1 right-1 bg-black bg-opacity-50 text-white text-xs px-2 py-0.5 rounded hidden group-hover:block"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {existingImages.length > 0 && (
            <div>
              <p className="font-semibold mb-2 mt-4 text-[#333333]">
                Existing Images
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {existingImages.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt={`Event ${idx}`}
                    className="w-full h-32 object-cover rounded-xl"
                  />
                ))}
              </div>
            </div>
          )}

          <button className="w-full bg-[#F2B33D] hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition mt-2">
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
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white text-[#333333]"
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
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white text-[#333333]"
            {...rest}
          />
        </>
      )}
    </div>
  );
}

export default EditEvent;