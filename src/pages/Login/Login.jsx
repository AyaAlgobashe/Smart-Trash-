import React from "react";
import "./Login.css";
import logo from "../../assets/images/logo-1.png";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import TRASH from "../../assets/images/Trash.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="py-5 px-5 ms-xl-4">
              <Link to={"../Home"}>
                <img src={logo} alt={"Logo"} />
              </Link>
            </div>

            <div className="d-flex align-items-center px-5 ms-xl-4 pt-xl-2 mt-xl-n5">
              <LoginForm />
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src={TRASH}
              alt="Login"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
