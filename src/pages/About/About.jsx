import React from "react";
import MainBanner from "../../components/MainBanner/MainBanner";
import Members from "../../components/Members/Members";
import SecondHeader from "../../components/SecondHeader/SecondHeader";

const About = () => {
  return (
    <>
      <SecondHeader pageHeader="About Us" />
      <MainBanner />
      <Members />
    </>
  );
};

export default About;
