import styles from "./PopularCategories.module.css"
import { ArrowIcon } from "../ArrowIcon/ArrowIcon"
import { Item } from "./Items/Item"  // popular categories item

export const PopularCategories = () => {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.titleWrapper}>
                <h1 className={styles.title}>Popular Categories</h1>
                <ArrowIcon text="View All" />
            </div>

            <div className={styles.itemsWrapper}>
                <Item img="./Items/Images/fruit.png" text="Fresh Fruit"/>
            </div>
        </div>
    )
}