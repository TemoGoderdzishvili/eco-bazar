import styles from "./Upper.module.css"
import { PinIcon } from "../../SVG/MapIcon"
import { Vector } from "../../SVG/Vector"

export const Upper = () => {
    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.locationDiv}>
                    <PinIcon />
                    <p className={styles.p}>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                </div>
                <div className={styles.signInDiv}>
                    <p className={styles.p}>Eng <Vector /></p>
                    <p className={styles.p}>USD <Vector /></p>
                    <p className={styles.p}>Sign In / Sign Up</p>
                </div>
            </div>
        </div>
    )
}