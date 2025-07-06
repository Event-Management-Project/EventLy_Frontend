import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEventFacilities() {
  const [allFacilities, setAllFacilities] = useState([
    { fst_id: 1, fst_name: "WiFi" },
    { fst_id: 2, fst_name: "Parking" },
    { fst_id: 3, fst_name: "Food Court" },
    { fst_id: 4, fst_name: "Security" },
  ]);

  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [newFacility, setNewFacility] = useState("");
  const navigate = useNavigate();

  const navigateToEvent = ()=>{
     navigate('/organiser/events')
  }

  const toggleFacility = (fst_id) => {
    setSelectedFacilities((prev) =>
      prev.includes(fst_id)
        ? prev.filter((id) => id !== fst_id)
        : [...prev, fst_id]
    );
  };

  const handleAddFacility = () => {
    if (newFacility.trim() === "") return;

    const newId =
      allFacilities.length > 0
        ? Math.max(...allFacilities.map((f) => f.fst_id)) + 1
        : 1;

    const newFac = { fst_id: newId, fst_name: newFacility.trim() };

    setAllFacilities((prev) => [...prev, newFac]);
    setNewFacility("");
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
              key={fac.fst_id}
              className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedFacilities.includes(fac.fst_id)}
                onChange={() => toggleFacility(fac.fst_id)}
                className="accent-[#F2B33D] w-5 h-5"
              />
              <span className="text-[#333333]">{fac.fst_name}</span>
            </label>
          ))}
        </div>

        <button
          onClick={navigateToEvent}
          className="w-full bg-[#F2B33D] text-[#333333] py-3 rounded-lg font-semibold hover:bg-yellow-400"
        >
          Save Facilities
        </button>
      </div>
    </div>
  );
}

export default AddEventFacilities;
