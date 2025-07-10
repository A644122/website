import React from "react";
import HeroSection from "../components/HeroSection";

import WorkflowAutomation from "../components/WorkflowAutomation";
import Assisments from "../components/Assisments";
import SalseMarketing from "../components/SalseMarketing";
import CaseStudies from "../components/CaseStudies";
import Benefits from "../components/Benifits";
import Prices from "../components/Prices";
import Testimonials from "../components/Testimonials";
import Faquestion from "../components/Faquestion";
import Footers from "../components/Footers";
const Home = () => {
  return (
    <>
      <div>
        <HeroSection />

        <WorkflowAutomation />
        <Assisments />
        <SalseMarketing />
        <CaseStudies />
        <Benefits />
        <Prices />
        <Testimonials />
        <Faquestion />
        <Footers />
      </div>
    </>
  );
};

export default Home;
