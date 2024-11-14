import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.warning("Please log in to access this page.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    return <DelayedRedirect to="/login" />;
  }

  return children;
};

const DelayedRedirect = ({ to }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = to;
    }, 3000);

    return () => clearTimeout(timeout);
  }, [to]);

  return null;
};

export default ProtectedRoute;
