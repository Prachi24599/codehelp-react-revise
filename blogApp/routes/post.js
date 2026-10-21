import express from "express";
import {createPost, fetchAllPost} from "../controllers/createPost.js";
import likePost from "../controllers/likePost.js";
import unlikePost from "../controllers/unlikePost.js";

const router = express.Router();


//create post
router.post("/post/create", createPost);
//fetch all post
router.get("/posts", fetchAllPost);
//like post
router.post("/likes/like", likePost);
//unlike post
router.post("/unlike/like", unlikePost);
// //create comment
// router.post("/comments/create");
// //Retreive comment
// router.get("/comments");


export default router;