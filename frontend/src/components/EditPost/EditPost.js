
import styles from "./EditPost.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpecificBlog } from "../../Redux/slices/postSlice";
import { updateBlog } from "../../Redux/slices/postSlice";

export function EditPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogID } = useParams();
  const { specificBlog } = useSelector((state) => state.post);
  const [formData, setFormData] = useState({author: "",title: "",content: ""});

  useEffect(() => {
    // Fetch the specific blog details when the component mounts
    dispatch(getSpecificBlog(blogID));
  }, [blogID, dispatch]);

  // Update form data when specificBlog is updated
  useEffect(() => {
    if (specificBlog) {
      setFormData({
        author: specificBlog.author || "",
        title: specificBlog.title || "",
        content: specificBlog.content || "",
      });
    }
  }, [specificBlog]);

  const handleEditPost = (e) => {
    e.preventDefault();
    dispatch(updateBlog({ formData, ID: blogID }))
      .then(() => {
        navigate(`/blog/${blogID}`); 
      })
      .catch((err) => {
        console.log("Error updating the post: ", err);
      });
  };

  return (
    <div className={styles.CreatePost}>
      <h1 className={styles.CreatePostHeader}>Edit Post</h1>
      <form className={styles.CreatePostForm} onSubmit={handleEditPost}>
        <input
          className={styles.inputField}
          type="text"
          name="author"
          placeholder="Your name"
          value={formData.author}
          onChange={(e)=> setFormData({...formData, author: e.target.value})}
        />
        <input
          className={styles.inputField}
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={(e)=> setFormData({...formData, title: e.target.value})}
        />
        <textarea
          className={styles.inputField}
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={(e)=> setFormData({...formData, content: e.target.value})}
        />
        <button type="submit">Edit Post</button>
      </form>
    </div>
  );
}
