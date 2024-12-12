import { Router } from "express";
import { userController } from "../controllers/users.controller";
import { verifyToken } from "../midlleware/authMiddleware";

const router = Router();
router.get("/:id", userController.getUsers);
router.put("/api/update/:id", userController.updateUser);
router.delete("/api/delete", verifyToken, userController.deleteUser);
router.post("/", userController.createUser);

export default router;