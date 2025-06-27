import React, { useEffect, useState } from "react";

function AddEventFacilities() {
  const [allFacilities, setAllFacilities] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  useEffect(() => {
    const staticFacilities = [
      { fst_id: 1, fst_name: "WiFi" },
      { fst_id: 2, fst_name: "Parking" },
      { fst_id: 3, fst_name: "Food Court" },
      { fst_id: 4, fst_name: "Security" },
    ];
    setAllFacilities(staticFacilities);
  }, []);

  const toggleFacility = (fst_id) => {
    setSelectedFacilities((prev) =>
      prev.includes(fst_id)
        ? prev.filter((id) => id !== fst_id)
        : [...prev, fst_id]
    );
  };

  const handleSubmit = () => {
    alert(`Facilities saved: ${selectedFacilities.join(", ")}`);
    console.log("Submitted Facilities:", selectedFacilities);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-rose-600 tracking-wide">
           Add Facilities to Your Event
        </h2>

        <div className="space-y-5 mb-8">
          {allFacilities.map((fac) => (
            <label
              key={fac.fst_id}
              className={`flex items-center gap-3 p-4 rounded-lg border border-gray-200 transition-all duration-200 ${
                selectedFacilities.includes(fac.fst_id)
                  ? "bg-rose-50 border-rose-300 shadow"
                  : "bg-gray-50 hover:bg-gray-100"
              } cursor-pointer`}
            >
              <input
                type="checkbox"
                checked={selectedFacilities.includes(fac.fst_id)}
                onChange={() => toggleFacility(fac.fst_id)}
                className="accent-rose-600 w-5 h-5"
              />
              <span className="text-gray-800 font-medium">{fac.fst_name}</span>
            </label>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 active:scale-95 transition-all shadow-md"
        >
          Save Facilities
        </button>
      </div>
    </div>
  );
}

export default AddEventFacilities;
