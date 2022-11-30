import * as S from "./S.Text";
interface TextProps {
  label: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  fontSize?: string;
  children: string;
}

const Text: React.FC<TextProps> = ({
  label,
  marginBottom,
  marginLeft,
  marginTop,
  marginRight,
  fontSize = "medium",
  children,
}) => {
  return (
    <S.Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      margin-left={marginLeft}
      marginRight={marginRight}
    >
      <S.TextBold fontSize={fontSize}>{label}</S.TextBold>
      <S.Text fontSize={fontSize}>{children}</S.Text>
    </S.Container>
  );
};

export default Text;
