import React, { useEffect, useState } from 'react';
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
import unityLogo from "../../Sources/UnityKaLogo.jpg"
import { GET, GETExcept } from '../../../../Constants/FetchMethods';
import { Url } from '../../../../Constants/ApiUrlConstant';
import CategoryProducts from './CategoryProducts';

const Header = () => {
  const { role, setCatProducts, setIsLoding } = useContext(contextData);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(null);
  const [categories, setCategories] = useState([])

  const handleLogOut = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location = "/Home";
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

  useEffect(() => {
    getAllProducts()
  }, [])


  const navigateToCategory = async (category) => {
    setIsLoding(true)
    try {
      const getProductByCategory = await GET(Url?.getProductByCategory.replace(":product_category", category))
      navigate("/Categories")
      setCatProducts(getProductByCategory)
      setIsLoding(false)
    } catch (error) {
      setIsLoding(false)
      console.log('error', error)
    }
  };


  const getAllProducts = async () => {
    try {
      const productDataResponse = await GETExcept(Url.getAllProducts);
      const getAllProduct = await productDataResponse.json();
      const categories = getAllProduct?.data?.map(product => product.product_category);
      const uniqueCategories = [...new Set(categories)];
      setCategories(uniqueCategories)
      console.log('Unique categories:', uniqueCategories);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };


  return (
    <>
      <div className="header-main-container">
        <div className="headerContent">
          <Navbar
            expand="lg"
            style={{
              background: "#3dcd58",
              color: "white",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }}
            className="fixed-top"
          >
            <Container>
              <Navbar.Brand
                style={{ color: "white", display: "flex", alignItems: "center" }}
                className="hover-glittery-effect"
                onClick={() => navigate("/Home")}
              >
                <img
                  className='unityLogo'
                  src={unityLogo}
                  alt="Logo"
                />
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
                    {/* <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/WhyUnity")}>
                    Why Unity
                  </NavDropdown.Item> */}
                    {/* <NavDropdown.Divider className="nav-dropdown-divider" /> */}
                    {/* <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/OurHistory")}>
                      Our History
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Divider className="nav-dropdown-divider" /> */}
                    <NavDropdown.Item className="nav-dropdown-item" onClick={() => navigate("/OurCustomers")}>
                      Our Customers
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* <Nav.Link style={{ color: "white" }} onClick={() => navigate("/Solutions")}>
                  Solutions
                </Nav.Link> */}
                  <NavDropdown
                    style={{ color: "black" }}
                    title="Categories"
                    id="basic-nav-dropdown"
                    show={showDropdown === 'categories'}
                    onMouseEnter={() => handleDropdownHover('categories')}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {categories.map((category, index) => (
                      <React.Fragment key={index}>
                        <NavDropdown.Item
                          className="nav-dropdown-item"
                          onClick={() => navigateToCategory(category)}
                        >
                          {category}
                        </NavDropdown.Item>
                        <NavDropdown.Divider className="nav-dropdown-divider" />
                      </React.Fragment>
                    ))}
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
                {roleOfGuest !== "ADMIN" ?
                  <button className='LoginAdminButton' onClick={() => navigate("/Login")}>Login</button> : ""
                }
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
    </>
  );
};

export default Header;
