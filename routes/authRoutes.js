import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
import rateLimit from "express-rate-limit";

router.post("/register", registerController);
router.post("/login", loginController);

export default router;