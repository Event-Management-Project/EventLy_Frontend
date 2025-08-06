import axios from "axios"
import { config } from "./Config"

export const registerCustomer = async (customerData) => {
  try {
    const response = await axios.post(
      `${config.userServiceUrl}/customer/register`,
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
      `${config.userServiceUrl}/customer/login`,
      loginData
    );
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

export const updateCustomerProfile = async (id, profile) => {
  try {
    const response = await axios.put(`${config.userServiceUrl}/customer/update/${id}`, profile)
    return response.data
  }
  catch (error) {
    console.error("Update Profile failed:", error.response?.data || error.message);
    throw error;
  }
}

export const changeCustomerPassword = async (id, currentPassword, newPassword, confirmPassword) => {
  try {
    const response = await axios.put(
      `${config.userServiceUrl}/customer/changePassword/${id}`,
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