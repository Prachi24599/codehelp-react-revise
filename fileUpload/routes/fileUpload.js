import express from "express";
const router = express.Router();
import localFileUpload from "../controllers/localFileUpload.js";
import imageUpload from "../controllers/imageUpload.js";
import videoUpload from "../controllers/videoUpload.js";
import imageSizeReducer from "../controllers/imageSizeReducer.js";

//Api router
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageSizeReducer", imageSizeReducer);

export default router;


