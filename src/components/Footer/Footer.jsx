import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/images/footer-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-bg"></div>
      {/* footer-top  */}
      <div className="site-footer__top">
        <div className="container">
          <div className="site-footer__top-inner">
            <div className="site-footer__top-logo">
              <a href="index.html">
                <img src={FooterLogo} alt="Logo" />
              </a>
            </div>
            <div className="site-footer__top-right">
              <p className="site-footer__top-right-text">
               Smart Trash Services
              </p>
              <div className="site-footer__social">
                <a href="f">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="f">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="f">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="f">
                  <i className="bi bi-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End-footer-top  */}
      {/*footer-middle  */}
      <div className="site-footer__middle">
        <div className="container">
          <div className="row">
            {/*about */}
            <div className="col-xl-4" data-wow-delay="100ms">
              <div className="footer-widget__column footer-widget__about">
                <h3 className="footer-widget__title">About</h3>
                <div className="footer-widget__about-text-box">
                  <p className="footer-widget__about-text">
                    Smart Trash To preserve the environment and help workers
                  </p>
                </div>
                <form className="footer-widget__newsletter-form">
                  <div className="footer-widget__newsletter-input-box">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                    />
                    <button
                      type="submit"
                      className="footer-widget__newsletter-btn"
                    >
                      <i className="bi bi-send"></i>
                    </button>
                  </div>
                </form>
              </div>
              {/*End-about */}
            </div>
            {/*link */}
            <div className="col-xl-2 " data-wow-delay="200ms">
              <div className="footer-widget__column footer-widget__links clearfix">
                <h3 className="footer-widget__title">Links</h3>
                <ul className="footer-widget__links-list list-unstyled clearfix">
                  <li>
                    <i className="bi bi-arrow-right">
                    <Link to={"../About"}>
                      <span>About</span>
                    </Link>
                    </i>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right">
                      <a href="request-pickup.html">Request Pickup</a>
                    </i>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right">
                      <a href="about.html">Management</a>
                    </i>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right">
                      <a href="services.html">Start Service</a>
                    </i>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right">
                    <Link to={"../Contact"}>
                      <span>Contact</span>
                    </Link>
                    </i>
                  </li>
                </ul>
              </div>
            </div>
            {/*End-link */}
            {/*serivces */}
            <div className="col-xl-3 " data-wow-delay="300ms">
              <div className="footer-widget__column footer-widget__services clearfix">
                <h3 className="footer-widget__title">Services</h3>
                <ul className="footer-widget__services-list list-unstyled clearfix">
                  <li>
                    <i className="bi bi-arrow-right">
                    <Link to={"../About"}>
                      <span>Dumpster Rentals </span>
                    </Link>
                    </i>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right">
                    <Link to={"../About"}>
                      <span>Bulk Trash Pickup</span>
                    </Link>
                    </i>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right">
                    <Link to={"../About"}>
                      <span>Waste Removal</span>
                    </Link>
                    </i>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right">
                    <Link to={"../About"}>
                      <span>Zero Waste</span>
                    </Link>
                    </i>
                  </li>
                </ul>
              </div>
            </div>
            {/*End-serivces */}
            {/*contact*/}
            <div className="col-xl-3" data-wow-delay="400ms">
              <div className="footer-widget__column footer-widget__contact clearfix">
                <h3 className="footer-widget__title">Contact</h3>
                <p className="footer-widget__contact-text">
                Menoufia-Shebin El-Koum
                </p>
                <div className="footer-widget__contact-info">
                  <div className="footer-widget__contact-icon">
                    <span className="icon-contact">
                      <i className="bi bi-telephone-outbound"></i>
                    </span>
                  </div>
                  <div className="footer-widget__contact-content">
                    <p className="footer-widget__contact-mail-phone">
                      <a
                        href="mailto:needhelp@wostin.com"
                        className="footer-widget__contact-mail"
                      >
                        SmartTrash@gmail.com
                      </a>
                      <a
                        href="tel:2463330088"
                        className="footer-widget__contact-phone"
                      >
                        + 02- (01)01020-6943
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*End-contect */}
          </div>
        </div>
      </div>
      {/*End-footer-middle  */}
      {/*footer-bottom */}
      <div className="site-footer__bottom">
        <div className="site-footer-bottom-shape"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                  © Copyright 2023 by <a href="footer">Best Team</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End-footer-bottom */}
    </footer>
  );
};

export default Footer;
