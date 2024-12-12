import express from "express";
import authRoute from "./routes/auth-route";
import userRoute from "./routes/user.route";
import { pool } from "./config/database";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/login", userRoute);
app.use("/api/v1/auth", authRoute);

const main = async() => {
  try{
    const {rows} = await pool.query("SELECT NOW()");
    console.log(rows[0].now , "db connection established");
    app.listen(port, () => {
      console.log("Servidor andando en el puerto: " + port);
    });


  } catch (error){
    console.error(error);
    
  }
} 

main();
