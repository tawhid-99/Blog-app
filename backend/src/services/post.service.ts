import * as postRespository from "../repositories/post.repository"

export const getAllPosts = async () => {
    return postRespository.getAllPosts()
}

export const getPostById = async (id: number) => {
    return postRespository.getPostById(id)
}

export const createPost = async (title: string, content: string, userId: number) => {
    return postRespository.createPost(title, content, userId)
}

export const updatePost = async (id: number, title: string, content: string) => {
    return postRespository.updatePost(id, title, content)
}

export const deletePost = async (id: number) => {
    return postRespository.deletePost(id)
}