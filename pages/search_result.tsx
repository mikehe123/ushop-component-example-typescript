import type { NextPage } from "next";
import styles from "@styles/SearchResult.module.css";
import ListingGrid from "@components/listing-grid/ListingGrid";

const Home: NextPage = ({}) => {
  return (
    <>
      <div className={styles.bannerBoard}>
        <ListingGrid />
      </div>
    </>
  );
};

export default Home;
