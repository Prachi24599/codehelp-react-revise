import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected successfully!")
    } catch (err) {
        console.error("Database connection failed:", err);
        throw err;
    }
}

export default dbConnect;
