import styles from "./BestDeal.module.css"
import { ArrowIcon } from "../ArrowIcon/ArrowIcon"

export const BestDeal = () => {
    return (
        <div className={styles.container}>
            <p className={styles.bestDeal}>BEST DEAL</p>
            <h1 className={styles.h1}>Special Products<br />Deal of the Month</h1>
            
            <ArrowIcon text="Shop Now" />
        </div>
    )
}