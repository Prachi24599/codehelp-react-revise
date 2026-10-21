import express from "express";
const router = express.Router();

//import controller
import createTodo from "../controllers/createTodo.js";
import { getTodo, getTodoById } from "../controllers/getTodo.js";
import updateTodo from "../controllers/updateTodo.js";
import deleteTodo from "../controllers/deleteTodo.js";



//define API routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodoById/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

export default router;