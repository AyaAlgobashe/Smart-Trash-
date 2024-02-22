import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import UserDetails from "../pages/UserDetails/UserDetails";
import Trashes from "../pages/Trashes/Trashes";
import SharedRoutes from "./SharedRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";

const AuthenticatedRoutes = (
  <>
    {SharedRoutes}
    <Route path="/" element={<Home />} />
    <Route path="/Smart-Trash-Front-End" element={<Home />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/UserDetails" element={<UserDetails />} />
    <Route path="/Trashes" element={<Trashes />} />
  </>
);
export default AuthenticatedRoutes;
