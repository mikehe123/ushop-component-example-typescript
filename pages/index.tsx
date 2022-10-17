import type { NextPage } from "next";
import styles from "@styles/Home.module.css";
import Listing from "@components/listing/Listing";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerBoard}>
        <div className={styles.text}>Component Example: Listing</div>
      </div>
      <Listing listingTitle="Popular" />
    </div>
  );
};

export default Home;
