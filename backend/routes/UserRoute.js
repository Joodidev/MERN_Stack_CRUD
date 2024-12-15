import express from "express";
import { deleteUser, getUserById, getUsers, saveUser, updateUser } from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", saveUser);
router.get("/users/:id", getUserById);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);


export default router;
