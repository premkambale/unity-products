import React from 'react'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Header/Footer'
import { Breadcrumb } from 'react-bootstrap'
import OurProjects from '../OurProjects/OurProjects'
import "./Projects.css"

const Projects = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Our Projects' },
    ];
    return (
        <>
            <Header />
            <div className='UnityWhyTab'>
                    <Breadcrumb>
                        {breadcrumbItems.map((item, index) => (
                            <Breadcrumb.Item key={index} href={item.link}>{item.label}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
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
