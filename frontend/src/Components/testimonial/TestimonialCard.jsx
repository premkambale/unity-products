import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ name, title, quote, image }) => {
    return (
        <div className="testimonial-card">
            {/* <button className="arrow left">&lt;</button> */}
            <div className="testimonial-content">
                <img
                    src={image}
                    alt={name}
                    className="profile-image"
                />
                <h3>{name}</h3>
                <p className="occupation">{title}</p>
                <p className="testimonial-text">
                    {quote}
                </p>
                <div className="rating">
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9734;</span>
                </div>
            </div>
            {/* <button className="arrow right">&gt;</button> */}
        </div>
    );
};

export default TestimonialCard;
