import * as S from "./S.CardListingItem";
import computerImage from "@asset/computer.png";

interface CardListingItemProps {
  itemImage: string;
  itemName: string;
  itemPrice: Number;
  itemCondition: string;
}

const CardListingItem: React.FC<CardListingItemProps> = ({
  itemImage,
  itemName,
  itemPrice,
  itemCondition,
}) => {
  return (
    <S.Container>
      <S.Image src={computerImage} alt={itemName} />
      <S.ItemName>{itemName}</S.ItemName>
      <S.ItemPrice>{`$ ${itemPrice}`}</S.ItemPrice>
      <S.ItemCondition>{itemCondition}</S.ItemCondition>
    </S.Container>
  );
};

export default CardListingItem;
