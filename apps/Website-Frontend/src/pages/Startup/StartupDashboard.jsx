import React from "react";
import StartupNavbar from "../Startup/StartupNavbar";
import { FaEye, FaThumbsUp, FaShareAlt } from "react-icons/fa";

const pitchVideo = "https://youtu.be/ofK-RsVMNa0?si=c9pOroefEzqqXN7q";
const videoStats = {
  views: 200,
  likes: 50,
  shares: 30,
};

const investors = [
  "Investor 1",
  "Investor 2",
  "Investor 3",
  "Investor 4",
  "Investor 5",
];

const StartupDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white">
      <StartupNavbar />
      <div className="grid grid-cols-3 gap-4 p-8">
        {/* Pitch Video Section */}
        <div className="col-span-2 bg-blue-600 p-10 rounded-lg shadow-lg text-center">
          {pitchVideo ? (
            <video controls className="w-full rounded-lg mb-4">
              <source src={pitchVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="mb-4">
              <p className="text-xl font-bold">No Pitch Video Posted Yet!</p>
              <button className="bg-green-500 px-6 py-2 rounded-lg mt-4 hover:bg-green-400">
                Complete Profile
              </button>
            </div>
          )}

          {pitchVideo && (
            <div className="flex justify-around mt-6">
              <div className="text-center">
                <FaEye size={30} className="mb-2" />
                <p>{videoStats.views} Views</p>
              </div>
              <div className="text-center">
                <FaThumbsUp size={30} className="mb-2" />
                <p>{videoStats.likes} Likes</p>
              </div>
              <div className="text-center">
                <FaShareAlt size={30} className="mb-2" />
                <p>{videoStats.shares} Shares</p>
              </div>
            </div>
          )}
        </div>

        {/* Investors Section */}
        <div className="bg-blue-700 p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-xl font-bold text-center mb-4">Investors Who Viewed</h2>
          {investors.map((investor, index) => (
            <p key={index}>{investor}</p>
          ))}
          <div className="text-center mt-4">
            <button className="bg-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-400">
              Subscribe to Premium for Details
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-center py-4 mt-8">
        <p>&copy; 2024 Mentor Connect. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default StartupDashboard;
