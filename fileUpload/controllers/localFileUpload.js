import path from "node:path";
import { fileURLToPath } from "node:url";

//__dirname does not support directly in commonJS
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//local file upload take the media from clients pc and store it in the server path
const localFileUpload = async(req, res) => {
    try{
        //Fetch file from request
        const file = req?.files?.file;
        if (!file || Array.isArray(file)) {
            return res.status(400).json({
                success: false,
                message: "Please upload a file using the 'file' field."
            });
        } 


        //defining a path to store file on server
        // let path = __dirname + "/files/" + Date.now(); - __dirname does not work under commonJS

        // const extension = path.extname(file.name);
        // const uploadPath = path.join(__dirname, "files", `${Date.now()}${extension}`);
        const uploadPath = path.join(__dirname, "files", String(Date.now()) + `.${file.name.split('.').at(-1)}`);
        console.log("uploadPath", uploadPath);

        //add path to the move function
        await file.mv(uploadPath);

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


