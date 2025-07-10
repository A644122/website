import React from "react";

const WorkflowAutomation = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="max-w-2xl w-full text-center space-y-6">
          <button className="bg-black border  text-white px-9 py-3 rounded-xl shadow hover:bg-blue-700 transition-all duration-300">
            Workflow Automation
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
          Automate repetitive tasks
          </h1>
          <p className="text-base md:text-lg text-gray-100">
          We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains  saving time and cutting down errors.
          </p>
          <button className=" border sm:rounded-md mx-4 text-black px-2 py-3 rounded-xl shadow hover:bg-blue-700 transition-all duration-300">
            Internal Task Bots
          </button>
          <button className="border sm:rounded-md  text-white  px-9 py-3 rounded-xl shadow hover:bg-blue-700 transition-all duration-300">
            100+ Automations
          </button>
        </div>
      </section>
    </>
  );
};

export default WorkflowAutomation;
