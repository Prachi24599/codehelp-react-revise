import express from "express";
const router = express.Router();
import localFileUpload from "../controllers/fileUpload.js";
import imageUpload from "../controllers/imageUpload.js";
import videoUpload from "../controllers/videoUpload.js";

//Api router
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);

export default router;


