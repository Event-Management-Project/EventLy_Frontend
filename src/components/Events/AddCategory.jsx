import React, { useState } from 'react';

const AddCategory = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Category Added: ${name}`);
    setName('');
  };

  return (
    <div className="max-w-xl mx-auto bg-[#FEF8EC] p-6 rounded-3xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-[#F2B33D] mb-4 text-center">Add New Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Category Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            required
          />
        </div>
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