import ListingShifter from "@components/listing-shifter/ListingShifter";
import CarouselItem from "@components/carousel/CarouselItem";

import { useState } from "react";
import * as S from "./S.Carousel";

interface Carousel {
  listingTitle: string;
}

const Carousel: React.FC<Carousel> = ({ listingTitle }) => {
  const [listItems, setListItems] = useState(placeHolderData);

  const handleShift = (direction: number) => {
    setListItems(
      listItems.slice(direction * 1).concat(listItems.slice(0, direction * 1))
    );
  };

  return (
    <S.Container>
      <S.Title>{listingTitle}</S.Title>
      <S.ContainerCarousel>
        <ListingShifter direction="left" onClick={() => handleShift(-1)} />
        <S.ContainerItem>
          {listItems.slice(0, 1).map((item) => {
            return (
              <CarouselItem
                key={item.id}
                itemImage={item.itemImage}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
                itemDescription={item.itemDescription}
              />
            );
          })}
        </S.ContainerItem>
        <ListingShifter direction="right" onClick={() => handleShift(1)} />
      </S.ContainerCarousel>
    </S.Container>
  );
};

export default Carousel;

const placeHolderData = new Array(13).fill(0).map((_, index) => ({
  id: index,
  itemImage: "@asset/bicycle.png",
  itemName: "Bicycle",
  itemPrice: index + 1,
  itemDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
}));
