import type { NextPage } from "next";
import styles from "@styles/Product.module.css";
import CarouselVertical from "@components/carousel-vertical/CarouselVertical";
import Listing from "@components/listing/Listing";

const ProductPage: NextPage = ({}) => {
  return (
    <>
      <div className={styles.container}>
        <CarouselVertical />
        <Listing listingTitle="More like this" />
      </div>
    </>
  );
};

export default ProductPage;
