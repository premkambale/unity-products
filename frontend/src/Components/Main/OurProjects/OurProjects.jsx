import React from 'react';
import './OurProjects.css';
import ProjectImg from "../Sources/switchgear.jpg"
import { GETExcept } from '../../../Constants/FetchMethods';
import { Url } from '../../../Constants/ApiUrlConstant';
import ourproject4 from "../Sources/ourproject4.jpg";
import solar from "../Sources/solar.jpg"
import OurProject from "../Sources/OurprojectImage.png"
import projectNew from "../Sources/projectNew.JPEG"


const projectData = [
  {
    "_id": "1",
    "project_image": projectNew,
    "project_name": "JNPT switchgear project",
    "project_description": "JNPT switchgear project: Designed, installed, and commissioned high-efficiency electrical systems for improved port operations."
  },
  {
    "_id": "1",
    "project_image": solar,
    "project_name": "Dynamic Sun Energy",
    "project_description": "Dynamic Sun Energy Pabna Solar PV Park, a 100MW project in Rajshahi, Bangladesh, is developed by Dynamic Sun Energy in collaboration with Unity Switchgear and IMEP Solution. Expected to commence in 2025 and operational by 2026, this project underscores our commitment to sustainable energy solutions."
  },
  {
    "_id": "1",
    "project_image": ourproject4,
    "project_name": "AC & DC Erection",
    "project_description": "AC & DC Erection, Testing and Commission works. Project Name: TSL 200 MW(AC) Solar Plant. Project Location: Sundarganj, Gaibandha, Rangpur."
  }

];



const OurProjects = () => {

  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-container">
      <div className="trending-header">
        <div className="line"></div>
        <h2 className='trendingH2'>Our Projects</h2>
        <div className="line"></div>
      </div>

      <div className="main-row">
        {projectData?.map((item) => (
          <div className="thumb-box" key={item?._id}>
            <a className="thumb-link" onClick={handleLinkClick}>
              {item?.project_image ? (
                <img src={typeof item.project_image === 'string' ? item.project_image : ProjectImg} alt={`Image ${item._id}`} />
              ) : (
                <p>No Image</p>
              )}
              <div className="overlay-box">
                <span className="meta">{item?.create_date}</span>
                <span className="main-title">{item?.project_name}</span>
                <span className="description">{item?.project_description}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
