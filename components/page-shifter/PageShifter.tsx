import * as S from "./S.PageShifter";
import ArrowLeft from "@asset/icons/page-shift-left.svg";
interface PageShifterProps {
  direction: "left" | "right";
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const PageShifter: React.FC<PageShifterProps> = ({ direction, onClick }) => {
  return (
    <S.Container onClick={onClick} direction={direction}>
      {direction === "right" && <S.Text>Next</S.Text>}
      <S.Image
        src={ArrowLeft}
        alt="Arrow Left"
        direction={direction}
        draggable={false}
      />
      {direction === "left" && <S.Text>Previous</S.Text>}
    </S.Container>
  );
};

export default PageShifter;
