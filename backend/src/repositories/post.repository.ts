import { prisma } from "../config/prisma"

export const getAllPosts = async () => {
    return prisma.post.findMany({
        include: {
            author: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
}

export const getPostById = async (id: number) => {
    return prisma.post.findUnique({
        where: {id},
        include: {
            author: true
        }
    })
}

export const createPost = async (title: string, content: string, authorId: number) => {
    return prisma.post.create({
        data: {
            title,
            content,
            authorId
        }
    })
}

export const updatePost = async (id: number, title?: string, content?: string) => {
    return prisma.post.update({
        where: {id},
        data: {title, content}
    })
}

export const deletePost = async (id: number) => {
    return prisma.post.delete({
        where: {id}
    })
}