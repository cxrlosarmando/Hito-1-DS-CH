import { Sequelize } from "sequelize-typescript";
import { Post, User } from "../config/schema";

// Configura la conexión a la base de datos PostgreSQL
export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',  // Usa localhost para la conexión externa
    port: 5434,  // Puerto mapeado en docker-compose
    username: 'postgres',
    password: 'root',
    database: 'dbtest',
    models: [User, Post],
    logging: false,
});
