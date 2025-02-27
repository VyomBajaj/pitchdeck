import express from "express";
import User from "../models/User.model.js";
import { login, logout } from "../controllers/authController.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();


router.get("/user-details", authenticateUser, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        return res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
// Login Route (Common for all users)
router.post("/login", login);

// Logout Route (Handled in frontend, just a response)
router.post("/logout", logout);

export default router;