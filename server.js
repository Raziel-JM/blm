import express from "express";
import router from "./routes/testRoutes.js";

const app = express();
const PORT = 8080;

app.use("/api/v1/test", router);

app.listen(PORT, () => {
  console.log("Node Server Running");
});