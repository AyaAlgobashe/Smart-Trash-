import { Navigate, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

const NotAuthenticatedRoutes = (
  <>
    <Route path="*" element={<Navigate to={"/Login"} />} />
    <Route path="/" element={<Home />} />
    <Route path="/Smart-Trash-Front-End" element={<Home />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Login" element={<Login />} />
  </>
);
export default NotAuthenticatedRoutes;
