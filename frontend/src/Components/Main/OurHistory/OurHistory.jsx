import React from 'react';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Header/Footer';
import { Breadcrumb, Container, Image, Row, Col } from 'react-bootstrap';
import sampleImage from "../Sources/sampleImage.jpg";
import "./OurHistory.css";
import {FcTimeline} from "react-icons/fc"
 
const OurHistory = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Our History' },
    ];

    return (
        <>
            <Header />
            <div className='Ourhistory'>
                <div className='UnityWhyTab'>
                    <Breadcrumb>
                        {breadcrumbItems.map((item, index) => (
                            <Breadcrumb.Item key={index} href={item.link}>{item.label}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <h1 className='headingOfHistory' style={{ textAlign: "center" }}>  Our History</h1>
                </div>

                <div className="HomepageWhoWeAre">
                    <Container>
                        <Row>
                            <Col xs={12} md={6}>
                                <h2>Who we are</h2>
                                <p>
                                    Some text or description about the content goes here.
                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <Image src={sampleImage} thumbnail />
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div>
                    <h1 className="timeline-title">Unity's History</h1>
                    <ul className="timeline-list">
                        <li className="timeline-item" style={{ '--accent-color': '#41516C' }}>
                            <div className="date timeline-date">2002</div>
                            <div className="title timeline-title">Title 1</div>
                            <div className="descr timeline-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!</div>
                        </li>
                        <li className="timeline-item" style={{ '--accent-color': '#FBCA3E' }}>
                            <div className="date timeline-date">2007</div>
                            <div className="title timeline-title">Title 2</div>
                            <div className="descr timeline-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.</div>
                        </li>
                        <li className="timeline-item" style={{ '--accent-color': '#E24A68' }}>
                            <div className="date timeline-date">2012</div>
                            <div className="title timeline-title">Title 3</div>
                            <div className="descr timeline-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.</div>
                        </li>
                        <li className="timeline-item" style={{ '--accent-color': '#1B5F8C' }}>
                            <div className="date timeline-date">2017</div>
                            <div className="title timeline-title">Title 4</div>
                            <div className="descr timeline-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.</div>
                        </li>
                        <li className="timeline-item" style={{ '--accent-color': '#4CADAD' }}>
                            <div className="date timeline-date">2022</div>
                            <div className="title timeline-title">Title 5</div>
                            <div className="descr timeline-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
                        </li>
                    </ul>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default OurHistory;
