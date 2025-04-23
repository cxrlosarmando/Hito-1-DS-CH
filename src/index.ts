import express from "express";
import authRoute from "./routes/auth-route";
import userRoute from "./routes/user.route";
import { sequelize } from "./config/sequelize";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos exitosa");

    await sequelize.sync({ force: true });  
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error de conexión:", error);
  }
};

main();
