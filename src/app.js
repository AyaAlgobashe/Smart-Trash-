import React, { useEffect } from "react";
import { Routes, useLocation, useNavigate } from "react-router-dom";
import NotAuthenticatedRoutes from "./routes/NotAuthenticatedRoutes";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import { getDataFromStorage } from "./utils/localStorage.util";
import { useAppSelector } from "./store/hooks";
import { AuthState } from "./slices/authSlice.slice";

const App = () => {
  const { token } = useAppSelector(AuthState);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = `Smart Trash | ${
      location.pathname === "/"
        ? location.pathname.replace("/", "Login")
        : location.pathname.replaceAll("/", "")
    }`;
  }, [location.pathname]);
  useEffect(() => {
    if (token && getDataFromStorage("token")) {
      if (location.pathname === "/") {
        navigate("/Home");
      } else {
        navigate(location.pathname);
      }
    } else {
      // navigate("/Home");
    }
  }, [location.pathname, navigate, token]);
  const routes = token ? AuthenticatedRoutes : NotAuthenticatedRoutes;
  return <Routes>{routes}</Routes>;
};

export default App;
