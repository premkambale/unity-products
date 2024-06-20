import React from 'react';
import './OurProjects.css';
import ProjectImg from "../Sources/switchgear.jpg"
import { GETExcept } from '../../../Constants/FetchMethods';
import { Url } from '../../../Constants/ApiUrlConstant';
import ourproject4 from "../Sources/ourproject4.jpg";
import solar from "../Sources/solar.jpg"



const projectData = [
  {
    "_id": "1",
    "project_image": solar,
    "project_name": "Dynamic Sun Energy",
    "project_description": "Dynamic Sun Energy Pabna Solar PV Park, a 100MW project in Rajshahi, Bangladesh, is developed in partnership with Unity Switchgear and IMEP Solution. Slated for construction in 2025 and commercial operation in 2026, this project exemplifies our commitment to renewable energy and sustainable development. Additionally, both companies collaborated on the operational 30MW solar power project in Pabna, showcasing our capability to deliver large-scale solar solutions efficiently and effectively."
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
      <h2 style={{ textAlign: "center", fontFamily: "Garamond, serif", fontSize: "2rem", fontWeight: "600", padding: "10px" }}>Our Projects</h2>

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
