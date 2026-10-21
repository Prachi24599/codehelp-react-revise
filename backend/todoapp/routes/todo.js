import express from "express";
const router = express.Router();

//import controller
import createTodo from "../controllers/createTodo.js";
import getTodo from "../controllers/getTodo.js";

//define API routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);

export default router;