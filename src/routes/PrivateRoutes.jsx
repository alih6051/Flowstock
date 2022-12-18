import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { authState } = useContext(AuthContext);

  if (!authState.isAuth) {
    return <Navigate to="/myaccount" />;
  }

  return children;
};

export default PrivateRoutes;
