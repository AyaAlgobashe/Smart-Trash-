import React from "react";
import "./widget.scss";

const Widget = ({ type, icon, data, setTab, tab }) => {
  return (
    <div onClick={() => setTab(tab)} className="widget">
      <div className="left">
        <span className="title">{type}</span>
        <span className="counter">{data}</span>
        {/* <span onClick={() => setTab(tab)} className="link">
          View Details
        </span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          <i className="bi bi-arrow-up-square-fill text-success text-center"></i>
        </div>
        <i className={`bi ${icon} text-center`}></i>
      </div>
    </div>
  );
};

export default Widget;
