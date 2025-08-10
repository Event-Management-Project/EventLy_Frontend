import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const customer = useSelector((state) => state.customer.customer);
  const organiser = useSelector((state) => state.organiser.organiser);

  const sessionCustomer =
    customer || JSON.parse(sessionStorage.getItem("customer"));
  const sessionOrganiser =
    organiser || JSON.parse(sessionStorage.getItem("organiser"));

  const user = sessionCustomer || sessionOrganiser;

  if (!user) {
    return <Navigate to="/login" />;
  }

  const userRole = user.role;

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
