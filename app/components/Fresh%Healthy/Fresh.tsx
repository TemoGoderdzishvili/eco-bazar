import styles from "./Fresh.module.css"
import { Button } from "../Button/Button"

//Importing Button icon paths

import ArrowIconPath from "../Button/ButtonIcons/ButtonArrowIcon.png"

export const Fresh: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <h1 className={styles.h1}>Fresh & Healthy <br />Organic Food</h1>
                <div className={styles.salesAndLineContainer}>
                    <div className={styles.child}>
                        <div className={styles.lineAndTxtContainer}>
                            <div className={styles.line}></div>
                            <div className={styles.saleTxtContainer}>
                                <p className={`${styles.salesP} ${styles.salesPUpper}`}>Sale up to <span className={styles.percent}>30% OFF</span></p>
                                <p className={`${styles.salesPBottom} ${styles.salesP}`}>Free shipping on all your order.</p>
                            </div>
                        </div>
                        <Button width="191px" height="51px" bgColor="white" txtColor="rgba(0, 178, 7, 1);" text="Shop now" icon={ArrowIconPath} />
                    </div>
                </div>
            </div>
        </div>
    )
}