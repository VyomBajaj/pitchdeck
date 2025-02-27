import React from "react";
import { FaUserCircle } from 'react-icons/fa';

const InvestorProfile = () => {
  const hardcodedName = "Investor";
  const hardcodedEmail = "investor@example.com";
  const hardcodedCompany = "Global Investments Inc.";

  return (
    <div className="max-w-4xl mx-auto bg-blue-700 shadow-lg rounded-lg p-8 mt-10">
      <div className="flex flex-col items-center">
        <FaUserCircle className="text-6xl text-blue-300 mb-4" />
        <h2 className="text-3xl font-semibold text-white">{hardcodedName}</h2>
        <p className="text-blue-300">{hardcodedEmail}</p>
        <p className="text-blue-400">{hardcodedCompany}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-white mb-4">About Investor</h3>
        <p className="text-blue-200">
          {hardcodedName} is a prominent investor at {hardcodedCompany}, specializing in funding innovative startups and projects in the tech industry.
        </p>
      </div>
      <div className="flex justify-center">
  <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
    Edit Profile
  </button>
</div>

    </div>
  );
};

export default InvestorProfile;