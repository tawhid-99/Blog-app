import { Router } from "express";
import * as authController from "../controllers/user.controller"

const router = Router()

router.post("/signup", authController.userSignUp)

router.post("/signin", authController.userLogin)

export default router