import express from "express";
import { sendMessage, getChatMessages } from "../controllers/messageController.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authenticateUser, sendMessage);
router.get("/:chatId", authenticateUser, getChatMessages);

export default router;