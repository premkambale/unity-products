import React from 'react'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Header/Footer'
import { Breadcrumb } from 'react-bootstrap'
import OurProjects from '../OurProjects/OurProjects'
import "./Projects.css"
import { useNavigate } from 'react-router-dom'
import { BiHome } from 'react-icons/bi'

const Projects = () => {
    const navigate = useNavigate()
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Our Projects' },
    ];
    return (
        <>
            <Header />
            <div className='UnityWhyTab'>
                <div className="breadCrump">
                    <span onClick={() => navigate("/Home")} className='breadItems'> <BiHome fontSize='13px' /> Home &gt;
                    </span>
                    <span onClick={() => navigate("/OurProjects")} className='breadItems2'>Our Projects</span>
                </div>
                <h1 className='headingOfHistory' style={{ textAlign: "center" }}>  Our Projects</h1>
            </div>
            <div className="TabProject">

                <OurProjects />
            </div>
            <Footer />
        </>
    )
}

export default Projects
