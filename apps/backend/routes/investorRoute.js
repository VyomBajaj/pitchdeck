import express from "express";
import { signupInvestor } from "../controllers/investorController.js";

const router = express.Router();

router.post("/signup", signupInvestor);

export default router;