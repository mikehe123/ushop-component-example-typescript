import * as S from "./S.ListingShifter";
import ArrowLeft from "@asset/icons/listing-shift-left.svg";

const ListingShifter = ({ direction, onClick }) => {
  return (
    <S.Container onClick={onClick} direction={direction}>
      <S.Image
        src={ArrowLeft}
        alt="Arrow Left"
        direction={direction}
        draggable={false}
      />
    </S.Container>
  );
};

export default ListingShifter;
