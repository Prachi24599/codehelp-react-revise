//create app
import express from "express";
const app = express();

//import dotenv
import dotenv from "dotenv";
dotenv.config();

//port
const PORT = process.env.PORT || 4000;

//add middleware
app.use(express.json());

//add file upload
import fileUpload from "express-fileupload";
app.use(fileUpload());

//connect with db
import dbConnect from "./config/database.js";
dbConnect();

//connect to cloudinary
import cloudinaryConnect from "./config/cloudinary.js";
cloudinaryConnect();

//mount api rount
import fileUploadRoutes from "./routes/fileUpload.js";
app.use("/api/v1/upload", fileUploadRoutes);

//run app
app.listen(PORT, () => {
    console.log("App is running on port", PORT);
})

//default route
app.get("/", (req, res) => {
    res.send("This is Home Page!");
})