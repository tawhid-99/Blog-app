import { Router } from "express";
import * as authController from "../controllers/user.controller"
import { authenticate } from "../middlewares/auth.middleware";

const router = Router()

router.post("/signup", authController.userSignUp)

router.post("/signin", authController.userLogin)

router.get("/me", authenticate, authController.me)

export default router