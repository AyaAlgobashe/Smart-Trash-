import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Opinion.css";
const Opinion = () => {
  return (
    <section className="mainOpinion">
      <div className="opinion">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-6">
              <div className="left-side">
                <p>WHAT THEY SAY</p>

                <h2>
                We are Leaders in waste<br></br> collection services in Egypt
                </h2>
                <p className="info">
                We seek to preserve the environment by providing smart Trash
                    that help manage waste collection services in a Smart Way .
                </p>
              </div>
            </div>
            <div className="col-lg-6  ">
              <div className="right-side">
                <Carousel>
                  <Carousel.Item>
                    <div className="borde">
                      <p className="par-left">
                      I think it is a smart service that preserves the environment and helped me personally
                      </p>
                    </div>
                    <div className="buton d-flex  justify-content-between">
                      <div className="d-flex  justify-content-around">
                        <img
                          className="phot"
                          src="https://img.freepik.com/free-photo/portrait-cute-young-brunette-student-holding-exercise-books-isolated-white-wall_231208-11488.jpg"
                        />

                        <div className="person">
                          <h6>sara Ammar</h6>
                          <p>Student</p>
                        </div>
                      </div>

                      <div className="qou">
                        <i className="bi bi-chat-quote"></i>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="borde">
                      <p className="par-left">
                      I think it's a great idea that saved the workers less time and effort and helped them a lot
                      </p>
                    </div>
                    <div className="buton d-flex  justify-content-between">
                      <div className="d-flex  justify-content-around">
                        <img
                          className="phot"
                          src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg?w=2000"
                        />
                        <div className="person">
                          <h6>Amira Mohamed</h6>
                          <p>business woman</p>
                        </div>
                      </div>

                      <div className="qou">
                        <i className="bi bi-chat-quote"></i>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="borde">
                      <p className="par-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua Ut enim ad minim veniam
                      </p>
                    </div>
                    <div className="buton d-flex  justify-content-between">
                      <div className="d-flex  justify-content-around">
                        <img
                          className="phot"
                          src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg?w=2000"
                        />
                        <div className="person">
                          <h6>Aya Ahmed</h6>
                          <p>business woman</p>
                        </div>
                      </div>

                      <div className="qou">
                        <i className="bi bi-chat-quote"></i>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opinion;
