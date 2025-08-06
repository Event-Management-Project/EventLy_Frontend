import axios from "axios";
import { config } from "./Config";

export const getCategories = async () => {
  try {
    // http://localhost:9090/category

    const response = await axios.get(`${config.eventServiceUrl}/category`)
    return response.data
  } catch (error) {
    console.error(
      "Categories fetch failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const eventDetails = async (eventId) => {
  try {
    // event/eventDetail
    const response = await axios.get(`${config.eventServiceUrl}/event/eventDetail/${eventId}`);
    return response.data;
  } catch (error) {
    console.error("event details fetch failed:", error.response?.data || error.message);
    throw error;
  }
};


export const getUpcomingEvents = async () => {
  try {
    const response = await axios.get(`${config.eventServiceUrl}/event/upcomingEvent`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Failed to fetch upcoming events:", error);
    return [];
  }
};


export const fetchOrganiserEvents = async (orgId) => {
  try {
    const response = await axios.get(`${config.eventServiceUrl}/event/organiserEvent/${orgId}`)
    return response.data
  }
  catch (error) {
    console.log("Failed to fetch organiser events")
    throw error;
  }
}

export const fetchEventAttendee = async (orgId) => {
  try {
    // event/eventAttendee/21
    const response = await axios.get(`${config.eventServiceUrl}/event/eventAttendee/${orgId}`)
    return response.data;

  }
  catch (error) {
    console.log("Failed to fetch Event attendees")
    throw error;
  }
}

export const getEventInfo = async (eventId)=>{
  try{
    const response= await axios.get(`${config.eventServiceUrl}/event/byEventId/${eventId}`)
    console.log(response)
    return response.data
  }
  catch(error){
    console.log("error while fetching event details")
    throw error
  }
}