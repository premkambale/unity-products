import React from 'react';
import './OurSolutions.css';


const OurSolutions = () => {


  return (
    <>
      <div className="headerOfSolutions">
        <h1>Our Solutions</h1>
        <h1>Reliable, efficient delivery</h1>
        <h1>Powered by Technology</h1>
        <p style={{fontFamily:"'Font Awesome 5 Free'"}}>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </div>
      <div className="containerOfSOLN">
        <div data-aos="fade-left" data-aos-duration="1900" className="box cyan">
          <h2>Supervisor</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
        </div>

        <div data-aos="fade-right" data-aos-duration="1900" className="box red">
          <h2>Team Builder</h2>
          <p>Scans our talent network to create the optimal team for your project</p>
          <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
        </div>

        <div data-aos="fade-left" data-aos-duration="1900" className="box blue">
          <h2>Calculator</h2>
          <p>Uses data from past projects to provide better delivery estimates</p>
          <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
        </div>

        <div data-aos="fade-right" data-aos-duration="1900" className="box orange">
          <h2>Karma</h2>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
