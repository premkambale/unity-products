import React from 'react';
import "./OurServices.css"


const OurServices = () => {
  const data = [
    {
      value: '278',
      title: 'New Posts',
    },
    {
      value: '156',
      title: 'New Comments',
    },
    {
      value: '64.89 %',
      title: 'Bounce Rate',
    },
    {
      value: '423',
      title: 'Total Visits',
    },
    {
      value: '278',
      title: 'New Posts',
    },
    {
      value: '156',
      title: 'New Comments',
    },
    {
      value: '64.89 %',
      title: 'Bounce Rate',
    },
    {
      value: '423',
      title: 'Total Visits',
    },
  ];
  return (
    <div className="grey-bg container-fluid">

      <section id="minimal-statistics">
        <div className="row">
          <div className="col-12 mt-3 mb-1">
            <h4 className="text-uppercase">Our Services</h4>
          </div>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-xl-3 col-sm-6 col-12">
              <div style={{background: "linear-gradient(#243b55, #141e30)"  , color:"red"}} className="card">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex">
                      <div className="align-self-center">
                        <i className={`icon-${item.icon} ${item.color} font-large-2 float-left`}></i>
                      </div>
                      <div className="media-body text-right">
                        <h3>{item.value}</h3>
                        <span style={{color:"white"}}>{item.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
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
        <div className="row">
        </div>
      </section>
    </div>
  );
};

export default OurServices;
