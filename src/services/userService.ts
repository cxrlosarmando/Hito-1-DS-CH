import bcrypt from "bcryptjs";
import  User  from "../models/user.model"; 


const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};


const getUserByEmail = async (email: string) => {
  const user = await User.findOne({ where: { email } });

  if (!user) throw new Error("User not found");
  return user;
};


const createUserWithEmailAndPassword = async (email: string, password: string) => {
  const userExists = await User.findOne({ where: { email } });

  if (userExists) throw new Error("User already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({ email, password: hashedPassword }); // Pasamos un objeto
  return newUser;
};


const deleteUserById = async (id: string) => {
  const user = await User.findByPk(id); 

  if (!user) throw new Error("User not found");

  await user.destroy(); 
  return { message: "User deleted successfully" };
};


const updateUserById = async (id: string, email: string, password: string) => {
  const user = await User.findByPk(id);

  if (!user) throw new Error("User not found");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await user.update({ email, password: hashedPassword });

  return user;
};

export const userService = {
  createUserWithEmailAndPassword,
  deleteUserById,
  updateUserById,
  getAllUsers,
  getUserByEmail,
};
