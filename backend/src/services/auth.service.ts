import { createUser, findByEmail } from "../repositories/user.repository";
import { hashPassword, verifyPassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";

export const userSignUp = async (name: string, email: string, password: string) => {

    const exitsingUser = await findByEmail(email)

    if (exitsingUser) {
        throw new Error("User already exists.")
    }

    const hashedPassword = await hashPassword(password)

    const user = await createUser(name, email, hashedPassword)

    return {
        id: user.id,
        name: user.name,
        email: user.email
    }
}

export const userLogin = async (email: string, password: string) => {
    const user = await findByEmail(email)

    if (!user) {
        throw new Error("User does not exist.")
    }

    const verifyPass = await verifyPassword(password, user.password)

    if (!verifyPass) {
        throw new Error("Invalid credentials.")
    }

    const token = generateToken(user.id)

    return {
        token
    }
}