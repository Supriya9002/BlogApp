import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"
import HomeImg from "./../Data/house.png"
import CreatePostImg from "./../Data/online.png"
import { Outlet } from "react-router-dom"
import information from "./../Data/information.png"


export function Navbar(){
    return(
        <>
        <div className={styles.divNavbarContainer}>
            {/* App Name */}
            <Link to="/" className={styles.underlineR}>
                <span className={styles.appname}>Bloger</span>
            </Link>

            <div className={styles.navPageContainer}>
                {/* Home */}
                <Link to="/" className={styles.underlineRmv}>
                    <img src={HomeImg} alt="HomeImg"/>
                    <span>Home</span>
                </Link>
                
                {/* Create Post */}
                <Link to="/createPost" className={styles.underlineRmv}>
                    <img src={CreatePostImg} alt="CreatePostImg"/>
                    <span>Create Post</span>
                </Link>

                {/* About */}
                <Link to="/About" className={styles.underlineRmv}>
                    <img src={information} alt="AboutImg"/>
                    <span>About</span>
                </Link>
            </div>

        </div>
        <Outlet/>
        </>
    )
}