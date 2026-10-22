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
    likes : [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Like" 
    }],
    comments : [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Comment" 
    }]
});

export default mongoose.model("Post", postSchema);

//If we are referring one model from another then we are using Id's 
//using mongoose.Schema.Types.ObjectId