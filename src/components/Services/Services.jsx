import React from "react";
import service1 from "../../assets/images/Services/services-2-icon-1.png";
import service2 from "../../assets/images/Services/services-2-icon-2.png";
import service3 from "../../assets/images/Services/services-2-icon-3.png";
import service4 from "../../assets/images/Services/services-2-icon-4.png";
import "./Services.css";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <section className="services">
      {/* services1 */}
      <div className="container justify-content-center items-center">
        <div className="row">
          <div className="col-lg-3 col-sm-6 " animation-delay="100ms">
            <div className="services1">
              <div className="services1-box">
                <div className="services1-box-bg">
                  <div className="services1-bg"></div>
                </div>
                <div className="services-icon">
                  <img src={service1} alt="" />
                </div>
                <div className="services1-inside">
                  <h3 className="services1-inside-title">
                    <a href="zero-waste.html">Preserving the environment</a>
                  </h3>
                  <p className="services1-inside-text">
                  By having waste Trashes.
                  </p>
                </div>
              </div>
              <div className="services1-inside-read-more">
              <Link to={"../About"}>
              <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
              </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6" animation-delay="200ms">
            <div className="services1 ">
              <div className="services1-box">
                <div className="services1-box-bg">
                  <div className="services1-bg"></div>
                </div>
                <div className="services-icon">
                  <img src={service2} alt="" />
                </div>
                <div className="services1-inside">
                  <h3 className="services1-inside-title">
                    <a href="dumpster-rental.html">Check whether the Trash is full or not</a>
                  </h3>
                  <p className="services1-inside-text">
                  Through the services it provides to the worker on his application.
                  </p>
                </div>
              </div>
              <div className="services1-inside-read-more">
              <Link to={"../About"}>
              <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
              </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6" animation-delay="200ms">
            <div className="services1 ">
              <div className="services1-box">
                <div className="services1-box-bg">
                  <div className="services1-bg"></div>
                </div>
                <div className="services-icon">
                  <img src={service3} alt="" />
                </div>
                <div className="services1-inside">
                  <h3 className="services1-inside-title">
                    <a href="portable-toilet.html">Help users find an empty Trash</a>
                  </h3>
                  <p className="services1-inside-text">
                  Through the services it provides to the user on his application.
                  </p>
                </div>
              </div>
              <div className="services1-inside-read-more">
              <Link to={"../About"}>
              <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
              </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6" animation-delay="200ms">
            <div className="services1 ">
              <div className="services1-box">
                <div className="services1-box-bg">
                  <div className="services1-bg"></div>
                </div>
                <div className="services-icon">
                  <img src={service4} alt="" />
                </div>
                <div className="services1-inside">
                  <h3 className="services1-inside-title">
                    <a href="recylcing-services.html">Find the shortest path</a>
                  </h3>
                  <p className="services1-inside-text">
                  Providing services to the worker to reach him in the shortest way.
                  </p>
                </div>
              </div>
              <div className="services1-inside-read-more">
              <Link to={"../About"}>
              <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End-services1 */}
    </section>
  );
};

export default Services;
