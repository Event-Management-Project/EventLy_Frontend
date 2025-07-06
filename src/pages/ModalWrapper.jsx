import React, { useEffect, useState } from "react";

const ModalWrapper = ({ isOpen, onClose, title, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={`bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 p-6 relative transform transition-all duration-300 ease-out
        ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        <div className="text-base text-gray-700 space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default ModalWrapper;
