import React from "react";

const NotificationModal = () => {
  const handleClose = () => {
    alert("Close button clicked"); // This replaces actual close behavior
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start pt-20 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
          onClick={handleClose}
        >
          ×
        </button>
        <h2 className="text-lg font-bold text-[#d6062c] mb-4">Notifications</h2>
        <p className="text-gray-500">Modal content goes here...</p>
      </div>
    </div>
  );
};

export default NotificationModal;
