// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/User.model.js";

// /**
//  * User Login - Handles General Users, Startups, and Investors
//  */
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) return res.status(400).json({ message: "Invalid Credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

//     // Generate JWT Token
//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    

//     res.status(200).json({ token, userId: user._id, role: user.role });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error });
//   }
// };

// /**
//  * User Logout - Clears Token on Client Side (Handled in Frontend)
//  */
// export const logout = async (req, res) => {
//   try {
//     res.status(200).json({ message: "Logout successful" });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error });
//   }
// };

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

/**
 * User Login - Handles General Users, Startups, and Investors with JWT Cookies
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid Credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Cookie Options
    const cookieOptions = {
      httpOnly: true,  // Prevents XSS attacks
      secure: process.env.NODE_ENV === "production",  // Enables HTTPS in production
      sameSite: "strict",  // Prevents CSRF attacks
      maxAge: 24 * 60 * 60 * 1000,  // 1 day expiry
    };

    // Set Cookie and Send Response
    res.cookie("jwtToken", token, cookieOptions)
      .status(200)
      .json({ message: "Login Successful", user:user});
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

/**
 * User Logout - Clears Token from Cookies
 */
export const logout = async (req, res) => {
  try {
    res.clearCookie("jwtToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
