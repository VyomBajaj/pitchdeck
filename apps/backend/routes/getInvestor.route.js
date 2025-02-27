import express from "express";
import {getAllInvestors} from "../controllers/getInvestorController.js";

const router = express.Router();

router.get("/getInvestor", getAllInvestors); // Fetch all startups


export default router;