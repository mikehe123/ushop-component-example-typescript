import * as S from "./S.CarouselVertical";

import computerImage from "@asset/computer.png";
import Button from "@components/button/Button";
import Text from "@components/text/Text";

const CarouselVertical = () => {
  return (
    <S.Container>
      <S.ContainerThumbnails>
        {new Array(3).fill(0).map((_, index) => (
          <S.ThumbnailWrap key={index}>
            <S.Thumbnail src={computerImage}></S.Thumbnail>
          </S.ThumbnailWrap>
        ))}
      </S.ContainerThumbnails>
      <S.ImageWrap>
        <S.Image src={computerImage} alt={"product image"}></S.Image>
      </S.ImageWrap>
      <S.ContainerProductInfo>
        <S.ProductName>Macbook Pro</S.ProductName>

        <Text label={"Price: "} marginBottom="20px">
          {" $ " + 30}
        </Text>
        <Text label="Description: ">
          {
            "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          }
        </Text>
      </S.ContainerProductInfo>
      <S.ContainerProductInfo>
        <Button buttonText="Purchase" width={330} />
        <Text label="Posting Date: " marginTop="20px" marginBottom="8px">
          {"12/31/22"}
        </Text>
        <Text label="Condition: " marginBottom="8px">
          {"New"}
        </Text>
        <Text label="Delivery Method: " marginBottom="8px">
          {"Mail Center"}
        </Text>
        <Text label="Return Options: " marginBottom="8px">
          {"None"}
        </Text>
      </S.ContainerProductInfo>
    </S.Container>
  );
};

export default CarouselVertical;
