import styles from "./Lower.module.css"
import { Vector } from "../../SVG/Vector"
import { Phone } from "../../SVG/Phone"

export const Lower = () => {
    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.nav}>
                    <div><p>Home</p> <Vector /></div>
                    <div><p>Shop</p> <Vector /></div>
                    <div><p>Pages</p> <Vector /></div>
                    <div><p>Blog</p> <Vector /></div>
                    <div><p>About Us</p></div>
                    <div><p>Contact Us</p></div>
                </div>
                <div className={styles.phoneNum}><Phone />(219) 555-0114</div>
            </div>
        </div>
    )
}