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

const userModel = model("users", userSchema);
const contentModel = model("contents", contentSchema);

export {userModel, contentModel}