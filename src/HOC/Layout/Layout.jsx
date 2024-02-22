import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const noDesignLinks = [
    // "/",
    "/Login",
    "/SignUp",
    "/ForgetPassword",
    "/ResetPassword",
    "/Dashboard",
  ];
  if (noDesignLinks.includes(location.pathname)) {
    return <>{children}</>;
  }

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
