import React, { useState } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import header from "../../Sources/header.png";

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(null);

  const handleWhyUnity = () => {
    navigate('/Home/WhyUnity');
  };

  const handleDropdownHover = (eventKey) => {
    setShowDropdown(eventKey);
  };

  const handleDropdownLeave = () => {
    setShowDropdown(null);
  };

  return (
    <div className="header-main-container">
      <div className="headerContent">
        <Navbar
          expand="lg"
          style={{
            background: "linear-gradient(to right, #003300 18%, #000099 100%)",
            color: "white !important",
            fontFamily: "Garamond sans-serif",
            fontSize: "15px",
            boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          }}
          className="fixed-top"
        >
          <Container>
            <Navbar.Brand
              style={{ color: "white" }}
              className="hover-glittery-effect"
              href="#home"
            >
              Logo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link style={{ color: "white" }} href="/Home">
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
                  <NavDropdown.Item className="nav-dropdown-item" href="/WhyUnity">
                    Why Unity
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="nav-dropdown-divider" />
                  <NavDropdown.Item className="nav-dropdown-item" href="/OurHistory">
                    Our History
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="nav-dropdown-divider" />
                  <NavDropdown.Item className="nav-dropdown-item" href="#action/3.3">
                    Our Customers
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link style={{ color: "white" }} href="/Solutions">
                  Solutions
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/Products">
                  Products
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/Projects">
                  Projects
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/Press">
                  Press & Media
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/ContactUs">
                  Contact Us
                </Nav.Link>
              </Nav>
              <NavDropdown
                style={{ color: "black" }} 
                title="Profile"
                onMouseEnter={() => handleDropdownHover('Profile')}
                onMouseLeave={handleDropdownLeave}
                show={showDropdown === 'Profile'}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="nav-dropdown-item" href="/Login">
                  Admin
                </NavDropdown.Item>
                <NavDropdown.Divider className="nav-dropdown-divider" />
                <NavDropdown.Item className="nav-dropdown-item" href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider className="nav-dropdown-divider" />
                <NavDropdown.Item className="nav-dropdown-item" href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider className="nav-dropdown-divider" />
                <NavDropdown.Item className="nav-dropdown-item" href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
