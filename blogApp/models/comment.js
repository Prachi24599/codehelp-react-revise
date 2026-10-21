import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user : {
        type : String,
        required : true,
        maxLength : 50
    },
    comment : {
        type : String,
        required : true,
        maxLength : 50
    }
});

export default mongoose.model("Comment", commentSchema);