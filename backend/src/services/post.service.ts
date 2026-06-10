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

export const updatePost = async (postId: number, userId: number, data: {title?: string, content?: string}) => {
    const post = await getPostById(postId)

    if (!post) {
        throw new Error("Post not found")
    }

    if (post.authorId !== userId) {
        throw new Error("unauthorized")
    }
    return postRespository.updatePost(postId, data)
}

export const deletePost = async (postId: number, userId: number) => {
    const post = await getPostById(postId)

    if (!postId) {
        throw new Error("post not found")
    }

    if (post?.authorId !== userId) {
        throw new Error("unauthorized")
    }
    return postRespository.deletePost(postId)
}