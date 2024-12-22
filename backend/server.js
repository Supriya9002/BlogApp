import "./env.js";
import express from "express";
import connectUsingMongoose from "./src/config/db.js";
import blogRouter from "./src/Blog/blog.routes.js";
import bodyParser from "body-parser";
import cors from "cors";

// server
const server = express();

// All Middleware
server.use(bodyParser.json());
server.use(cors());

// for all requested Related App
server.use("/api/blog", blogRouter)

// Main Api
server.get("/", (req, res) => {
  res.send("Welcome To Bloger App");
});

// console.log("process.env.Port",process.env.Port)
// Port
// console.log("process.env.Port", process.env.Port)
server.listen(process.env.Port || 3000, () => {
  connectUsingMongoose();
  console.log(`Server Listen is port ${process.env.Port}`);
});
