import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import { createCourse } from "../controllers/admin.js";



const router = express.Router();

router.post("/course/new", isAuth, createCourse);

export default router;
