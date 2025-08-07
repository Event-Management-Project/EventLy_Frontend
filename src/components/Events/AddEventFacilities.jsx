import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddEventFacilities() {
  const [allFacilities, setAllFacilities] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [newFacility, setNewFacility] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const eventId = location.state?.eventId;

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const res = await axios.get("http://localhost:9090/facility");
      // Validate unique fst_id values
      const facilities = res.data;
      const uniqueIds = new Set(facilities.map((fac) => fac.fst_id));
      if (uniqueIds.size !== facilities.length) {
        toast.error("Duplicate facility IDs detected!");
      }
      setAllFacilities(facilities);
    } catch (error) {
      toast.error("Failed to fetch facilities");
    }
  };

  const toggleFacility = (id) => {
    setSelectedFacilities((prev) => {
      const newSelection = prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id];
      console.log("Selected Facilities:", newSelection); // Debug log
      return newSelection;
    });
  };

  const handleAddFacility = async () => {
    if (newFacility.trim() === "") return;

    try {
      const res = await axios.post("http://localhost:9090/facility", {
        facilityName: newFacility.trim(),
      });
      toast.success("Facility added!");
      setAllFacilities([...allFacilities, res.data]);
      setNewFacility("");
    } catch (error) {
      toast.error("Failed to add facility");
    }
  };

  const handleSaveFacilities = async () => {
    if (!eventId) {
      toast.error("Event ID not found!");
      return;
    }

    try {
      await axios.post(
        `http://localhost:9090/facility/ToEvent/${eventId}`,
        selectedFacilities
      );
      toast.success("Facilities assigned to event!");
      setTimeout(() => navigate("/organiser/events"), 1000);
    } catch (error) {
      toast.error("Failed to assign facilities");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#fef8ec] flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-2xl font-extrabold text-center mb-6 text-[#F2B33D]">
          Assign Facilities to Event
        </h2>

        <div className="flex mb-6 gap-3">
          <input
            type="text"
            value={newFacility}
            onChange={(e) => setNewFacility(e.target.value)}
            placeholder="Add new facility"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#F2B33D] outline-none"
          />
          <button
            onClick={handleAddFacility}
            className="bg-[#F2B33D] text-[#333333] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400"
          >
            +
          </button>
        </div>

        <div className="space-y-4 mb-6">
          {allFacilities.map((fac) => (
            <label
              key={fac.fst_id} // Ensure key is unique
              className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedFacilities.includes(fac.fst_id)}
                onChange={() => toggleFacility(fac.fst_id)}
                className="accent-[#F2B33D] w-5 h-5"
              />
              <span className="text-[#333333]">{fac.facilityName}</span>
            </label>
          ))}
        </div>

        <button
          onClick={handleSaveFacilities}
          className="w-full bg-[#F2B33D] text-[#333333] py-3 rounded-lg font-semibold hover:bg-yellow-400"
        >
          Save Facilities
        </button>

        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
}

export default AddEventFacilities;