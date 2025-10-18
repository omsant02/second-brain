import mongoose, {model, Schema} from "mongoose";
import { DB_SECRET } from "./config.js";
mongoose.connect(DB_SECRET)

//------------------------------------------------------------


const userSchema = new Schema({
    userName: {type: String, unique: true},
    password: String
})

const contentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'tags'}],
    userId:  {type: mongoose.Types.ObjectId, ref: 'users', required: true }
})

const linkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'users', required: true, unique: true}
})

const userModel = model("users", userSchema);
const contentModel = model("contents", contentSchema);
const linkModel = model("links", linkSchema)

export {userModel, contentModel, linkModel}