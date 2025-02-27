import React from "react";
import { FaUserCircle } from 'react-icons/fa';

const UserNavBar = () => {
  const hardcodedName = "Raghvi";

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-lg backdrop-blur-md w-full">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        {/* Logo or Brand Name */}
        <div className="text-white text-2xl font-bold">
          PitchDeck
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6 md:space-x-8">
          <li>
            <a href="/" className="text-white font-medium hover:text-blue-300 transition duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white font-medium hover:text-blue-300 transition duration-200">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white font-medium hover:text-blue-300 transition duration-200">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/communityPage" className="text-white font-medium hover:text-blue-300 transition duration-200">
              Community
            </a>
          </li>
          <li>
            <a href="/faq" className="text-white font-medium hover:text-blue-300 transition duration-200">
              FAQs
            </a>
          </li>
        </ul>

        {/* User Profile */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="/view_startup_profile" className="flex items-center space-x-4 hover:text-blue-300 transition duration-200">
            <FaUserCircle className="text-2xl text-white" />
            <span className="text-white font-medium">Hello, {hardcodedName}!</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default UserNavBar;
