
import express from 'express'
import { login, logout, createUser, getProfile, updateProfile } from "../controllers/userController.js";

const router = express.Router()

router.post("/", createUser)
router.post("/login", login)
router.get("/profile", getProfile)
router.put("/profile", updateProfile) /// update
router.post("logout", logout)

export default router;