import React from 'react';
import './OurSolutions.css';

const OurSolutions = () => {
  const imepServices = [
    "Architectural and Structural Design",
    "Fire Fighting System",
    "Electro-Mechanical System",
    "Plumbing System",
  ];

  const unityServices = [
    "Retrofitting Work",
    "SCADA PLC Configuration",
    "Consultancy and Engineering Services",
    "Manufacturing",
    "Procurement and Trading",
    "Erection, Testing, and Commissioning of Substations and Switchgear",
    "Troubleshooting and Maintenance of LV and MV Switchgear",
    "AMC Contracts",
    "Low Voltage Circuit Breakers and Panels",
    "GIS Switchgear",
    "Outdoor Type Breakers",
    "Railway Breakers",
    "Ring Main Units",
    "Compact Secondary Substation",
  ];

  return (
    <div className="ourSolutionsContainer">
      <div className="headerOfSolutions">
        <h1>Our Solutions</h1>
        <h2>Reliable, efficient delivery</h2>
        <h2>Powered by Technology</h2>
        <p className="solutionDescription">
          Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
        </p>
      </div>

      {/* IMEP Services Section */}
      <div className="containerOfSOLN row1-container">
        <h2 style={{
          fontSize: "2rem",
          fontWeight: "600",
          fontFamily: "Garamond, serif"

        }}>IMEP Services</h2>
        <div className="service-container">
          {imepServices.map((service, index) => (
            <div key={index} className="box">
              <h6>{service}</h6>
            </div>
          ))}
        </div>
      </div>

      {/* Unity Services Section */}
      <div className="containerOfSOLN row1-container">
        <h2 style={{
          fontSize: "2rem",
          fontWeight: "600",
          fontFamily: "Garamond, serif"
        }}>Unity Services</h2>
        <div className="service-container">
          {unityServices.map((service, index) => (
            <div key={index} className="box">
              <h6>{service}</h6>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default OurSolutions;
