import React from 'react';
import "./OurServices.css"


const OurServices = () => {
  const data = [
    {
      value: 'SWITCHGEAR PROJECT',
      title: 'New Posts',
    },
    {
      value: 'EPC CONTRACTOR FOR SOLAR PROJECT',
      title: 'New Comments',
    },
    {
      value: 'SOLAR ERECTION TESTING AND COMMISSIONING ',
      title: 'Bounce Rate',
    },
    {
      value: 'PROCUREMENT AND TRADING',
      title: 'Total Visits',
    },
    {
      value: 'ELECTRICAL SERVICES FOR LOW AND MEDIUM LEVEL SWITCHGEAR',
      title: 'New Posts',
    },
    {
      value: 'EPC CONTRACTOR FOR COMMERCIAL PROJECTS',
      title: 'New Comments',
    },
    {
      value: 'EARTHING MATERIAL',
      title: 'Bounce Rate',
    },
    {
      value: 'GENERATORS',
      title: 'Total Visits',
    },
  ];
  return (
    <div className="grey-bg container-fluid">
      <section id="minimal-statistics">
        <div className="row">
          <div className="trending-header">
            <div className="line"></div>
            <h2 className='trendingH2'>Our Services</h2>
            <div className="line"></div>
          </div>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="ServiceCards">
                <p style={{ marginTop: "1rem" }}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="stats-subtitle">
        <div className="row">
          <div className="col-12 mt-3 mb-1">
            <h4 className="text-down">To Serve with our world Class services...</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
