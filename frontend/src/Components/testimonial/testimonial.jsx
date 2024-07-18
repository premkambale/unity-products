import React, { useState } from 'react';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Zahangir Alam Ripon',
      title: 'Managing Director (IMEP Solution)',
      quote: 'Your coffee hits the spot every time. Thank you for the experience of pure, delicious coffee masterfully roasted! I will never purchase any other and I will spread the word. I would like to highly recommend it.',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },

    {
      name: 'Jagdish Nirgude',
      title: 'Managing Director (UNITY Switchgear)',
      quote: 'Your coffee hits the spot every time. Thank you for the experience of pure, delicious coffee masterfully roasted! I will never purchase any other and I will spread the word. I would like to highly recommend it.',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    // Add more testimonials here
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-slider">
      <h2 className="testimonial-title">Testimonial Slider</h2>
      <div className="testimonial-container">
        <div className="testimonial-content">
          <img
            src={testimonials[currentTestimonial].image}
            alt={testimonials[currentTestimonial].name}
            className="testimonial-image"
          />
          <p className="testimonial-quote">
            {testimonials[currentTestimonial].quote}
          </p>
          <div className="testimonial-author">
            <span className="testimonial-name">
              {testimonials[currentTestimonial].name}
            </span>
            <span className="testimonial-title">
              {testimonials[currentTestimonial].title}
            </span>
          </div>
        </div>
        <div className="testimonial-navigation">
          <button onClick={previousTestimonial} className="testimonial-prev">
            <span>{'<'}</span>
          </button>
          <button onClick={nextTestimonial} className="testimonial-next">
            <span>{'>'}</span>
          </button>
        </div>
      </div>
      <div className="testimonial-pagination">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`testimonial-pagination-dot ${
              currentTestimonial === index ? 'active' : ''
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;