import Investor from "../models/Investor.model.js";

export const authorizeInvestor = async (req, res, next) => {
  try {
    const investor = await Investor.findOne({ user: req.user.id });

    if (!investor) {
      return res.status(403).json({ message: "Access Denied: Investor profile not found" });
    }

    req.investor = investor; // Attach investor profile
    next();
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};