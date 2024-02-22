import React from "react";
import "./User.css";
import Mostafa from "../../assets/images/TeamMembers/user.png";
import "bootstrap-icons/font/bootstrap-icons.css";
const User = ({ fullName, username, role, email, phone }) => {
  return (
    <aside className="details">
      <div className="container">
        <div className="user-details">
          <div className="row justify-content-around">
            <div className="col-xl-5">
              <div className="imgContainer">
                <img className="userImage" src={Mostafa} />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="left">
                <div className="par-info">
                  <h3>Full Name :</h3>
                  <h4>{fullName}</h4>
                </div>
                <div className="par-info">
                  <h3>Username :</h3>
                  <h4>
                    {username}
                    <span className="role">({role})</span>
                  </h4>
                </div>
                <div className="par-info">
                  <h3>Phone :</h3>
                  <h4>{phone}</h4>
                </div>
                <div className="par-info">
                  <h3>Email :</h3>
                  <h4>{email}</h4>
                </div>
                <div className="par-info">
                  <h3>I help my clients stand out and they help me grow.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con adipiscing elit tiam <br />{" "}
                    convallis elit id impedie. Quisq commodo simply free <br />
                    ornare tortor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default User;
