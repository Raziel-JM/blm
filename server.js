import express from "express";

// Ruta de prueba
import router from "./routes/testRoutes";

// Puerto
const PORT = 8080;

// Iniciar el servidor
const app = express();
app.use("/api/v1/test", router);

app.listen(PORT, () => {
  console.log("Node Server Running");
});
