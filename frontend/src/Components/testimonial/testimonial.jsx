import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import './TestimonialSlider.css';

const testimonials = [
  {
    name: 'Zahangir Alam Ripon',
    title: 'Managing Director (IMEP Solution)',
    quote: 'Your coffee hits the spot every time. Thank you for the experience of pure, delicious coffee masterfully roasted! I will never purchase any other and I will spread the word. I would like to highly recommend it.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jagdish Nirgude',
    title: 'Managing Director (UNITY Switchgear)',
    quote: 'Your coffee hits the spot every time. Thank you for the experience of pure, delicious coffee masterfully roasted! I will never purchase any other and I will spread the word. I would like to highly recommend it.',
    image: 'https://via.placeholder.com/150',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonials-container">
      <button className="arrow left" onClick={prevTestimonial}>&lt;</button>
      <TestimonialCard
        name={testimonials[currentIndex].name}
        title={testimonials[currentIndex].title}
        quote={testimonials[currentIndex].quote}
        image={testimonials[currentIndex].image}
      />
      <button className="arrow right" onClick={nextTestimonial}>&gt;</button>
    </div>
  );
};

export default Testimonials;
