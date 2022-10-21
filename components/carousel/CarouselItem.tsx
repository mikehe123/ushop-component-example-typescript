import * as S from "./S.CarouselItem";
import computerImage from "@asset/bicycle.png";
import Button from "@components/button/Button";

interface CarrotCellItemProps {
  itemImage: string;
  itemName: string;
  itemPrice: Number;
  itemCondition: string;
}

const CarrotCellItem: React.FC<CarrotCellItemProps> = ({
  itemImage,
  itemName,
  itemPrice,
  itemCondition,
}) => {
  return (
    <S.Container>
        <S.ContainerItemLeft>
            <S.Image src={computerImage} alt={itemName} />
        </S.ContainerItemLeft>
        <S.ContainerItemMid>
            <S.ItemName>{itemName}</S.ItemName>
                <S.ItemPrice>
                    <S.Bold>{`Price:\xa0`}</S.Bold>
                    {`$ ${itemPrice}`}
                </S.ItemPrice>
            
            <S.ItemCondition>
                <span>
                    <span style={{ fontWeight: 700 }}>Description:{`\xa0`}
                    </span>
                    {itemCondition}
                </span>
            </S.ItemCondition>
        </S.ContainerItemMid>
        <S.ContainerItemRight>
            <Button buttonText={"View Item"}/>
            <Button buttonText={"Add to Cart"}/>
        </S.ContainerItemRight>

    </S.Container>

  );
};

export default CarrotCellItem;
