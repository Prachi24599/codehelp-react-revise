// const cloudinary = require("cloudinary").v2;
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

const cloudinaryConnect = () => {
    try{
        cloudinary.config({
            cloud_name : process.env.CLOUD_NAME,
            api_key : process.env.API_KEY,
            api_secret : process.env.API_SECRET
        })
    }catch(err) {
        console.log("Error in cloudinary, ", err);
    }
}

export default cloudinaryConnect;