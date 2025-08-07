import axios from "axios";
import { config } from "./Config";

export const getCustomerNotifications = async (customerId) => {
  const response = await axios.get(
    `${config.nodeService}/notification/getNotificationCustomer`,
    {
      headers: { customerid: customerId },
    }
  );
  return response.data;
};

export const getOrganiserNotifications = async (organiserId) => {
  const response = await axios.get(
    `${config.nodeService}/notification/getNotificationOrganiser`,
    {
      headers: { organiserid: organiserId },
    }
  );
  return response.data;
};

export const markNotificationAsRead = async (notificationId) => {
  const response = await axios.put(`${config.nodeService}/notification/markAsRead`, {
    id: notificationId,
  });
  return response.data;
};
