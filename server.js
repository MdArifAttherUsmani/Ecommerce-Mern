import express from "express";
import color from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";

// config env
dotenv.config();

// database config
connectDb();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoute);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce</h1>");
});

// PORT
const PORT = process.env.PORT || 8000;

// run listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
