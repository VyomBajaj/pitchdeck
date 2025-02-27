import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import Investor from "../models/Investor.model.js";

export const signupInvestor = async (req, res) => {
  try {
    const { name, email, password, investmentStage, investmentAmount, industries } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword, role: "investor" });

    const investor = await Investor.create({
      user: newUser._id,
      investmentStage,
      investmentAmount,
      industries,
    });


    res.status(201).json({ message: "Investor registered successfully", investorId: investor._id });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};