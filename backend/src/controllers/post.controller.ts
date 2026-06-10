import { Request, Response } from "express";
import * as postService from "../services/post.service"

export const createPost = async (req: Request, res: Response) => {
    const {title, content} = req.body

    const post = await postService.createPost(title, content, req.user!.userId)

    res.status(201).json({
        post
    })
}

export const getAllPosts = async (req: Request, res: Response) => {
    const posts = await postService.getAllPosts()

    res.json({
        posts
    })
}

export const getPostById = async (req: Request, res: Response) => {
    const postId  = Number(req.params.id)
    const post = await postService.getPostById(postId)

    if (!postId) {
        return res.status(404).json({
            "message": `Post with id: ${postId} does not exist.`
        })
    }

    res.json({
        post
    })
}

export const updatePost = async (req: Request, res: Response) => {
    const postId = Number(req.params.id)
    const data = req.body
    const userId = Number(req.user?.userId)
    const post = await postService.updatePost(postId, userId, data)

    res.json({
        "updated post": post
    })
}

export const deletePost = async (req: Request, res: Response) => {
    const postId = Number(req.params.id)
    const userId = Number(req.user?.userId)

    const post = await postService.deletePost(postId, userId)

    res.json({
        "message": "post deleted"
    })
}