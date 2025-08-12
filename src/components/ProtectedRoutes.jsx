import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const customer = useSelector((state) => state.customer.customer);
  const organiser = useSelector((state) => state.organiser.organiser);

  const sessionCustomer = customer || JSON.parse(sessionStorage.getItem("customer"));
  const sessionOrganiser = organiser || JSON.parse(sessionStorage.getItem("organiser"));

  let user = null;

  if (allowedRoles.includes("ROLE_CUSTOMER") && sessionCustomer) {
    user = sessionCustomer;
  } else if (allowedRoles.includes("ROLE_ORGANISER") && sessionOrganiser) {
    user = sessionOrganiser;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }


if (!allowedRoles.includes(user.role?.toUpperCase())) {
  return <Navigate to="/" />;
}

  return <Outlet />;
};

export default ProtectedRoute;