import { StaticImageData } from "next/image";
import styles from "./FeatureItem.module.css"
import imagePath from "./ItemImages/truck.png.png"

type Props = {
    image: StaticImageData;
    title: string;
    subTitle: string;
}

export const FeatureItem: React.FC<Props> = ({image, title, subTitle}) =>{
    return (
        <div className={styles.item}>
            <img src={image.src}/>
                <div className={styles.itemTxt}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.subTitle}>{subTitle}</p>
                </div>
        </div>
    )
}