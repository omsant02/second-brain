import mongoose, {model, Schema} from "mongoose";
import dotenv from "dotenv"

dotenv.config()

if (!process.env.DB) {
    throw new Error("SECRET environment variable is not defined");
}
const db_SECRET = process.env.DB;

mongoose.connect(db_SECRET)


const userSchema = new Schema({
    userName: {type: String, unique: true},
    password: String
})

const userModel = model("users", userSchema);

export {userModel}