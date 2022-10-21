import ListingShifter from "@components/listing-shifter/ListingShifter";
import CarrotCellItem from "@components/carousel/CarouselItem";

import { useState } from "react";
import * as S from "./S.Carousel";

interface CarrotCell {
  listingTitle: string;
}

const CarrotCell: React.FC<CarrotCell> = ({ listingTitle }) => {
  const [listItems, setListItems] = useState(placeHolderData);

  const handleShift = (direction: number) => {
    setListItems(
      listItems.slice(direction * 5).concat(listItems.slice(0, direction * 5))
    );
  };

  return (
    <S.Container>
      <S.Title>{listingTitle}</S.Title>
      <S.ContainerListing>
        <ListingShifter direction="left" onClick={() => handleShift(-1)} />
        <S.ContainerItem>
          {listItems.slice(0, 1).map((item) => {
            return (
              <CarrotCellItem
                key={item.id}
                itemImage={item.itemImage}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
                itemCondition={item.itemCondition}
              />
            );
          })}
        </S.ContainerItem>
        <ListingShifter direction="right" onClick={() => handleShift(1)} />
      </S.ContainerListing>
    </S.Container>
  );
};

export default CarrotCell;

const placeHolderData = new Array(13).fill(0).map((_, index) => ({
  id: index,
  itemImage: "@asset/bicycle.png",
  itemName: "Bicycle",
  itemPrice: index + 1,
  itemCondition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
}));
