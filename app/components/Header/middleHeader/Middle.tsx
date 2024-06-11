import styles from "./Middle.module.css"
import { Logo } from "../../SVG/Logo"
import { Heart } from "../../SVG/Heart/Heart"
import { Cart } from "../../SVG/Cart"

export const Middle = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <Logo />
                <div className={styles.searchDiv}>
                    <input type="text" className={styles.search} placeholder="Search" />
                    <button className={`${styles.btn} ${styles.pointer}`}>Search</button>
                </div>
                <div className={styles.iconsContainer}>
                    <Heart />
                    <span className={styles.devider}></span>
                    <Cart />
                    <div>
                        <p className={styles.shoppingCartP}>Shopping cart:</p>
                        <p className={styles.totalNum}>$57.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}