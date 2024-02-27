import React from 'react';
import './OurProjects.css';
import ProjectImg from "../Sources/switchgear.jpg"
import { GETExcept } from '../../../Constants/FetchMethods';
import { Url } from '../../../Constants/ApiUrlConstant';



// IMEP												
// Solar project 												
// Vabanipur,Hemayetpur,Pabna.												
// AC & DC Erection, Testing and Commission works. 												
// Project Name: TSL 200 MW (AC) Solar Plant.												
// Project Location: Sundarganj, Gaibandha,Rangpur.												
// Project Name: 2.4 MW Solar (Rooftop)												
// Akij Jute Mills Ltd,Faridpur..												
// Huawei Training session												
// IMEP SOLUTION engineering team received training from Huawei fusion solar digital power for Inverter Installation, Testing & Commissioning.												
// Thanks Huawei

const thumbnailData = [
  {
    id: 1,
    date: 'Feb 20, 2019',
    title: 'Solar project',
    description:
      " Vabanipur, Hemayetpur, Pabna.  AC & DC Erection, Testing and Commission works. Project Name: TSL 200 MW (AC) Solar Plant. Project Location: Sundarganj, Gaibandha,Rangpur. Project Name: 2.4 MW Solar (Rooftop) Akij Jute Mills Ltd,Faridpur.   ",
    imageSrc: 'https://picsum.photos/640/480/?random',
  },
  {
    id: 2,
    date: 'Feb 20, 2019',
    title: 'IMEP SOLUTION',
    description: 'IMEP SOLUTION engineering team received training from Huawei fusion solar digital power for Inverter Installation, Testing & Commissioning. Thanks Huawei',
    imageSrc: 'https://picsum.photos/640/480',
  },
  {
    id: 3,
    date: 'Feb 20, 2019',
    title: 'How can we edit lorem lipsum text for dummy data.',
    description:
      'Lorem lipsum dollar set is the best dummy text for the web world which has the best interaction...',
    imageSrc: 'https://picsum.photos/640/480/?random',
  },
];



const OurProjects = () => {





  const getAllProjects = async () => {

    try {
      const getProjectData = await GETExcept(Url.getAllProjects)
      const getAllProjects = await getProjectData.json();
      console.log("========================aksjdajsopdajoajsdoi================", getAllProjects)
    } catch (error) {
      console.log("err", error)
    }


  }

  React.useEffect(() => {
    getAllProjects()
  }, [])

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
  };

  return (
    <div className="main-container">
      <h2 style={{ textAlign: "center", fontFamily: " Garamond, serif" }}>Our Projects</h2>

      <div className="main-row">
        {thumbnailData.map((item) => (
          <div className="thumb-box" key={item.id}>
            <a className="thumb-link" onClick={handleLinkClick}>
              <img src={ProjectImg} alt={`Image ${item.id}`} />
              <div className="overlay-box">
                <span className="meta">{item.date}</span>
                <span className="main-title">{item.title}</span>
                <span className="description">{item.description}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
