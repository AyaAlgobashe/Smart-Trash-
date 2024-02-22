import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-left">
              <div className="section-title">
                <span className="title-contact">Contact With Us</span>
                <h2 className="title-head">
                  Have Questions? Feel Free to Write Us
                </h2>
              </div>
              <p className="text">
              Contact us if there is any problem and we will solve it as soon as possible.
              </p>
              <ul className="contact-info">
                <li>
                  <div className="icon">
                    <span>
                      <i className="bi bi-envelope-paper-heart"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p>Call Anytime</p>
                    <a href="tel:12463330088">+ 02 - (01) 01020-6943</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span>
                      <i className="bi bi-telephone-outbound"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p>Write Email</p>
                    <a href="mailto:needhelp@wostin.com">SmartTrash@gmail.com</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span>
                      <i className="bi bi-geo-alt"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p>Visit Us Anytime</p>
                    <span> Menoufia-Shebin El-Koum</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-right">
              <form
                action="assets/inc/sendemail.php"
                className="contact-form contact-form-validated"
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-form-input-box">
                      <input type="text" placeholder="Your name" name="name" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-form-input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-form-input-box">
                      <input
                        type="text"
                        placeholder="Phone number"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-form-input-box">
                      <input type="text" placeholder="Subject" name="subject" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="contact-form-input-box text-message-box">
                      <textarea
                        name="message"
                        placeholder="Write message"
                      ></textarea>
                    </div>
                    <div className="contact-box">
                      <button type="submit" className="button">
                        Send a Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
