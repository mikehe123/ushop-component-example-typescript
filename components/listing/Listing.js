import CardListingItem from "@components/card-listing-item/CardListingItem";
import ListingShifter from "@components/listing-shifter/ListingShifter";
import { useState } from "react";
import * as S from "./S.Listing";

const Listing = ({ listingTitle }) => {
  const [listItems, setListItems] = useState(placeHolderData);

  const handleShift = (direction) => {
    setListItems(
      listItems.slice(direction * 5).concat(listItems.slice(0, direction * 5))
    );
  };

  return (
    <S.Container>
      <S.Title>{listingTitle}</S.Title>
      <S.ContainerListing>
        <ListingShifter direction="left" onClick={() => handleShift(-1)} />
        <S.ContainerList>
          {listItems.slice(0, 5).map((item) => {
            return (
              <CardListingItem
                key={item.id}
                itemImage={item.itemImage}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
                itemCondition={item.itemCondition}
              />
            );
          })}
        </S.ContainerList>
        <ListingShifter direction="right" onClick={() => handleShift(1)} />
      </S.ContainerListing>
    </S.Container>
  );
};

export default Listing;

const placeHolderData = new Array(13).fill(0).map((_, index) => ({
  id: index,
  itemImage: "@asset/computer.png",
  itemName: "Computer",
  itemPrice: index + 1,
  itemCondition: "New",
}));
