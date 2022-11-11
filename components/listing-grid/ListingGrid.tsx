import CardListingItem from "@components/card-listing-item/CardListingItem";
import PageShifter from "@components/page-shifter/PageShifter";
import { useState } from "react";
import * as S from "./S.ListingGrid";

interface ListingGridProps {}
const ListingGrid: React.FC<ListingGridProps> = () => {
  const [listItems, setListItems] = useState(placeHolderData);

  return (
    <S.Container>
      <S.Title>Results</S.Title>

      <S.IndicatePageNumber>Page 1 of 75</S.IndicatePageNumber>
      <S.ContainerGrid>
        {listItems.map((item) => {
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
      </S.ContainerGrid>
      <JumpPageListing />
    </S.Container>
  );
};

export default ListingGrid;

const placeHolderData = new Array(16).fill(0).map((_, index) => ({
  id: index,
  itemImage: "@asset/computer.png",
  itemName: "Computer",
  itemPrice: index + 1,
  itemCondition: "New",
}));

const JumpPageListing = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = (index: number) => {
    setCurrentPage(index);
  };
  return (
    <S.WrapJumpPageListing>
      <S.ContainerJumpPageListing>
        <PageShifter direction="left" onClick={() => {}} />
        {[...Array(5)].map((_, index) => {
          return (
            <S.TargetPage
              currentPage={currentPage === index}
              onClick={() => handleClick(index)}
            >
              {index + 1}
            </S.TargetPage>
          );
        })}
        <PageShifter direction="right" onClick={() => {}} />
      </S.ContainerJumpPageListing>
    </S.WrapJumpPageListing>
  );
};
