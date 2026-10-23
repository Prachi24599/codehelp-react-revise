import express from "express";
import dotenv from "dotenv";
dotenv.config();
import dbConnect from "../backend/todoapp/config/database.js";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json()); //middleware


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
dbConnect();