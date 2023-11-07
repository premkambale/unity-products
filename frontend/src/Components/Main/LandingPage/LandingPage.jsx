import React, { useState } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router';

const LandingPage = () => {
    const [blurRemoved, setBlurRemoved] = useState(false);



    const [guest, setGuest] = useState("")
    const navigate = useNavigate();

    const handleHeroPage = () => {

        sessionStorage.setItem("Role", "guest");
        sessionStorage.removeItem("token")
        setBlurRemoved(true);

        navigate("/Home");
    }


    return (
        <div className='hero'>
            <div className="hero-one"></div>
            <div className="hero-two"></div>

            <div className="right-corner">
                <button onClick={() => navigate("/Login")} className="adminLoginButton">
                    Login as Admin
                </button>
            </div>

            <h1 className="header-title">
                <span className="header-primary">Unity</span>
                <span className="header-sub">The World of Electrical Instruments</span>
                <button onClick={handleHeroPage} className='getStartedBTN'>
                    Get Started
                </button>
            </h1>

        </div>
    );
}

export default LandingPage;

