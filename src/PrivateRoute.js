import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { useAuthContext } from "./context/AuthContext";
import { AuthContext } from "./AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  if (localStorage.getItem("authToken")) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }

  //   return user == undefined ? <Navigate to="/login"></Navigate> : children;
};

export default PrivateRoute;
