import * as S from "./S.Button";
// import computerImage from "@asset/computer.png";

interface ButtonProps {
  buttonText: string;
  width: number;
}

const Button: React.FC<ButtonProps> = ({ buttonText, width }) => {
  return (
    <S.Container width={width}>
      <S.buttonText>{buttonText}</S.buttonText>
    </S.Container>
  );
};

export default Button;
