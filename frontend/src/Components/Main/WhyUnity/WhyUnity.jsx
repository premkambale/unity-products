import React, { useState } from 'react';
import "./WhyUnity.css";
import Header from '../../Main/Layout/Header/Header';
import Footer from '../Layout/Header/Footer';
import { Container, Breadcrumb, Row, Col, Button, Image } from 'react-bootstrap';
import sampleImage from "../Sources/sampleImage.jpg"
import { useNavigate } from 'react-router';

const WhyUnity = () => {

  const navigate = useNavigate()

  const handleContactUs = () => {
    navigate("/ContactUs")
  }

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Why unity' },
];
  return (
    <>
      <Header />
      <div className='UnityWhyTab'>
                    <Breadcrumb>
                        {breadcrumbItems.map((item, index) => (
                            <Breadcrumb.Item key={index} href={item.link}>{item.label}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
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
              <h2>Who We Are</h2>
              <p>
                We are a leading provider of innovative solutions in [industry]. With a strong commitment to excellence, we have been serving [your location] for [number of years] years. Our mission is to [describe your mission].
              </p>
            </div>

            <div className="business-excellence">
              <h2>Why Choose Us</h2>
              <ul>
                <li>Exceptional Quality</li>
                <li>Experienced Team</li>
                <li>Customer-Centric Approach</li>
                <li>Cutting-Edge Technology</li>
                <li>Proven Track Record</li>
              </ul>
            </div>
          </section>

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
        </div>
      </div>

      <Footer />
    </>
  );
}

export default WhyUnity;


