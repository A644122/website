import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-10 space-y-12">
        {/* First Div */}
        <div className="text-center space-y-4">
          <button className=" bg-black border border-md  text-white px-8 py-3 ">
            Testinomials
          </button>
          <h1 className="text-3xl font-bold">
            Why Businesses Love Our AI Solutions
          </h1>
          <p className=" text-xl">
            Real businesses, real results with AI automation.
          </p>
        </div>
      </div>
      <section className=" w-full sm:w-screen h-full bg-black/50">
        <div className=" container mx-auto px-4 py-10 space-y-12">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className=" bg-red-600/100 border-l-2 border-r-2 bg-gradient-to-b md:from-gray-500/25 from-black/25 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold   text-white ">
                Emily Wong
              </h3>
              <p className="text-gray-100 mt-2">
                "Customer support is now seamless. Our response time improved
                drastically, and satisfaction levels are at an all-time high,
                thanks to xtract"
              </p>
              <div className=" ">
                <img
                  className=" rounded-b-full w-10 mt-4"
                  src="https://framerusercontent.com/images/Ja6vnrdyxR6DoP2iS9CRMnsQXSo.jpg"
                  alt=""
                />
                <div className="mt-4 text-center flex flex-col">
                  <h3>Emily Wong</h3>
                  <h4>Customer Success Lead at SupportHive</h4>
                </div>
              </div>
            </div>
            <div className="bg-red-600/100 border-l-2 border-r-2 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">5 Star</h3>
              <p className="text-gray-100 mt-2">
                "With AI, we cut manual work and improved accuracy. Our team now
                focuses on high-impact tasks while automation handles the rest!"
              </p>
              <div className=" ">
                <img
                  className=" rounded-b-full w-10 mt-4"
                  src="https://framerusercontent.com/images/prJVkx4ybEf6YSyZs9EZDABPto.jpg"
                  alt=""
                />
                <div className="mt-4 text-center  text-white flex flex-col">
                  <h3 className=" ">Sophia Martinez</h3>
                  <h4 className=" ">Operations Manager at NexaCorp</h4>
                </div>
              </div>
            </div>
            <div className="bg-red-600/100 border-l-2 border-r-2 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">5 Star</h3>
              <p className="text-gray-100 mt-2">
                "Customer support is now seamless. Our response time improved
                drastically, and satisfaction levels are at an all-time high,
                thanks to xtract"
              </p>
              <div className=" ">
                <img
                  className=" rounded-b-full w-10 mt-4"
                  src="https://framerusercontent.com/images/Ja6vnrdyxR6DoP2iS9CRMnsQXSo.jpg"
                  alt=""
                />
                <div className="mt-4 text-center flex flex-col">
                  <h3>James Carter</h3>
                  <h4>CEO at TechFlow Solutions</h4>
                </div>
              </div>
            </div>
            <div className="bg-red-600/100 border-l-2 border-r-2 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-white font-semibold">David Reynolds</h3>
              <p className="text-gray-100 mt-2">
                "AI-driven insights doubled our sales efficiency. We now engage
                leads at the right time with smarter, data-backed decisions!"
              </p>
              <div className=" ">
                <img
                  className=" rounded-full w-10 mt-4"
                  src="https://framerusercontent.com/images/HDIEzwzzph6mZtBFYG3fS721U.jpg"
                  alt=""
                />
                <div className="mt-4 text-center flex flex-col">
                  <h3>David Reynolds</h3>
                  <h4>Head of Sales at GrowthPeak</h4>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
