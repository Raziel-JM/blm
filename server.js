import express from "express";
import router from "./routes/testRoutes.js";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";

// Configuración de dotenv
dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para manejar datos JSON y habilitar CORS
app.use(express.json());
app.use(cors());

// Middleware para el registro de solicitudes con morgan
app.use(morgan("dev"));

// Conectar a la base de datos
try {
  connectDB();
} catch (error) {
  console.error(colors.bgRed.white("Error connecting to MongoDB:"), error);
  process.exit(1); // Salir del proceso con código de error
}

app.use("/api/v1/test", router);

app.listen(PORT, () => {
  console.log(
    colors.bgBlue.white(`Node Server Running in ${process.env.DEV_MODE} mode PORT ${process.env.PORT}`)
    );
});