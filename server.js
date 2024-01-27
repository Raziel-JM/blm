// Importar el módulo Express
import express from "express";

// Importar la ruta de prueba
import router from "./routes/testRoutes.js";

// Configurar el puerto del servidor
const PORT = 8080;

// Crear una nueva instancia de Express
const app = express();

// Configurar la ruta de prueba
app.use("/api/v1/test", router);

// Agregar un manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal.");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Node Server Running on port ${PORT}`);
});

// Agregar un nombre al módulo para facilitar su depuración
export default app;