import axiosInstance from "./AxiosInstance.js";
import { config } from "./Config.js";

export const getCategories = async () => {
  try {
    // http://localhost:9090/category

    const response = await axiosInstance.get(`${config.eventServiceUrl}/category`)
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
    const response = await axiosInstance.get(`${config.eventServiceUrl}/event/eventDetail/${eventId}`);
    return response.data;
  } catch (error) {
    console.error("event details fetch failed:", error.response?.data || error.message);
    throw error;
  }
};


export const getUpcomingEvents = async () => {
  try {
    const response = await axiosInstance.get(`${config.eventServiceUrl}/event/upcomingEvent`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Failed to fetch upcoming events:", error);
    return [];
  }
};


export const fetchOrganiserEvents = async (orgId) => {
  try {
    const response = await axiosInstance.get(`${config.eventServiceUrl}/event/organiserEvent/${orgId}`)
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
    const response = await axiosInstance.get(`${config.eventServiceUrl}/event/eventAttendee/${orgId}`)
    return response.data;

  }
  catch (error) {
    console.log("Failed to fetch Event attendees")
    throw error;
  }
}

export const getEventInfo = async (eventId)=>{
  try{
    const response= await axiosInstance.get(`${config.eventServiceUrl}/event/byEventId/${eventId}`)
    console.log(response)
    return response.data
  }
  catch(error){
    console.log("error while fetching event details")
    throw error
  }
}

export const fetchCustomerReviews = async (orgId) => {
  try {
    const response = await axiosInstance.get(`${config.eventServiceUrl}/event/customerReviews/${orgId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customer reviews:", error);
    throw error;
  }
};


export const createEvent = async (formData, organiserId) => {
  try {
    const response = await axiosInstance.post(
      `${config.eventServiceUrl}/event/addEvent`,
      formData,
      {
        params: {
          organiser_id: organiserId,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Event creation failed:", error.response?.data || error.message);
    throw error;
  }
};

export const updateEvent = async (eventId, formData) => {
  try {
    const response = await axiosInstance.put(
      `${config.eventServiceUrl}/event/editEvent/${eventId}`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update event:", error.response?.data || error.message);
    throw error;
  }
};

export const addCategory = async (categoryName) => {
  try {
    const response = await axiosInstance.post(`${config.eventServiceUrl}/category`, {
      categoryName: categoryName,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to add category"
    );
  }
};

export const deleteEventById = async (id) => {
  try {
    const response = await axiosInstance.put(`${config.eventServiceUrl}/event/deleteEvent/${id}`);
    return response.data;
  } catch (error) {
    console.error("Event deletion failed:", error.response?.data || error.message || error);
    throw error;
  }
};



