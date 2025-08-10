import axiosInstance from "./AxiosInstance.js";
import {config} from "./Config.js"

export const addReviews = async (data) => {
  const response = await axiosInstance.post(`${config.nodeService}/reviews`, data);
  console.log(response.data);
  return response.data;
};

export const fetchReviewsByCustomer = async (customerId) => {
  const response = await axiosInstance.post(`${config.nodeService}/reviews/customer`, { customerId });
  return response.data;
};

export const fetchReviewsByEvent = async (eventId) => {
  const response = await axiosInstance.post(`${config.nodeService}/reviews/event`, { eventId });
  return response.data;
};

export const checkReviewExists = async (customerId, eventId) => {
  const response = await axiosInstance.post(`${config.nodeService}/reviews/check`, { customerId, eventId });
  return response.data; 
};