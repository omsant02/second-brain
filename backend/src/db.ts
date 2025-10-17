import mongoose, {model, Schema} from "mongoose";
mongoose.connect("mongodb+srv://omsantoshwar02:12211221@cluster0.km70cna.mongodb.net/second-brain")


const userSchema = new Schema({
    userName: {type: String, unique: true},
    password: String
})

const userModel = model("users", userSchema);

export {userModel}