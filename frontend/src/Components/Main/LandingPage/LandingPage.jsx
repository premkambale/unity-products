import React from 'react'
import "./LandingPage.css"
import { useNavigate } from 'react-router'

const LandingPage = () => {

    const navigate = useNavigate()
    const handleHeroPage = () => {
        navigate("/Home ")
    }

    return (
        <div className='hero'>

            <div className="hero-one"></div>
            <div className="hero-two">
            </div>

            <h1 className="header-title"><span className="header-primary">Unity</span><span className="header-sub">The World of Electrical instruments</span><button onClick={handleHeroPage} className='getStartedBTN'>get started</button></h1>
        </div>

    )
}

export default LandingPage