import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "dotenv/config";
// dotenv.config();

const app = express();

const PORT = 8000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

//database connection
import { connectDB } from "./src/dbConfig/ConfigDb.js";
connectDB();

//router
import UserRouter from "./src/router/UserRouter.js";
app.use("/api/v1/user", UserRouter);

//global error handler
app.use((error, req, res, next) => {
  const statusCode = 404 || 500;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
