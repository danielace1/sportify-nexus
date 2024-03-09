import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import playersRoute from "./routes/players.route.js";
import authRouter from "./routes/auth.route.js";

import dotenv from "dotenv"; // for using env variables
dotenv.config();

const server = express();
const SERVER_PORT = 2024;

//middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// routes
server.use("/api/players", playersRoute);
server.use("/api/auth", authRouter);

// GET REQ from / (home)
server.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "welcome to devData \n explore data in :- /api/players",
  });
  res.end();
});

// checking the server is connected to DB then we perform our logics
// or else listen the port after DB connected
mongoose
  .connect(process.env.MONGO_DB_CONNECTION_URL)
  .then(() => {
    console.log("sucessfully Connected to MongoDB");
  })
  .catch(() => {
    console.log("Failed Connect MongoDB");
  });

server.use((err, res, req, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`Server is running in localhost:${SERVER_PORT}`);
});
