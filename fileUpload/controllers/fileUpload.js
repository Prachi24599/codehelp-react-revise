import File from "../models/file.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
//local file upload take the media from clients pc and store it in the server path
const localFileUpload = async(req, res) => {
    try{
        //Fetch file from request
        const file = req?.files?.file;
        console.log("File => ", file);

        //defining a path to store file on server
        // let path = __dirname + "/files/" + Date.now(); - __dirname does not work under ES

        const uploadPath = path.join(__dirname, "files", String(Date.now()) + `.${file.name.split('.')[1]}`);
        console.log("path", uploadPath);

        //add path to the move function
        await file.mv(uploadPath, (err) => {
            console.log("Error while saving file", err);
        });

        //create successful response
        res.status(200).json({
            success : true,
            message : "Local file uploaded successfully!"
        })

    }catch(err) {
        console.log("err", err);
        res.status(500).json({
             success : false,
            data : err.message,
            message : `Server Error!!`
        })
    }
}   

export default localFileUpload;