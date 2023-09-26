import  express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = express.Router()

router.post("/register", register)
router.post("/register", login)
router.post("/register", logout)


export default router