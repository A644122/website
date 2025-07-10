import React from "react";
import logofirst from "../assets/chart.png";
const OurServices = () => {
  return (
    <>
      <section
        className=" min-h-screen flex items-center justify-center bg-gray-100 px-4 "
        id="Services"
      >
        <div className="bg-black max-w-2xl w-full text-center space-y-6">
          <button className="bg-blue-300  text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition-all duration-300">
            Who We Are
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Who We Are
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Xtract is a team of innovators dedicated to making AI automation
            simple and effective. We help businesses streamline workflows, boost
            efficiency, and scale with smart, AI-driven solutions.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurServices;
