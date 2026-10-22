import Comment from "../models/comment.js";
import Post from "../models/post.js";

const createComment = async (req, res) => {
    try{
        //fetch data from req.body
        const {post, user, body} = req.body;
        const comment = new Comment({
            post, user, body
        });
        //save the comment
        const savedComment = await comment.save();

        //Find post using ID and the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comments : savedComment._id}}, {new : true})
                                .populate("comments") //populate the comment array with comment documents   
                                .exec();
        res.status(200).json({
            success : true,
            post : updatedPost,
            message : "Post updated"
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

export default createComment;

// $push = update the Entry
// $pull = delete the entry
// new : true = send the updated document 