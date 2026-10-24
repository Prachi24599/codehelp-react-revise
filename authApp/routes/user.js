import express from "express";
const router = express.Router();
import {login, signUp} from "../controllers/auth.js"
import {auth, isStudent, isAdmin} from "../middleware/auth.js";

router.post("/login", login);
router.post("/signUp", signUp);

router.get("/test", auth, (req, res) => {
    res.json({
        success : true,
        message : "Welcome to Test!!"
    })
})

//Protected Route
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success : true,
        message : "Welcome to the protected route for students!!"
    })
});

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success : true,
        message : "Welcome to the protected route of Admin!!"
    })
})

export default router;