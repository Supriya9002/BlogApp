import styles from "./Home.module.css"
import { Link } from "react-router-dom"
import BlogList from "../../components/BlogList/BlogList"

export function Home(){
    return(
        <div className={styles.postListComtainer}>
            <div className={styles.blogHeader}>
                <span>Available blog List</span>
                <button><Link to="/createPost" className={styles.headtext}>Add new blog</Link></button>
            </div>
            <BlogList/>
        </div>
    )
}