import React from 'react';

const ContributorProfile = () => {
  const contributor = {
    name: "Raghvi Gupta",
    role: "Contributor",
    email: "raghvi@example.com",
    bio: "Passionate about technology and contributing to open source projects."
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-blue-700 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Contributor Profile</h2>
      <div className="text-center">
        <div className="text-6xl text-blue-300 mb-4">👤</div>
        <h3 className="text-2xl font-semibold text-white">{contributor.name}</h3>
        <p className="text-blue-300">{contributor.role}</p>
        <p className="text-blue-400 mt-2">{contributor.email}</p>
        <p className="mt-4 text-blue-200">{contributor.bio}</p>
      </div>
      <div className="flex justify-center">
  <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
    Edit Profile
  </button>
</div>

    </div>
  );
};

export default ContributorProfile;
