import React from "react";
import Faquestion from "./Faquestion";

const OurTeam = () => {
  return (
    <>
      <section className="min-h-screen  grid md:flex items-center justify-center bg-black px-4 md:flex-col space-y-8 md:space-y-0 md:space-x-8">
        <div className="max-w-2xl w-full text-center space-y-6">
          <button className="bg-blue-300 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition-all duration-300">
            Our Team
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
            Meet the Minds Behind Xtract
          </h1>
          <p className="text-base md:text-lg text-gray-100">
            Our diverse team of experts is dedicated to driving innovation and
            delivering exceptional AI solutions.
          </p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <img
              src="https://framerusercontent.com/images/RbbQOrBDhKQ01vkCTCFVdRpeM.png"
              alt="Team Member"
              className="w-70 h-70 mx-auto  mb-4"
            />
            <div className=" flex flex-col justify-center px-5">
            <h3 className="text-xl font-semibold text-white">Sophia Nguyen</h3>
            <button>
              <a href="https://www.linkedin.com/feed/" className="bg-black text-white  rounded-xl shadow hover:bg-blue-700 transition-all duration-300">
                LinkedIn
              </a>
            </button>

            </div>
            <p className="text-gray-400">CEO-Founder & AI Strategies</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <img
              src="https://framerusercontent.com/images/DrI82c0fjdocE3c8uvx3UMQ60.jpg?scale-down-to=512"
              alt="Team Member"
              className="w-70 h-70 mx-aut mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Sophia Nguyen</h3>
            <p className="text-gray-400">Head of Automation Engineering</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <img
              src="https://framerusercontent.com/images/mZvxBrM560XFp25BJFeuugotaNk.png"
              alt="Team Member"
              className="w-70 h-70 mx-auto  mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Ryan Mitchell</h3>
            <p className="text-gray-400"> Lead Data Scientist</p>
          </div>
        </div> 
      </section>
        <Faquestion/>
    </>
  );
};

export default OurTeam;
