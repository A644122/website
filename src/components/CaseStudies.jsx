import React from "react";
import Logo from "../assets/logo.png";
import supply from "../assets/supply.jpg";

const CaseStudies = () => {
  return (
    <>
    <div id="Casestudies" >

    
      <div className="p-8 max-w-4xl mx-auto bg-black shadow-lg rounded-lg space-y-10">
        {/* Top Section */}
        <div className="text-center space-y-4">
          <button className="px-6 py-2  bg-black sm:rounded-md text-white rounded hover:bg-blue-700  transition">
            Case Studies
          </button>
          <h1 className="text-3xl text-white font-bold">
            See How Smart AI Automation Transforms Businesses
          </h1>
          <p className="text-gray-100 ">
            See how AI automation streamlines operations, boosts and drives
            growth.
          </p>
        </div>

        {/* Media & Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Images Section */}
          <div className="space-y-4">
            <img
              src="https://framerusercontent.com/images/wZ4QywsLlJwC6C7w4D9W92Oqug.jpeg"
              alt="Case Study"
              className="w-full h-100 rounded shadow hover:shadow-lg transition-transform transform hover:scale-105 hover:opacity-90 hover:bg-gradient-to-b to-purple-800 from-red-800"
            />
            <img src={Logo} alt="Logo" className="h-12  bg-white rounded-b-md " />
          </div> 

          {/* Text Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-gray-100">
              "AI-driven forcasting cut inventory waste by 40% for TrailForge"
            </h1>
            <p className="text-gray-100">
              TrailForge,a suitcase brand,faced stock issues inefficiences. Our
              AI forcasting optimized inventory and production cycles, helping
              them save costs and deliver faster.
            </p>
          </div>
        </div>

        {/* List Section */}
        <div className="mt-8">
          Impact:
          <ul className="list-disc pl-6 space-y-2 text-gray-100">
            <li>40% Less Inventory Waste</li>
            <li>35% Faster Productions</li>
            <li>20% More Accurate Forcasting</li>
            <li>25% Faster fulfillment</li>
          </ul>
        </div>
      </div>
      <div className="p-8 max-w-4xl mx-auto bg-black shadow-lg rounded-lg space-y-10">
        

        {/* Media & Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Images Section */}
          <div className="space-y-4">
            <img
              src="https://www.nimrindia.com/images/courses/post-graduate-diploma-logistics-management-mumbai.jpg"
              alt="Case Study"
              className="w-full h-100 rounded shadow"
            />
            <img src={supply} alt="Logo" className="h-12" />
          </div>

          {/* Text Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-gray-100">
              "AI-powered workflows reduced error rate by 80% in daily operation "
            </h1>
            <p className="text-gray-100">
              MedicChain,healthcare logistics company ,was dealing with frequent data errors and delays. We introduced AI validation and live tracking to improve accuracy and speed across their supply chain 
            </p>
          </div>
        </div>

        {/* List Section */}
        <div className="mt-8">
          Impact:
          <ul className="list-disc pl-6 space-y-2 text-gray-100">
            <li>80% Error reduction</li>
            <li>90% Accuracy in Data logs</li>
            <li>30% Faster Delivery</li>
            <li>60+ Hours Saved</li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default CaseStudies;
