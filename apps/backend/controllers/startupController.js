import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import Startup from "../models/Startup.model.js";

export const signupStartup = async (req, res) => {
  try {
    const { name, email, password, industry, stage, fundingGoal, description } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword, role: "startup" });

    const startup = await Startup.create({
      founder: newUser._id,
      name,
      industry,
      stage,
      fundingGoal,
      description,
    });

    res.status(201).json({ message: "Startup registered successfully", startupId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};