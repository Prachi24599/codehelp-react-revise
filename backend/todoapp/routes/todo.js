import express from "express";
const router = express.Router();
//import controller
import createTodo from "../controllers/createTodo";
//define API routes
router.post("/createTodo", createTodo);