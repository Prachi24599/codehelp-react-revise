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

const fetchAllPost = async (req, res) => {
    try{
        const result = await Post.find({});
        res.status(200).json({
            success : true,
            data : result,
            message : "All posts fetched!!"
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

export {createPost, fetchAllPost};