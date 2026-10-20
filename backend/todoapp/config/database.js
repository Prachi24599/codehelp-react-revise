import dotenv from "dotenv";
dotenv.config();
const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log("DB Connection Successful!")
    }).catch((err) => {
        console.log("Error", err);
        process.exit(1);
    })
}

export default dbConnect;