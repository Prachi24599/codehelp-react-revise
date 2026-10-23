import express from "express";
const router = express.Router();
import {login, signUp} from "./controllers/auth.js"

router.use("/login", login);
router.use("/signUp", signUp);

export default router;