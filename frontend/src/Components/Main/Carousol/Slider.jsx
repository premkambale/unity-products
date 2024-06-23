// Slider.js

import React, { useState } from 'react';
import './Slider.css';
import slider1 from '../Sources/slider images/Slider1.jpg'
import slider2 from '../Sources/slider images/Slider2.jpg'
import slider3 from '../Sources/slider images/slider3.jpg'


const Slider = () => {
  const images = [slider1, slider2, slider3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="manual-carousel">
      <div className="carousel-container">
        <div
          className="carousel-slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt="" />
              <div className="animated-text">
                <p data-aos="fade-right" data-aos-duration="1900" className="big-text">WELCOME TO UNITY</p>
                <p data-aos="fade-left" data-aos-duration="1900" className="big-text">& IMEP SOLUTIONS</p>
                <p data-aos="fade-up" data-aos-duration="1900" >Electrical services and Maintenance</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="prev-button" onClick={prevSlide}>
        &lt;
      </button>
      <button className="next-button" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
