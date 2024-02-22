import "./Register.css";
import React from "react";
import logo from "../../assets/images/logo-1.png";
import { Link } from "react-router-dom";
import RegisterForm from "../Forms/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <aside>
      <div className="headSign">
        <Link to={"../Home"}>
          <img src={logo} alt={"Logo"} />
        </Link>
        <h1>Creat New Account</h1>
        <p>
          OR
          <span>
            <Link to={"/Login"}> Sign In to your Account</Link>
          </span>
        </p>
      </div>
      <div className="form_container">
        <RegisterForm />
      </div>
    </aside>
  );
};
//  <div className="my-icon position-absolute">
//                   <i className=" bi bi-eye-fill"></i>
//                   </div>
export default Register;
