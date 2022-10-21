import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  width: 140px;
  height: 35px; /* what if text overflow? maybe can set different text size if button text is too long*/
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 5%; 
  background-color: #95ce97;
`;

export const buttonText = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center; /*maybe there are some better way*/
  margin-top: 5%; 
  color: white;
`;
