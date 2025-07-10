import React from "react";
import Web from "../assets/Logo.jpg"; // Adjust the path as necessary
const Footers = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3">
        {/* Section: Logo, Paragraph, Heading, and Form */}
        <div>
          {/* Logo */}
          <div className="mb-4">
            <img src={Web} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Paragraph */}
          <p className="text-sm mb-4">
            X-tract-Automation Smarter,Optimize Faster,and Grow Stronger.
          </p>

          {/* Heading */}
          <h3 className="text-lg font-semibold mb-2">join our newsletter</h3>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md text-white focus:outline-none w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Section: Two ULs with H2 Headings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First List */}
          <div>
            <h2 className="text-xl font-bold mb-3">Pages</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
             
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Second List */}
          <div>
            <h2 className="text-xl font-bold mb-3">Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#Services" className="hover:underline">
                  Services 
                </a>
              </li>
              <li>
                <a href="#Process" className="hover:underline">
                  Process 
                </a>
              </li>
              <li>
                <a href="#Casestudies" className="hover:underline">
                  Casestudies
                </a>
              </li>
              <li>
                <a href="#Benifits" className="hover:underline">
                  Benifits 
                </a>
              </li>
              <li>
                <a href="#Pricing " className="hover:underline">
                  Pricing 
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Section: Social Media Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f">Facebook</i>
            </a>
            <a
              href="https://www.twitter.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-twitter">Twitter</i>
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram">instagram</i>
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
      </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footers;
