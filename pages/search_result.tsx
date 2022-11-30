import type { NextPage } from "next";
import styles from "@styles/SearchResult.module.css";
import ListingGrid from "@components/listing-grid/ListingGrid";

const SearchPage: NextPage = ({}) => {
  return (
    <>
      <div className={styles.bannerBoard}>
        <ListingGrid />
      </div>
    </>
  );
};

export default SearchPage;
