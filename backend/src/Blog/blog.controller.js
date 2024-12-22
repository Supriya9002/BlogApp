import BlogModel from "./blog.schema.js";

export default class BlogController {
  async createBlog(req, res) {
    try {
      const { author, title, content } = req.body;
      // (req.body);
      const newBlog = new BlogModel({ author, title, content });
      await newBlog.save();
      console.log("AI");
      res.status(201).json(newBlog);
    } catch (err) {
      console.log(err);
      res.status(500).json(`${err}`);
    }
  }
  async getAllBlog(req, res) {
    try {
      const newBlog = await BlogModel.find();
      if (newBlog.length <= 0) {
        return res.status(200).json({ message: "No Blog Found" });
      }
      // console.log("Supriya", newBlog);
      res.status(201).json(newBlog);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async updateBlog(req, res) {
    try {
      const { id } = req.params;
      const { author, title, content } = req.body;
      // Find the blog by ID
      const blogToUpdate = await BlogModel.findById(id);
      if (!blogToUpdate) {
        return res.status(404).json({ message: "Blog not found" });
      }
      // Update blog fields
      blogToUpdate.author = author || blogToUpdate.author;
      blogToUpdate.title = title || blogToUpdate.title;
      blogToUpdate.content = content || blogToUpdate.content;

      // Save the updated blog
      await blogToUpdate.save();
      res.status(200).json(blogToUpdate);
    } catch (err) {
      console.log(err);
      res.status(500).json(`${err}`);
    }
  }
  async deleteBlog(req, res) {
    try {
      const { id } = req.params;
      // Find the blog by ID
      const blogToDelete = await BlogModel.findById(id);
      if (!blogToDelete) {
        return res.status(404).json({ message: "Blog does not exist" });
      }
      // Delete the blog
      await BlogModel.findByIdAndDelete(id);
      res.status(200).json({ message: "Blog deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json(`${err}`);
    }
  }
  async getSpecificBlog(req, res) {
    try {
      const { id } = req.params;
      const specificBlog = await BlogModel.findById(id);
      if (!specificBlog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.status(200).json(specificBlog);
    } catch (err) {
      console.log(err);
      res.status(500).json(`${err}`);
    }
  }
}
