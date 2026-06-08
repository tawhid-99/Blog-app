import {z} from "zod"

export const sigupSchema = z.object({
    name: z.string().min(3),
    email: z.email(),
    password: z.string().min(6)
})

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(6)
})

export type sigupSchema = z.infer<typeof sigupSchema>
export type loginSchema = z.infer<typeof loginSchema>