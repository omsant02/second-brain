import express from "express"
// import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import * as z from 'zod'
import bcrypt from "bcrypt"
import { contentModel, userModel } from "./db.js";
import { JWT_SECRET } from "./config.js";
import { userMiddleware } from "./middleware.js";

const app = express();
app.use(express.json())

if (!process.env.SECRET) {
    throw new Error("SECRET environment variable is not defined");
}

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

    const token = jwt.sign({
        id: user._id
    }, JWT_SECRET)
    res.json({
        token: token,
        message: "User signed in"
    })

})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const { link, type } = req.body

    const response = await contentModel.create({
        link, type, userId: req.userId, tags: []
    })

    if(response) {
        res.json({
            message: "content added"
        })
    }
})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const content = await contentModel.find({
        userId
    }).populate("userId", "userName")
    
    if(content) {
        res.json({
            content
        })
    }
})

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await contentModel.deleteMany({
        _id: contentId,
        userId: req.userId
    })

    res.json({
        message: "Content Deleted"
    })
})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})

app.listen(3000, () => {
    console.log("server is rtunning on port 3000");
})