import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className=" w-full min-h-screen flex items-center justify-center bg-gradient-to-r">
        <div className="max-w-4xl w-full text-center space-y-6">
          <div className=" w-60 rounded-4xl bg-red-600 border">
            <button className="  rounded-4xl border bg-blue-700">New</button>
          </div>
          <h1 className=" text-4xl sm:text-5xl font-bold text-gray-200">
            Intelligent Automation for Modern Business
          </h1>
          <p className=" text-lg sm:text-xl  text-gray-200">
            Xtract bring AI automation to your fingertrip & streamline tasks.
          </p>
          <div className=" space-y-4">
            <div className=" flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-5 py-2  bg-white text-blue-600 rounded">
                Get in touch
              </button>
              <button className="px-5 py-2 sm:px-2 bg-blue-500 rouneded-lg hover:bg-blue-600 transition">
                View services
              </button>
            </div>
            <div className="relative w-full max-w-4xl overflow-hidden border-t pt-12 mt-12">
              <h1 className="text-3xl md:text-5xl font-semibold text-center mb-6">
                Over 50+ our business trust us
              </h1>
              <div className="w-full overflow-hidden relative">
                <div className="flex gap-8 animate-slide">
                  {/* Example animated images */}
                  {[...Array(3)].map((_, i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/photo-1750797636255-8c939940bcad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8${
                        i + 1
                      }`}
                      alt={`Slide ${i + 1}`}
                      className="w-40 h-40 object-cover rounded-xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
