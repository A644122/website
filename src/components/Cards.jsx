import React from "react";
import firstlogo from "../assets/chart.png";
import productiity from "../assets/productivity.jpg"; // Ensure you have the correct path to your image
import Time from "../assets/Timer.jpg"; // Ensure you have the correct path to your image

const Cards = () => {
  return (
    <>
      <div className=" h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="bg-white bg-gradient-to-b to-purple-900 from-purple-300 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 md:max-h-50 ">
          <div className="flex gap-2">
            <img className="w-10" src={firstlogo} alt="abc" />
            <h3 className="  text-white text-xl font-semibold mb-2">
              150+ Businesses
            </h3>
          </div>
          <p className="text-white">
            Companies have streamline their workflow with Xtract's AI solutions.
          </p>
        </div>
        <div className="bg-white bg-gradient-to-b to-purple-900 from-purple-300 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 md:max-h-50 ">
          <div className="flex gap-2">
            <img className="w-10 rounded-b-full" src={Time} alt="abc" />

            <h3 className="text-xl font-semibold mb-2">150+ Businesses</h3>
          </div>
          <p className="text-white">
            Reducing manual work and boosting productivity by automating
            repetitive tasks.
          </p>
        </div>
        <div className="bg-gradient-to-b to-purple-900 from-purple-300 bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 md:max-h-50 ">
          <div className=" flex gap-2  ">
            <img className="w-10" src={productiity} alt="abc" />

            <h3 className="text-xl font-semibold mb-2">95% Faster</h3>
          </div>
          <p className="text-white">
            Clients are improved efficiency within the first three months of
            usages
          </p>
        </div>
        
      </div>
    </>
  );
};

export default Cards;
