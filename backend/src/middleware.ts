import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "./config.js";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"]
    const decodedInfo = jwt.verify(header as string, JWT_SECRET) as JwtPayload

    if (decodedInfo) {
        req.userId = decodedInfo.id;
        next()
    } else {
        res.status(403).json({
            message: "you are not logged in"
        })
    }
}