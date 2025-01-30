import { sequelize } from '../config/sequelize';
import { DataTypes, Model, Optional } from "sequelize";

interface IUser {
  id?: number;
  email: string;
  password: string;
}


interface IUserCreationAttributes extends Optional<IUser, "id"> {}
class User extends Model<IUser, IUserCreationAttributes> implements IUser {
  public id!: number;
  public email!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
  }
);
export default User;