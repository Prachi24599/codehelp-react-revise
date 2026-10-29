import path from "node:path";
import {v2 as cloudinary} from "cloudinary";
import File from "../models/file.js";

function isFileTypeSupported(fileType, supportedType){
    return supportedType.includes(fileType);
}

async function uploadFileToCloudinary(file, folder) {
    const options = {
        folder,
        resource_type : "video" //by default cloudinary treat as images so for videos we need to specify this tag
    };
    console.log("in upload cloudinary fun", file.tempFilePath, folder);
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

const videoUpload = async (req, res) => {
    try{
        //fetch data
        const {name, email, tags} = req.body;
        const file = req?.files?.videoFile;
        console.log("Data in Req", name, email, tags, file);

        if (!file || Array.isArray(file)) {
            return res.status(400).json({
                success: false,
                message: "Please upload one file using the 'videoFile' field."
            });
        }

        //Validation - validate supported types
        const supportedType = ["mp4", "mov"];
        //extname returns .png, and using slice(1) we are removing the .
        const fileType = path.extname(file.name).slice(1).toLowerCase();
        console.log(fileType);

        //If fileType does not support
        if(!isFileTypeSupported(fileType, supportedType)){
            return res.status(500).json({
                success : false,
                message : "File type is not supported"
            })
        }

        //If fileType supported
        //upload to cloudinary
        const response = await uploadFileToCloudinary(file, "codehelp");
        console.log("Video uploaded to cloudinary", res);

        //save to database
        const saveDb = await File.create({
            name, email, tags, imageUrl: response.secure_url
        })

        res.status(200).json({
            success : true,
            data : saveDb,
            message : "File uploaded and saved in db successfully"
        })
    }catch(err){
        console.error("Video upload failed:", err);
        res.status(500).json({
            success : false,
            data : err.message,
            message : `Server Error!!`
        })
    }
}   

export default videoUpload;