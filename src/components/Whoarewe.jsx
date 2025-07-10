import React from 'react'
import firstlogo from "../assets/chart.png"; 
import productiity from '../assets/productivity.jpg' // Ensure you have the correct path to your image
import Time from '../assets/Timer.jpg'
const Whoarewe = () => {
  return (
    <>
    <section className="w-full px-4 py-10 md:px-10 lg:px-20  bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* First Div */}
        <div className="flex flex-col items-start justify-center space-y-4 lg:w-1/2">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl shadow-lg hover:bg-blue-700 transition">
            Who we are 
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
            Who  We Are
          </h1>
          <p className="text-gray-100 text-base md:text-lg">
          Xtract is a team of innovators dedicated to making AI automation simple and effective. We help businesses streamline workflows, boost efficiency, and scale with smart, AI-driven solutions.
          </p>
        </div>

        {/* Second Div */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-1/2">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md border border-gray-100">
            <img
              src={firstlogo}
              alt="Feature"
              className="w-24 h-24 object-cover mb-4 rounded-full"
            />
            <h2 className="text-xl font-semibold text-gray-100">150+ Businesses</h2>
            <p className="text-gray-100 mt-2">
            Companies have streamlined their workflows with Xtract’s AI solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md border border-gray-100">
            <img
              src={Time}
              alt="Feature 2"
              className="w-24 h-24 object-cover mb-4 rounded-full"
            />
            <h2 className="text-xl font-semibold  text-white">1M+ Hours</h2>
            <p className=" text-white mt-2">
            Reducing manual work and boosting productivity through automation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md border border-gray-100">
            <img
              src={productiity}
              alt="Feature 3"
              className="w-24 h-24 object-cover mb-4 rounded-full"
            />
            <h2 className="text-xl font-semibold  text-white">95% Faster</h2>
            <p className=" text-white mt-2">
            Clients see improved efficiency within the first three months of usage.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Whoarewe