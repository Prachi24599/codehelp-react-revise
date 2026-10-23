import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("DB connected successfully")
    }).catch((err) => {
        console.log("Err while connecting Db", err);
    })
}

export default dbConnect;