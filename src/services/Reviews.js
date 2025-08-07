import axios from "axios";
import { config } from "./Config";

export const addReviews = async (data) => {
  const response = await axios.post(`${config.nodeService}/reviews`, data);
  console.log(response.data);
  return response.data;
};

export const fetchReviewsByCustomer = async (customerId) => {
  const response = await axios.post(`${config.nodeService}/reviews/customer`, { customerId });
  return response.data;
};

// Fetch reviews by eventId — changed to POST with body
export const fetchReviewsByEvent = async (eventId) => {
  const response = await axios.post(`${config.nodeService}/reviews/event`, { eventId });
  return response.data;
};

// NEW: Check if review already exists by customerId & eventId
export const checkReviewExists = async (customerId, eventId) => {
  const response = await axios.post(`${config.nodeService}/reviews/check`, { customerId, eventId });
  return response.data; // { exists: true/false, review?: {...} }
};