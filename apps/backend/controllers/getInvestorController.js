import User from "../models/User.model.js";

// Get all investors
export const getAllInvestors = async (req, res) => {
  try {
    const investor = await User.find({role:"investor"});
    res.status(200).json(investor);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};