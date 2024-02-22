import React from "react";
import { Link, useLocation } from "react-router-dom";
import LoadingGif from "../../assets/images/loader.png";
import ErrorGif from "../../assets/images/error-page-shape.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./LoadingAndNullHandler.css";
const LoadingAndNullHandler = ({ type }) => {
  const location = useLocation();
  return (
    <>
      {type === "loading" ? (
        <div className="preloader">
          <img
            className="preloader__image"
            width="60"
            src={LoadingGif}
            alt="Loader"
          />
        </div>
      ) : (
        <>
          <section className="error-page">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="error-page__inner">
                    <div className="error-page-shape float-bob-y-2">
                      <img src={ErrorGif} alt="Error" />
                    </div>
                    <h2 className="error-page__title">404</h2>
                    <h3 className="error-page__tagline">
                      Sorry we can't find{" "}
                      {location.pathname.replaceAll("/", "")} page!
                    </h3>
                    <p className="error-page__text">
                      The page you are looking for was never existed.
                    </p>
                    <form className="error-page__form">
                      <div className="error-page__form-input">
                        <button type="submit">
                          <i className="icon-magnifying-glass"></i>
                        </button>
                      </div>
                    </form>
                    <Link to="Home" className="thm-btn error-page__btn">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default LoadingAndNullHandler;
