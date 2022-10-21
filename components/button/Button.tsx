import * as S from "./S.Button";
// import computerImage from "@asset/computer.png";

interface ButtonProps {
  buttonText: string;

}

const Button: React.FC<ButtonProps> = ({
  buttonText,
}) => {
  return (
    <S.Container>
      <S.buttonText>{buttonText}</S.buttonText>
    </S.Container>
  );
};

export default Button;
