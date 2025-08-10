import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateEvent, getCategories } from '../../services/EventService';
import {
  FaCalendarAlt,
  FaClock,
  FaFileAlt,
  FaListAlt,
  FaFolderOpen,
  FaMapMarkedAlt,
  FaUsers,
  FaRupeeSign,
  FaImage
} from 'react-icons/fa';

function EditEvent() {
  const location = useLocation();
  const event = location.state?.event;
  const navigate = useNavigate();

  const formatDateTimeForPicker = (datetimeStr) =>
    datetimeStr ? new Date(datetimeStr) : null;

  const [eventData, setEventData] = useState({
    evt_title: event?.eventTitle || '',
    description: event?.description || '',
    location: event?.location || '',
    ticket_price: event?.ticketPrice || '',
    capacity: event?.capacity || '',
    category: event?.categoryName || '',
    start_dateTime: formatDateTimeForPicker(event?.startDateTime),
    end_dateTime: formatDateTimeForPicker(event?.endDateTime),
  });

  const [category, setCategory] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const resp = await getCategories();
        setCategory(resp);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStartDateChange = (date) => {
    if (eventData.end_dateTime && date > eventData.end_dateTime) {
      setEventData((prev) => ({
        ...prev,
        start_dateTime: date,
        end_dateTime: null,
      }));
    } else {
      setEventData((prev) => ({
        ...prev,
        start_dateTime: date,
      }));
    }
  };

  const handleEndDateChange = (date) => {
    setEventData((prev) => ({
      ...prev,
      end_dateTime: date,
    }));
  };

  const handleSubmit = async () => {
    const chosenCategory = category.find((c) => c.categoryName === eventData.category);
    if (!chosenCategory) {
      toast.error('Invalid category selected.');
      return;
    }

    const formData = new FormData();
    formData.append('event_title', eventData.evt_title);
    formData.append('description', eventData.description);
    formData.append('location', eventData.location);
    formData.append('ticketPrice', eventData.ticket_price);
    formData.append('capacity', eventData.capacity);
    formData.append('startDateTime', eventData.start_dateTime.toISOString());
    formData.append('endDateTime', eventData.end_dateTime.toISOString());
    formData.append('categoryName', chosenCategory.categoryName);

    try {
      await updateEvent(event.id, formData);
      toast.success('Event updated successfully!');
      navigate('/organiser/events');
    } catch (err) {
      console.error(err);
      toast.error('Failed to update event.');
    }
  };

  return (
    <div className="min-h-screen bg-[#fef8ec] flex items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 organiser-filters">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-[#F2B33D] flex items-center justify-center gap-2">
          <FaFolderOpen /> Edit Event
        </h2>

        <div className="space-y-5">
          <InputField
            icon={<FaFileAlt />}
            placeholder="Event Title"
            name="evt_title"
            value={eventData.evt_title}
            onChange={handleChange}
            required
          />
          <InputField
            icon={<FaListAlt />}
            placeholder="Description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            isTextarea
          />

          <div className="flex flex-col md:flex-row gap-6">
            <DateInput
              label="Start Date & Time"
              icon={<FaCalendarAlt />}
              selected={eventData.start_dateTime}
              onChange={handleStartDateChange}
              startDate={eventData.start_dateTime}
              endDate={eventData.end_dateTime}
              minDate={new Date()}
            />
            <DateInput
              label="End Date & Time"
              icon={<FaClock />}
              selected={eventData.end_dateTime}
              onChange={handleEndDateChange}
              startDate={eventData.start_dateTime}
              endDate={eventData.end_dateTime}
              minDate={eventData.start_dateTime || new Date()}
            />
          </div>

          <InputField
            icon={<FaMapMarkedAlt />}
            placeholder="Location"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
          <div className="flex flex-col md:flex-row gap-6">
            <InputField
              icon={<FaUsers />}
              placeholder="Capacity"
              name="capacity"
              type="number"
              value={eventData.capacity}
              onChange={handleChange}
              required
            />
            <InputField
              icon={<FaRupeeSign />}
              placeholder="Ticket Price"
              name="ticket_price"
              type="number"
              step="0.01"
              value={eventData.ticket_price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-[#333333] font-medium">Category</label>
            <div className="relative">
              <div className="absolute left-3 top-3.5 text-gray-400">
                <FaListAlt />
              </div>
              <select
                name="category"
                value={eventData.category}
                onChange={handleChange}
                required
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
            <input type="file" name="images" accept="image/*" multiple onChange={handleChange} className="hidden" />
            Upload New Images
          </label>

          <div
            onClick={handleSubmit}
            className="w-full bg-[#F2B33D] hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition mt-2 text-center cursor-pointer"
          >
            Update Event
          </div>
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
  );
}

function DateInput({ label, icon, selected, onChange, startDate, endDate, minDate }) {
  return (
    <div className="w-full">
      {label && <label className="block mb-1 text-[#d99904] font-medium">{label}</label>}
      <div className="relative">
        <div className="absolute left-3 top-3.5 text-gray-400">{icon}</div>
        <DatePicker
          selected={selected}
          onChange={onChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          startDate={startDate}
          endDate={endDate}
          minDate={minDate}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white text-gray-800 shadow-sm"
          placeholderText="Select date and time"
        />
      </div>
    </div>
  );
}

function InputField({ icon, placeholder, name, type = 'text', isTextarea = false, value, onChange, ...rest }) {
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
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white text-gray-800"
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
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2B33D] outline-none bg-white text-gray-800"
            {...rest}
          />
        </>
      )}
    </div>
  );
}

export default EditEvent;
