import React, { useState } from 'react';
import './ContactUsForm.css';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Header/Footer';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    console.log("e.target",e.target)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      // const newErrors = {};

      //       if (!loginData?.email) {
      //           newErrors.emailError = "Please Enter Your email";
      //       }
      //       if (!loginData?.password) {
      //           newErrors.passwordError = "Please Enter Your password";
      //       }

      //       if (newErrors.emailError || newErrors.passwordError) {
      //           setErrors(newErrors);
      //       } else {
      //           setErrors({
      //               emailError: "",
      //               passwordError: "",
      //           });
      //         }

    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="contact-container">
        <div style={{ width: "30px", height: "70vh" }} className="contact-form">
          <h2 className="contact-title">Contact Us</h2>
          <form className="form-body" onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Please enter your name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Please enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-input">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please enter your message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button class="contactButton"> Contact Us
              <div class="iconButton">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
              </div>
            </button>
          </form>
          {isSubmitted && <p className="submission-message">Form submitted successfully!</p>}
        </div>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <h3>Address</h3>
          <span>4, Paradise Apartment, </span>
          <span>Serene meadows,</span>
          <span>Gangapur Road,</span>
          <span>Nashik,Maharashtra India-422012</span>
          <h3>Phone</h3>
          <p> +91 9601296115
            +91 8459298147</p>
          <h3>Email</h3>
          <p>
            unity.switchgear@gmail.com
            jagdish.nirgude@unityswitchgear.com</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsForm;
