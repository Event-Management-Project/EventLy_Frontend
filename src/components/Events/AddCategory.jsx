import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../services/EventService";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await addCategory(name);  // <-- pass the string directly here, NOT { name }
      setName("");              // <-- reset the correct state variable
      navigate("/organiser/events");
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-[#FEF8EC] p-6 rounded-3xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-[#F2B33D] mb-4 text-center">
        Add New Category
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Category Name
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-[#F2B33D] hover:bg-yellow-500 text-white px-5 py-2 rounded-lg w-full font-medium"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
