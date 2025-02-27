import express from "express";
import {getAllStartups} from "../controllers/getStartupController.js";

const router = express.Router();

router.get("/getStartup", getAllStartups); // Fetch all startups


export default router;