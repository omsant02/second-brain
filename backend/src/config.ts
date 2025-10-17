import dotenv from "dotenv"
dotenv.config()

if (!process.env.DB) {
    throw new Error("DB environment variable is not defined");
}
const DB_SECRET = process.env.DB;

if (!process.env.SECRET) {
    throw new Error("SECRET environment variable is not defined");
}
const JWT_SECRET = process.env.SECRET;

export {DB_SECRET, JWT_SECRET}