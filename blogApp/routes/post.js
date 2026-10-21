import express from "express";
import createPost from "../controllers/createPost.js";
const router = express.Router();


//create post
router.post("/post/create", createPost);
// //fetch all post
// router.get("/posts", );
// //like post
// router.put("/likes/like");
// //unlike post
// router.put("/likes/unlike");
// //create comment
// router.post("/comments/create");
// //Retreive comment
// router.get("/comments");


export default router;