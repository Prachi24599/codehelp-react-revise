import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        maxLength : 50
    },
    body : {
        type : String,
        required : true,
        maxLength : 50
    },
    likes : {
        type : [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }]
    },
    comment : {
        type : [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
    }
});

export default mongoose.model("Post", postSchema);