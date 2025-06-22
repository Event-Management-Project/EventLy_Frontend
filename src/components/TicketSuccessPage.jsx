import React from 'react';

function TicketSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Booking Successful!</h1>
        <p className="text-gray-700 mb-6">Your ticket has been booked. Check your email for the confirmation.</p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default TicketSuccessPage;
