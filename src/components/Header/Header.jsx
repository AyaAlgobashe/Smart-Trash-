import React, { useEffect } from "react";
import logo from "../../assets/images/logo-1.png";
import FooterLogo from "../../assets/images/footer-logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthenticatedLinks, NotAuthenticatedLinks } from "../../data/data";
import { AuthState, clearUserCredentials } from "../../slices/authSlice.slice";
import RoleAuthorization from "../../utils/RoleAuthorization";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token } = useAppSelector(AuthState);
  const handleSignOut = () => {
    localStorage.clear();
    dispatch(clearUserCredentials());
    navigate("Login");
  };
  return (
    <header className="main-header__inner Sticky-nav">
      <Navbar expand={"md"}>
        <Container fluid>
          <Navbar.Brand className="main-header__logo ">
            <img src={logo} alt={"Logo"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end"
            className="background-watson"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${"md"}`}
                className=""
              >
                <img src={FooterLogo} alt={"Logo"} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="mobile-nav__content ">
              <Nav className="justify-content-end flex-grow-1 gap-4">
                {token
                  ? AuthenticatedLinks.map((item) => (
                      <NavLink
                        key={item.id}
                        to={item.href}
                        className={item.classes}
                      >
                        {item.name}
                      </NavLink>
                    ))
                  : NotAuthenticatedLinks.map((item) => (
                      <NavLink
                        key={item.id}
                        to={item.href}
                        className={item.classes}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                <RoleAuthorization admin>
                  <NavLink
                    to={"Dashboard"}
                    className={"nav-link border-buttom ancor"}
                  >
                    Dashboard
                  </NavLink>
                </RoleAuthorization>
                {token ? (
                  <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-variants-Success`}
                    variant={"Profile".toLowerCase()}
                    title={"Profile"}
                    className="btn-200"
                  >
                    <Dropdown.Item onClick={() => navigate("userDetails")}>
                      Profile
                      <i className="m-lg-2 bi bi-person-circle"></i>
                    </Dropdown.Item>
                    <RoleAuthorization admin>
                      <Dropdown.Item onClick={() => navigate("Dashboard")}>
                        Dashboard
                        <i className="m-lg-2 bi bi-menu-button-wide-fill"></i>{" "}
                      </Dropdown.Item>
                    </RoleAuthorization>
                    <Dropdown.Item onClick={() => navigate("Trashes")}>
                      Maps
                      <i className="m-lg-2 bi bi-map"></i>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleSignOut} eventKey="4">
                      Logout
                      <i className="m-lg-2 bi bi-box-arrow-right"></i>
                    </Dropdown.Item>
                  </DropdownButton>
                ) : (
                  ""
                )}
              </Nav>
              {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                <img src={logo} alt={"Logo"} />
              </Offcanvas.Title> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
