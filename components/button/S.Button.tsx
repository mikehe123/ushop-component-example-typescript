import styled from "styled-components";

export const Container = styled.div<{ width: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => `${props.width}px`};
  height: 35px; /* what if text overflow? maybe can set different text size if button text is too long*/
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #95ce97;
  margin: 8px;
`;

export const buttonText = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
`;
