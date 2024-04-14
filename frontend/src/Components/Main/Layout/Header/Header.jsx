import React, { useState } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import header from "../../Sources/header.png";
import { useContext } from 'react';
import { contextData } from '../../../../Context/UnityContext';

const Header = () => {
  const { role } = useContext(contextData);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(null);

  const handleLogOut = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location = "/LandingPage";
    localStorage.setItem('logoutFlag', 'true');
    console.log("logout successfully");
  };

  const handleDropdownHover = (eventKey) => {
    setShowDropdown(eventKey);
  };

  const handleDropdownLeave = () => {
    setShowDropdown(null);
  };

  var roleOfGuest = sessionStorage.getItem("Role");

  return (
    <div className="header-main-container">
      <div className="headerContent">
        <Navbar
          expand="lg"
          style={{
            background: "#25D366",
            color: "white",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          }}
          className="fixed-top"
        >
          <Container>
            <Navbar.Brand
              style={{ color: "white" }}
              className="hover-glittery-effect"
              onClick={() => navigate("/Home")}
            >
              Logo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link style={{ color: "white" }} onClick={() => navigate("/Home")}>
                  Home
                </Nav.Link>
                <NavDropdown
                  style={{ color: "black" }}
                  title="About Us"
                  id="basic-nav-dropdown"
                  onMouseEnter={() => handleDropdownHover('about')}
                  onMouseLeave={handleDropdownLeave}
                  show={showDropdown === 'about'}
                >
                  <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/WhyUnity")}>
                    Why Unity
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="nav-dropdown-divider" />
                  <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/OurHistory")}>
                    Our History
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="nav-dropdown-divider" />
                  <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/OurCustomers")}>
                    Our Customers
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link style={{ color: "white" }} onClick={() => navigate("/Solutions")}>
                  Solutions
                </Nav.Link>
                <NavDropdown
                  style={{ color: "black" }}
                  title="Categories" // Changed from "Products" to "Categories"
                  id="basic-nav-dropdown"
                  onMouseEnter={() => handleDropdownHover('categories')}
                  onMouseLeave={handleDropdownLeave}
                  show={showDropdown === 'categories'}
                >
                  <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/Category1")}>
                    Wires
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="nav-dropdown-divider" />
                  <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/Category2")}>
                    Cables
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="nav-dropdown-divider" />
                  <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/Category2")}>
                    SwitchGear
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="nav-dropdown-divider" />
                  <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/Category2")}>
                    Gis switchgear
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="nav-dropdown-divider" />
                  <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/Category2")}>
                    Cable Rack
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="nav-dropdown-divider" />
                  <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/Category2")}>
                    Motor Starter
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="nav-dropdown-divider" />
                  <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/Category2")}>
                    Breaker
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="nav-dropdown-divider" />
                </NavDropdown>
                <Nav.Link style={{ color: "white" }} onClick={() => navigate("/Projects")}>
                  Projects
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} onClick={() => navigate("/Press")} >
                  Press & Media
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} onClick={() => navigate("/ContactUs")}>
                  Contact Us
                </Nav.Link>
              </Nav>
              <button className='LoginAdminButton' onClick={() => navigate("/Login")}>Login</button>
              {
                role === "ADMIN" || roleOfGuest === "ADMIN" ?
                  <NavDropdown
                    style={{ color: "black" }}
                    title="Profile"
                    onMouseEnter={() => handleDropdownHover('Profile')}
                    onMouseLeave={handleDropdownLeave}
                    show={showDropdown === 'Profile'}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/Admin")}>
                      Admin
                    </NavDropdown.Item>
                    <NavDropdown.Divider className="nav-dropdown-divider" />
                    <NavDropdown.Item className="nav-dropdown-item" onClick={handleLogOut} >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                  : <div></div>
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div >
  );
};

export default Header;
