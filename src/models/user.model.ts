import { sequelize } from '../config/sequelize';
import { DataTypes } from 'sequelize';


const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, 
  tableName: 'users',
});

const getUserByEmail = async (email: string) => {
  const user = await User.findOne({ where: { email } });
  console.log(user);
  return user;
};

const create = async (email: string, password: string) => {
  const newUser = await User.create({ email, password });
  console.log(newUser);
  return newUser;
};

const remove = async (email: string) => {
  const deletedUser = await User.destroy({ where: { email } });
  console.log(deletedUser);
  return deletedUser;
};

const update = async (id: string, email: string, password: string) => {
  const updatedUser = await User.update(
    { email, password },
    { where: { id }, returning: true }
  );
  console.log(updatedUser);
  return updatedUser;
};

export const UserModel = {
  create,
  getUserByEmail,
  remove,
  update,
};
