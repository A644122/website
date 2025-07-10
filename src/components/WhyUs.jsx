import React from 'react'
import OurTeam from './OurTeam'

const WhyUs = () => {
  return (
    <>
    <section className='border-b-black text-white flex flex-col gap-8 py-10 px-4'>
    <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 p-4 border rounded-2xl shadow-lg">
      {/* First Div */}
      <div className="flex-1 flex flex-col justify-center items-start gap-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300">
          Why Us
        </button>
        <h2 className="text-2xl font-semibold text-gray-100">What makes us stand out in the industry</h2>
        <p className="text-gray-100">
          Discover how our innovative strategies,data-driven apporach and commitment to results set us apart from the competition.
        </p>
      </div>

      {/* Second Div */}
      <div className=" border-2 bg-gradient-to-l to-purple-800 from-black/35 flex-1 bg-black p-4 rounded-xl shadow-sm">
        <h3 className="text-xl font-medium text-gray-100 mb-3">Mannal Work</h3>
        <ul className="list-disc list-inside text-gray-100 space-y-1">
          <li>Prone to human Errors</li>
          <li>Limited by Work hours</li>
          <li>High Labor costs & overhead</li>
          <li>Slow & Time-consuming Tasks</li>
          <li>Disconnected & Repetitives Works </li>
          <li>Inconsistent  & Dependent on Workforce</li>
  

        </ul>
      </div>
      {/* Third Div */}
      <div className=" bg-gradient-to-t to-purple-950 from-blue-300  flex-1 border bg-black p-4 rounded-xl shadow-sm">
        <h3 className="text-xl font-medium text-gray-100 mb-3">Xtract AI Automation</h3>
        <ul className="list-disc list-inside text-gray-100 space-y-1">
          <li>Smart,AI-Driven Decision</li>
          <li>24/7 Automated Workflows</li>
          <li>Scalable & cost -Effective</li>
          <li>Instant Data Processing</li>
          <li> Seamless System Integration </li>
          <li>Consistent & Reliable Output</li>
  

        </ul>
      </div>
    </div>
  <OurTeam/>
    </section>


    
    
    
    </>
  )
}

export default WhyUs