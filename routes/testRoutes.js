import express from "express";
import { testPostController } from "../controllers/testController.js";
import userAuth from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/test", userAuth, testPostController);

export default router;
