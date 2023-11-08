
import React, { useEffect } from 'react';
import "./MainProductPage.css";
import Carousel from 'react-bootstrap/Carousel';
import sampleImage from "../Sources/Daily-News-Wrap-Up-Power-Ministry-Amends-License-Rules-to-Distribute-Electricity.png"
import Container from 'react-bootstrap/Container';
import { Image, Row, Col, Button } from 'react-bootstrap';
import OurServices from '../../Main/OurServices/OurServices';
import OurSolutions from '../../Main/OurSolutions/OurSolutions';
import OurProducts from '../../Main/OurProducts/OurProducts';
import OurNews from '../../Main/OurNews/OurNews';
import OurProjects from '../../Main/OurProjects/OurProjects';
import Slider from '../Carousol/Slider';
import { useNavigate } from 'react-router';

const MainProductPage = () => {
  const navigate = useNavigate()

  const handleReadMore = () => {
    navigate("/WhyUnity")
  }

  // useEffect(() => {
  //   sessionStorage.clear();
  // }, [])

  var roleOfGuest = sessionStorage.getItem("Role");
  console.log("roleOfGuest", roleOfGuest)

  return (
    <div className="page-content">
      <Slider />
      <div className="HomepageWhoWeAre">
        <Container>
          <Row>
            <Col data-aos="fade-right" data-aos-duration="1900"
              xs={12} md={6}>
              <h2 style={{ fontFamily: "Garamond, serif", fontWeight: "600" }}>Who we are</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt illo in delectus exercitationem dignissimos dolorum debitis numquam vero ut consequatur. Modi impedit error sint pariatur voluptatem enim laudantium nesciunt maiores deleniti fuga mollitia commodi officiis consequatur aliquid repudiandae harum, unde illum aut. Explicabo tempore fugiat corrupti ex eligendi maxime obcaecati! 
             </p>
              <Button onClick={handleReadMore} style={{    background: "linear-gradient(#243b55, #141e30)" , color:"white"}}className='AllBTN'>Read More</Button>
            </Col>
            <Col data-aos="fade-left" data-aos-duration="1900"
              xs={12} md={6}>
              <Image style={{ boxShadow: " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }} src={sampleImage} thumbnail />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="component-container">
        <OurServices />
        <OurSolutions />
        <OurProjects />
        <OurProducts />
        <OurNews />
      </Container>
    </div>
  );
}

export default MainProductPage;
