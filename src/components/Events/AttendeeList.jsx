import React, { useEffect, useState } from "react";
import { MapPin, Mail, User, Users, CreditCard, X } from "lucide-react";
import { FaEye } from "react-icons/fa";
import { fetchEventAttendee } from "../../services/EventService";
import { useSelector } from "react-redux";
import { BiCalendarEvent } from "react-icons/bi";

function AttendeeList() {
  const organiser = useSelector((state) => state.organiser.organiser);
  console.log(organiser)
  const [attendees, setAttendees] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const getEventAttendees= async()=>{
    try{
      const result=await fetchEventAttendee(organiser.orgId)
      console.log(result)
      setAttendees(result)
    }
    catch(error){
      console.log("error in fetching the event attendees")
      throw error;
    }
  }

  useEffect(()=>{
    getEventAttendees()
  },[])
  
   

  return (
    <div className="p-6 min-h-screen bg-white">
      <h2 className="text-3xl font-bold mb-6 text-[#F2B33D]">Event Attendees</h2>

      {attendees.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-700 text-xl">No attendees found.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attendees.map((user,index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-[#333333]">{user.customerName}</h3>
              </div>
              <p className="flex items-center text-gray-700 mb-1">
                <Mail className="w-4 h-4 mr-2 text-[#F2B33D]" /> {user.email}
              </p>
              <p className="flex items-center text-gray-700 mb-1">
                <Users className="w-4 h-4 mr-2 text-[#F2B33D]" /> Attendees: {user.attendeeCount}
              </p>
              <p className="flex items-center text-gray-700 mb-1">
                <BiCalendarEvent className="w-4 h-4 mr-2 text-[#F2B33D]" /> Event: {user.eventTitle}
              </p>
              <p className="flex items-center text-gray-700 mb-1">
                <CreditCard className="w-4 h-4 mr-2 text-[#F2B33D]" /> ₹ {user.ticketPrice}
              </p>
              <p className="flex items-center justify-between text-gray-700">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-[#F2B33D]" />
                  {user.location}
                </span>

                <button
                  onClick={() => setSelectedUser(user)}
                  className="text-gray-600 text-lg hover:text-[#F2B33D] transition"
                  aria-label="View User"
                >
                  <FaEye />
                </button>
              </p>
            </div>
          ))}
        </div>
      )}

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md relative">
            <button
              onClick={() => setSelectedUser(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-[#F2B33D]"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold mb-4 text-[#F2B33D]">Attendee Details</h3>

            <div className="space-y-3 text-gray-700">
              <p className="flex items-center">
                <User className="w-5 h-5 mr-2 text-[#F2B33D]" />
                {selectedUser.customerName}
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#F2B33D]" />
                {selectedUser.email}
              </p>
              <p className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-[#F2B33D]" />
                Attendee Count: {selectedUser.attendee_count}
              </p>
              <p className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-[#F2B33D]" />
                Paid: ₹ {selectedUser.amount_paid}
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#F2B33D]" />
                {selectedUser.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttendeeList;
