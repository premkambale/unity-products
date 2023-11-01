import React from 'react';
import './Footer.css';
import sampleImage from '../../Sources/sampleImage.jpg';

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 mb-3 mb-md-0">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>1010 Avenue, SW 54321, Chandigarh</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mb-3 mb-md-0">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>9876543210</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12 mb-4 mb-md-0">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a>
                      <img
                        src={sampleImage}
                        className="img-fluid"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p className="paraOfFooter">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut consectetur adipisicing
                      elit, Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-4 mb-md-0">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <a>Home</a>
                    </li>
                    <li>
                      <a>About us</a>
                    </li>
                    <li>
                      <a>Our Services</a>
                    </li>
                    <li>
                      <a>Contact us</a>
                    </li>
                    <li>
                      <a>Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Follow Us</h3>
                  </div>
                  <div className="footer-social-icon">
                    <a>
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a>
                      <i className="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a>
                      <i className="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 text-center text-md-left mb-4 mb-md-0">
                <div className="copyright-text">
                  <p className="paraOfFooter">
                    Copyright &copy; 2018, All Rights Reserved Hrishi
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 d-none d-md-block text-center text-md-right">
                <div className="footer-menu">
                  <ul className="list-unstyled">
                    <li>
                      <a>Home</a>
                    </li>
                    <li>
                      <a>Terms</a>
                    </li>
                    <li>
                      <a>Privacy</a>
                    </li>
                    <li>
                      <a>Policy</a>
                    </li>
                    <li>
                      <a>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
