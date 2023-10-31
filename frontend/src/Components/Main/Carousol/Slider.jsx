import React, { useState } from 'react'
import "./Slider.css"

import Carimage from "../Sources/pexels-md-molla-923953.jpg"

const Slider = () => {
  const images = [
    Carimage,
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
  ];
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
              <img src={Carimage} alt={`Image ${index}`} />
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
  )
}

export default Slider