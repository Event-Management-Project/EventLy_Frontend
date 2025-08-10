// services/AxiosInstance.js
import axios from "axios";

// Create an instance
const axiosInstance = axios.create(); // axiosInstance (which presumably attaches the JWT token in headers)

// Request interceptor to attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
