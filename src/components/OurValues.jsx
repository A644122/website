import React from "react";

import Idea from "../assets/idea.jpg";
import Users from "../assets/users.jpg";

import growth from "../assets/Growth.jpg"; // Ensure you have the correct path to your image
import productiity from "../assets/productivity.jpg"; // Ensure you have the correct path to your image
import Handshak from "../assets/handshak.jpg"; // Ensure you have the correct path to your image
import Time from "../assets/Timer.jpg";
import Footers from "./Footers";
const OurValues = () => {
  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center bg-black px-4 "
        id="Services"
      >
        <div className=" max-w-2xl w-full text-center space-y-6">
          <button className="bg-blue-300  text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition-all duration-300">
            Our Values
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            The Values Behind Xtract
          </h1>
          <p className="text-base md:text-lg text-gray-100">
            Our values shape everything we do at Xtract.From innovation and
            integrity,we're commited to building AI solution that empower
            businesses and drive real impact. We believe in the power of
            technology to transform lives and create a better future for all.
          </p>
        </div>
      </section>
      <section className="md:flex justify-center items-center  flex-wrap h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6  ">
        <div className="bg-white bg-gradient-to-b to-purple-900 from-purple-300 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 md:max-h-50 md:max-w-120">
          <div className="flex gap-2">
            <img className="w-10 rounded-b-full" src={Idea} alt="abc" />
            <h3 className="  text-white text-xl font-semibold mb-2">
              Driving Innovation Forward
            </h3>
          </div>
          <p className="text-white">
            We embrace cutting-edge AI to create smarter more efficient
            automation solutions.
          </p>
        </div>
        <div className="bg-white bg-gradient-to-b to-purple-900 from-purple-300 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 max-h-50 max-w-120 ">
          <div className="flex gap-2">
            <img className="w-10  rounded-b-full" src={Handshak} alt="abc" />

            <h3 className="text-xl font-semibold mb-2">
              Committed to Integrity & Trust{" "}
            </h3>
          </div>
          <p className="text-white">
            Trust and transparency are at the core of everythingwe do for our
            clients.
          </p>
        </div>
        <div className="bg-gradient-to-b to-purple-900 from-purple-300 bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 md:max-h-50 max-w-120 ">
          <div className=" flex gap-2  ">
            <img className="w-10 rounded-full" src={growth} alt="abc" />

            <h3 className="text-xl font-semibold mb-2">
              Empowering Business Growth
            </h3>
          </div>
          <p className="text-white">
            We help business scale faster wit AI-driver efficiency rudcing
            manual tasks and unlocking new oppertunities.
          </p>
        </div>
        <div className="bg-gradient-to-b to-purple-900 from-purple-300 bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 md:max-h-50 max-w-120 ">
          <div className=" flex gap-2  ">
            <img className="w-10 rounded-b-full" src={Users} alt="abc" />

            <h3 className="text-xl font-semibold mb-2">
              Putting customers First
            </h3>
          </div>
          <p className="text-white">
            Your sucessess is our priority__ we build solution truly make an
            impact
          </p>
        </div>
      <Footers /> 
      </section>
    </>
  );
};

export default OurValues;
