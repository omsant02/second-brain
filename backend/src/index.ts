import express from "express"
// import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import * as z from 'zod'
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import { userModel } from "./db.js";

dotenv.config()

const app = express();
app.use(express.json())

if (!process.env.SECRET) {
    throw new Error("SECRET environment variable is not defined");
}
const JWT_SECRET = process.env.SECRET;

//-------------------------------------------

const requiredBody = z.object({
    userName: z.string(),
    password: z.string()
})
type requiredBody = z.infer<typeof requiredBody>

//--------------------------------------------------

app.post("/api/v1/signup", async (req, res) => {

    const result = requiredBody.safeParse(req.body);
    if (!result.success) {
        res.json({
            message: "incorrect format"
        })
        return
    }

    const { userName, password }: requiredBody = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const response = await userModel.create({
            userName,
            password: hashedPassword
        })

        if (response) {
            res.json({
                message: "User signed up"
            })
        }
    } catch (error) {
        res.json({
            message: error
        })
    }
})

app.post("/api/v1/signin", async (req, res) => {
    const result = requiredBody.safeParse(req.body);
    if (!result.success) {
        res.json({
            message: "incorrect format"
        })
        return
    }
    const { userName, password }: requiredBody = req.body;

    const user = await userModel.findOne({
        userName
    })

    if (!user || typeof user.password !== "string") {
        res.status(401).json({
            message: "invalid credentials"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        res.status(401).json({
            message: "invalid credentials"
        })
        return
    }

    const token = jwt.sign({userName}, JWT_SECRET)
    res.json({
        token: token
    })

})

app.post("/api/v1/content", (req, res) => {

})

app.get("/api/v1/content", (req, res) => {

})

app.delete("/api/v1/content", (req, res) => {

})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})

app.listen(3000, () => {
    console.log("server is rtunning on port 3000");
})