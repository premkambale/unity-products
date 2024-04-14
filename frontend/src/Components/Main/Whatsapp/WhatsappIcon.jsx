import React from 'react'
import "./WhatsappIcon.css"
import whatsappIcon from "../Sources/whataspp icon.png"

const WhatsappIcon = () => {
    const phoneNumber = "9601296115";

    const handleClick = () => {
        window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    };
    return (
        <div>
            <a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" onClick={handleClick} className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp Icon" className="whatsapp-icon-img" />
            </a>
        </div>
    )
}

export default WhatsappIcon
