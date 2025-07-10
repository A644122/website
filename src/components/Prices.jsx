import React from "react";
import rokets from "../assets/rokets.png";
const Prices = () => {
  return (
    <>
      {/* Main Container */}

      <div id="Pricing">
        <div className="container mx-auto px-4 py-10 space-y-12">
          {/* First Div */}
          <div className="text-center space-y-4">
            <button className=" bg-black border border-md  text-white px-8 py-3 ">
              Pricing
            </button>
            <h1 className="text-3xl font-bold">
              The Best AI Automation, at the Right Price
            </h1>
            <p className=" text-xl">
              The Best AI Automation, at the Right Price
            </p>
          </div>
        </div>
        {/* Second Div */}
        <div className=" flex justify-center gap-5 p-6 rounded-xl text-center space-y-4">
          <p className=" text-shadow-white text-3xl">Monthly</p>
          <button className="  text-white border sm:rounded-md md:rounded px-5 py-2 rounded-lg">
            Toggle
          </button>
          <p className=" text-2xl  md:text-3xl  text-shadow-white">Annually</p>
        </div>
        {/* first section */}
        <div className=" md:flex justify-center items-center  ">
          <div className="sm:p-5 flex flex-col md:flex md:flex-row  m-4">
            <section className="border border-black/10 bg-gradient-to-bl  from-blue-500  to-gray-600 flex flex-col md:flex-col items-center justify-between  lg:p-16 bg-gray-50 md:max-w-150 md:rounded-md ">
              {/* Image Section */}
              <div className="flex w-full md:w-1/1 mb-6 md:mb-0">
                <img
                  src={rokets}
                  alt="Sample"
                  className=" w-20  h-auto md:w-5 md:h-8 md:mt-5 rounded-xl shadow-lg"
                />
                <h4 className=" text-2xl font-bold p-5">Starter</h4>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/1 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  $37/month
                </h3>
                <p className="text-white  md:max-w-70">
                  Perfect for small businesses starting with AI automation.
                </p>
                <button className=" w-fit border bg-black/25 md:bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Choose this plan
                </button>

                {/* List Section */}
                <div className="mt-4">
                  <ul className="list-disc list-inside  text-white space-y-1">
                    What's Included:
                    <li>Basic workflow automation</li>
                    <li>AI-powered personal assistant</li>
                    <li>Standard analytics & reporting</li>
                    <li>Email & chat support</li>
                    <li>Up to 3 AI integrations</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* second-secotion */}
          <div className="sm:p-5 flex flex-col md:flex md:flex-row  m-4">
            <section className="border border-black/10 bg-gradient-to-bl  from-blue-500  to-gray-600 flex flex-col md:flex-col items-center justify-between  lg:p-16 bg-gray-50  md:max-w-150 md:rounded-md">
              {/* Image Section */}
              <div className="flex w-full md:w-1/1 mb-6 md:mb-0">
                <img
                  src={rokets}
                  alt="Sample"
                  className=" w-20  h-auto md:w-5 md:h-8 md:mt-5 rounded-xl shadow-lg"
                />
                <h4 className=" text-2xl font-bold p-5">Professional</h4>
                <button className=" border        text-shadow-white bg-black/35 w-fit h-fit p-2 mt-3 rounded-md">
                  popular
                </button>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/1 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  $75/month
                </h3>
                <p className="text-white md:max-w-70">
                  Perfect for small businesses starting with AI automation..
                </p>
                <button className=" w-fit border bg-black/25 md:bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Choose this plan
                </button>

                {/* List Section */}
                <div className="mt-4">
                  <ul className="list-disc list-inside  text-white space-y-1">
                    What's Included:
                    <li>Advanced workflow automation</li>
                    <li>AI-driven sales & marketing tools</li>
                    <li>Enhanced data analytics & insights</li>
                    <li>Priority customer support</li>
                    <li>Up to 10 AI integrations</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          {/* third div */}
          <div className="sm:p-5 flex flex-col md:flex md:flex-row  m-4">
            <section className="border border-black/60 bg-gradient-to-bl  from-blue-500  to-gray-600/90 flex flex-col md:flex-col items-center justify-between  lg:p-16 bg-gray-50 md:max-w-150 md:rounded-md ">
              {/* Image Section */}
              <div className="flex w-full md:w-1/1 mb-6 md:mb-0">
                <img
                  src={rokets}
                  alt="Sample"
                  className=" w-20  h-auto md:w-5 md:h-8 md:mt-5 rounded-xl shadow-lg"
                />
                <h4 className=" text-2xl font-bold p-5">Enterprise</h4>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/1 flex flex-col gap-4">
                <h1 className="text-3xl text-white font-semibold">Custom</h1>
                <p className="text-white md:max-w-70">
                  Perfect for small businesses starting with AI automation.
                </p>
                <button className=" w-fit border bg-black/25 md:bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  schedule a call
                </button>

                {/* List Section */}
                <div className="mt-4">
                  <ul className=" text-white list-disc list-inside  space-y-1">
                    What's Included:
                    <li>Fully customizable AI automation</li>
                    <li>Dedicated AI business consultant</li>
                    <li>Enterprise-grade compliance</li>
                    <li>24/7 VIP support</li>
                    <li>Unlimited AI integrations</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prices;
