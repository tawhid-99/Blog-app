import { Router } from "express";
import  * as postController from "../controllers/post.controller"
import { authenticate } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { createPostSchema, updatePostSchema } from "../validators/post.validator";

const router = Router()

router.get("/", postController.getAllPosts)
router.get("/:id", postController.getPostById)
router.post("/", authenticate, validate(createPostSchema), postController.createPost)
router.put("/:id", authenticate, validate(updatePostSchema),  postController.updatePost)
router.delete("/:id", authenticate,  postController.deletePost)

export default router