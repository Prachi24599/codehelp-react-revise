import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post" //reference to Object ID
    },
    user : {
        type : String,
        required : true,
        maxLength : 50
    },
    body : {
        type : String,
        required : true,
        maxLength : 50
    }
});

export default mongoose.model("Comment", commentSchema);