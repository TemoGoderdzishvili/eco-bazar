import { StaticImageData } from "next/image"
import styles from "./Button.module.css"

type Props = {
    width: string
    height: string
    bgColor: string
    txtColor: string
    text: string
    icon: StaticImageData
}

export const Button: React.FC<Props> = ({width, height, bgColor, txtColor, text, icon}) =>{
    return (
        <button className={styles.container} style={{width: width, height: height, backgroundColor: bgColor, color: txtColor}}>
            <p className={styles.txt}>{text}</p>
            <img src={icon.src} />
        </button>
    )
}