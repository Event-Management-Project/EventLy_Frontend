import axiosInstance from "./AxiosInstance.js";
import axios from "axios";
import { config } from "./Config.js"

export const registerOrganiser = async (OrganiserData) => {
    try {
        const response = await axios.post(
            `${config.userServiceUrl}/users/register/organiser`,
            OrganiserData
        );

        return response.data;
    } catch (error) {
        console.error("Registration failed:", error.response?.data || error.message);
        throw error;
    }
};

export const loginOrganiser = async (loginData) => {
    try {
        //http://localhost:9091/organiser/login

        const response = await axios.post(
            `${config.userServiceUrl}/users/login/organiser`,
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

export const updateOrganiserProfile = async (id, profile) => {
    try {
        const response = await axiosInstance.put(`${config.userServiceUrl}/organiser/update/${id}`, profile)
        return response.data
    }
    catch (error) {
        console.error("Update Profile failed:", error.response?.data || error.message);
        throw error;
    }
}

export const changeOrganiserPassword = async (id, currentPassword, newPassword, confirmPassword) => {
  try {
    const response = await axiosInstance.put(
      `${config.userServiceUrl}/organiser/changePassword/${id}`,
      {
        currentPassword,
        newPassword,
        confirmPassword,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Change password failed", error.response?.data || error.message);
    throw error;
  }
};
