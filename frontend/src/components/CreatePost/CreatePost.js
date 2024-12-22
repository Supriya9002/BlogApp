import styles from "./CreatePost.module.css";
import { createBlog } from "../../Redux/slices/postSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function CreatePost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({author: "",title: "",content: ""});
  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log("Puja")
    try{
      dispatch(createBlog(formData))
      .then(() => {
        navigate("/");
      }).catch((err) => {
        console.log("Error create the post: ", err);
      });
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className={styles.CreatePost}>
      <h1 className={styles.CreatePostHeader}>Create New Post</h1>
      <form className={styles.CreatePostForm} onSubmit={handleSubmit}>
        <input  className={styles.inputField}  type="text" onChange={(e)=> setFormData({...formData, author: e.target.value})} placeholder="Your name"  value={formData.author} />
        <input  className={styles.inputField}  type="text" onChange={(e)=> setFormData({...formData, title: e.target.value})} placeholder="Title"  value={formData.title} />
        <textarea  className={styles.inputField}  placeholder="Content" onChange={(e)=> setFormData({...formData, content: e.target.value})} value={formData.content} />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
