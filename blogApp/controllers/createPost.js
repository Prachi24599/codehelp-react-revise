import Post from "../models/post.js";

const createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        const postCreate = await Post.create({title, body});
        res.status(200).json({
            success : true,
            data : postCreate,
            message : "Post created successfully"
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

export default createPost;