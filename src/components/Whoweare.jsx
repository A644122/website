import React from 'react'
import Cards from './Cards'
import Footers from './Footers'

const Whoweare = () => {
  return (
    <>
    
      <div className=" flex flex-col items-center justify-center  md:w-full lg:w-full h-screen bg-black text-white px-4">
        <button className="bg-blue-500  px-4 py-2 rounded-xl shadow hover:bg-black border transition-all duration-300 mb-6 ">Who We Are</button>
        <h1 className="text-4xl   text-white font-bold mb-4">Who We Are</h1>
        <p className="text-lg  max-w-md text-center">
          Xtract is a team of innovators dedicated to making AI automation simple and effective. We help businesses streamline workflows, boost efficiency, and scale with smart, AI-driven solutions.
        </p>
      </div>
        <Cards/>
        
    </>
  )
}

export default Whoweare