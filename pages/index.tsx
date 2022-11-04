import type { NextPage } from "next";
import styles from "@styles/Home.module.css";
import Listing from "@components/listing/Listing";
import Carousel from "@components/carousel/Carousel";
import Footer from "Layout/footer/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerBoard}>
        <Carousel listingTitle="Popular" />
      </div>
      <div className={styles.wrapListing}>
        <Listing listingTitle="Popular" />
      </div>
      <div className={styles.wrapListing}>
        <Listing listingTitle="Recently Added" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
