import React from "react";
import "./Members.css";
import { TeamMembers } from "./TeamMembers";
import "bootstrap-icons/font/bootstrap-icons.css";

const Members = () => {
  return (
    <section>
      <div className="membHeader">
        <div className="container text-center">
          <div className="Staff">
            <p>Company Staff</p>
            <h1>Meet Our Team</h1>
          </div>
          <div className="MemberRow">
            <div className="row  ">
              {TeamMembers.map((member) => {
                return (
                  <div className="col-xl-4  sm-8 " key={member.id}>
                    <div className="member">
                      <div className="membImag">
                        <img
                          className="frontImge"
                          src={member.imgScr}
                          alt="Team Member"
                        />
                      </div>
                      <div className="infoMemb">
                        <h4>{member.name}</h4>
                        <p>{member.Depart}</p>
                      </div>
                      <div className="hiddInfo">
                        <h4>{member.name}</h4>
                        <p>{member.Depart}</p>
                        <ul className="links d-flex justify-content-center">
                          <li>
                            <a
                              href={member.face}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="bi bi-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="bi bi-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={member.twitter}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="bi bi-twitter"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
