import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./MainBanner.css";
const MainBanner = () => {
  return (
    <section className="main-header">
      <div className="back">
        <div className="container">
          <div className="row justify-content-around">
            {/* Rotate westo */}
            <div className="col-lg-1 head">
              <p>Trash</p>
            </div>

            {/* Divide image */}
            <div className="col-lg-5">
              <div className="images d-flex">
                <div className="divide1">
                  <div className="linn1"></div>
                </div>
                <div className="divide2">
                  <div className="linn2"></div>
                </div>
              </div>
            </div>

            {/* left side */}

            <div className="col-lg-6 left-sid">
              <div className="left">
                <h4 className="head1">Get to Know About Us</h4>
                <h1 className="tit">
                  We’re Leader in Waste Management Services
                </h1>
                <p>
                We seek to preserve the environment by providing smart Trash <br></br>that help manage waste collection services in a Smart Way .
                </p>

                {/* Rating pare */}
                <div className="rate">
                  <div className="d-flex justify-content-between">
                    <h5>Waste Services</h5>
                    <h6>77 %</h6>
                  </div>
                  <div className="out">
                    <div className="recycl">
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rate">
                  <div className="d-flex justify-content-between">
                    <h5>Help Worker</h5>
                    <h6>90 %</h6>
                  </div>
                  <div className="out">
                    <div className="recycl">
                      <div className="inner2"></div>
                    </div>
                  </div>
                </div>

                <div className="chois">
                  <div className=" check d-flex ">
                    <i className="bi bi-check-circle-fill"></i>
                    <h6>Preserving the environment.</h6>
                  </div>
                  <div className=" check d-flex ">
                    <i className="bi bi-check-circle-fill"></i>
                    <h6>Check whether the Trash is full or not</h6>
                  </div>
                  <div className=" check d-flex ">
                    <i className="bi bi-check-circle-fill"></i>
                    <h6>Help users find an empty Trash.</h6>
                  </div>
                  <div className=" check d-flex ">
                    <i className="bi bi-check-circle-fill"></i>
                    <h6>Find the shortest path.</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
