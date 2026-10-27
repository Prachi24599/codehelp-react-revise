import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log("Database connected successfully!")
    }).catch((err) => {
        console.log("Error", err);
        process.exit(1);
    })
}

export default dbConnect;
