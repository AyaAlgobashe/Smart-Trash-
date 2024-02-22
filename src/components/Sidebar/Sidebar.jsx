import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { Link } from "react-router-dom";
import {
  AdminPanelSettings,
  Person2Rounded,
} from "@mui/icons-material";

const Sidebar = ({ setTab, tab }) => {
  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <li
            onClick={() => setTab(0)}
            className={`${tab === 0 ? "active-li" : ""}`}
          >
            <AdminPanelSettings className="icon" />
            <span>Admins</span>
          </li>
          <li
            onClick={() => setTab(1)}
            className={`${tab === 1 ? "active-li" : ""}`}
          >
            <PersonOutlineIcon className="icon" />
            <span>Customer</span>
          </li>
          <li
            onClick={() => setTab(2)}
            className={`${tab === 2 ? "active-li" : ""}`}
          >
            <Person2Rounded className="icon" />
            <span>Employees</span>
          </li>
          <li
            onClick={() => setTab(3)}
            className={`${tab === 3 ? "active-li" : ""}`}
          >
            <LocalShippingIcon className="icon" />
            <span>Bins</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
