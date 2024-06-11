import styles from "./Featured.module.css"
import { FeatureItem } from "./FeatureItem/FeatureItem"
import truckImgPath from "./FeatureItem/ItemImages/truck.png"
import headphonesImgPath from "./FeatureItem/ItemImages/headphones.png"
import shoppingbagImgPath from "./FeatureItem/ItemImages/shopping-bag.png"
import packageImgPath from "./FeatureItem/ItemImages/package.png"

export const Featured = () => {
    return (
        <div className={styles.container}>
            <FeatureItem image={truckImgPath} title="Free Shipping" subTitle="Free shipping on all your order" />
            <FeatureItem image={headphonesImgPath} title="Customer Support 24/7" subTitle="Instant access to Support" />
            <FeatureItem image={shoppingbagImgPath} title="100% Secure Payment" subTitle="We ensure your money is save" />
            <FeatureItem image={packageImgPath} title="Money-Back Guarantee" subTitle="30 Days Money-Back Guarantee" />
        </div>
    )
}