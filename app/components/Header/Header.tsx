import styles from "./Header.module.css"
import { Upper } from "./upperHeader/Upper"
import { Middle } from "./middleHeader/Middle"
import { Lower } from "./lowerHeader/Lower"

export const Header = () => {
    return(
        <div className={styles.mainWrapper}>
            <Upper />
            <Middle />
            <Lower />
        </div>
    )
}