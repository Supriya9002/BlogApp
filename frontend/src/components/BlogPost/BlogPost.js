import styles from "./BlogPost.module.css"
import close from "./../Data/close.png"
import { getSpecificBlog } from "../../Redux/slices/postSlice";
import {useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { deleteBlog } from "../../Redux/slices/postSlice";

export function BlogPost(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {blogID} = useParams();
    const {specificBlog} = useSelector((state)=> state.post)
    useEffect(()=>{
        dispatch(getSpecificBlog(blogID))
    },[blogID])
    // console.log("specificBlog", specificBlog)
    const formattedDate = specificBlog.createdAt ? new Date(specificBlog.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : "Date not available";
    const handleBack =()=>{
        navigate("/")
    }
    const handleDelete = (blogID)=>{
        alert("Blog Delete Permanent")
        dispatch(deleteBlog(blogID));
        navigate("/")
    }
    const handleEdit = (blogID)=>{
        navigate(`/editPost/${blogID}`)
    }
    return(
    <div className={styles.blogPage}>
        <div className={styles.blogHeadAc}>
            <h1 className={styles.blogTitle}>{specificBlog.title}</h1>
            <div className={styles.blogActions}>
                <button className={styles.editButton} onClick={()=> handleEdit(specificBlog._id)}>Edit</button>
                <button className={styles.deleteButton} onClick={()=> handleDelete(specificBlog._id)}>Delete</button>
                <img src={close} alt="CLose/Back Img" className={styles.close} onClick={handleBack}/>
            </div>
        </div>
        <div className={styles.blogMeta}>
            <span className={styles.blogAuthor}><span style={{ color: 'rgb(184, 108, 255)' }}>By: </span>{specificBlog.author}</span>
            <span className={styles.blogDate}><span style={{ color: 'rgb(184, 108, 255)' }}>Published on: </span> {formattedDate}</span>
        </div>
        {/* <p className={styles.blogSummary}>
            <span style={{ color: 'rgb(184, 108, 255)' }}>Summery: </span>This blog explores the latest trends in technology, entertainment, and science.
        </p> */}
        <div className={styles.blogContent}>
            <p><span style={{ color: 'rgb(184, 108, 255)' }}>Content: </span>{specificBlog.content}
            </p>
        </div>
    </div> 
    )
}