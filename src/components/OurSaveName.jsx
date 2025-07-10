import React, { useContext } from "react";
import { Icon, Icon1, Icon2, Icon3 } from "./ContextApi";
import WhyUs from "./WhyUs";
// const Image=useContext(Icon)
const OurSaveName = ({ title, description }) => {
  return (
    <section className="w-full px-4 py-12 md:px-10 lg:px-20 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* First Main Div */}
        <div className="flex flex-col justify-center space-y-5 lg:w-1/2">
          <button className="bg-green-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-green-700 transition">
            Our Values
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
            The Values Behind Xtract
          </h1>
          <p className="text-gray-100 text-base md:text-lg">{description}</p>
        </div>

        {/* Second Main Div with 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
          {/* Block 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg border border-gray-100 ">
            <h2 className="text-2xl">{Icon}</h2>

            <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
            <p className="text-gray-100 mt-2">
          {description}
            </p>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg border border-gray-100  bg-black">
            <h1 className=" text-2xl">{Icon1}</h1>
            <h2 className="text-xl font-semibold text-gray-100">
              Committed to Integrity & Trust
            </h2>
            <p className="text-gray-100 mt-2">
              Trust and transparency are at the core of everything we do for our
              clients.
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg border border-gray-100 ">
            {/* <img
              src="https://via.placeholder.com/100"
              alt="Feature 3"
              className="w-24 h-24 mb-4 rounded-full object-cover"
            /> */}
            <h2 className=" text-3xl">{Icon3}</h2>
            <h2 className="text-xl font-semibold text-gray-100">
              {" "}
              Empowering Business Growth
            </h2>
            <p className="text-gray-100 mt-2">
              We help businesses scale faster with AI-driven efficiency,
              reducing manual tasks and unlocking new opportunities.
            </p>
          </div>

          {/* Block 4 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg border border-gray-100  bg-black">
            {/* <img
              src={Icon3}
              alt="Feature 4"
              className="w-24 h-24 mb-4 rounded-full object-cover"
            /> */}
            <h3 className=" text-3xl">{Icon2}</h3>  
            <h2 className="text-xl font-semibold text-gray-100">
              {" "}
              Putting Customers First
            </h2>
            <p className="text-gray-100 mt-2">
              Your success is our priority—we build solutions that truly make an
              impact.
            </p>
          </div>
        </div>
      </div>
      <WhyUs/>
    </section>
  );
};

export default OurSaveName;
