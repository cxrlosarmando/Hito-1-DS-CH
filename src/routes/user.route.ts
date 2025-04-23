import { Router } from "express";
import { userController } from "../controllers/users.controller";
import { verifyToken } from "../midlleware/authMiddleware";

const router = Router();
router.get("/:id", userController.getUsers);
router.post("/create", userController.createUser);

export default router;