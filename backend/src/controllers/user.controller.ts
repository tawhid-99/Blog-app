import { Request, Response } from "express";
import * as authService from "../services/auth.service"

export const userSignUp = async (req: Request, res: Response) => {
    const {name, email, password} = req.body
    const user = await authService.userSignUp(name, email, password)

    res.status(201).json(user)
} 

export const userLogin = async (req: Request, res: Response) => {
    const {email, password} = req.body
    const user = await authService.userLogin(email, password)

    res.status(200).json(user)
}
