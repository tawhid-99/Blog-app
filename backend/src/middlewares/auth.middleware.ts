import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

export interface JwtPayload {
    userId: number
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader?.startsWith("Bearer ")) {
            return res.status(401).json({
                "message": "unauthorized"
            })
        }

        const token = authHeader.split(" ")[1]
        const decoded = verifyToken(token) as JwtPayload

        req.user = decoded;

    next();   
    } catch (error) {
        return res.status(401).json({
            "message": "invalid token"
        })
    }
}