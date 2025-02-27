import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword, role: "general" });

    res.status(201).json({ message: "General User registered successfully", userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) return res.status(400).json({ message: "Invalid Credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

//     res.status(200).json({ token, userId: user._id, role: user.role });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error });
//   }
// };

// export const logout = async (req, res) => {
//     try {
//       res.status(200).json({ message: "Logout successful" });
//     } catch (error) {
//       res.status(500).json({ message: "Server Error", error });
//     }
//   };