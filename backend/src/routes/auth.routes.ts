import { Router } from "express";
import * as authController from "../controllers/user.controller"
import { authenticate } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import {loginSchema, signupSchema} from "../validators/auth.validator"

const router = Router()

router.post("/signup", validate(signupSchema), authController.userSignUp)

router.post("/signin", validate(loginSchema), authController.userLogin)

router.get("/me", authenticate, authController.me)

export default router