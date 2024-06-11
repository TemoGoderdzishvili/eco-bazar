import styles from "./SummerSale.module.css"
import { ArrowIcon } from "../ArrowIcon/ArrowIcon"

export const SummerSale: React.FC = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.txtContainer}>
                <p className={styles.saleP}>SUMMER SALE</p>
                <p className={styles.percent}>75% OFF</p>
                <p className={styles.bottomP}>Only Fruit & Vegetable</p>

                <ArrowIcon text="Shop Now"/>
            </div>
        </div>
    )
}