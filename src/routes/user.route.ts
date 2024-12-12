import { Router } from "express";
import { userController } from "../controllers/users.controller";
import { verifyToken } from "../midlleware/authMiddleware";

const router = Router();


router.get("/:id", userController.getUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", verifyToken, userController.deleteUser);
router.post("/", userController.createUser);

export default router;