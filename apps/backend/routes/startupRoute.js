import express from "express";
import { signupStartup } from "../controllers/startupController.js";

const router = express.Router();

router.post("/signup", signupStartup);

export default router;