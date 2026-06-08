import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({
            "message": "unauthorized"
        })
    }

    const token = authHeader.split(" ")[1]
    const decoded = verifyToken(token);

    (req as any).user = decoded;

    next();
}