import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async () => {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log("DB is Connected...")
    }).catch((err) => {
        console.log(`Error while connecting to DB`, err);
        process.exit(1);
    })
}

export default dbConnect;