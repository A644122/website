import React, { useEffect, useState } from "react";
const SimpleText = ["Generate a  invoice", "Schedule a 30 day content", "Provide me  full report"];
const Assisments = () => {
  const [animatedText, setAnimatedText] = useState("");
  const [Index, setIndex] = useState(0);
  useEffect(() => {
    const Interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SimpleText.length);
    }, 2000);
    return () => clearInterval(Interval);
  }, []);
  useEffect(() => {
    setAnimatedText(SimpleText[Index]);
  }, [Index]);
  return (
    <>
      <div className="p-6 space-y-10 max-w-4xl mx-auto bg-black rounded-xl shadow-md mt-8">
        {/* First Block */}
        <div className="space-y-4 text-center">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            AI Assistant
          </button>
          <h1 className="text-3xl font-bold">DELIGATE DAILY TASKS</h1>
          <p className="text-gray-100">
            From managing celendars to drafting email and summarizing meeting,
            our AI assistants work around the clock to keep your business
            running smarter and faster.{" "}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Summaries
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              scheduiling
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Mant more
            </button>
          </div>
        </div>
        {/* Second Block */}
        <div className="bg-black p-6 rounded-lg space-y-6 text-center">
          {/* Video Animation or Placeholder Image */}
          <div className="w-full flex justify-center">
            <img
              src="https://media.giphy.com/media/xT0GqF9B9QrsAMz3Zq/giphy.gif"
              alt="animation"
              className="w-64 h-40 object-cover rounded shadow"
            />
          </div>

          <h1 className="text-2xl font-semibold  text-white">
            What can I help with?
          </h1>
          <p className="text-gray-100">
            Weather you want help in customer handling or make changes in yours
            system just give me command
          </p>

          {/* Input with Animated Placeholder */}
          <input
            type="text"
            placeholder={animatedText}
            className="w-full text-white md:w-2/3 mx-auto px-4 py-2 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />

          <button className="mt-4 bg-purple-300  text-white px-6 py-2 rounded hover:bg-purple-700 transition">
            send
          </button>
        </div>
      </div>
    </>
  );
};

export default Assisments;
