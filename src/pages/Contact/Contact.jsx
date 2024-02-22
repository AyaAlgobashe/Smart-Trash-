import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import MainBanner from "../../components/MainBanner/MainBanner";
import SecondHeader from "../../components/SecondHeader/SecondHeader";

const Contact = () => {
  return (
    <>
      <SecondHeader pageHeader="Contact" />
      {/* <MainBanner /> */}
      <ContactForm />
    </>
  );
};

export default Contact;
