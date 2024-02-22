import React from "react";
import { NavLink } from "react-router-dom";
import "./SecondHeader.css";
const SecondHeader = ({pageHeader}) => {
  return (
    <section className="Second-header">
      <div className="back">
        <div className="secback">
          <div className="container">
            <div className="collhead">
              <p className="small">
                <span>
                  <NavLink to="/">Home /</NavLink>
                </span>
                {pageHeader}
              </p>
              <h1>{pageHeader}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHeader;
