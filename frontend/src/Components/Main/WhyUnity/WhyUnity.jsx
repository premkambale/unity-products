import React, { useState } from 'react';
import "./WhyUnity.css";
import Header from '../../Main/Layout/Header/Header';
import Footer from '../Layout/Header/Footer';
import { Container, Breadcrumb, Row, Col, Button, Image } from 'react-bootstrap';
import sampleImage from "../Sources/sampleImage.jpg"
import { BiHome } from "react-icons/bi"
import { useNavigate } from 'react-router';

const WhyUnity = () => {

  const navigate = useNavigate()

  const handleContactUs = () => {
    navigate("/ContactUs")
  }

  return (
    <>
      <Header />
      <div className='UnityWhyTab'>
        <div className="breadCrump">
          <span onClick={() => navigate("/Home")} className='breadItems'> <BiHome fontSize='13px' /> Home &gt;
          </span>
          <span onClick={() => navigate("/WhyUnity")} className='breadItems2'> Why Unity</span>
        </div>
        <h1 className='headingOfHistory' style={{ textAlign: "center" }}>Why unity  </h1>
      </div>
      <div className="mainContentWhyUnity">
        <div className="business-page">
          <header className="page-header">
            <h1>About Our Business</h1>
            <p>Your Trusted Partner for Excellence</p>
          </header>

          <section className="business-info">
            <div className="business-description">
              <h2>IMEP SOLUTION</h2>
              <p>
                IMEP SOLUTION is a fast growing 1st class contractor and Consultancy and Supply Company, formed with a team of highly dedicated, reputable, qualified and experienced professionals Architectural,Construcion,Electrical, Mechanical, Plumbing, Fire, HVAC design and Contracting, Supply & installation firm.</p>

              <p>The Company specializes in all aspects of Architectural, Electrical, Mechanical, Plumbing, Fire, HVAC design and Contracting, Supply & installation of Substation, Low Voltage Equipment, High Voltage Equipment, Solar System, Fire Fighting Equipment, HVAC Equipment, Plumbing Equipment with the capability to take on almost any client requirement, from lighting city centre to design and installation of multi-megawatt power supply systems, we specialize in the most challenging and varied projects in our field.</p>

              <p>We serve as a single source for Design & Consultancy, Budgeting and Material Procurement for Electrical Infrastructure & variety of Electrical solutions. We strive to serve our customers to the utmost level of their satisfaction by providing up-to-date technology solutions to cater for their current and future business requirements. Working closely with our customers to better understand the requirements has been the foundation of forming strong and lasting relationships.</p>

              <p> Our consultancy solutions provide value additions and serve as a key factor to address our customer’s problems and pain points. We strongly believe in leading the innovation curve with our out-of-the-box thinking. This approach along with our keen insight into the changing technologies and trends helps us provide best-fit solutions for your business needs.</p>
            </div>

            <div className="business-excellence">
              <h2>UNITY</h2>
              <p> At Unity Switchgear, we are proud to serve a diverse range of clients across various industries. From small businesses to large corporations, we have a proven track record of delivering high-quality electrical solutions that meet the unique needs of each and every client.</p>
              <p> Our clients trust us to provide them with reliable, safe, and efficient electrical systems, and we take that responsibility very seriously. Our team of experts is dedicated to ensuring that every project is completed on time, within budget, and to the highest standards.</p>
              <p> We have extensive experience working with clients in a variety of sectors, including commercial, industrial, and residential. Our clients appreciate our attention to detail, our commitment to safety, and our ability to deliver innovative solutions that meet their specific needs.</p>
              <p>Whether you are a small business looking for a simple electrical upgrade, or a large corporation looking for a comprehensive electrical solution, Unity Switchgear has the experience and expertise to deliver results you can trust. Contact us today to find out more about how we can help you achieve your goals.</p>
            </div>
          </section >

          <section className="testimonial">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>"[Testimonial text from a satisfied client]"</p>
              </div>
              <div className="testimonial-author">
                <p>- [Client Name]</p>
              </div>
            </div>
          </section>

          <section className="contact-us">
            <h2>Contact Us</h2>
            <p>Ready to experience excellence? Contact us today to learn more about our services and how we can help you achieve your goals.</p>
            <button onClick={handleContactUs} className="contact-button">Contact Us</button>
          </section>
        </div >
      </div >

      <Footer />
    </>
  );
}

export default WhyUnity;


