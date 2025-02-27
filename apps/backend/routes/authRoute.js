import express from "express";
import { login, logout } from "../controllers/authController.js";

const router = express.Router();

// Login Route (Common for all users)
router.post("/login", login);

// Logout Route (Handled in frontend, just a response)
router.post("/logout", logout);

export default router;