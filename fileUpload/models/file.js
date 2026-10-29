import mongoose from "mongoose";
import transporter from "../config/nodeMailer.js";


const fileSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    imageUrl : {
        type : String
    },
    tags : {
        type : String
    },
    email : {
        type : String
    }
})

//post middleware
//doc is the entry which is saved in database
fileSchema.post("save", async function (doc){
    try{
        console.log("DOC", doc);

        let info = transporter.sendMail({
            from: "Codehelp fileUpload Project",
            to: doc.email,
            subject: "New file uploaded on cloudinary!",
            html: `<h2>Hello</h2> <p>File is uploaded</p> View here <a href="${doc.imageUrl}">Image</a>`
        })
        console.log("Info", info);
    }catch(err){
        console.log("Error", err);
    }
})

export default mongoose.model("File", fileSchema);