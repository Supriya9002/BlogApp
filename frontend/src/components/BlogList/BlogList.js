import styles from "./BlogList.module.css"
import { getAllBlog } from "../../Redux/slices/postSlice";
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

function BlogList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {blogArr} = useSelector((state)=> state.post)
    const handlePostClick = (BlogID)=>{
        console.log("Supriya");
        navigate(`/blog/${BlogID}`)
    }
    useEffect(()=>{
        dispatch(getAllBlog());
    },[dispatch])
    // console.log("blogArr", blogArr);
    return (
    <div className={styles.postList}>
        {blogArr?.slice().reverse().map((blog)=>(
            <div className={styles.post} onClick={()=>handlePostClick(blog._id)} key={blog._id}>
                <h3 className={styles.postHeader}>{blog.title}</h3>
                <span className={styles.postSummery}><span style={{ color: 'blue' }}>Summery: </span>{blog.content.slice(0, 160)}...</span>
            </div>
        ))}
    </div>
  );
}

export default BlogList;
