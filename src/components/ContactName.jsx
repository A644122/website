import React, { useState } from "react";
import Footers from "./Footers";

const ContactName = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Simulate sending message
    alert("Message sent successfully!");

    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
    <div className="w-full max-w-6xl mx-auto p-6 flex flex-col lg:flex-row gap-10">
      {/* First Div */}
      <div className="flex-1 space-y-5">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300">
          Contact Us
        </button>
        <h2 className="text-3xl font-bold text-gray-100">Get in Touch</h2>
        <p className="text-white">
          We'd love to hear from you. Please fill out the form, and we will get
          back to you as soon as possible.
        </p>
      </div>

      {/* Second Div: Contact Form */}
      <div className="flex-1 bg-gray-50 p-6 rounded-2xl shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email link (mailto) */}
          <div>
            <label className="block  text-black font-medium">
              Quick Email Link
            </label>
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:underline"
            >
              support@example.com
            </a>
          </div>

          {/* Phone link (tel) */}
          <div>
            <label className="block text-gray-100 font-medium">
              Quick Call
            </label>
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              +1 234 567 890
            </a>
          </div>

          {/* Full Name */}

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className=" text-black flex-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className=" text-black flex-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className=" text-black w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Phone Number input */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className=" text-black w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Message input */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className=" text-black w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
        <Footers/>
        
        </>
  );
};

export default ContactName;
