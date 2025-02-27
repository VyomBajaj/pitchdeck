// import jwt from "jsonwebtoken";
// import User from "../models/User.model.js";

// export const authMiddleware = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) return res.status(401).json({ message: "No token provided" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.id).select("-password");
    
//     if (!req.user) return res.status(403).json({ message: "User not found" });
    
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: "Invalid token", error: error.message });
//   }
// };

// import jwt from "jsonwebtoken";

// export const authenticateUser = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized - Token missing" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     console.log("Decoded Token:", decoded); // Debugging ke liye
//     next();
//   } catch (error) {
//     console.error("JWT Error:", error.message);
//     return res.status(403).json({ message: "Invalid or Expired Token" });
//   }
// };

import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const authenticateUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken; // Extract token from cookies

    if (!token) return res.status(401).json({ message: "Unauthorized - Token missing" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) return res.status(403).json({ message: "User not found" });

    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or Expired Token", error: error.message });
  }
};
