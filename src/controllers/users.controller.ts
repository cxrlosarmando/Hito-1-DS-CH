import { Request, Response } from "express";
import { userService } from "../services/userService";

const getUsers = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const users = await userService.getAllUsers(email);
    res.json({
      req: req.email,
      users,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error de servidor" });
    }
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const newUser = await userService.createUserWithEmailAndPassword(email, password);
    res.json(newUser);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error de servidor" });
    }
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await userService.deleteUserById(id);
    if (deletedUser) {
      res.status(200).json({ message: "User deleted", user: deletedUser });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error de servidor" });
    }
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, password } = req.body;
    const updatedUser = await userService.updateUserById(id, email, password);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Error de servidor" });
    }
  }
};

export const userController = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};
