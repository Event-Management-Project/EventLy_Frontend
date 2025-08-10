import axiosInstance from "./AxiosInstance.js";

import { config } from "./Config.js"


export const createBooking = async (customerId, eventId, totalAttendee) => {
  try {
    const response = await axiosInstance.post(
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
        const response=await axiosInstance.get(`${config.transactionServiceUrl}/bookings/bookingHistory/${cstId}`)
        return response.data
    }
    catch(error){
        console.log("error in fecthing booking history", error)
        throw error
    }
} 