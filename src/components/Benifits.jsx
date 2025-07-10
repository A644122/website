import React from "react";
import Power from "../assets/power.jpg";
import productivity from "../assets/productivity.jpg";
import handshak from "../assets/handshak.jpg";
import Timer from "../assets/Timer.jpg";
import doller from "../assets/doller.jpg";
import Growth from "../assets/Growth.jpg";
import datachart from "../assets/datachart.jpg";
const Benefits = () => {
  return (
    <>
      <div id="Benefits">
        <div className="flex flex-col md:flex-col  justify-between items-center gap-8 p-6 md:p-10 bg-black text-white rounded-xl">
          <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
            Benefits
          </button>
          {/* First Section: Text + Button */}
          <div className="flex flex-col gap-4  bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h1 className="text-3xl font-bold">
              The Key Benefits of AI of your Business Growth
            </h1>
            <p className="text-lg">
              Discover how AI automation enhances efficiency, reduces costs, and
              drives business growth with smarter, faster processes.
            </p>
          </div>

          {/* Second Section: Image + Text */}
        </div>
        <div className="  flex gap-5   justify-center flex-wrap">
          <div className="bg-gradient-to-b from-gray-900 via-purple-500 to-pink-500 flex flex-col gap-4  bg-white text-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/4">
            <img
              src={productivity}
              alt="Benefit"
              className="rounded h-10 w-10 brightness-150 md:h-10 md:w-10 "
            />
            <h1 className="text-2xl font-bold">Increased Productivity</h1>
            <p className="text-lg">
              Gain actionable insights with AI-driven analytics to improve
              decision-making and strategy.
            </p>
          </div>
          <div className="bg-gradient-to-b from-gray-900 via-purple-500 to-pink-500 flex flex-col gap-4 bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/4">
            <img
              src={handshak}
              alt="Benefit"
              className="rounded h-10 w-10 brightness-150 md:h-10 md:w-10 "
            />
            <h1 className="text-2xl font-bold">Better Customer Experience</h1>
            <p className="text-lg">
              Personalized AI interactions improve response times, customer
              engagement, and overall satisfaction.
            </p>
          </div>
          <div className="bg-gradient-to-b from-gray-900 via-purple-500 to-pink-500 flex flex-col gap-4 bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/4">
            <img
              src={Timer}
              alt="Benefit"
              className="rounded h-10 w-10  md:h-10 md:w-10 "
            />
            <h1 className=" text-2xl font-bold">24/7 Availability</h1>
            <p className="text-lg">
              AI-powered systems operate around the clock, ensuring seamless
              support and execution without downtime.
            </p>
          </div>
          <div className="bg-gradient-to-b from-gray-900 via-purple-400 to-pink-500 flex flex-col gap-4 bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/4">
            <img
              src={doller}
              alt="Benefit"
              className="rounded h-10 w-10 brightness-150 md:h-10 md:w-10 "
            />
            <h1 className="text-2xl font-bold">Cost Reduction</h1>
            <p className="text-lg">
              AI automation minimizes manual work, cuts operational costs, and
              optimizes resource allocation for better profitability.
            </p>
          </div>
          <div className="bg-gradient-to-b from-black via-purple-500 to-pink-500 flex flex-col gap-4 bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/4">
            <img
              src={datachart}
              alt="Benefit"
              className="rounded h-10 w-10 brightness-150 md:h-10 md:w-10 "
            />
            <h1 className="text-2xl font-bold">Data-Driven Insights</h1>
            <p className="text-lg">
              Leverage AI to analyze vast data sets, identify trends, and make
              smarter, faster, and more accurate business decisions.
            </p>
          </div>
          <div className="bg-gradient-to-b from-black via-purple-500 to-pink-500 flex flex-col gap-4 bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/4">
            <img
              src={Growth}
              alt="Benefit"
              className="rounded h-10 w-10 brightness-150 md:h-10 md:w-10 "
            />
            <h1 className="text-2xl font-bold">Scalability & Growth</h1>
            <p className="text-lg">
              AI adapts to your business needs, allowing you to scale
              efficiently without increasing workload or costs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
