import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const ProtectedRoute = (props) => {
  const { isLoggedIn } = useUserContext();
console.log(isLoggedIn)
  return isLoggedIn === true ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
