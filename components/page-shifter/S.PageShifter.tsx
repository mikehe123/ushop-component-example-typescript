import styled from "styled-components";
import NImage from "next/image";

export const Container = styled.div<{ direction: string }>`
  display: flex;
  align-items: center;
  min-width: 14px;
  min-height: 14px;
  background-color: white;

  display: flex;
  justify-content: center;
  user-select: none;
  /* margin: ${({ direction }) =>
    direction === "left" ? "0 0 0 10px" : "0 10px 0 0"}; */
`;

export const Image = styled(NImage)<{ direction: string }>`
  transform: ${({ direction }) =>
    direction === "left" ? "rotate(0deg)" : "rotate(180deg)"};
`;
export const Text = styled.div`
  margin: 0 14px 0 14px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
