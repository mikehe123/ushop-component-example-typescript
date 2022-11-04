import type { NextPage } from "next";
import styles from "@styles/Home.module.css";
import Listing from "@components/listing/Listing";
import Carousel from "@components/carousel/Carousel";
import LayoutGloabl from "@components/layout/layoutGlobal/LayoutGlobal";

const Home: NextPage = ({}) => {
  return (
    <LayoutGloabl>
      <div className={styles.bannerBoard}>
        <Carousel listingTitle="Popular" />
      </div>
      <div className={styles.wrapListing}>
        <Listing listingTitle="Popular" />
      </div>
      <div className={styles.wrapListing}>
        <Listing listingTitle="Recently Added" />
      </div>
    </LayoutGloabl>
  );
};

export default Home;
