import React, { useState } from "react";
const faqs = [
  {
    question: "How can AI automation help my business?",
    answer:
      "AI automation elimitites repititives takes,improes efficiency,and reduces srrors.it allow your team to focus on high-value work while increasing productivity and lowering operational cost.",
  },
  {
    question: "Is AI automation difficult to integrate ?",
    answer:
      "No! Our AI solution are design for seamless integration with your existing tools and workflows. We provide step-by-step guidance to ensurea smooth and hassle-free setup.",
  },
  {
    question: "What industries  can benifit from AI automation?",
    answer:
      "AI automation is versatile and can benefit a wide range of industries, including healthcare, finance, e-commerce, manufacturing, and more. Whether you're in customer service, data analysis, or process optimization, AI can enhance your operations.",
  },
  {
    question: "DO I need texhnical knowledge to use AI automation?",
    answer:
      "Not at all! Our platform is user-friendly and built for all skill level. We provide onboarding resources, tutorials, and customer support to help you get started without any technical expertise.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support, including documentation, tutorials, and a dedicated customer support team. Whether you have questions during setup or need assistance with advanced features, we're here to help.",
  },
];
const Faquestion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="max-w-2xl w-full text-center space-y-6">
          <button className="bg-blue-300  text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition-all duration-300">
            FQSs
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
            We've Got the Answers your' Loking For
          </h1>
          <p className="text-base md:text-lg text-gray-100">
            Quick answers to your AI automation questions
          </p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-10 text-white">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-4 flex justify-between items-center bg-gray-600 hover:bg-gray-800 focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-900 bg-white border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="  bg-gradient-to-bl to-purple-800 from-purple-950 bg-gray-900 py-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Let AI do the Work so you can Scal Faster?</h2>
          <p className=" text-white mb-6">
            Book A Call Today and Start Automation 
          </p>
          <button className="bg-purple-900 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all">
            Book a fre call 
          </button>
        </div>

      </section>
    </>
  );
};

export default Faquestion;
