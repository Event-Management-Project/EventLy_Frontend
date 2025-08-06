import axios from "axios"
import { config } from "./Config"

export const registerOrganiser = async (OrganiserData) => {
    try {
        const response = await axios.post(
            `${config.userServiceUrl}/organiser/register`,
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
            `${config.userServiceUrl}/organiser/login`,
            loginData
        );
        return response.data;
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        throw error;
    }
};

export const updateOrganiserProfile = async (id, profile) => {
    try {
        const response = await axios.put(`${config.userServiceUrl}/organiser/update/${id}`, profile)
        return response.data
    }
    catch (error) {
        console.error("Update Profile failed:", error.response?.data || error.message);
        throw error;
    }
}

export const changeOrganiserPassword = async (id, currentPassword, newPassword, confirmPassword) => {
  try {
    const response = await axios.put(
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
