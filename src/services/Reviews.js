import axios from "axios";

export const addReviews = async (data) => {
  const response = await axios.post("/reviews", data);
  return response.data;
};

export const fetchReviewsByCustomerAndEvent = async (customerId, eventId) => {
  const response = await axios.get("/reviews/customer", {
    headers: {
      customerid: customerId,
      eventid: eventId,
    },
    params: {
      eventId, 
    },
  });
  return response.data;
};
