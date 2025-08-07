import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateEvent, getCategories } from "../../services/EventService";


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
  const location = useLocation();
  const event = location.state?.event;
  const navigate = useNavigate();

  const formatDateTimeForInput = (datetimeStr) => {
    const date = new Date(datetimeStr);
    return date.toISOString().slice(0, 16);
  };


  const [eventData, setEventData] = useState({
    evt_title: event?.eventTitle || "",
    description: event?.description || "",
    location: event?.location || "",
    ticket_price: event?.ticketPrice || "",
    capacity: event?.capacity || "",
    category: event?.categoryName || "",
    start_dateTime: event?.startDateTime ? formatDateTimeForInput(event.startDateTime) : "",
    end_dateTime: event?.endDateTime ? formatDateTimeForInput(event.endDateTime) : "",
  });

  const [existingImages, setExistingImages] = useState(event?.imageUrl ? [event.imageUrl] : []);
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

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

  const handleSubmit = async () => {
    const selectedCategory = category.find(
      (cat) => cat.categoryName === eventData.category
    );

    if (!selectedCategory) {
      toast.error("Invalid category selected.");
      return;
    }

    const formData = new FormData();
    formData.append("event_title", eventData.evt_title);
    formData.append("description", eventData.description);
    formData.append("location", eventData.location);
    formData.append("ticketPrice", parseFloat(eventData.ticket_price));
    formData.append("capacity", parseInt(eventData.capacity));
    formData.append("startDateTime", eventData.start_dateTime);
    formData.append("endDateTime", eventData.end_dateTime);
    formData.append("categoryName", selectedCategory.categoryName);

    selectedImages.forEach((img) => {
      formData.append("files", img);
    });

    try {
      await updateEvent(event.id, formData);
      toast.success("Event updated successfully!");
      navigate("/organiser/events");
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update event. Please try again.");
    }
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

        <div className="space-y-5">
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
                {category.map((cat, i) => (
                  <option key={i} value={cat.categoryName}>
                    {cat.categoryName}
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

          <div
            onClick={handleSubmit}
            className="w-full bg-[#F2B33D] hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition mt-2 text-center cursor-pointer"
          >
            Update Event
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
