import React from "react";

const CustomProjects = () => {
  return (
    <>
      <div className="p-6 space-y-10 max-w-4xl mx-auto bg-white rounded-xl shadow-md mt-8">
        {/* First Block */}
        <div className="space-y-4 text-center">
          <button className="border sm:rounded-md   text-black  px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Custom Projects 
          </button>
          <h1 className="text-3xl font-bold text-black">
            Build Smarter Systems 
          </h1>
          <p className="text-gray-600">
          Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className=" border sm:rounded-md bg-blue-500 text-white px-4 py-2 rounded">
              Strategy 
            </button>
            <button className=" bg-black border-2 sm:rounded-md text-white px-4 py-2 rounded">
              Custom AI 
            </button>
            <button className=" bg-black border sm:rounded-md text-white px-4 py-2 rounded">
              Consulting 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomProjects;
