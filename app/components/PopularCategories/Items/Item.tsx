import { url } from "inspector"
import styles from "./Item.module.css"

type Props = {
    img: string
    text: string
}

export const Item: React.FC<Props> = ({img, text}) => {
    return (
        <div className={styles.itemWrapper}>
            <div className={styles.img} style={{backgroundImage: `url(${img})`}}></div>

            <p className={styles.txt}>{text}</p>

        </div>
    )
}