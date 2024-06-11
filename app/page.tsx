import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components/Header/Header";
import { Featured } from "./components/Featured/Featured";
import { Fresh } from "./components/Fresh%Healthy/Fresh";
import { SummerSale } from "./components/SummerSale/SummerSale";
import { BestDeal } from "./components/BestDeal/BestDeal";
import { PopularCategories } from "./components/PopularCategories/PopularCategories";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>

          <div className={styles.bannerWrapper}>

            <Fresh />
            <div className={styles.sideContainer}>
              <SummerSale />
              <BestDeal />
            </div>

          </div>

          <Featured />
          <PopularCategories />


        </div>
      </div>
    </>
  );
}
