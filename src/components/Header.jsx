import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import ConnecstWallet from "./ConnectsWallet";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-gray-900 text-white flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold">Web3</div>
        {/* Menu Toggle Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 mt-2">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400 mt-2">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 mt-2">
            Contact
          </Link>
          <Link to="/blog" className="hover:text-yellow-400 mt-2">
            Blog
          </Link>
          {/* <button className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400 hidden md:inline-flex">
            <ConnecstWallet />
          </button> */}
          <div className="  hidden md:visible md:inline-flex ">
            <ConnecstWallet />
          </div>
        </nav>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-start p-4 space-y-4 md:hidden z-50">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
            <div className=" sm:visible md:hidden ">
              <ConnecstWallet />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
