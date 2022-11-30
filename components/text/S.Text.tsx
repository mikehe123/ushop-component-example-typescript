import styled from "styled-components";

interface TextContainerProps {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

export const Container = styled.div<TextContainerProps>`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

export const Text = styled.div<{ fontSize: string }>`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.fontSize === "medium" ? "18px" : "24px")};
  line-height: 22px;
  display: inline;
`;

export const TextBold = styled.div<{ fontSize: string }>`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => (props.fontSize === "medium" ? "20px" : "27px")};
  line-height: ${(props) => (props.fontSize === "medium" ? "16px" : "30px")};
  display: inline;
`;
