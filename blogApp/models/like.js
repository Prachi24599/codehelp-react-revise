import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    user : {
        type : String,
        required : true,
        maxLength : 50
    }
});

export default mongoose.model("Like", likeSchema);