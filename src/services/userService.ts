import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { User } from "../interface/user";
import { UserModel } from "../models/user.model";


const getAllUsers = async (email: string) =>{
  const users= await UserModel.getUserByEmail(email);
  if(!users) throw new Error("User not found");
  return users;
} 
const createUserWithEmailAndPassword = async (email: string, password: string) => {
  const user = await UserModel.getUserByEmail(email);

  if (user) throw new Error("User already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await UserModel.create(email, hashedPassword);
  return newUser;
};

const deleteUserById = async (id: string) => {
  const user = await UserModel.getUserByEmail(id);

  if (!user) throw new Error("User not found");

  const deletedUser = await UserModel.remove(id);
  return deletedUser;
};

const updateUserById = async (id: string, email: string, password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const updatedUser = await UserModel.update(id, email, hashedPassword);
  return updatedUser;
};

export const userService = {
  createUserWithEmailAndPassword,
  deleteUserById,
  updateUserById,
  getAllUsers
};
