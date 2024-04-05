import React from 'react';
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loadOverlay">
      <div className="loadBody">
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default Loader;

