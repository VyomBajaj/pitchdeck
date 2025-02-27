// // export const filterStartups = async (req, res) => {
// //     try {
// //       if (req.user.role !== "investor") {
// //         return res.status(403).json({ message: "Access denied" });
// //       }
  
// //       const { industries, interestedTags } = req.user; // Update to req.user instead of req.investor
  
// //       const filteredStartups = await Startup.find({
// //         industry: { $in: industries },
// //         tags: { $in: interestedTags },
// //       }).populate("founder", "name email");
  
// //       if (!filteredStartups.length) {
// //         return res.status(404).json({ message: "No matching startups found" });
// //       }
  
// //       res.status(200).json({ startups: filteredStartups });
// //     } catch (error) {
// //       res.status(500).json({ message: "Server Error", error: error.message });
// //     }
// //   };


// import Startup from "../models/Startup.model.js";

// export const filterStartups = async (req, res) => {
//   try {
//     if (req.user.role !== "investor") {
//       return res.status(403).json({ message: "Access denied" });
//     }

//     const { interests, preferredFundingStage } = req.user;

//     const filteredStartups = await Startup.find({
//       $or: [
//         { industry: { $in: interests } },
//         { tags: { $in: interests } },
//         { fundingStage: { $in: preferredFundingStage } },
//       ],
//     }).populate("founder", "name email");

//     if (!filteredStartups.length) {
//       return res.status(404).json({ message: "No matching startups found" });
//     }

//     res.status(200).json({ startups: filteredStartups });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };

import Startup from "../models/Startup.model.js";
import Investor from "../models/Investor.model.js";

export const filterStartups = async (req, res) => {
  try {
    // Ensure only investors can access
    if (req.user.role !== "investor") {
      return res.status(403).json({ message: "Access denied" });
    }

    // Fetch investor details from database
    const investor = await Investor.findOne({ user: req.user._id });

    if (!investor) {
      return res.status(404).json({ message: "Investor profile not found" });
    }

    const { industries, investmentStage } = investor;

    // Ensure industries & investmentStage are arrays
    if (!Array.isArray(industries) || !industries.length) {
      return res.status(400).json({ message: "Investor industries not found" });
    }
    if (!Array.isArray(investmentStage) || !investmentStage.length) {
      return res.status(400).json({ message: "Investor investment stage not found" });
    }

    // Find startups that match investor preferences
    const filteredStartups = await Startup.find({
      $or: [
        { industry: { $in: industries } }, // Match industries
        { stage: { $in: investmentStage } }, // Match funding stage
        { tags: { $in: industries } }, // Match tags based on industry
      ],
    }).populate("founder", "name email");

    if (!filteredStartups.length) {
      return res.status(404).json({ message: "No matching startups found" });
    }

    res.status(200).json({ startups: filteredStartups });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
  