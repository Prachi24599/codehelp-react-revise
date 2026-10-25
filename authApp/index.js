import express from "express";
import dotenv from "dotenv";
dotenv.config();
import dbConnect from "./config/database.js";
import user from "./routes/user.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json()); //middleware
app.use(cookieParser());
app.use("/api/v1", user);

dbConnect();
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
