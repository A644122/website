import React from "react";

 import Footers from "../components/Footers";
// import Whoweare from "../components/Whoweare";
import Whoarewe from "../components/Whoarewe";
import OurSaveName from "../components/OurSaveName";

const About = () => {
  return (
    <>
      <section
        className="  flex-col  bg-black  text-white
       min-h-screen flex items-center justify-center  px-4"
      >
        <div className="max-w-2xl w-full text-center space-y-6">
          <button className="bg-black border  text-white px-8 py-2 rounded-xl shadow hover:bg-blue-700 transition-all duration-300">
            About Us
          </button>
          <h1 className="text-4xl md:text-5xl font-bold ">
            Helping Businesses Grow
          </h1>
          <p className="  text-base md:text-lg">
            Xtract helps businesses streamline operations and grow faster with
            AI-powered automation.
          </p>
        </div>
        <Whoarewe  />
      </section>
      <OurSaveName  title='Driving Innovation Forward' description={"Our values shape everything we do at Xtract. From innovation to integrity, we’re committed to building AI solutions that empower businesses and drive real impact."}  />
      <Footers/>
    </>
  );
};

export default About;
