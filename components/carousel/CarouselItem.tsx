import * as S from "./S.CarouselItem";
import computerImage from "@asset/bicycle.png";
import Button from "@components/button/Button";

interface CarouselItemProps {
  itemImage: string;
  itemName: string;
  itemPrice: Number;
  itemDescription: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  itemImage,
  itemName,
  itemPrice,
  itemDescription,
}) => {
  return (
    <S.Container>
      <S.ContainerItemLeft>
        <S.Image src={computerImage} alt={itemName} />
      </S.ContainerItemLeft>
      <S.ContainerItemMid>
        <S.ItemName>{itemName}</S.ItemName>
        <S.ItemPrice>
          <S.TextBold>{"Price: "}</S.TextBold>
          <S.Text>{" $ " + itemPrice}</S.Text>
        </S.ItemPrice>
        <S.ItemDescription>
          <S.TextBold>{"Descirption: "}</S.TextBold>
          <S.Text>{itemDescription}</S.Text>
        </S.ItemDescription>
      </S.ContainerItemMid>
      <S.ContainerItemRight>
        <Button buttonText={"View Item"} />
        <Button buttonText={"Add to Cart"} />
      </S.ContainerItemRight>
    </S.Container>
  );
};

export default CarouselItem;
