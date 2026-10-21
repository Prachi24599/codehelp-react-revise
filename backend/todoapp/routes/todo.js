import express from "express";
const router = express.Router();

//import controller
import createTodo from "../controllers/createTodo.js";
import { getTodo, getTodoById } from "../controllers/getTodo.js";

//define API routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodoById/:id", getTodoById);

export default router;