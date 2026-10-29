import express from "express";
const router = express.Router();
import localFileUpload from "../controllers/fileUpload.js";
import imageUpload from "../controllers/imageUpload.js";

//Api router
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);

export default router;


