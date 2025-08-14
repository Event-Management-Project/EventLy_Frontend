import axiosInstance from "./AxiosInstance.js";
import axios from "axios";
import { config } from "./Config.js"

export const registerCustomer = async (customerData) => {
  try {
    const response = await axios.post(
      `${config.userServiceUrl}/users/register/customer`,
      customerData
    );

    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    throw error;
  }
};

export const loginCustomer = async (loginData) => {
  try {
    const response = await axios.post(
      `${config.userServiceUrl}/users/login/customer`,
      loginData
    );
      if (response.data.jwtToken) {
      localStorage.setItem("token", response.data.jwtToken);
    }

    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

export const updateCustomerProfile = async (id, profile) => {
  try {
    const response = await axiosInstance.put(`${config.userServiceUrl}/customer/update/${id}`, profile)
    return response.data
  }
  catch (error) {
    console.error("Update Profile failed:", error.response?.data || error.message);
    throw error;
  }
}

export const changeCustomerPassword = async (cstId, currentPassword, newPassword, confirmPassword) => {
  try {
    const response = await axiosInstance.put(
      `${config.userServiceUrl}/customer/changePassword/${cstId}`,
      {
        currentPassword,
        newPassword,
        confirmPassword,
      }
    );
    return response.data;
  } catch (error) {
    console.log("Change password failed", error.response?.data || error.message);
    throw error;
  }
};

export const countCustomer = async () => {
  try{
    const response = await axiosInstance.get(
      `${config.userServiceUrl}/customer/count-customer`,
    );
    return response.data;
  }
  catch(error){
    console.log("Fetching Customer count failed", error.response?.data || error.message);
    throw error;
  }
}