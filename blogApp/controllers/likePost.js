import mongoose from "mongoose";
import Like from "../models/like.js";
import Post from "../models/post.js";

const likePost = async (req, res) => {
    try{
        const {user, id: postId} = req.body;

        // if (!user || !postId) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "Both user and post id are required"
        //     });
        // }

        // if (!mongoose.isValidObjectId(postId)) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "Invalid post id"
        //     })
        // }

        //1. Find If the post exits with given Id
        const post = await Post.findById(postId);
        if(!post){ //post not found
            return res.status(400).json({
                success : false,
                message : "Post does not exits!"
            })
        }
        //If post exits
        const like = await Like.create({user});
        post.likes.push(like._id);
        await post.save();

        res.status(201).json({
            success : true,
            data : {like, post},
            message : "Post liked successfully"
        })
    }
    catch(err){
        console.log("Error ==>", err);
        res.status(500).json({
            success : false,
            data : "Internal Server Error",
            message : err.message
        })
    }
}

export default likePost;