import styles from "./ArrowIcon.module.css"
import icon from "../Button/ButtonIcons/ButtonArrowIcon.png"

type Props = {
    text: string
}

export const ArrowIcon: React.FC<Props> = ({text}) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.txt}>{text}</p>
            <img src={icon.src}/>
            {/* <div className={styles.img}></div> */}
        </div>
    )
}