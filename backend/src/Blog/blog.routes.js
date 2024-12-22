import express from "express"
import BlogController from "./blog.controller.js";

//Express router
const blogRouter = express.Router();
//instance
const blogController =new BlogController();


// All the paths to controller methods.
blogRouter.get("/posts", (req,res)=> blogController.getAllBlog(req,res));
blogRouter.post("/posts", (req,res) => blogController.createBlog(req,res));
blogRouter.delete("/posts/:id", (req,res)=> blogController.deleteBlog(req,res));
blogRouter.put("/posts/:id", (req,res)=> blogController.updateBlog(req,res));
blogRouter.get("/posts/:id", (req,res)=> blogController.getSpecificBlog(req,res));


export default blogRouter;