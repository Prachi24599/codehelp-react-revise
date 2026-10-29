import express from "express";
const router = express.Router();
import {localFileUpload, imageUpload} from "../controllers/fileUpload.js";

//Api router
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);

export default router;


