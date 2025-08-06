import axios from "axios"
import { config } from "./Config"


export const createBooking = async (customerId, eventId, totalAttendee) => {
  try {
    const response = await axios.post(
      `${config.transactionServiceUrl}/bookings/${customerId}/${eventId}`,
      {
        total_attendee: totalAttendee,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to create booking:", error);
    throw error;
  }
};

export const fetchBookingHistory= async (cstId)=>{
    try{
        const response=await axios.get(`${config.transactionServiceUrl}/bookings/bookingHistory/${cstId}`)
        return response.data
    }
    catch(error){
        console.log("error in fecthing booking history", error)
        throw error
    }
} 