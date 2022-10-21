import type { NextPage } from "next";
import styles from "@styles/Home.module.css";
import Listing from "@components/listing/Listing";
import CarrotCell from "@components/carousel/Carousel";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerBoard}>
        <div className={styles.text}>Component Example: Listing</div>
      </div>
      <CarrotCell listingTitle="Recently Viewed" />
      <Listing listingTitle="Popular" />
    </div>
  );
};

export default Home;
