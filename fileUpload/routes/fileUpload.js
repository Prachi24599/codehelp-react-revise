import express from "express";
const router = express.Router();
import localFileUpload from "../controllers/fileUpload.js";

//Api router
router.post("/localFileUpload", localFileUpload);


export default router;


