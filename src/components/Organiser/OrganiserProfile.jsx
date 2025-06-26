// import React from 'react';

// function OrganiserProfile() {
//   return (
//     <div className="p-6 max-w-md mx-auto border border-gray-300 rounded">
//       <h2 className="text-xl font-semibold mb-4">Organiser Profile</h2>
//       <p className="mb-2">Company: EventLy Pvt Ltd</p>
//       <p className="mb-2">Email: organiser@example.com</p>
//       <p className="mb-2">Phone: 9876543210</p>
//       <p className="mb-2">Address: Pune, Maharashtra</p>
//     </div>
//   );
// }

// export default OrganiserProfile;

import Profile from '../../pages/Profile';
export default function OrganiserProfile() {
  return <Profile role="organiser" />;
}
