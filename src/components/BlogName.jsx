import React from 'react';

const BlogName = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 space-y-10">
      {/* First Div */}
      <div className="text-center space-y-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">
           Blogs
        </button>
        <h2 className="text-3xl font-bold text-gray-100">Unlock AI Insights with Us</h2>
        <p className="text-gray-100 max-w-2xl mx-auto">
        Stay informed with the latest AI trends, insights, and strategies to drive innovation and business growth.
        </p>
      </div>

      {/* Second Div with 3 Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3,4].map((item) => (
          <div
            key={item}
            className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col items-center text-center p-4 space-y-4"
          >
            <img
              src={`https://plus.unsplash.com/premium_photo-1672088819323-0dd6b822b027?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${item}`}
              alt={`Blog ${item}`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <button className="px-4 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              Article
            </button>
            <h3 className="text-xl font-semibold text-gray-800">Blog Post Title {item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogName;
