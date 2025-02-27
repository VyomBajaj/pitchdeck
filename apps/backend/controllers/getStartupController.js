import Startup from "../models/Startup.model.js";

// Get all startups
export const getAllStartups = async (req, res) => {
  try {
    const startups = await Startup.find();
    res.status(200).json(startups);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
