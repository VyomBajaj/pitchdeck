import express from "express";
import { filterStartups } from "../controllers/startupFilterController.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/filter", authenticateUser, filterStartups); // Auth middleware added

export default router;