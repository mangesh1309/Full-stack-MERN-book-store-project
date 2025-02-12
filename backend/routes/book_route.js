import express from "express";
import { getBook } from "../controllers/book_controller.js";

const router = express.Router();

router.get("/", getBook);

export default router;