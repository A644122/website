import React from "react";

const SalseMarketing = () => {
  return (
    <>
      <div className="p-6 space-y-10 max-w-4xl mx-auto bg-black rounded-xl shadow-md mt-8">
        {/* First Block */}
        <div className="space-y-4 text-center">
          <button className="border sm:rounded-md   text-white  px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Salse & Marketing
          </button>
          <h1 className="text-3xl font-bold  text-white">
            Accelerate Salse Growth
          </h1>
          <p className="text-gray-100">
            AI tools for lead generation, personalized outreach, and automated
            content creation that scales your sales efforts and builds stronger
            brand presence.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className=" border sm:rounded-md bg-blue-500 text-white px-4 py-2 rounded">
              Leads
            </button>
            <button className=" bg-black border-2 sm:rounded-md text-white px-4 py-2 rounded">
              Content
            </button>
            <button className=" bg-black border sm:rounded-md text-white px-4 py-2 rounded">
              Social post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalseMarketing;
