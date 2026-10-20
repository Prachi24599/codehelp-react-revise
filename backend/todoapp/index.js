import express from "express";
const app = express();
//load config from dotenv file
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//imports routes for todo api
import todoRoutes from "./routes/todo.js";
//mount the todo api route
// "Whenever a request starts with /api/v1, check the routes inside todoRoutes."
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log(`The app is ruuning on port ${PORT}`)
})

//db connection
import dbConnect from "./config/database.js";
dbConnect();

//add default route
app.get("/", (req, res) => {
    res.send("<h1>This is Homepage</h1>");
})