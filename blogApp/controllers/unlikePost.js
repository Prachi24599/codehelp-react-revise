import mongoose from "mongoose";
import Like from "../models/like.js";
import Post from "../models/post.js";

const unlikePost = async (req, res) => {
    try{
        const {likeId, postId} = req.body ?? {};

        if (!likeId || !postId) {
            return res.status(400).json({
                success: false,
                message: "Both likeId and postId are required"
            });
        }

        if (!mongoose.isValidObjectId(likeId) || !mongoose.isValidObjectId(postId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid likeId or postId"
            });
        }

        const post = await Post.findById(postId);
        if(!post){
            return res.status(400).json({
                success : false,
                message : "Post does not exist"
            });
        }

        const updatedPost = await Post.findOneAndUpdate(
            { _id: postId, likes: likeId },
            { $pull: { likes: likeId }},
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                message: "Like not found on this post"
            });
        }

        await Like.deleteOne({ _id: likeId });

        return res.status(200).json({
            success: true,
            data: updatedPost,
            message: "Post unliked successfully"
        });
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

export default unlikePost;